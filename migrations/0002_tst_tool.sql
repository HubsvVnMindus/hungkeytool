create table if not exists site_state (
  id integer primary key,
  status text not null default 'done',
  version text not null default '2.4.1',
  headline text not null default '',
  note text not null default '',
  updated_at timestamptz not null default now(),
  constraint site_state_status_chk check (status in ('updating', 'done', 'error'))
);

create table if not exists features (
  id serial primary key,
  title text not null,
  description text not null default '',
  icon text not null default 'zap',
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists features_sort_order_idx on features (sort_order, id);

insert into site_state (id, status, version, headline, note)
values (
  1,
  'done',
  '2.4.1',
  'Bản cập nhật đã hoàn tất',
  'TST-TOOL XWORLD sẵn sàng. Key VIP kích hoạt ngay sau khi thanh toán.'
)
on conflict (id) do nothing;

insert into features (title, description, icon, sort_order)
select * from (values
  ('Tối ưu tốc độ auto', 'Giảm delay, farm ổn định hơn khi chạy phiên dài.', 'rocket', 1),
  ('Tự kết nối lại', 'Reconnect khi mất sóng, không cần mở lại tool.', 'wifi', 2),
  ('HUD trạng thái key', 'Theo dõi hạn key, phiên bản và ping ngay trong tool.', 'cpu', 3),
  ('Map XWorld mới', 'Cập nhật tọa độ, đường đi và điểm farm bản mới nhất.', 'swords', 4)
) as seed(title, description, icon, sort_order)
where not exists (select 1 from features limit 1);
