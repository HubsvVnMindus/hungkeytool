import { Gem } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="relative overflow-hidden pt-4 sm:pt-8">
      <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-4">
        <img
          src="/assets/mecha.jpg"
          alt=""
          className="mecha-idle no-outline h-20 w-auto object-contain sm:h-36 md:h-44"
        />
        <img
          src="/assets/logo-t.jpg"
          alt=""
          className="no-outline hidden size-12 object-cover sm:block sm:size-16"
        />
        <div className="text-center">
          <h1 className="title-chrome text-4xl leading-none sm:text-6xl md:text-8xl">TST-TOOL</h1>
          <p className="mt-2 flex items-center justify-center gap-2 font-display text-base font-semibold tracking-[0.35em] text-primary sm:mt-3 sm:text-xl">
            <Gem className="size-4" />
            XWORLD
            <Gem className="size-4" />
          </p>
        </div>
        <img
          src="/assets/logo-t.jpg"
          alt=""
          className="no-outline hidden size-12 object-cover sm:block sm:size-16"
        />
        <img
          src="/assets/mecha.jpg"
          alt=""
          className="mecha-idle no-outline h-20 w-auto scale-x-[-1] object-contain sm:h-36 md:h-44"
        />
      </div>
      <div className="relative z-10 mt-4 flex justify-center">
        <div className="hud-panel hud-accent-primary px-4 py-2">
          <p className="title-sub text-xs font-bold">TST-TOOL XWORLD</p>
        </div>
      </div>
    </header>
  );
}
