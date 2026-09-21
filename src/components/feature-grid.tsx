import { FeatureIcon } from "@/lib/icons";
import { HudPanel } from "@/components/hud-panel";
import type { Feature } from "@/lib/site";

export function FeatureGrid({ features }: { features: Feature[] }) {
  if (features.length === 0) {
    return (
      <HudPanel className="px-4 py-8 text-center">
        <p className="text-sm text-muted">Chưa có tính năng mới trong bản này.</p>
      </HudPanel>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {features.map((feature) => (
        <HudPanel key={feature.id} className="flex gap-3 p-4">
          <span className="flex size-11 shrink-0 items-center justify-center bg-primary/15 text-primary">
            <FeatureIcon name={feature.icon} className="size-5" />
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-sm font-bold tracking-wide text-fg">{feature.title}</h3>
            <p className="mt-1 text-sm text-muted">{feature.description}</p>
          </div>
        </HudPanel>
      ))}
    </div>
  );
}
