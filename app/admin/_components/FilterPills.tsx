'use client';

import Link from 'next/link';

type Option = {
  label: string;
  value: string | null;
};

export default function FilterPills({
  label,
  paramKey,
  options,
  current,
  baseParams,
}: {
  label: string;
  paramKey: 'type' | 'status';
  options: Option[];
  current: string | null;
  baseParams: Record<string, string | undefined>;
}) {
  function hrefFor(value: string | null) {
    const params = new URLSearchParams();
    Object.entries(baseParams).forEach(([k, v]) => {
      if (k !== paramKey && v) params.set(k, v);
    });
    if (value) params.set(paramKey, value);
    const qs = params.toString();
    return qs ? `/admin?${qs}` : '/admin';
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
      <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)' }}>
        {label}
      </span>
      {options.map((opt) => {
        const active = (current ?? null) === opt.value;
        return (
          <Link
            key={opt.label}
            href={hrefFor(opt.value)}
            style={{
              fontSize: '13px',
              fontWeight: 700,
              padding: '6px 12px',
              borderRadius: '999px',
              textDecoration: 'none',
              background: active ? '#0F2A71' : '#ffffff',
              color: active ? '#ffffff' : '#0F2A71',
              border: '1px solid #0F2A71',
              fontFamily: "'NunitoSans', sans-serif",
            }}
          >
            {opt.label}
          </Link>
        );
      })}
    </div>
  );
}
