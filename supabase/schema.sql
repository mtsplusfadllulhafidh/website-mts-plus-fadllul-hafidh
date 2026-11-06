-- Jalankan di SQL Editor project Supabase.
create table if not exists public.ppdb_applications (
 id uuid primary key default gen_random_uuid(), full_name text not null, birth_info text not null,
 previous_school text not null, parent_name text not null, whatsapp text not null, email text not null,
 address text not null, status text not null default 'baru', created_at timestamptz not null default now()
);
create table if not exists public.visitor_messages (
 id uuid primary key default gen_random_uuid(), name text not null, email text not null,
 message text not null, created_at timestamptz not null default now()
);
create table if not exists public.articles (
 id uuid primary key default gen_random_uuid(), title text not null, slug text unique not null,
 category text, excerpt text, content text, cover_url text, published boolean not null default false,
 created_at timestamptz not null default now()
);
create table if not exists public.site_settings (
 key text primary key, value jsonb not null default '{}'::jsonb, updated_at timestamptz not null default now()
);
create table if not exists public.teachers (
 id uuid primary key default gen_random_uuid(), name text not null, position text, photo_url text
);
create table if not exists public.gallery (
 id uuid primary key default gen_random_uuid(), title text, category text, image_url text not null,
 created_at timestamptz not null default now()
);
-- Public can submit applications/messages, but cannot read them.
alter table public.ppdb_applications enable row level security;
alter table public.visitor_messages enable row level security;
alter table public.articles enable row level security;
alter table public.site_settings enable row level security;
alter table public.teachers enable row level security;
alter table public.gallery enable row level security;
create policy "public submit ppdb" on public.ppdb_applications for insert to anon, authenticated with check (true);
create policy "public submit messages" on public.visitor_messages for insert to anon, authenticated with check (true);
create policy "public read published articles" on public.articles for select to anon, authenticated using (published = true);
create policy "public read settings" on public.site_settings for select to anon, authenticated using (true);
create policy "public read teachers" on public.teachers for select to anon, authenticated using (true);
create policy "public read gallery" on public.gallery for select to anon, authenticated using (true);
-- Add admin-only policies after creating an admin role/profile table and assigning authorized user UUIDs.
-- Do not expose service_role keys in browser code. Restrict admin table access with server-side authorization/RLS.
