import { AlertTriangle, CheckCircle2, LoaderCircle } from "lucide-react";
import { HudPanel } from "@/components/hud-panel";
import { cn } from "@/lib/cn";
import { STATUS_HINT, STATUS_LABEL, type SiteData } from "@/lib/site";

function StatusIcon({ status }: { status: SiteData["status"] }) {
  if (status === "updating") return <LoaderCircle className="size-7 animate-spin" strokeWidth={2} />;
  if (status === "error") return <AlertTriangle className="size-7" strokeWidth={2} />;
  return <CheckCircle2 className="size-7" strokeWidth={2} />;
}

export function StatusBanner({ site }: { site: SiteData }) {
  const title = site.headline.trim() || STATUS_LABEL[site.status];
  const note = site.note.trim() || STATUS_HINT[site.status];
  const tone =
    site.status === "updating"
      ? "text-status-updating"
      : site.status === "error"
        ? "text-status-error"
        : "text-status-done";

  return (
    <HudPanel accent={site.status} className="overflow-hidden p-4 sm:p-5">
      <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className={cn("mt-0.5", tone)} aria-hidden="true">
            <StatusIcon status={site.status} />
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className={cn("size-2.5 rounded-full bg-current pulse-dot", tone)} />
              <p className={cn("font-display text-xl font-bold tracking-wider sm:text-2xl", tone)}>
                {STATUS_LABEL[site.status]}
              </p>
              <span className="font-display text-xs tracking-widest text-muted">v{site.version}</span>
            </div>
            <h2 className="mt-1 font-display text-base font-semibold text-fg sm:text-lg">{title}</h2>
            <p className="mt-1 max-w-2xl text-sm text-muted">{note}</p>
          </div>
        </div>
        {site.status === "updating" ? (
          <div className="h-1.5 w-full overflow-hidden bg-bg sm:max-w-48">
            <div className="scan-bar h-full w-1/3 bg-status-updating" />
          </div>
        ) : null}
      </div>
    </HudPanel>
  );
}
