import { useState } from "react";
import { AlertTriangle, Check, Copy } from "lucide-react";
import { HudPanel } from "@/components/hud-panel";
import { Button } from "@/components/ui/button";
import { FIX_ALL_COMMANDS, FIX_STEPS } from "@/lib/site";

export function FixGuide() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  function copy(id: string, text: string) {
    void navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 1600);
    });
  }

  return (
    <HudPanel accent="error" className="p-4 sm:p-5">
      <h2 className="text-center font-display text-sm font-bold tracking-[0.22em] text-status-error">
        SỬA LỖI CÀI ĐẶT CRYPTOGRAPHY
      </h2>
      <p className="mt-2 text-center text-sm text-muted">
        Nếu Termux báo Failed to build cryptography / KHÔNG THỂ CÀI ĐẶT ĐẦY ĐỦ THƯ VIỆN thì làm lần lượt các lệnh dưới.
      </p>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <figure className="bg-bg/70 p-2">
          <img
            src="/assets/loi-cryptography.jpg"
            alt="Màn hình lỗi Failed to build cryptography trên Termux"
            className="mx-auto max-h-[32rem] w-full object-contain"
          />
          <figcaption className="mt-2 text-center text-xs text-muted">
            Ảnh lỗi mẫu: Failed to build cryptography
          </figcaption>
        </figure>

        <div className="space-y-3">
          <div className="flex items-start gap-2 bg-status-error/10 px-3 py-3 text-sm text-fg">
            <AlertTriangle className="mt-0.5 size-4 shrink-0 text-status-error" />
            <p>
              <span className="font-display font-bold tracking-wide text-status-updating">LƯU Ý: </span>
              Phải có file <code className="bg-bg px-1 font-display text-primary">tsttool.py</code> trong thư mục đang mở
              (ví dụ <code className="bg-bg px-1 font-display">~/storage/downloads</code>) rồi mới chạy lệnh bước 5.
            </p>
          </div>

          {FIX_STEPS.map((step) => {
            const copied = copiedId === step.id;
            return (
              <div key={step.id} className="bg-bg/70 p-3">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <p className="font-display text-xs font-bold tracking-wide text-primary">
                    BƯỚC {step.id}. {step.title}
                  </p>
                  <Button
                    variant="ghost"
                    className="min-h-11 shrink-0 px-3"
                    onClick={() => copy(step.id, step.command)}
                  >
                    {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                    {copied ? "Đã chép" : "Sao chép"}
                  </Button>
                </div>
                <pre className="overflow-x-auto whitespace-pre-wrap break-all bg-bg px-3 py-2 font-display text-xs leading-relaxed text-fg">
                  {step.command}
                </pre>
              </div>
            );
          })}

          <Button
            variant="primary"
            className="w-full"
            onClick={() => copy("all", FIX_ALL_COMMANDS)}
          >
            {copiedId === "all" ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copiedId === "all" ? "Đã chép tất cả lệnh" : "Sao chép tất cả lệnh"}
          </Button>
        </div>
      </div>
    </HudPanel>
  );
}
