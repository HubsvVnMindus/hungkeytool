import discord
from discord import app_commands
from discord.ext import commands
from discord.ui import Button, View, Modal, TextInput

# ================= CẤU HÌNH THÔNG SỐ (THAY TẠI ĐÂY) =================
TOKEN = 'MTE5MjgzMzk4NTI3ODExOTkzNg.GRDbez.-e2TikdOCc8mKJeeZH8Z6i_TsqKRQ9Vzq2ePho'
GUILD_ID = discord.Object(id=1457939614856646850) # ID Server của bạn

# ID Các vai trò và kênh
ID_ROLE_GA = 1458124547327922351 # Role cấp NGAY KHI VÀO (Auto-role)
ID_ROLE_WHITELIST = 1458120320350425269   # Role cấp khi bấm nút Xác Minh (MỚI)
ID_KENH_NHAN_DON = 1458112007612928020      # Kênh Admin nhận đơn đăng ký (MỚI)
ID_ROLE_PLAYER = 1458115319976558693  # ID Role cấp khi duyệt thành công
ID_KENH_DUYET_XONG = 1458071601299062897        # Kênh thông báo khi bấm Đồng ý
ID_KENH_TU_CHOI_WL = 1458071978136043685        # Kênh thông báo khi bấm Từ chối / Kênh Admin nhận đơn
ID_KENH_CHAO_MUNG = 1457940352123142187      # ID Kênh gửi tin nhắn khi có người VÀO
ID_KENH_TAM_BIET = 1457942292844380331       # ID Kênh gửi tin nhắn khi có người RA
# =================================================================

class MyBot(commands.Bot):
    def __init__(self):
        intents = discord.Intents.default()
        intents.members = True 
        intents.message_content = True
        super().__init__(command_prefix="!", intents=intents)

    async def setup_hook(self):
        self.tree.copy_global_to(guild=GUILD_ID)
        await self.tree.sync(guild=GUILD_ID)
        print(f"Hệ thống Bot đã sẵn sàng!")

bot = MyBot()

# --- 1. AUTO-ROLE "GÀ" & CHÀO MỪNG ---
@bot.event
async def on_member_join(member):
    # Cấp ngay role Gà khi vào
    role_ga = member.guild.get_role(ID_ROLE_GA)
    if role_ga:
        try:
            await member.add_roles(role_ga)
        except:
            print(f"Không thể cấp role cho {member.name}. Kiểm tra thứ tự Role của Bot!")
    
    # Chào mừng
    ch = bot.get_channel(ID_KENH_CHAO_MUNG)
    if ch:
        await ch.send(f"🎉 Chào mừng {member.mention} đã gia nhập Server! Bạn đã được cấp role {role_ga.name if role_ga else 'Gà'}.")

@bot.event
async def on_member_remove(member):
    ch = bot.get_channel(ID_KENH_TAM_BIET)
    if ch:
        await ch.send(f"👋 Tạm biệt {member.display_name}, hẹn gặp lại!")

# --- 2. XÁC MINH (VERIFY) -> NHẬN ROLE WHITELIST ---
class VerifyView(View):
    def __init__(self, label_text, emoji):
        super().__init__(timeout=None)
        self.add_item(Button(label=label_text, emoji=emoji, style=discord.ButtonStyle.success, custom_id="verify_button"))

@bot.event
async def on_interaction(interaction: discord.Interaction):
    if interaction.type == discord.InteractionType.component:
        if interaction.data.get("custom_id") == "verify_button":
            await interaction.response.defer(ephemeral=True)
            role_wl = interaction.guild.get_role(ID_ROLE_WHITELIST)
            if role_wl:
                if role_wl in interaction.user.roles:
                    await interaction.followup.send("Bạn đã có role Whitelist rồi!", ephemeral=True)
                else:
                    await interaction.user.add_roles(role_wl)
                    await interaction.followup.send(f"✅ Đã xác minh! Bạn nhận được role {role_wl.name}.", ephemeral=True)

@bot.tree.command(name="xacminh", description="Tạo bảng xác minh")
@app_commands.checks.has_permissions(administrator=True)
async def xacminh(interaction: discord.Interaction, nội_dung: str, kênh: discord.TextChannel, icon: str):
    await interaction.response.defer(ephemeral=True)
    view = VerifyView(nội_dung, icon)
    await kênh.send(f"**HỆ THỐNG XÁC MINH**\nNhấn nút bên dưới để nhận role Whitelist.", view=view)
    await interaction.followup.send("Đã gửi bảng xác minh thành công!", ephemeral=True)

