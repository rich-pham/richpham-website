'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { INQUIRY_STATUSES, type InquiryStatus } from '@/lib/supabase';

const STATUS_LABEL: Record<InquiryStatus, string> = {
  new_lead: 'New lead',
  contacted: 'Contacted',
  discovery_call: 'Discovery call',
  proposal: 'Proposal',
  won: 'Won',
  lost: 'Lost',
};

export default function StatusSelect({
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <select
        value={status}
        onChange={handleChange}
        disabled={saving}
        style={{
          background: '#ffffff',
          border: '1px solid #D0D0D0',
          borderRadius: '6px',
          padding: '6px 10px',
          fontSize: '13px',
          fontFamily: "'NunitoSans', sans-serif",
          fontWeight: 700,
          color: '#0F2A71',
          cursor: saving ? 'wait' : 'pointer',
        }}
      >
        {INQUIRY_STATUSES.map((s) => (
          <option key={s} value={s}>
            {STATUS_LABEL[s]}
          </option>
        ))}
      </select>
      {error && <span style={{ fontSize: '11px', color: '#c0392b' }}>{error}</span>}
    </div>
  );
}
