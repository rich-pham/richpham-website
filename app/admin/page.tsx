export const dynamic = 'force-dynamic';

import Link from 'next/link';
import {
  supabase,
  INQUIRY_TYPES,
  TYPE_META,
  type InquiryRow,
  type InquiryType,
} from '@/lib/supabase';
import AdminBoard from './_components/AdminBoard';

function isValidType(value: string | undefined): value is InquiryType {
  return !!value && (INQUIRY_TYPES as readonly string[]).includes(value);
}

type CountRow = { type: string; status: string; count: number };

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type: typeParam } = await searchParams;
  const typeFilter = isValidType(typeParam) ? typeParam : null;

  // Fetch inquiries + counts in parallel
  const [inquiriesRes, countsRes] = await Promise.all([
    supabase.rpc('get_inquiries', {
      p_type: typeFilter,
      p_status: null,
      p_source_site: null,
      p_limit: 200,
      p_offset: 0,
    }),
    supabase.rpc('get_inquiry_counts'),
  ]);

  const inquiries = (inquiriesRes.data ?? []) as InquiryRow[];
  const counts = (countsRes.data ?? []) as CountRow[];

  const totalCount = counts.reduce((sum, r) => sum + (r.count ?? 0), 0);
  const typeCounts = INQUIRY_TYPES.reduce<Record<InquiryType, number>>((acc, t) => {
    acc[t] = counts.filter((r) => r.type === t).reduce((s, r) => s + (r.count ?? 0), 0);
    return acc;
  }, {} as Record<InquiryType, number>);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#F4F4F4',
        fontFamily: "'NunitoSans', sans-serif",
      }}
    >
      {/* Dark header with KPI cards */}
      <div style={{ background: '#001740', padding: '40px 0 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '28px' }}>
            <h1
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.01em',
              }}
            >
              Inquiry Dashboard
            </h1>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 800,
                color: '#F4D462',
                background: 'rgba(244,212,98,0.15)',
                border: '1px solid rgba(244,212,98,0.3)',
                borderRadius: '4px',
                padding: '3px 10px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              richpham.com
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${INQUIRY_TYPES.length + 1}, 1fr)`,
              gap: '16px',
            }}
          >
            {/* Total card */}
            <KpiCard
              label="Total"
              count={totalCount}
              href="/admin"
              active={typeFilter === null}
            />
            {INQUIRY_TYPES.map((t) => (
              <KpiCard
                key={t}
                label={TYPE_META[t].label}
                count={typeCounts[t] ?? 0}
                href={typeFilter === t ? '/admin' : `/admin?type=${t}`}
                active={typeFilter === t}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px' }}>
        {/* Controls row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
          }}
        >
          <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.55)' }}>
            <span style={{ fontWeight: 800, color: '#0F2A71' }}>{inquiries.length}</span>{' '}
            {inquiries.length === 1 ? 'inquiry' : 'inquiries'}
            {typeFilter && (
              <>
                {' '}
                · filtered to{' '}
                <span style={{ fontWeight: 800, color: '#0F2A71' }}>
                  {TYPE_META[typeFilter].label}
                </span>{' '}
                <Link
                  href="/admin"
                  style={{
                    color: '#0F2A71',
                    textDecoration: 'underline',
                    marginLeft: '6px',
                  }}
                >
                  clear
                </Link>
              </>
            )}
          </p>
        </div>

        {inquiriesRes.error && (
          <p
            style={{
              color: '#c0392b',
              marginBottom: '16px',
              padding: '12px 16px',
              background: '#fff',
              border: '1px solid #f5c6cb',
              borderRadius: '6px',
              fontSize: '13px',
            }}
          >
            Error loading inquiries: {inquiriesRes.error.message}
          </p>
        )}

        <AdminBoard inquiries={inquiries} />
      </div>
    </div>
  );
}

function KpiCard({
  label,
  count,
  href,
  active,
}: {
  label: string;
  count: number;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      style={{
        display: 'block',
        textDecoration: 'none',
        background: active ? 'rgba(244,212,98,0.12)' : 'rgba(255,255,255,0.06)',
        border: active ? '1px solid rgba(244,212,98,0.5)' : '1px solid rgba(255,255,255,0.15)',
        borderRadius: '10px',
        padding: '18px 20px',
        textAlign: 'center',
        transition: 'background 0.15s ease, border-color 0.15s ease',
      }}
    >
      <p
        style={{
          fontSize: '11px',
          fontWeight: 800,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: active ? '#F4D462' : 'rgba(255,255,255,0.55)',
          marginBottom: '6px',
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: '32px',
          fontWeight: 800,
          color: active ? '#F4D462' : '#ffffff',
          lineHeight: 1,
        }}
      >
        {count}
      </p>
    </Link>
  );
}
