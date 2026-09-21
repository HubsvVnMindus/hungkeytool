import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as CircleCheck, g as Headphones, h as LoaderCircle, i as TriangleAlert, l as Rocket, m as Lock, n as Wrench, o as Swords, r as Wifi, s as Shield, t as Zap, u as RefreshCw, v as Cpu } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/icons-BG98vDF4.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function HudPanel({ children, className, accent = "primary" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("hud-panel hud-accent-" + accent, className),
		children
	});
}
var ADMIN_PIN_HINT = "9736";
var STATUS_LABEL = {
	updating: "ĐANG CẬP NHẬT",
	done: "ĐÃ XONG",
	error: "LỖI"
};
var STATUS_HINT = {
	updating: "Tool đang được nâng cấp. Vui lòng đợi phiên bản mới.",
	done: "Cập nhật hoàn tất. Kích hoạt key và sử dụng bình thường.",
	error: "Cập nhật gặp sự cố. Liên hệ hỗ trợ nếu bạn bị gián đoạn."
};
var FEATURE_ICON_KEYS = [
	"shield",
	"refresh",
	"headphones",
	"zap",
	"cpu",
	"swords",
	"wifi",
	"lock",
	"rocket",
	"wrench"
];
var CONTACT = {
	account: "VO TRUONG SON",
	zalo: "0398639736",
	phone: "0398639736",
	transferHint: "MUA KEY {GIÁ} {SỐ NGÀY}",
	transferExample: "MUA KEY 3K 1 NGAY"
};
var PLANS = [
	{
		id: "vip",
		name: "BẢNG VIP",
		items: [
			{
				days: "1 NGÀY",
				price: "3.000",
				code: "MUA KEY 3K 1 NGAY"
			},
			{
				days: "2 NGÀY",
				price: "5.000",
				code: "MUA KEY 5K 2 NGAY"
			},
			{
				days: "4 NGÀY",
				price: "7.000",
				code: "MUA KEY 7K 4 NGAY"
			}
		]
	},
	{
		id: "pro",
		name: "BẢNG VIP PRO",
		items: [
			{
				days: "10 NGÀY",
				price: "20.000",
				code: "MUA KEY 20K 10 NGAY"
			},
			{
				days: "20 NGÀY",
				price: "30.000",
				code: "MUA KEY 30K 20 NGAY"
			},
			{
				days: "30 NGÀY",
				price: "50.000",
				code: "MUA KEY 50K 30 NGAY"
			}
		]
	},
	{
		id: "super",
		name: "BẢNG SUPER VIP",
		items: [
			{
				days: "60 NGÀY",
				price: "80.000",
				code: "MUA KEY 80K 60 NGAY"
			},
			{
				days: "70 NGÀY",
				price: "99.000",
				code: "MUA KEY 99K 70 NGAY"
			},
			{
				days: "VĨNH VIỄN",
				price: "250.000",
				code: "MUA KEY 250K VINH VIEN"
			}
		]
	}
];
var BENEFITS = [
	{
		icon: "shield",
		title: "SỬ DỤNG ĐẦY ĐỦ TÍNH NĂNG",
		desc: "TST-TOOL XWORLD"
	},
	{
		icon: "refresh",
		title: "CẬP NHẬT MIỄN PHÍ",
		desc: "Thời gian hỗ trợ giới hạn"
	},
	{
		icon: "headphones",
		title: "HỖ TRỢ CÀI ĐẶT VÀ SỬ DỤNG",
		desc: "Kèm theo suốt hạn key"
	},
	{
		icon: "zap",
		title: "KÍCH HOẠT NHANH CHÓNG",
		desc: "Ngay sau khi thanh toán"
	}
];
function StatusIcon({ status }) {
	if (status === "updating") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
		className: "size-7 animate-spin",
		strokeWidth: 2
	});
	if (status === "error") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
		className: "size-7",
		strokeWidth: 2
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
		className: "size-7",
		strokeWidth: 2
	});
}
function StatusBanner({ site }) {
	const title = site.headline.trim() || STATUS_LABEL[site.status];
	const note = site.note.trim() || STATUS_HINT[site.status];
	const tone = site.status === "updating" ? "text-status-updating" : site.status === "error" ? "text-status-error" : "text-status-done";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HudPanel, {
		accent: site.status,
		className: "overflow-hidden p-4 sm:p-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("mt-0.5", tone),
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIcon, { status: site.status })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2.5 rounded-full bg-current pulse-dot", tone) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("font-display text-xl font-bold tracking-wider sm:text-2xl", tone),
								children: STATUS_LABEL[site.status]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-xs tracking-widest text-muted",
								children: ["v", site.version]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-base font-semibold text-fg sm:text-lg",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-2xl text-sm text-muted",
						children: note
					})
				] })]
			}), site.status === "updating" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-1.5 w-full overflow-hidden bg-bg sm:max-w-48",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scan-bar h-full w-1/3 bg-status-updating" })
			}) : null]
		})
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 min-h-11 px-4 font-display text-sm font-semibold tracking-wide transition-[opacity,transform,background-color,box-shadow] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none", {
	variants: { variant: {
		primary: "bg-primary text-fg shadow-[0_0_18px_color-mix(in_oklab,var(--color-primary)_45%,transparent)] hover:opacity-90",
		ghost: "bg-transparent text-fg shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-primary)_55%,transparent)] hover:bg-primary/10",
		muted: "bg-surface-2 text-fg hover:bg-surface",
		danger: "bg-status-error text-fg hover:opacity-90"
	} },
	defaultVariants: { variant: "primary" }
});
function Button({ className, variant, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({ variant }), className),
		...props
	});
}
var FEATURE_ICONS = {
	shield: Shield,
	refresh: RefreshCw,
	headphones: Headphones,
	zap: Zap,
	cpu: Cpu,
	swords: Swords,
	wifi: Wifi,
	lock: Lock,
	rocket: Rocket,
	wrench: Wrench
};
function FeatureIcon({ name, className }) {
	const Icon = FEATURE_ICONS[name] ?? Zap;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className,
		strokeWidth: 1.8
	});
}
//#endregion
export { FEATURE_ICON_KEYS as a, PLANS as c, cn as d, CONTACT as i, STATUS_LABEL as l, BENEFITS as n, FeatureIcon as o, Button as r, HudPanel as s, ADMIN_PIN_HINT as t, StatusBanner as u };
