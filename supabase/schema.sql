-- GreenLeaf starter schema. Review and apply only after connecting the intended Supabase project.
-- Public catalog is readable; only authenticated staff can manage inventory.
create extension if not exists pgcrypto;
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 120),
  category text not null,
  description text not null default '',
  price_paise integer not null check (price_paise >= 0),
  image_url text,
  stock_quantity integer not null default 0 check (stock_quantity >= 0),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null check (char_length(customer_name) between 2 and 120),
  customer_phone text not null check (char_length(customer_phone) between 8 and 20),
  delivery_address text not null check (char_length(delivery_address) between 8 and 600),
  customer_note text not null default '',
  status text not null default 'pending' check (status in ('pending','confirmed','packed','dispatched','delivered','cancelled')),
  subtotal_paise integer not null check (subtotal_paise >= 0),
  created_at timestamptz not null default now()
);
create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  product_name text not null,
  unit_price_paise integer not null check (unit_price_paise >= 0),
  quantity integer not null check (quantity between 1 and 1000)
);
alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
create policy "Anyone can view active products" on public.products for select to anon, authenticated using (is_active = true);
-- No public insert/read policy for orders or order_items. Add a trusted Edge Function
-- or authenticated staff workflow before enabling online order persistence.
-- Never put a Supabase service-role key in shop.js or any browser code.
