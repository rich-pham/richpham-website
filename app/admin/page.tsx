export const dynamic = 'force-dynamic';

import { Fragment } from 'react';
import {
  supabase,
  INQUIRY_TYPES,
  INQUIRY_STATUSES,
  type InquiryRow,
  type InquiryType,
  type InquiryStatus,
} from '@/lib/supabase';
import StatusSelect from './_components/StatusSelect';
import FilterPills from './_components/FilterPills';

const TYPE_LABEL: Record<InquiryType, string> = {
  general: 'General',
  coaching: 'Coaching',
  speaker: 'Speaker',
  newsletter: 'Newsletter',
};

const STATUS_LABEL: Record<InquiryStatus, string> = {
  new_lead: 'New lead',
  contacted: 'Contacted',
  discovery_call: 'Discovery call',
  proposal: 'Proposal',
  won: 'Won',
  lost: 'Lost',
};

const TYPE_COLOR: Record<InquiryType, string> = {
  general: '#6B7280',
  coaching: '#0F2A71',
  speaker: '#B45309',
  newsletter: '#047857',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

function isValidType(value: string | undefined): value is InquiryType {
  return !!value && (INQUIRY_TYPES as readonly string[]).includes(value);
}

function isValidStatus(value: string | undefined): value is InquiryStatus {
  return !!value && (INQUIRY_STATUSES as readonly string[]).includes(value);
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; status?: string }>;
}) {
  const { type: typeParam, status: statusParam } = await searchParams;
  const typeFilter = isValidType(typeParam) ? typeParam : null;
  const statusFilter = isValidStatus(statusParam) ? statusParam : null;

  const { data, error } = await supabase.rpc('get_inquiries', {
    p_type: typeFilter,
    p_status: statusFilter,
    p_source_site: null,
    p_limit: 200,
    p_offset: 0,
  });

  const inquiries = (data ?? []) as InquiryRow[];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#F4F4F4',
        fontFamily: "'NunitoSans', sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ background: '#0F2A71', padding: '0 40px' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            height: '64px',
          }}
        >
          <span style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff' }}>Admin</span>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 800,
              color: '#F4D462',
              background: 'rgba(244,212,98,0.15)',
              border: '1px solid rgba(244,212,98,0.3)',
              borderRadius: '4px',
              padding: '2px 8px',
              textTransform: 'uppercase',
            }}
          >
            Inquiries
          </span>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px' }}>
        {/* Count */}
        <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span style={{ fontSize: '32px', fontWeight: 800, color: '#0F2A71' }}>
            {inquiries.length}
          </span>
          <span style={{ fontSize: '16px', color: 'rgba(0,0,0,0.5)' }}>
            {inquiries.length === 1 ? 'inquiry' : 'inquiries'}
            {(typeFilter || statusFilter) && ' matching filters'}
          </span>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
          <FilterPills
            label="Type"
            paramKey="type"
            current={typeFilter}
            baseParams={{ status: statusFilter ?? undefined }}
            options={[
              { label: 'All', value: null },
              ...INQUIRY_TYPES.map((t) => ({ label: TYPE_LABEL[t], value: t })),
            ]}
          />
          <FilterPills
            label="Status"
            paramKey="status"
            current={statusFilter}
            baseParams={{ type: typeFilter ?? undefined }}
            options={[
              { label: 'All', value: null },
              ...INQUIRY_STATUSES.map((s) => ({ label: STATUS_LABEL[s], value: s })),
            ]}
          />
        </div>

        {error && (
          <p style={{ color: '#c0392b', marginBottom: '24px' }}>
            Error loading inquiries: {error.message}
          </p>
        )}

        {inquiries.length === 0 && !error && (
          <div
            style={{
              background: '#fff',
              border: '1px solid #E0E0E0',
              borderRadius: '8px',
              padding: '48px',
              textAlign: 'center',
              color: 'rgba(0,0,0,0.4)',
            }}
          >
            No inquiries.
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {inquiries.map((i) => (
            <div
              key={i.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '300px 1fr',
                border: '1px solid #E0E0E0',
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#ffffff',
              }}
            >
              {/* Person panel */}
              <div
                style={{
                  background: '#0F2A71',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <p style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                  {i.person_name ?? '(no name)'}
                </p>
                {i.person_email && (
                  <a
                    href={`mailto:${i.person_email}`}
                    style={{ fontSize: '13px', color: '#F4D462', wordBreak: 'break-all' }}
                  >
                    {i.person_email}
                  </a>
                )}
                {i.person_company && (
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>
                    {i.person_company}
                  </p>
                )}
                {i.person_role && (
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>
                    {i.person_role}
                  </p>
                )}
                {i.person_phone && (
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>
                    {i.person_phone}
                  </p>
                )}
                <p
                  style={{
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.35)',
                    marginTop: 'auto',
                    paddingTop: '20px',
                  }}
                >
                  {formatDate(i.created_at)}
                </p>
              </div>

              {/* Inquiry panel */}
              <div style={{ padding: '24px 28px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '14px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: '#ffffff',
                      background: TYPE_COLOR[i.type],
                      padding: '3px 10px',
                      borderRadius: '999px',
                    }}
                  >
                    {TYPE_LABEL[i.type]}
                  </span>
                  <StatusSelect inquiryId={i.id} initialStatus={i.status} />
                  {i.source && (
                    <span style={{ fontSize: '12px', color: 'rgba(0,0,0,0.45)' }}>
                      via {i.source}
                    </span>
                  )}
                </div>

                {i.subject && (
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: 800,
                      color: '#0F2A71',
                      marginBottom: '8px',
                    }}
                  >
                    {i.subject}
                  </p>
                )}

                {i.message && (
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.7,
                      color: '#000000',
                      whiteSpace: 'pre-wrap',
                      marginBottom: i.metadata && Object.keys(i.metadata).length > 0 ? '16px' : 0,
                    }}
                  >
                    {i.message}
                  </p>
                )}

                {i.metadata && Object.keys(i.metadata).length > 0 && (
                  <div
                    style={{
                      background: '#F8F8FA',
                      border: '1px solid #E8E8EE',
                      borderRadius: '6px',
                      padding: '12px 16px',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '11px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        color: 'rgba(0,0,0,0.4)',
                        marginBottom: '6px',
                      }}
                    >
                      Details
                    </p>
                    <dl style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '4px 12px', fontSize: '13px', margin: 0 }}>
                      {Object.entries(i.metadata).map(([k, v]) => (
                        <Fragment key={k}>
                          <dt style={{ color: 'rgba(0,0,0,0.5)' }}>{k}</dt>
                          <dd style={{ color: '#000', margin: 0 }}>
                            {typeof v === 'string' ? v : JSON.stringify(v)}
                          </dd>
                        </Fragment>
                      ))}
                    </dl>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
