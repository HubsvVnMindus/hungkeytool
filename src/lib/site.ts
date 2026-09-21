export type UpdateStatus = "updating" | "done" | "error";

export type Feature = {
  id: number;
  title: string;
  description: string;
  icon: string;
  sortOrder: number;
};

export type SiteData = {
  status: UpdateStatus;
  version: string;
  headline: string;
  note: string;
  updatedAt: string;
  features: Feature[];
};

export const STATUS_LABEL: Record<UpdateStatus, string> = {
  updating: "ĐANG CẬP NHẬT",
  done: "ĐÃ XONG",
  error: "LỖI",
};

export const STATUS_HINT: Record<UpdateStatus, string> = {
  updating: "Tool đang được nâng cấp. Vui lòng đợi phiên bản mới.",
  done: "Cập nhật hoàn tất. Kích hoạt key và sử dụng bình thường.",
  error: "Cập nhật gặp sự cố. Liên hệ hỗ trợ nếu bạn bị gián đoạn.",
};

export const FEATURE_ICON_KEYS = [
  "shield",
  "refresh",
  "headphones",
  "zap",
  "cpu",
  "swords",
  "wifi",
  "lock",
  "rocket",
  "wrench",
] as const;

export type FeatureIconKey = (typeof FEATURE_ICON_KEYS)[number];

export const CONTACT = {
  account: "VO TRUONG SON",
  zalo: "0398639736",
  phone: "0398639736",
  group: "https://zalo.me/g/5sfylhaucaauvfbuscj7",
  transferHint: "MUA KEY {GIÁ} {SỐ NGÀY}",
  transferExample: "MUA KEY 3K 1 NGAY",
};

export type PlanItem = {
  days: string;
  price: string;
  code: string;
};

export type Plan = {
  id: "vip" | "pro" | "super";
  name: string;
  items: PlanItem[];
};

export const PLANS: Plan[] = [
  {
    id: "vip",
    name: "BẢNG VIP",
    items: [
      { days: "1 NGÀY", price: "3.000", code: "MUA KEY 3K 1 NGAY" },
      { days: "2 NGÀY", price: "5.000", code: "MUA KEY 5K 2 NGAY" },
      { days: "4 NGÀY", price: "7.000", code: "MUA KEY 7K 4 NGAY" },
    ],
  },
  {
    id: "pro",
    name: "BẢNG VIP PRO",
    items: [
      { days: "10 NGÀY", price: "20.000", code: "MUA KEY 20K 10 NGAY" },
      { days: "20 NGÀY", price: "30.000", code: "MUA KEY 30K 20 NGAY" },
      { days: "30 NGÀY", price: "50.000", code: "MUA KEY 50K 30 NGAY" },
    ],
  },
  {
    id: "super",
    name: "BẢNG SUPER VIP",
    items: [
      { days: "60 NGÀY", price: "80.000", code: "MUA KEY 80K 60 NGAY" },
      { days: "70 NGÀY", price: "99.000", code: "MUA KEY 99K 70 NGAY" },
      { days: "VĨNH VIỄN", price: "250.000", code: "MUA KEY 250K VINH VIEN" },
    ],
  },
];

export const BENEFITS = [
  {
    icon: "shield" as FeatureIconKey,
    title: "SỬ DỤNG ĐẦY ĐỦ TÍNH NĂNG",
    desc: "TST-TOOL XWORLD",
  },
  {
    icon: "refresh" as FeatureIconKey,
    title: "CẬP NHẬT MIỄN PHÍ",
    desc: "Thời gian hỗ trợ giới hạn",
  },
  {
    icon: "headphones" as FeatureIconKey,
    title: "HỖ TRỢ CÀI ĐẶT VÀ SỬ DỤNG",
    desc: "Kèm theo suốt hạn key",
  },
  {
    icon: "zap" as FeatureIconKey,
    title: "KÍCH HOẠT NHANH CHÓNG",
    desc: "Ngay sau khi thanh toán",
  },
];

export type FixStep = {
  id: string;
  title: string;
  command: string;
};

export const FIX_STEPS: FixStep[] = [
  {
    id: "1",
    title: "Cập nhật Termux và cài Python",
    command: "pkg update && pkg upgrade -y\npkg install python python-pip binutils -y",
  },
  {
    id: "2",
    title: "Cài Rust và thư viện build",
    command: "pkg install rust binutils libcrypt-dev -y",
  },
  {
    id: "3",
    title: "Cấu hình build cho Android",
    command:
      "export CARGO_BUILD_TARGET=aarch64-linux-android\nexport PATH=\"$PREFIX/bin:$PATH\"",
  },
  {
    id: "4",
    title: "Cài cryptography có sẵn của Termux",
    command: "pkg install python-cryptography -y",
  },
  {
    id: "5",
    title: "Chạy tool",
    command: "python tsttool.py",
  },
];

export const FIX_ALL_COMMANDS = FIX_STEPS.map((step) => step.command).join("\n");
