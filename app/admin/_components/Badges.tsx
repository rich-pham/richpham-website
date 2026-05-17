import { STATUS_META, TYPE_META, type InquiryStatus, type InquiryType } from '@/lib/supabase';

const basePillStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  fontFamily: "'NunitoSans', sans-serif",
  fontSize: '11px',
  fontWeight: 800,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  padding: '3px 10px',
  borderRadius: '999px',
  border: '1px solid',
  lineHeight: 1.2,
  whiteSpace: 'nowrap',
};

export function TypeBadge({ type }: { type: InquiryType }) {
  return (
    <span
      style={{
        ...basePillStyle,
        background: 'transparent',
        color: '#0F2A71',
        borderColor: '#D7DBE6',
      }}
    >
      {TYPE_META[type].label}
    </span>
  );
}

export function StageBadge({ status }: { status: InquiryStatus }) {
  const meta = STATUS_META[status];
  return (
    <span
      style={{
        ...basePillStyle,
        background: 'transparent',
        color: meta.color,
        borderColor: meta.color,
      }}
    >
      {meta.label}
    </span>
  );
}