# --- 3. ĐƠN ĐĂNG KÝ WHITELIST (MODAL) ---
class WhitelistModal(Modal, title='Đơn Đăng Ký Player'):
    ign = TextInput(label='Tên Ingame Minecraft', required=True)
    compliance = TextInput(label='Cam kết luật lệ', placeholder='Gõ: Tôi đồng ý tuân thủ luật lệ', required=True)
    reason = TextInput(label='Lý do tham gia', style=discord.TextStyle.long, required=True)

    async def on_submit(self, interaction: discord.Interaction):
        await interaction.response.defer(ephemeral=True)
        admin_ch = bot.get_channel(ID_KENH_NHAN_DON)
        embed = discord.Embed(title="📝 ĐƠN ĐĂNG KÝ MỚI", color=discord.Color.blue())
        embed.add_field(name="Người gửi", value=interaction.user.mention)
        embed.add_field(name="Tên Minecraft", value=self.ign.value)
        embed.add_field(name="Lý do", value=self.reason.value, inline=False)
        if admin_ch:
            await admin_ch.send(embed=embed)
            await interaction.followup.send("Đơn đã gửi! Đợi Admin duyệt để lên Player nhé.", ephemeral=True)

@bot.tree.command(name="nopwhitelist", description="Mở đơn đăng ký")
async def nopwhitelist(interaction: discord.Interaction):
    await interaction.response.send_modal(WhitelistModal())

# --- 4. LỆNH DUYỆT (CẤP PLAYER - XÓA GÀ & WHITELIST) ---
@bot.tree.command(name="duyet", description="Duyệt Player và dọn dẹp role cũ")
@app_commands.choices(lua_chon=[
    app_commands.Choice(name="Đồng ý ✅", value="dong_y"),
    app_commands.Choice(name="Từ chối ❌", value="tu_choi")
])
@app_commands.checks.has_permissions(administrator=True)
async def duyet(interaction: discord.Interaction, nguoi_dung: discord.Member, lua_chon: str, biet_danh_moi: str = None):
    await interaction.response.defer(ephemeral=True)

    if lua_chon == "dong_y":
        role_player = interaction.guild.get_role(ID_ROLE_PLAYER)
        role_wl = interaction.guild.get_role(ID_ROLE_WHITELIST)
        role_ga = interaction.guild.get_role(ID_ROLE_GA)

        # Cấp role Player
        if role_player:
            await nguoi_dung.add_roles(role_player)
        
        # Xóa các role cũ (Gà và Whitelist)
        roles_to_remove = []
        if role_wl and role_wl in nguoi_dung.roles: roles_to_remove.append(role_wl)
        if role_ga and role_ga in nguoi_dung.roles: roles_to_remove.append(role_ga)
        
        if roles_to_remove:
            await nguoi_dung.remove_roles(*roles_to_remove)

        # Đổi tên nếu có nhập
        if biet_danh_moi:
            try: await nguoi_dung.edit(nick=biet_danh_moi)
            except: pass
        
        ch = bot.get_channel(ID_KENH_DUYET_XONG)
        if ch: await ch.send(f"🎊 Chúc mừng **{nguoi_dung.mention}** đã trở thành **Player** chính thức!")
    
    else:
        ch = bot.get_channel(ID_KENH_TU_CHOI_WL)
        if ch: await ch.send(f"❌ Rất tiếc **{nguoi_dung.mention}**, đơn của bạn đã bị từ chối.")

    await interaction.followup.send("Xử lý hoàn tất!", ephemeral=True)

# --- 5. LỆNH TIỆN ÍCH (TICKET, GETID, HELP) ---
@bot.tree.command(name="getroleid", description="Lấy ID Role")
async def getroleid(interaction: discord.Interaction):
    roles = [f"{r.name}: `{r.id}`" for r in interaction.guild.roles if r.name != "@everyone"]
    await interaction.response.send_message("\n".join(roles), ephemeral=True)

@bot.tree.command(name="help", description="Xem các lệnh của bot")
async def help(interaction: discord.Interaction):
    embed = discord.Embed(title="📜 DANH SÁCH LỆNH", color=discord.Color.gold())
    embed.add_field(name="/xacminh", value="Tạo nút xác minh nhận role Whitelist (Admin)", inline=False)
    embed.add_field(name="/nopwhitelist", value="Gửi đơn đăng ký lên Player (Member)", inline=False)
    embed.add_field(name="/duyet", value="Duyệt lên Player + Xóa role Gà/WL (Admin)", inline=False)
    await interaction.response.send_message(embed=embed)

bot.run(TOKEN)
