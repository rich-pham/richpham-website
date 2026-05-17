'use client';

import { Fragment, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import {
  INQUIRY_STATUSES,
  STATUS_META,
  type InquiryRow,
  type InquiryStatus,
} from '@/lib/supabase';
import { TypeBadge, StageBadge } from './Badges';

const tdBase: React.CSSProperties = {
  padding: '14px 16px',
  fontSize: '14px',
  verticalAlign: 'top',
};

const thBase: React.CSSProperties = {
  padding: '12px 16px',
  fontSize: '11px',
  fontWeight: 800,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.7)',
  textAlign: 'left',
  whiteSpace: 'nowrap',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function truncate(text: string | null, max = 80) {
  if (!text) return '—';
  return text.length > max ? text.slice(0, max).trimEnd() + '…' : text;
}

function StatusSelect({
  inquiryId,
  initialStatus,
}: {
  inquiryId: string;
  initialStatus: InquiryStatus;
}) {
  const [status, setStatus] = useState<InquiryStatus>(initialStatus);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [, startTransition] = useTransition();

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value as InquiryStatus;
    setStatus(next);
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(`/api/inquiries/${inquiryId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: next }),
      });
      if (!res.ok) {
        setError('Failed to update');
        setStatus(initialStatus);
      } else {
        startTransition(() => router.refresh());
      }
    } catch {
      setError('Network error');
      setStatus(initialStatus);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div onClick={(e) => e.stopPropagation()} style={{ display: 'inline-flex', flexDirection: 'column', gap: '4px' }}>
      <select
        value={status}
        onChange={handleChange}
        disabled={saving}
        style={{
          background: '#ffffff',
          border: `1px solid ${STATUS_META[status].color}`,
          borderRadius: '999px',
          padding: '4px 12px',
          fontSize: '11px',
          fontFamily: "'NunitoSans', sans-serif",
          fontWeight: 800,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          color: STATUS_META[status].color,
          cursor: saving ? 'wait' : 'pointer',
        }}
      >
        {INQUIRY_STATUSES.map((s) => (
          <option key={s} value={s} style={{ textTransform: 'none', letterSpacing: 0 }}>
            {STATUS_META[s].label}
          </option>
        ))}
      </select>
      {error && <span style={{ fontSize: '11px', color: '#c0392b' }}>{error}</span>}
    </div>
  );
}

export default function InquiryTable({ inquiries }: { inquiries: InquiryRow[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (inquiries.length === 0) {
    return (
      <div
        style={{
          background: '#fff',
          border: '1px solid #E0E0E0',
          borderRadius: '8px',
          padding: '64px',
          textAlign: 'center',
          color: 'rgba(0,0,0,0.4)',
          fontSize: '14px',
        }}
      >
        No inquiries yet
      </div>
    );
  }

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #E0E0E0',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'NunitoSans', sans-serif" }}>
        <thead>
          <tr style={{ background: '#001740' }}>
            <th style={thBase}>Date</th>
            <th style={thBase}>Type</th>
            <th style={thBase}>Name</th>
            <th style={thBase}>Email</th>
            <th style={{ ...thBase, width: '100%' }}>Subject / Message</th>
            <th style={thBase}>Status</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((i) => {
            const isExpanded = expandedId === i.id;
            const hasDetails =
              !!i.message ||
              (i.metadata && Object.keys(i.metadata).length > 0) ||
              !!i.person_phone ||
              !!i.person_role;

            return (
              <Fragment key={i.id}>
                <tr
                  onClick={() => hasDetails && setExpandedId(isExpanded ? null : i.id)}
                  style={{
                    borderTop: '1px solid #E8E8EE',
                    cursor: hasDetails ? 'pointer' : 'default',
                    background: isExpanded ? '#F8F8FA' : '#ffffff',
                  }}
                >
                  <td style={{ ...tdBase, color: 'rgba(0,0,0,0.55)', whiteSpace: 'nowrap' }}>
                    {formatDate(i.created_at)}
                  </td>
                  <td style={tdBase}>
                    <TypeBadge type={i.type} />
                  </td>
                  <td style={{ ...tdBase, fontWeight: 700, color: '#000' }}>
                    {i.person_name || '—'}
                  </td>
                  <td style={{ ...tdBase, color: 'rgba(0,0,0,0.7)' }}>
                    {i.person_email ? (
                      <a
                        href={`mailto:${i.person_email}`}
                        onClick={(e) => e.stopPropagation()}
                        style={{ color: '#0F2A71', textDecoration: 'none' }}
                      >
                        {i.person_email}
                      </a>
                    ) : (
                      '—'
                    )}
                  </td>
                  <td style={{ ...tdBase, color: 'rgba(0,0,0,0.75)', maxWidth: '420px' }}>
                    {i.subject ? (
                      <span style={{ fontWeight: 700, color: '#000' }}>{i.subject}</span>
                    ) : (
                      truncate(i.message, 80)
                    )}
                  </td>
                  <td style={tdBase}>
                    <StatusSelect inquiryId={i.id} initialStatus={i.status} />
                  </td>
                </tr>

                {isExpanded && hasDetails && (
                  <tr style={{ background: '#F8F8FA' }}>
                    <td colSpan={6} style={{ padding: '0 16px 20px' }}>
                      <div
                        style={{
                          background: '#ffffff',
                          border: '1px solid #E8E8EE',
                          borderRadius: '6px',
                          padding: '18px 22px',
                          display: 'grid',
                          gridTemplateColumns: '220px 1fr',
                          gap: '20px 28px',
                        }}
                      >
                        <div>
                          <p
                            style={{
                              fontSize: '11px',
                              fontWeight: 800,
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em',
                              color: 'rgba(0,0,0,0.45)',
                              marginBottom: '10px',
                            }}
                          >
                            Contact
                          </p>
                          {i.person_company && (
                            <p style={{ fontSize: '13px', marginBottom: '4px' }}>
                              <span style={{ color: 'rgba(0,0,0,0.45)' }}>Company: </span>
                              <span style={{ color: '#000' }}>{i.person_company}</span>
                            </p>
                          )}
                          {i.person_role && (
                            <p style={{ fontSize: '13px', marginBottom: '4px' }}>
                              <span style={{ color: 'rgba(0,0,0,0.45)' }}>Role: </span>
                              <span style={{ color: '#000' }}>{i.person_role}</span>
                            </p>
                          )}
                          {i.person_phone && (
                            <p style={{ fontSize: '13px', marginBottom: '4px' }}>
                              <span style={{ color: 'rgba(0,0,0,0.45)' }}>Phone: </span>
                              <span style={{ color: '#000' }}>{i.person_phone}</span>
                            </p>
                          )}
                          {i.source && (
                            <p style={{ fontSize: '13px', marginBottom: '4px' }}>
                              <span style={{ color: 'rgba(0,0,0,0.45)' }}>Source: </span>
                              <span style={{ color: '#000' }}>{i.source}</span>
                            </p>
                          )}
                          <p style={{ fontSize: '13px', marginBottom: '4px' }}>
                            <StageBadge status={i.status} />
                          </p>
                        </div>

                        <div>
                          {i.message && (
                            <>
                              <p
                                style={{
                                  fontSize: '11px',
                                  fontWeight: 800,
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.05em',
                                  color: 'rgba(0,0,0,0.45)',
                                  marginBottom: '10px',
                                }}
                              >
                                Message
                              </p>
                              <p
                                style={{
                                  fontSize: '14px',
                                  lineHeight: 1.7,
                                  color: '#000',
                                  whiteSpace: 'pre-wrap',
                                  marginBottom: i.metadata && Object.keys(i.metadata).length > 0 ? '20px' : 0,
                                }}
                              >
                                {i.message}
                              </p>
                            </>
                          )}

                          {i.metadata && Object.keys(i.metadata).length > 0 && (
                            <>
                              <p
                                style={{
                                  fontSize: '11px',
                                  fontWeight: 800,
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.05em',
                                  color: 'rgba(0,0,0,0.45)',
                                  marginBottom: '10px',
                                }}
                              >
                                Details
                              </p>
                              <dl
                                style={{
                                  display: 'grid',
                                  gridTemplateColumns: '160px 1fr',
                                  gap: '4px 16px',
                                  fontSize: '13px',
                                  margin: 0,
                                }}
                              >
                                {Object.entries(i.metadata).map(([k, v]) => (
                                  <Fragment key={k}>
                                    <dt style={{ color: 'rgba(0,0,0,0.5)' }}>{k}</dt>
                                    <dd style={{ color: '#000', margin: 0 }}>
                                      {typeof v === 'string' ? v : JSON.stringify(v)}
                                    </dd>
                                  </Fragment>
                                ))}
                              </dl>
                            </>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
