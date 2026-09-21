import { o as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Check, _ as Gem, f as Phone, y as Copy } from "../_libs/lucide-react.mjs";
import { o as fetchPublicSite, r as Route$1 } from "./router-B0s4AG_R.mjs";
import { c as PLANS, d as cn, i as CONTACT, n as BENEFITS, o as FeatureIcon, r as Button, s as HudPanel, u as StatusBanner } from "./icons-BG98vDF4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DF-7NF4g.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FeatureGrid({ features }) {
	if (features.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HudPanel, {
		className: "px-4 py-8 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Chưa có tính năng mới trong bản này."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 sm:grid-cols-2",
		children: features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HudPanel, {
			className: "flex gap-3 p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-11 shrink-0 items-center justify-center bg-primary/15 text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureIcon, {
					name: feature.icon,
					className: "size-5"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-sm font-bold tracking-wide text-fg",
					children: feature.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: feature.description
				})]
			})]
		}, feature.id))
	});
}
function PaymentBlock({ transfer, copied, onCopy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3 lg:grid-cols-[1.15fr_0.85fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HudPanel, {
			className: "p-4 sm:p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-sm font-bold tracking-[0.22em] text-primary",
				children: "THANH TOÁN"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 md:grid-cols-[1fr_auto] md:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-muted",
							children: "CHỦ TÀI KHOẢN"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl font-bold text-fg",
							children: CONTACT.account
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Quét mã QR để thanh toán. Nhập đúng nội dung chuyển khoản."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-bg/70 p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] tracking-widest text-muted",
									children: "NỘI DUNG CHUYỂN KHOẢN"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-sm font-semibold text-status-updating",
									children: CONTACT.transferHint
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted",
									children: ["Ví dụ: ", CONTACT.transferExample]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "max-w-full truncate bg-surface-2 px-2 py-1 font-display text-xs text-fg",
										children: transfer
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "ghost",
										className: "min-h-11 px-3",
										onClick: onCopy,
										children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), copied ? "Đã chép" : "Sao chép"]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-status-error",
							children: "Lưu ý: nhập sai nội dung sẽ không có key."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-full max-w-48",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/assets/qr.jpg",
						alt: "Mã QR thanh toán TST-TOOL XWORLD",
						className: "aspect-square w-full object-cover"
					})
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HudPanel, {
			className: "relative overflow-hidden p-4 sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-sm font-bold tracking-[0.22em] text-primary",
					children: "LIÊN HỆ HỖ TRỢ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `https://zalo.me/${CONTACT.zalo}`,
						target: "_blank",
						rel: "noreferrer",
						className: "flex min-h-11 items-center gap-3 bg-primary px-3 py-2 text-fg transition-opacity duration-150 hover:opacity-90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm font-bold",
							children: "Zalo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-bold tabular-nums",
							children: CONTACT.zalo
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${CONTACT.phone}`,
						className: "flex min-h-11 items-center gap-3 bg-surface-2 px-3 py-2 text-fg shadow-[inset_0_0_0_1px_var(--color-border)] transition-colors duration-150 hover:bg-primary/10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted",
								children: "SĐT"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-bold tabular-nums",
								children: CONTACT.phone
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/assets/hacker.jpg",
					alt: "",
					className: "pointer-events-none no-outline absolute -right-4 bottom-0 h-40 w-auto object-contain opacity-90 sm:h-48"
				})
			]
		})]
	});
}
function PricingBoard({ selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "grid gap-3 md:grid-cols-3",
		children: PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HudPanel, {
			className: "p-4 sm:p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-sm font-bold tracking-[0.2em] text-primary sm:text-base",
						children: plan.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-primary" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: plan.items.map((item) => {
					const active = selected === item.code;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onSelect(item),
						className: cn("grid w-full grid-cols-[1fr_auto] items-center gap-3 px-3 py-3 text-left transition-colors duration-150 min-h-11", active ? "bg-primary/20" : "bg-bg/60 hover:bg-primary/10"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-bold leading-none text-fg sm:text-xl",
							children: item.days
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-bold tabular-nums text-primary sm:text-xl",
								children: item.price
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1 text-[11px] tracking-widest text-muted",
								children: "VNĐ"
							})]
						})]
					}) }, item.code);
				})
			})]
		}, plan.id))
	});
}
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative overflow-hidden pt-4 sm:pt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 flex items-center justify-center gap-2 sm:gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/assets/mecha.jpg",
					alt: "",
					className: "mecha-idle no-outline h-20 w-auto object-contain sm:h-36 md:h-44"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/assets/logo-t.jpg",
					alt: "",
					className: "no-outline hidden size-12 object-cover sm:block sm:size-16"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "title-chrome text-4xl leading-none sm:text-6xl md:text-8xl",
						children: "TST-TOOL"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 flex items-center justify-center gap-2 font-display text-base font-semibold tracking-[0.35em] text-primary sm:mt-3 sm:text-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gem, { className: "size-4" }),
							"XWORLD",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gem, { className: "size-4" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/assets/logo-t.jpg",
					alt: "",
					className: "no-outline hidden size-12 object-cover sm:block sm:size-16"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/assets/mecha.jpg",
					alt: "",
					className: "mecha-idle no-outline h-20 w-auto scale-x-[-1] object-contain sm:h-36 md:h-44"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 mt-4 flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hud-panel hud-accent-primary px-4 py-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "title-sub text-xs font-bold",
					children: "TST-TOOL XWORLD"
				})
			})
		})]
	});
}
function Home() {
	const initial = Route$1.useLoaderData();
	const [site, setSite] = (0, import_react.useState)(initial);
	const [selected, setSelected] = (0, import_react.useState)(CONTACT.transferExample);
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setSite(initial);
	}, [initial]);
	(0, import_react.useEffect)(() => {
		const timer = window.setInterval(() => {
			fetchPublicSite().then(setSite);
		}, 8e3);
		return () => window.clearInterval(timer);
	}, []);
	function handleSelect(item) {
		setSelected(item.code);
		navigator.clipboard.writeText(item.code).then(() => {
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1600);
		});
	}
	function handleCopy() {
		navigator.clipboard.writeText(selected).then(() => {
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1600);
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative mx-auto min-h-screen w-full max-w-5xl px-4 pb-16 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "circuit-hex pointer-events-none absolute inset-0 opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "section-enter mt-6 sm:mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBanner, { site })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section-enter mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PricingBoard, {
						selected,
						onSelect: handleSelect
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section-enter mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HudPanel, {
						className: "p-4 sm:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-4 text-center font-display text-sm font-bold tracking-[0.22em] text-primary",
							children: "QUYỀN LỢI KHI MUA KEY"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
							children: BENEFITS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-bg/50 px-3 py-4 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mx-auto flex size-11 items-center justify-center text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureIcon, {
											name: item.icon,
											className: "size-6"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-display text-xs font-bold tracking-wide text-fg",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted",
										children: item.desc
									})
								]
							}, item.title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "section-enter mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-3 text-center font-display text-sm font-bold tracking-[0.22em] text-primary",
						children: "TÍNH NĂNG ĐƯỢC THÊM"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGrid, { features: site.features })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section-enter mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentBlock, {
						transfer: selected,
						copied,
						onCopy: handleCopy
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "mt-8 flex flex-col items-center gap-2 pb-4 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs tracking-widest text-primary",
						children: "CẢM ƠN BẠN ĐÃ TIN TƯỞNG VÀ ỦNG HỘ TST-TOOL XWORLD"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						className: "min-h-11 px-3 py-2 text-xs tracking-widest text-muted transition-colors duration-150 hover:text-primary",
						children: "Trang admin"
					})]
				})
			]
		})]
	});
}
//#endregion
export { Home as component };
