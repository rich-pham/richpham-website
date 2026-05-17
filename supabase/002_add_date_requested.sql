-- ============================================================
-- 002_add_date_requested.sql
-- Adds a first-class "date_requested" column to inquiries.
-- Useful for speaker bookings and coaching discovery calls
-- where the sender proposes a specific date.
-- ============================================================

alter table public.inquiries
  add column if not exists date_requested timestamptz;

create index if not exists idx_inquiries_date_requested
  on public.inquiries (date_requested);

-- Drop the old 11-arg version before recreating with the new param.
drop function if exists public.submit_inquiry(
  text, text, text, text, text, text, text, text, jsonb, text, text
);

create or replace function public.submit_inquiry(
  p_name           text,
  p_email          text,
  p_type           text default 'general',
  p_phone          text default null,
  p_company        text default null,
  p_role           text default null,
  p_subject        text default null,
  p_message        text default null,
  p_metadata       jsonb default '{}',
  p_source         text default null,
  p_source_site    text default 'richpham.com',
  p_date_requested timestamptz default null
)
returns uuid
language plpgsql security definer
as $$
declare
  v_person_id uuid;
  v_inquiry_id uuid;
begin
  insert into public.people (email, name, phone, company, role, source_site)
  values (lower(trim(p_email)), trim(p_name), p_phone, p_company, p_role, p_source_site)
  on conflict (email) do update set
    name = coalesce(nullif(trim(p_name), ''), public.people.name),
    phone = coalesce(p_phone, public.people.phone),
    company = coalesce(p_company, public.people.company),
    role = coalesce(p_role, public.people.role),
    updated_at = now()
  returning id into v_person_id;

  insert into public.inquiries (
    person_id, type, subject, message, metadata, source, source_site, date_requested
  )
  values (
    v_person_id, p_type, p_subject, p_message,
    coalesce(p_metadata, '{}'::jsonb), p_source, p_source_site, p_date_requested
  )
  returning id into v_inquiry_id;

  return v_inquiry_id;
end;
$$;

grant execute on function public.submit_inquiry to anon;
