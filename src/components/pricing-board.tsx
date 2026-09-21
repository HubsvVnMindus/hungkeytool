import { HudPanel } from "@/components/hud-panel";
import { cn } from "@/lib/cn";
import { PLANS, type PlanItem } from "@/lib/site";

export function PricingBoard({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (item: PlanItem) => void;
}) {
  return (
    <section className="grid gap-3 md:grid-cols-3">
      {PLANS.map((plan) => (
        <HudPanel key={plan.id} className="p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-primary" />
            <h3 className="font-display text-sm font-bold tracking-[0.2em] text-primary sm:text-base">
              {plan.name}
            </h3>
            <span className="h-px w-6 bg-primary" />
          </div>
          <ul className="space-y-2">
            {plan.items.map((item) => {
              const active = selected === item.code;
              return (
                <li key={item.code}>
                  <button
                    type="button"
                    onClick={() => onSelect(item)}
                    className={cn(
                      "grid w-full grid-cols-[1fr_auto] items-center gap-3 px-3 py-3 text-left transition-colors duration-150 min-h-11",
                      active ? "bg-primary/20" : "bg-bg/60 hover:bg-primary/10",
                    )}
                  >
                    <span className="font-display text-lg font-bold leading-none text-fg sm:text-xl">
                      {item.days}
                    </span>
                    <span className="text-right">
                      <span className="font-display text-lg font-bold tabular-nums text-primary sm:text-xl">
                        {item.price}
                      </span>
                      <span className="ml-1 text-[11px] tracking-widest text-muted">VNĐ</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </HudPanel>
      ))}
    </section>
  );
}
