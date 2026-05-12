import { createClient } from '@supabase/supabase-js';

type Submission = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  created_at: string;
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

export default async function AdminPage() {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data: submissions, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false });

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
            maxWidth: '1100px',
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
            Contact Submissions
          </span>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px' }}>
        <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span style={{ fontSize: '32px', fontWeight: 800, color: '#0F2A71' }}>
            {submissions?.length ?? 0}
          </span>
          <span style={{ fontSize: '16px', color: 'rgba(0,0,0,0.5)' }}>
            {submissions?.length === 1 ? 'submission' : 'submissions'}
          </span>
        </div>

        {error && (
          <p style={{ color: '#c0392b', marginBottom: '24px' }}>
            Error loading submissions: {error.message}
          </p>
        )}

        {submissions?.length === 0 && (
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
            No submissions yet.
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {(submissions as Submission[])?.map((s) => (
            <div
              key={s.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '280px 1fr',
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
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <p style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                  {s.name}
                </p>
                <a href={`mailto:${s.email}`} style={{ fontSize: '13px', color: '#F4D462', wordBreak: 'break-all' }}>
                  {s.email}
                </a>
                {s.company && (
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>
                    {s.company}
                  </p>
                )}
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginTop: 'auto', paddingTop: '20px' }}>
                  {formatDate(s.created_at)}
                </p>
              </div>

              {/* Inquiry panel */}
              <div style={{ padding: '28px 32px' }}>
                <p
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: 'rgba(0,0,0,0.35)',
                    marginBottom: '12px',
                  }}
                >
                  Inquiry
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#000000', whiteSpace: 'pre-wrap' }}>
                  {s.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
