import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { Feature, SiteData, UpdateStatus } from "@/lib/site";

const COOKIE = "tst_admin";
const ADMIN_USER = "admin";
const ADMIN_PASS = "Hunghai443@#";
const TOKEN = "tst-xworld-admin-ok";

type StateRow = {
  id: number;
  status: string;
  version: string;
  headline: string;
  note: string;
  updated_at: string;
};

type FeatureRow = {
  id: number;
  title: string;
  description: string;
  icon: string;
  sort_order: number;
};

const StatusEnum = z.enum(["updating", "done", "error"]);

function asStatus(value: string): UpdateStatus {
  if (value === "updating" || value === "done" || value === "error") return value;
  return "done";
}

function mapFeature(row: FeatureRow): Feature {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    icon: row.icon,
    sortOrder: row.sort_order,
  };
}

async function loadSite(): Promise<SiteData> {
  const { getSql } = await import("@/lib/db");
  const sql = await getSql();
  const states = await sql<StateRow>`select id, status, version, headline, note, updated_at from site_state where id = 1`;
  let state = states[0];
  if (!state) {
    await sql`
      insert into site_state (id, status, version, headline, note)
      values (1, 'done', '2.4.1', 'Bản cập nhật đã hoàn tất', 'TST-TOOL XWORLD sẵn sàng. Key VIP kích hoạt ngay sau khi thanh toán.')
    `;
    const created = await sql<StateRow>`select id, status, version, headline, note, updated_at from site_state where id = 1`;
    state = created[0];
  }
  const features = await sql<FeatureRow>`
    select id, title, description, icon, sort_order from features order by sort_order asc, id asc
  `;
  return {
    status: asStatus(state?.status ?? "done"),
    version: state?.version ?? "2.4.1",
    headline: state?.headline ?? "",
    note: state?.note ?? "",
    updatedAt: state?.updated_at ?? new Date().toISOString(),
    features: features.map(mapFeature),
  };
}

async function isAdmin(): Promise<boolean> {
  const { getCookie } = await import("@tanstack/react-start/server");
  return getCookie(COOKIE) === TOKEN;
}

async function requireAdmin(): Promise<void> {
  if (!(await isAdmin())) {
    throw new Error("Cần đăng nhập admin");
  }
}

export const fetchPublicSite = createServerFn({ method: "GET" }).handler(
  async (): Promise<SiteData> => loadSite(),
);

export const fetchAdminSession = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ ok: boolean }> => ({ ok: await isAdmin() }),
);

export const loginAdmin = createServerFn({ method: "POST" })
  .validator(
    z.object({
      username: z.string().min(1).max(32),
      password: z.string().min(1).max(32),
    }),
  )
  .handler(async ({ data }): Promise<{ ok: boolean }> => {
    const userOk = data.username.trim().toLowerCase() === ADMIN_USER;
    const passOk = data.password.trim() === ADMIN_PASS;
    if (!userOk || !passOk) return { ok: false };
    const { setCookie } = await import("@tanstack/react-start/server");
    setCookie(COOKIE, TOKEN, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });
    return { ok: true };
  });

export const logoutAdmin = createServerFn({ method: "POST" }).handler(async () => {
  const { setCookie } = await import("@tanstack/react-start/server");
  setCookie(COOKIE, "", { path: "/", httpOnly: true, sameSite: "lax", maxAge: 0 });
  return { ok: true as const };
});

export const saveSiteState = createServerFn({ method: "POST" })
  .validator(
    z.object({
      status: StatusEnum,
      version: z.string().min(1).max(32),
      headline: z.string().max(120),
      note: z.string().max(400),
    }),
  )
  .handler(async ({ data }): Promise<SiteData> => {
    await requireAdmin();
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    await sql`
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

export const addFeature = createServerFn({ method: "POST" })
  .validator(
    z.object({
      title: z.string().min(1).max(80),
      description: z.string().max(240),
      icon: z.string().min(1).max(32),
    }),
  )
  .handler(async ({ data }): Promise<SiteData> => {
    await requireAdmin();
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    const maxRows = await sql<{ max: number | string | null }>`select max(sort_order) as max from features`;
    const next = Number(maxRows[0]?.max ?? 0) + 1;
    await sql`
      insert into features (title, description, icon, sort_order)
      values (${data.title.trim()}, ${data.description.trim()}, ${data.icon}, ${next})
    `;
    return loadSite();
  });

export const updateFeature = createServerFn({ method: "POST" })
  .validator(
    z.object({
      id: z.number(),
      title: z.string().min(1).max(80),
      description: z.string().max(240),
      icon: z.string().min(1).max(32),
    }),
  )
  .handler(async ({ data }): Promise<SiteData> => {
    await requireAdmin();
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    await sql`
      update features
      set title = ${data.title.trim()},
          description = ${data.description.trim()},
          icon = ${data.icon}
      where id = ${data.id}
    `;
    return loadSite();
  });

export const deleteFeature = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.number() }))
  .handler(async ({ data }): Promise<SiteData> => {
    await requireAdmin();
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    await sql`delete from features where id = ${data.id}`;
    return loadSite();
  });

export const moveFeature = createServerFn({ method: "POST" })
  .validator(
    z.object({
      id: z.number(),
      direction: z.enum(["up", "down"]),
    }),
  )
  .handler(async ({ data }): Promise<SiteData> => {
    await requireAdmin();
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    const rows = await sql<FeatureRow>`
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
