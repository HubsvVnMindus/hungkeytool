import {
  Cpu,
  Headphones,
  Lock,
  RefreshCw,
  Rocket,
  Shield,
  Swords,
  Wifi,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { FeatureIconKey } from "@/lib/site";

export const FEATURE_ICONS: Record<FeatureIconKey, LucideIcon> = {
  shield: Shield,
  refresh: RefreshCw,
  headphones: Headphones,
  zap: Zap,
  cpu: Cpu,
  swords: Swords,
  wifi: Wifi,
  lock: Lock,
  rocket: Rocket,
  wrench: Wrench,
};

export function FeatureIcon({ name, className }: { name: string; className?: string }) {
  const Icon = FEATURE_ICONS[name as FeatureIconKey] ?? Zap;
  return <Icon className={className} strokeWidth={1.8} />;
}
