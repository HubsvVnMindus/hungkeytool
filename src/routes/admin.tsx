import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, ChevronUp, LogOut, Plus, Save, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { HudPanel } from "@/components/hud-panel";
import { StatusBanner } from "@/components/status-banner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FeatureIcon } from "@/lib/icons";
import { cn } from "@/lib/cn";
import {
  FEATURE_ICON_KEYS,
  STATUS_LABEL,
  type Feature,
  type SiteData,
  type UpdateStatus,
} from "@/lib/site";
import {
  addFeature,
  deleteFeature,
  fetchAdminSession,
  fetchPublicSite,
  loginAdmin,
  logoutAdmin,
  moveFeature,
  saveSiteState,
  updateFeature,
} from "@/lib/site.functions";

export const Route = createFileRoute("/admin")({
  loader: async () => {
    const [authed, site] = await Promise.all([fetchAdminSession(), fetchPublicSite()]);
    return { authed: authed.ok, site };
  },
  component: AdminPage,
});

function AdminPage() {
  const loaded = Route.useLoaderData();
  const [authed, setAuthed] = useState(loaded.authed);
  const [site, setSite] = useState<SiteData>(loaded.site);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setAuthed(loaded.authed);
    setSite(loaded.site);
  }, [loaded]);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    try {
      const result = await loginAdmin({ data: { username, password } });
      if (!result.ok) {
        toast.error("Sai tài khoản hoặc mật khẩu");
        return;
      }
      setAuthed(true);
      setSite(await fetchPublicSite());
      toast.success("Đã vào bảng điều khiển");
    } finally {
      setBusy(false);
    }
  }

  async function handleLogout() {
    await logoutAdmin();
    setAuthed(false);
    setUsername("");
    setPassword("");
  }

  if (!authed) {
    return (
      <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-4">
        <HudPanel className="p-5 sm:p-6">
          <p className="font-display text-xs tracking-[0.28em] text-primary">TST-TOOL XWORLD</p>
          <h1 className="mt-2 font-display text-2xl font-bold">Bảng điều khiển</h1>
          <p className="mt-2 text-sm text-muted">
            Đổi trạng thái cập nhật và chỉnh các ô tính năng hiển thị trên trang chủ.
          </p>
          <form className="mt-5 space-y-3" onSubmit={handleLogin}>
            <div className="space-y-1.5">
              <Label htmlFor="username">Tài khoản</Label>
              <Input
                id="username"
                autoComplete="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Tài khoản"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Mật khẩu</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••"
              />
            </div>
            <Button type="submit" className="w-full" disabled={busy}>
              Vào admin
            </Button>
          </form>
          <Link to="/" className="mt-4 inline-flex min-h-11 items-center text-sm text-muted hover:text-primary">
            Về trang thông báo
          </Link>
        </HudPanel>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-6 sm:px-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-display text-xs tracking-[0.28em] text-primary">ADMIN</p>
          <h1 className="font-display text-2xl font-bold">Điều khiển TST-TOOL</h1>
        </div>
        <div className="flex gap-2">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center bg-transparent px-4 font-display text-sm font-semibold tracking-wide text-fg shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-primary)_55%,transparent)] hover:bg-primary/10"
          >
            Xem trang chủ
          </Link>
          <Button variant="muted" onClick={() => void handleLogout()}>
            <LogOut className="size-4" />
            Thoát
          </Button>
        </div>
      </div>

      <div className="mb-5">
        <StatusBanner site={site} />
      </div>

      <StatusEditor site={site} onSave={setSite} />
      <FeatureEditor site={site} onSave={setSite} />
    </main>
  );
}

