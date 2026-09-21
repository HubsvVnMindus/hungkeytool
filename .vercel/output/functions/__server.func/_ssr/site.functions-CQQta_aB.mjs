import { n as createServerFn, r as TSS_SERVER_FUNCTION } from "./ssr.mjs";
import { a as string, i as object, r as number, t as _enum } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site.functions-CQQta_aB.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var COOKIE = "tst_admin";
var ADMIN_PIN = "9736";
var TOKEN = "tst-xworld-admin-ok";
var StatusEnum = _enum([
	"updating",
	"done",
	"error"
]);
function asStatus(value) {
	if (value === "updating" || value === "done" || value === "error") return value;
	return "done";
}
function mapFeature(row) {
	return {
		id: row.id,
		title: row.title,
		description: row.description,
		icon: row.icon,
		sortOrder: row.sort_order
	};
}
async function loadSite() {
	const { getSql } = await import("./db-C_mpsuWX.mjs");
	const sql = await getSql();
	let state = (await sql`select id, status, version, headline, note, updated_at from site_state where id = 1`)[0];
	if (!state) {
		await sql`
      insert into site_state (id, status, version, headline, note)
      values (1, 'done', '2.4.1', 'Bản cập nhật đã hoàn tất', 'TST-TOOL XWORLD sẵn sàng. Key VIP kích hoạt ngay sau khi thanh toán.')
    `;
		state = (await sql`select id, status, version, headline, note, updated_at from site_state where id = 1`)[0];
	}
	const features = await sql`
    select id, title, description, icon, sort_order from features order by sort_order asc, id asc
  `;
	return {
		status: asStatus(state?.status ?? "done"),
		version: state?.version ?? "2.4.1",
		headline: state?.headline ?? "",
		note: state?.note ?? "",
		updatedAt: state?.updated_at ?? (/* @__PURE__ */ new Date()).toISOString(),
		features: features.map(mapFeature)
	};
}
async function isAdmin() {
	const { getCookie } = await import("./ssr.mjs").then((n) => n.o).then((n) => n.t);
	return getCookie(COOKIE) === TOKEN;
}
async function requireAdmin() {
	if (!await isAdmin()) throw new Error("Cần đăng nhập admin");
}
var fetchPublicSite_createServerFn_handler = createServerRpc({
	id: "34cb7aae5f23926f33c5a77c5634131376b40f28184059118a2c92843decf1c0",
	name: "fetchPublicSite",
	filename: "src/lib/site.functions.ts"
}, (opts) => fetchPublicSite.__executeServer(opts));
var fetchPublicSite = createServerFn({ method: "GET" }).handler(fetchPublicSite_createServerFn_handler, async () => loadSite());
var fetchAdminSession_createServerFn_handler = createServerRpc({
	id: "ea910792af5838a45ce529719c7ddfbcf2d9c5b49e17c1c65f3792bc074980c4",
	name: "fetchAdminSession",
	filename: "src/lib/site.functions.ts"
}, (opts) => fetchAdminSession.__executeServer(opts));
var fetchAdminSession = createServerFn({ method: "GET" }).handler(fetchAdminSession_createServerFn_handler, async () => ({ ok: await isAdmin() }));
var loginAdmin_createServerFn_handler = createServerRpc({
	id: "64441a88fb83efc2957f6eb57f07973143cf19df8985b906805baeca07e27544",
	name: "loginAdmin",
	filename: "src/lib/site.functions.ts"
}, (opts) => loginAdmin.__executeServer(opts));
var loginAdmin = createServerFn({ method: "POST" }).validator(object({ pin: string().min(1).max(32) })).handler(loginAdmin_createServerFn_handler, async ({ data }) => {
	if (data.pin.trim() !== ADMIN_PIN) return { ok: false };
	const { setCookie } = await import("./ssr.mjs").then((n) => n.o).then((n) => n.t);
	setCookie(COOKIE, TOKEN, {
		path: "/",
		httpOnly: true,
		sameSite: "lax",
		maxAge: 604800
	});
	return { ok: true };
});
var logoutAdmin_createServerFn_handler = createServerRpc({
	id: "ffc232486ac37a7b19a5ea618124e0a6560d593d70401331523fd4987c88cf7a",
	name: "logoutAdmin",
	filename: "src/lib/site.functions.ts"
}, (opts) => logoutAdmin.__executeServer(opts));
var logoutAdmin = createServerFn({ method: "POST" }).handler(logoutAdmin_createServerFn_handler, async () => {
	const { setCookie } = await import("./ssr.mjs").then((n) => n.o).then((n) => n.t);
	setCookie(COOKIE, "", {
		path: "/",
		httpOnly: true,
		sameSite: "lax",
		maxAge: 0
	});
	return { ok: true };
});
var saveSiteState_createServerFn_handler = createServerRpc({
	id: "1d966a8ca9bc5249651c23fe2318bf34f6969668fd0a384e1c7372d5a75cbe21",
	name: "saveSiteState",
	filename: "src/lib/site.functions.ts"
}, (opts) => saveSiteState.__executeServer(opts));
var saveSiteState = createServerFn({ method: "POST" }).validator(object({
	status: StatusEnum,
	version: string().min(1).max(32),
	headline: string().max(120),
	note: string().max(400)
})).handler(saveSiteState_createServerFn_handler, async ({ data }) => {
	await requireAdmin();
	const { getSql } = await import("./db-C_mpsuWX.mjs");
	await (await getSql())`
      update site_state
      set status = ${data.status},
          version = ${data.version},
          headline = ${data.headline},
          note = ${data.note},
          updated_at = now()
      where id = 1
    `;
	return loadSite();
});
var addFeature_createServerFn_handler = createServerRpc({
	id: "ad66cb5596256a89bffefee39a760aab4ff67919b8f2be7841135a9e5b8912de",
	name: "addFeature",
	filename: "src/lib/site.functions.ts"
}, (opts) => addFeature.__executeServer(opts));
var addFeature = createServerFn({ method: "POST" }).validator(object({
	title: string().min(1).max(80),
	description: string().max(240),
	icon: string().min(1).max(32)
})).handler(addFeature_createServerFn_handler, async ({ data }) => {
	await requireAdmin();
	const { getSql } = await import("./db-C_mpsuWX.mjs");
	const sql = await getSql();
	const maxRows = await sql`select max(sort_order) as max from features`;
	const next = Number(maxRows[0]?.max ?? 0) + 1;
	await sql`
      insert into features (title, description, icon, sort_order)
      values (${data.title.trim()}, ${data.description.trim()}, ${data.icon}, ${next})
    `;
	return loadSite();
});
var updateFeature_createServerFn_handler = createServerRpc({
	id: "38408bdbf2e863c1c4a8e176d5cb5cb7915ca5d72540fe347d0e4ff1c64705ec",
	name: "updateFeature",
	filename: "src/lib/site.functions.ts"
}, (opts) => updateFeature.__executeServer(opts));
var updateFeature = createServerFn({ method: "POST" }).validator(object({
	id: number(),
	title: string().min(1).max(80),
	description: string().max(240),
	icon: string().min(1).max(32)
})).handler(updateFeature_createServerFn_handler, async ({ data }) => {
	await requireAdmin();
	const { getSql } = await import("./db-C_mpsuWX.mjs");
	await (await getSql())`
      update features
      set title = ${data.title.trim()},
          description = ${data.description.trim()},
          icon = ${data.icon}
      where id = ${data.id}
    `;
	return loadSite();
});
var deleteFeature_createServerFn_handler = createServerRpc({
	id: "424e713c76f8150c6ea6ff6f3a8c890ef95fad3944795c9d882c2de3edcabdda",
	name: "deleteFeature",
	filename: "src/lib/site.functions.ts"
}, (opts) => deleteFeature.__executeServer(opts));
var deleteFeature = createServerFn({ method: "POST" }).validator(object({ id: number() })).handler(deleteFeature_createServerFn_handler, async ({ data }) => {
	await requireAdmin();
	const { getSql } = await import("./db-C_mpsuWX.mjs");
	await (await getSql())`delete from features where id = ${data.id}`;
	return loadSite();
});
var moveFeature_createServerFn_handler = createServerRpc({
	id: "0d17d6225b0b8275500814cd6b4eb3d5f4828299997b5d78033685940fa2c687",
	name: "moveFeature",
	filename: "src/lib/site.functions.ts"
}, (opts) => moveFeature.__executeServer(opts));
var moveFeature = createServerFn({ method: "POST" }).validator(object({
	id: number(),
	direction: _enum(["up", "down"])
})).handler(moveFeature_createServerFn_handler, async ({ data }) => {
	await requireAdmin();
	const { getSql } = await import("./db-C_mpsuWX.mjs");
	const sql = await getSql();
	const rows = await sql`
      select id, title, description, icon, sort_order from features order by sort_order asc, id asc
    `;
	const index = rows.findIndex((row) => row.id === data.id);
	if (index < 0) return loadSite();
	const swapWith = data.direction === "up" ? index - 1 : index + 1;
	const current = rows[index];
	const other = rows[swapWith];
	if (!current || !other) return loadSite();
	await sql`update features set sort_order = ${other.sort_order} where id = ${current.id}`;
	await sql`update features set sort_order = ${current.sort_order} where id = ${other.id}`;
	return loadSite();
});
//#endregion
export { addFeature_createServerFn_handler, deleteFeature_createServerFn_handler, fetchAdminSession_createServerFn_handler, fetchPublicSite_createServerFn_handler, loginAdmin_createServerFn_handler, logoutAdmin_createServerFn_handler, moveFeature_createServerFn_handler, saveSiteState_createServerFn_handler, updateFeature_createServerFn_handler };
