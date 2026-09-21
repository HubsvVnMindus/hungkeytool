import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { FeatureGrid } from "@/components/feature-grid";
import { FixGuide } from "@/components/fix-guide";
import { PaymentBlock } from "@/components/payment-block";
import { PricingBoard } from "@/components/pricing-board";
import { SiteHeader } from "@/components/site-header";
import { StatusBanner } from "@/components/status-banner";
import { HudPanel } from "@/components/hud-panel";
import { FeatureIcon } from "@/lib/icons";
import { fetchPublicSite } from "@/lib/site.functions";
import { BENEFITS, CONTACT, type PlanItem, type SiteData } from "@/lib/site";

export const Route = createFileRoute("/")({
  loader: () => fetchPublicSite(),
  component: Home,
});

function Home() {
  const initial = Route.useLoaderData();
  const [site, setSite] = useState<SiteData>(initial);
  const [selected, setSelected] = useState<string>(CONTACT.transferExample);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setSite(initial);
  }, [initial]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      void fetchPublicSite().then(setSite);
    }, 8000);
    return () => window.clearInterval(timer);
  }, []);

  function handleSelect(item: PlanItem) {
    setSelected(item.code);
    void navigator.clipboard.writeText(item.code).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    });
  }

  function handleCopy() {
    void navigator.clipboard.writeText(selected).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    });
  }

  return (
    <main className="relative mx-auto min-h-screen w-full max-w-5xl px-4 pb-16 sm:px-6">
      <div className="circuit-hex pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative z-10">
        <SiteHeader />

        <div className="section-enter mt-6 sm:mt-8">
          <StatusBanner site={site} />
        </div>

        <a
          href={CONTACT.group}
          target="_blank"
          rel="noreferrer"
          className="section-enter mt-3 flex min-h-12 items-center justify-center gap-2 bg-primary px-4 py-3 font-display text-sm font-bold tracking-[0.16em] text-fg shadow-[0_0_22px_color-mix(in_oklab,var(--color-primary)_40%,transparent)] transition-opacity duration-150 hover:opacity-90"
        >
          <Users className="size-4" />
          THAM GIA NHÓM ZALO
        </a>

        <section className="section-enter mt-8">
          <PricingBoard selected={selected} onSelect={handleSelect} />
        </section>

        <section className="section-enter mt-8">
          <HudPanel className="p-4 sm:p-5">
            <h2 className="mb-4 text-center font-display text-sm font-bold tracking-[0.22em] text-primary">
              QUYỀN LỢI KHI MUA KEY
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map((item) => (
                <div key={item.title} className="bg-bg/50 px-3 py-4 text-center">
                  <span className="mx-auto flex size-11 items-center justify-center text-primary">
                    <FeatureIcon name={item.icon} className="size-6" />
                  </span>
                  <p className="mt-2 font-display text-xs font-bold tracking-wide text-fg">{item.title}</p>
                  <p className="mt-1 text-xs text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </HudPanel>
        </section>

        <section className="section-enter mt-8">
          <h2 className="mb-3 text-center font-display text-sm font-bold tracking-[0.22em] text-primary">
            TÍNH NĂNG ĐƯỢC THÊM
          </h2>
          <FeatureGrid features={site.features} />
        </section>

        <section className="section-enter mt-8">
          <FixGuide />
        </section>

        <section className="section-enter mt-8">
          <PaymentBlock transfer={selected} copied={copied} onCopy={handleCopy} />
        </section>

        <footer className="mt-8 flex flex-col items-center gap-2 pb-4 text-center">
          <p className="font-display text-xs tracking-widest text-primary">
            CẢM ƠN BẠN ĐÃ TIN TƯỞNG VÀ ỦNG HỘ TST-TOOL XWORLD
          </p>
          <Link
            to="/admin"
            className="min-h-11 px-3 py-2 text-xs tracking-widest text-muted transition-colors duration-150 hover:text-primary"
          >
            Trang admin
          </Link>
        </footer>
      </div>
    </main>
  );
}
