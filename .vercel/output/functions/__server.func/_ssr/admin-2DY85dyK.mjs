import { o as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ChevronDown, a as Trash2, c as Save, d as Plus, p as LogOut, x as ChevronUp } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as deleteFeature, c as logoutAdmin, d as updateFeature, i as addFeature, l as moveFeature, n as Route, o as fetchPublicSite, s as loginAdmin, u as saveSiteState } from "./router-B0s4AG_R.mjs";
import { a as FEATURE_ICON_KEYS, d as cn, l as STATUS_LABEL, o as FeatureIcon, r as Button, s as HudPanel, t as ADMIN_PIN_HINT, u as StatusBanner } from "./icons-BG98vDF4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-2DY85dyK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full bg-bg px-3 text-sm text-fg shadow-[inset_0_0_0_1px_var(--color-border)] outline-none placeholder:text-muted", "focus-visible:shadow-[inset_0_0_0_1px_var(--color-primary),0_0_0_3px_color-mix(in_oklab,var(--color-primary)_30%,transparent)]", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("font-display text-xs font-semibold tracking-wider text-muted", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-24 w-full bg-bg px-3 py-2 text-sm text-fg shadow-[inset_0_0_0_1px_var(--color-border)] outline-none placeholder:text-muted", "focus-visible:shadow-[inset_0_0_0_1px_var(--color-primary),0_0_0_3px_color-mix(in_oklab,var(--color-primary)_30%,transparent)]", className),
		...props
	});
}
function AdminPage() {
	const loaded = Route.useLoaderData();
	const [authed, setAuthed] = (0, import_react.useState)(loaded.authed);
	const [site, setSite] = (0, import_react.useState)(loaded.site);
	const [pin, setPin] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setAuthed(loaded.authed);
		setSite(loaded.site);
	}, [loaded]);
	async function handleLogin(event) {
		event.preventDefault();
		setBusy(true);
		try {
			if (!(await loginAdmin({ data: { pin } })).ok) {
				toast.error("Sai mã PIN");
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
		setPin("");
	}
	if (!authed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto flex min-h-screen max-w-md flex-col justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HudPanel, {
			className: "p-5 sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs tracking-[0.28em] text-primary",
					children: "TST-TOOL XWORLD"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-2xl font-bold",
					children: "Bảng điều khiển"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Đổi trạng thái cập nhật và chỉnh các ô tính năng hiển thị trên trang chủ."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-5 space-y-3",
					onSubmit: handleLogin,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "pin",
							children: "Mã PIN"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "pin",
							type: "password",
							inputMode: "numeric",
							autoComplete: "current-password",
							value: pin,
							onChange: (event) => setPin(event.target.value),
							placeholder: `Mặc định ${ADMIN_PIN_HINT}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							disabled: busy,
							children: "Vào admin"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-4 inline-flex min-h-11 items-center text-sm text-muted hover:text-primary",
					children: "Về trang thông báo"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-h-screen max-w-5xl px-4 py-6 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs tracking-[0.28em] text-primary",
					children: "ADMIN"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-bold",
					children: "Điều khiển TST-TOOL"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex min-h-11 items-center bg-transparent px-4 font-display text-sm font-semibold tracking-wide text-fg shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-primary)_55%,transparent)] hover:bg-primary/10",
						children: "Xem trang chủ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "muted",
						onClick: () => void handleLogout(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), "Thoát"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBanner, { site })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusEditor, {
				site,
				onSave: setSite
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureEditor, {
				site,
				onSave: setSite
			})
		]
	});
}
function StatusEditor({ site, onSave }) {
	const [status, setStatus] = (0, import_react.useState)(site.status);
	const [version, setVersion] = (0, import_react.useState)(site.version);
	const [headline, setHeadline] = (0, import_react.useState)(site.headline);
	const [note, setNote] = (0, import_react.useState)(site.note);
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setStatus(site.status);
		setVersion(site.version);
		setHeadline(site.headline);
		setNote(site.note);
	}, [site]);
	async function handleSave(event) {
		event.preventDefault();
		setBusy(true);
		try {
			onSave(await saveSiteState({ data: {
				status,
				version,
				headline,
				note
			} }));
			toast.success("Đã lưu trạng thái");
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Không lưu được");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HudPanel, {
		className: "mb-5 p-4 sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-sm font-bold tracking-[0.2em] text-primary",
			children: "TRẠNG THÁI UPDATE"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-4 space-y-4",
			onSubmit: handleSave,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2 sm:grid-cols-3",
					children: [
						{
							id: "updating",
							className: "hud-accent-updating text-status-updating"
						},
						{
							id: "done",
							className: "hud-accent-done text-status-done"
						},
						{
							id: "error",
							className: "hud-accent-error text-status-error"
						}
					].map((tone) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setStatus(tone.id),
						className: cn("hud-panel min-h-14 px-3 py-3 font-display text-sm font-bold tracking-wider", tone.className, status === tone.id ? "opacity-100" : "opacity-45 hover:opacity-80"),
						children: STATUS_LABEL[tone.id]
					}, tone.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "version",
							children: "Phiên bản"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "version",
							value: version,
							onChange: (event) => setVersion(event.target.value)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "headline",
							children: "Tiêu đề thông báo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "headline",
							value: headline,
							onChange: (event) => setHeadline(event.target.value),
							placeholder: "Để trống sẽ dùng nhãn trạng thái"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "note",
						children: "Nội dung"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "note",
						value: note,
						onChange: (event) => setNote(event.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					disabled: busy,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-4" }), "Lưu trạng thái"]
				})
			]
		})]
	});
}
function FeatureEditor({ site, onSave }) {
	const [draftTitle, setDraftTitle] = (0, import_react.useState)("");
	const [draftDesc, setDraftDesc] = (0, import_react.useState)("");
	const [draftIcon, setDraftIcon] = (0, import_react.useState)("zap");
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function run(action, ok) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HudPanel, {
		className: "p-4 sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-sm font-bold tracking-[0.2em] text-primary",
				children: "Ô TÍNH NĂNG ĐƯỢC THÊM"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Các ô này hiện trên trang chủ, chỉnh trực tiếp tại đây."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end",
				onSubmit: (event) => {
					event.preventDefault();
					run(async () => {
						const next = await addFeature({ data: {
							title: draftTitle,
							description: draftDesc,
							icon: draftIcon
						} });
						setDraftTitle("");
						setDraftDesc("");
						return next;
					}, "Đã thêm tính năng");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5 sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "new-title",
							children: "Tính năng mới"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "new-title",
							value: draftTitle,
							onChange: (event) => setDraftTitle(event.target.value),
							placeholder: "Tên tính năng",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						disabled: busy || !draftTitle.trim(),
						className: "w-full sm:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Thêm"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5 sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "new-desc",
							children: "Mô tả"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "new-desc",
							value: draftDesc,
							onChange: (event) => setDraftDesc(event.target.value),
							placeholder: "Mô tả ngắn"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPicker, {
						value: draftIcon,
						onChange: setDraftIcon
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 space-y-3",
				children: site.features.map((feature, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureRow, {
					feature,
					disabled: busy,
					isFirst: index === 0,
					isLast: index === site.features.length - 1,
					onMove: (direction) => void run(() => moveFeature({ data: {
						id: feature.id,
						direction
					} }), "Đã đổi thứ tự"),
					onSave: (next) => void run(() => updateFeature({ data: {
						id: feature.id,
						title: next.title,
						description: next.description,
						icon: next.icon
					} }), "Đã cập nhật ô tính năng"),
					onDelete: () => void run(() => deleteFeature({ data: { id: feature.id } }), "Đã xóa")
				}, feature.id))
			})
		]
	});
}
function FeatureRow({ feature, disabled, isFirst, isLast, onMove, onSave, onDelete }) {
	const [title, setTitle] = (0, import_react.useState)(feature.title);
	const [description, setDescription] = (0, import_react.useState)(feature.description);
	const [icon, setIcon] = (0, import_react.useState)(feature.icon);
	(0, import_react.useEffect)(() => {
		setTitle(feature.title);
		setDescription(feature.description);
		setIcon(feature.icon);
	}, [feature]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		className: "bg-bg/60 p-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 md:grid-cols-[auto_1fr_auto]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-1 md:flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						className: "min-h-11 px-3",
						disabled: disabled || isFirst,
						onClick: () => onMove("up"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						className: "min-h-11 px-3",
						disabled: disabled || isLast,
						onClick: () => onMove("down"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: title,
							onChange: (event) => setTitle(event.target.value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: description,
							onChange: (event) => setDescription(event.target.value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPicker, {
							value: icon,
							onChange: setIcon
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 md:flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "primary",
						disabled,
						onClick: () => onSave({
							...feature,
							title,
							description,
							icon
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-4" }), "Lưu"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "danger",
						disabled,
						onClick: onDelete,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), "Xóa"]
					})]
				})
			]
		})
	});
}
function IconPicker({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-1.5",
		children: FEATURE_ICON_KEYS.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChange(key),
			className: cn("flex size-11 items-center justify-center text-primary transition-colors duration-150", value === key ? "bg-primary/25" : "bg-surface-2 hover:bg-primary/10"),
			"aria-label": key,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureIcon, {
				name: key,
				className: "size-4"
			})
		}, key))
	});
}
//#endregion
export { AdminPage as component };