function StatusEditor({
  site,
  onSave,
}: {
  site: SiteData;
  onSave: (next: SiteData) => void;
}) {
  const [status, setStatus] = useState<UpdateStatus>(site.status);
  const [version, setVersion] = useState(site.version);
  const [headline, setHeadline] = useState(site.headline);
  const [note, setNote] = useState(site.note);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setStatus(site.status);
    setVersion(site.version);
    setHeadline(site.headline);
    setNote(site.note);
  }, [site]);

  async function handleSave(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    try {
      const next = await saveSiteState({
        data: { status, version, headline, note },
      });
      onSave(next);
      toast.success("Đã lưu trạng thái");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Không lưu được");
    } finally {
      setBusy(false);
    }
  }

  const tones: { id: UpdateStatus; className: string }[] = [
    { id: "updating", className: "hud-accent-updating text-status-updating" },
    { id: "done", className: "hud-accent-done text-status-done" },
    { id: "error", className: "hud-accent-error text-status-error" },
  ];

  return (
    <HudPanel className="mb-5 p-4 sm:p-5">
      <h2 className="font-display text-sm font-bold tracking-[0.2em] text-primary">TRẠNG THÁI UPDATE</h2>
      <form className="mt-4 space-y-4" onSubmit={handleSave}>
        <div className="grid gap-2 sm:grid-cols-3">
          {tones.map((tone) => (
            <button
              key={tone.id}
              type="button"
              onClick={() => setStatus(tone.id)}
              className={cn(
                "hud-panel min-h-14 px-3 py-3 font-display text-sm font-bold tracking-wider",
                tone.className,
                status === tone.id ? "opacity-100" : "opacity-45 hover:opacity-80",
              )}
            >
              {STATUS_LABEL[tone.id]}
            </button>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="version">Phiên bản</Label>
            <Input id="version" value={version} onChange={(event) => setVersion(event.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="headline">Tiêu đề thông báo</Label>
            <Input
              id="headline"
              value={headline}
              onChange={(event) => setHeadline(event.target.value)}
              placeholder="Để trống sẽ dùng nhãn trạng thái"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="note">Nội dung</Label>
          <Textarea id="note" value={note} onChange={(event) => setNote(event.target.value)} />
        </div>
        <Button type="submit" disabled={busy}>
          <Save className="size-4" />
          Lưu trạng thái
        </Button>
      </form>
    </HudPanel>
  );
}

function FeatureEditor({
  site,
  onSave,
}: {
  site: SiteData;
  onSave: (next: SiteData) => void;
}) {
  const [draftTitle, setDraftTitle] = useState("");
  const [draftDesc, setDraftDesc] = useState("");
  const [draftIcon, setDraftIcon] = useState("zap");
  const [busy, setBusy] = useState(false);

  async function run(action: () => Promise<SiteData>, ok: string) {
    setBusy(true);
    try {
      onSave(await action());
      toast.success(ok);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Thao tác thất bại");
    } finally {
      setBusy(false);
    }
  }

  return (
    <HudPanel className="p-4 sm:p-5">
      <h2 className="font-display text-sm font-bold tracking-[0.2em] text-primary">
        Ô TÍNH NĂNG ĐƯỢC THÊM
      </h2>
      <p className="mt-1 text-sm text-muted">Các ô này hiện trên trang chủ, chỉnh trực tiếp tại đây.</p>

      <form
        className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end"
        onSubmit={(event: FormEvent) => {
          event.preventDefault();
          void run(async () => {
            const next = await addFeature({
              data: { title: draftTitle, description: draftDesc, icon: draftIcon },
            });
            setDraftTitle("");
            setDraftDesc("");
            return next;
          }, "Đã thêm tính năng");
        }}
      >
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="new-title">Tính năng mới</Label>
          <Input
            id="new-title"
            value={draftTitle}
            onChange={(event) => setDraftTitle(event.target.value)}
            placeholder="Tên tính năng"
            required
          />
        </div>
        <Button type="submit" disabled={busy || !draftTitle.trim()} className="w-full sm:w-auto">
          <Plus className="size-4" />
          Thêm
        </Button>
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="new-desc">Mô tả</Label>
          <Input
            id="new-desc"
            value={draftDesc}
            onChange={(event) => setDraftDesc(event.target.value)}
            placeholder="Mô tả ngắn"
          />
        </div>
        <IconPicker value={draftIcon} onChange={setDraftIcon} />
      </form>

      <ul className="mt-5 space-y-3">
        {site.features.map((feature, index) => (
          <FeatureRow
            key={feature.id}
            feature={feature}
            disabled={busy}
            isFirst={index === 0}
            isLast={index === site.features.length - 1}
            onMove={(direction) =>
              void run(
                () => moveFeature({ data: { id: feature.id, direction } }),
                "Đã đổi thứ tự",
              )
            }
            onSave={(next) =>
              void run(
                () =>
                  updateFeature({
                    data: {
                      id: feature.id,
                      title: next.title,
                      description: next.description,
                      icon: next.icon,
                    },
                  }),
                "Đã cập nhật ô tính năng",
              )
            }
            onDelete={() =>
              void run(() => deleteFeature({ data: { id: feature.id } }), "Đã xóa")
            }
          />
        ))}
      </ul>
    </HudPanel>
  );
}

function FeatureRow({
  feature,
  disabled,
  isFirst,
  isLast,
  onMove,
  onSave,
  onDelete,
}: {
  feature: Feature;
  disabled: boolean;
  isFirst: boolean;
  isLast: boolean;
  onMove: (direction: "up" | "down") => void;
  onSave: (next: Feature) => void;
  onDelete: () => void;
}) {
  const [title, setTitle] = useState(feature.title);
  const [description, setDescription] = useState(feature.description);
  const [icon, setIcon] = useState(feature.icon);

  useEffect(() => {
    setTitle(feature.title);
    setDescription(feature.description);
    setIcon(feature.icon);
  }, [feature]);

  return (
    <li className="bg-bg/60 p-3">
      <div className="grid gap-3 md:grid-cols-[auto_1fr_auto]">
        <div className="flex gap-1 md:flex-col">
          <Button variant="ghost" className="min-h-11 px-3" disabled={disabled || isFirst} onClick={() => onMove("up")}>
            <ChevronUp className="size-4" />
          </Button>
          <Button variant="ghost" className="min-h-11 px-3" disabled={disabled || isLast} onClick={() => onMove("down")}>
            <ChevronDown className="size-4" />
          </Button>
        </div>
        <div className="grid gap-2">
          <Input value={title} onChange={(event) => setTitle(event.target.value)} />
          <Input value={description} onChange={(event) => setDescription(event.target.value)} />
          <IconPicker value={icon} onChange={setIcon} />
        </div>
        <div className="flex gap-2 md:flex-col">
          <Button
            variant="primary"
            disabled={disabled}
            onClick={() => onSave({ ...feature, title, description, icon })}
          >
            <Save className="size-4" />
            Lưu
          </Button>
          <Button variant="danger" disabled={disabled} onClick={onDelete}>
            <Trash2 className="size-4" />
            Xóa
          </Button>
        </div>
      </div>
    </li>
  );
}

function IconPicker({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {FEATURE_ICON_KEYS.map((key) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={cn(
            "flex size-11 items-center justify-center text-primary transition-colors duration-150",
            value === key ? "bg-primary/25" : "bg-surface-2 hover:bg-primary/10",
          )}
          aria-label={key}
        >
          <FeatureIcon name={key} className="size-4" />
        </button>
      ))}
    </div>
  );
}
