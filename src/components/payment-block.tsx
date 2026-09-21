import { Check, Copy, Phone, Users } from "lucide-react";
import { HudPanel } from "@/components/hud-panel";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/site";

export function PaymentBlock({
  transfer,
  copied,
  onCopy,
}: {
  transfer: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
      <HudPanel className="p-4 sm:p-5">
        <h2 className="font-display text-sm font-bold tracking-[0.22em] text-primary">THANH TOÁN</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
          <div className="space-y-3">
            <p className="text-xs tracking-widest text-muted">CHỦ TÀI KHOẢN</p>
            <p className="font-display text-xl font-bold text-fg">{CONTACT.account}</p>
            <p className="text-sm text-muted">Quét mã QR để thanh toán. Nhập đúng nội dung chuyển khoản.</p>
            <div className="bg-bg/70 p-3">
              <p className="text-[11px] tracking-widest text-muted">NỘI DUNG CHUYỂN KHOẢN</p>
              <p className="mt-1 font-display text-sm font-semibold text-status-updating">
                {CONTACT.transferHint}
              </p>
              <p className="mt-1 text-xs text-muted">Ví dụ: {CONTACT.transferExample}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <code className="max-w-full truncate bg-surface-2 px-2 py-1 font-display text-xs text-fg">
                  {transfer}
                </code>
                <Button variant="ghost" className="min-h-11 px-3" onClick={onCopy}>
                  {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                  {copied ? "Đã chép" : "Sao chép"}
                </Button>
              </div>
            </div>
            <p className="text-xs text-status-error">Lưu ý: nhập sai nội dung sẽ không có key.</p>
          </div>
          <div className="mx-auto w-full max-w-48">
            <img
              src="/assets/qr.jpg"
              alt="Mã QR thanh toán TST-TOOL XWORLD"
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </HudPanel>

      <HudPanel className="relative overflow-hidden p-4 sm:p-5">
        <h2 className="font-display text-sm font-bold tracking-[0.22em] text-primary">LIÊN HỆ HỖ TRỢ</h2>
        <div className="mt-4 space-y-3">
          <a
            href={CONTACT.group}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-11 items-center gap-3 bg-primary px-3 py-2 text-fg transition-opacity duration-150 hover:opacity-90"
          >
            <Users className="size-4" />
            <span className="font-display text-sm font-bold tracking-wide">THAM GIA NHÓM ZALO</span>
          </a>
          <a
            href={`https://zalo.me/${CONTACT.zalo}`}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-11 items-center gap-3 bg-surface-2 px-3 py-2 text-fg shadow-[inset_0_0_0_1px_var(--color-border)] transition-colors duration-150 hover:bg-primary/10"
          >
            <span className="font-display text-sm font-bold">Zalo</span>
            <span className="font-display text-lg font-bold tabular-nums">{CONTACT.zalo}</span>
          </a>
          <a
            href={`tel:${CONTACT.phone}`}
            className="flex min-h-11 items-center gap-3 bg-surface-2 px-3 py-2 text-fg shadow-[inset_0_0_0_1px_var(--color-border)] transition-colors duration-150 hover:bg-primary/10"
          >
            <Phone className="size-4 text-primary" />
            <span className="text-sm text-muted">SĐT</span>
            <span className="font-display text-lg font-bold tabular-nums">{CONTACT.phone}</span>
          </a>
        </div>
        <img
          src="/assets/hacker.jpg"
          alt=""
          className="pointer-events-none no-outline absolute -right-4 bottom-0 h-40 w-auto object-contain opacity-90 sm:h-48"
        />
      </HudPanel>
    </div>
  );
}
