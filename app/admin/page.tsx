import { createClient } from '@supabase/supabase-js';
import { isAuthenticated, login, logout } from './actions';

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

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const authed = await isAuthenticated();

  if (!authed) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F4F4F4',
          fontFamily: "'NunitoSans', sans-serif",
        }}
      >
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #E0E0E0',
            borderRadius: '8px',
            padding: '48px',
            width: '100%',
            maxWidth: '400px',
          }}
        >
          <h1
            style={{
              fontSize: '24px',
              fontWeight: 800,
              color: '#0F2A71',
              marginBottom: '8px',
            }}
          >
            Admin
          </h1>
          <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.5)', marginBottom: '32px' }}>
            Enter your password to continue.
          </p>
          {params.error && (
            <p
              style={{
                fontSize: '14px',
                color: '#c0392b',
                background: '#fdf0f0',
                border: '1px solid #f5c6c6',
                borderRadius: '6px',
                padding: '10px 14px',
                marginBottom: '20px',
              }}
            >
              Incorrect password.
            </p>
          )}
          <form action={login}>
            <label
              htmlFor="password"
              style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#000',
                marginBottom: '8px',
              }}
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              style={{
                width: '100%',
                padding: '12px 14px',
                fontSize: '15px',
                fontFamily: "'NunitoSans', sans-serif",
                border: '1px solid #A8B2BD',
                borderRadius: '6px',
                outline: 'none',
                boxSizing: 'border-box',
                marginBottom: '20px',
              }}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '13px',
                background: '#F4D462',
                border: 'none',
                borderRadius: '6px',
                fontSize: '15px',
                fontWeight: 800,
                fontFamily: "'NunitoSans', sans-serif",
                cursor: 'pointer',
                color: '#000',
              }}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

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
            justifyContent: 'space-between',
            height: '64px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
          <form action={logout}>
            <button
              type="submit"
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '6px',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '13px',
                fontFamily: "'NunitoSans', sans-serif",
                padding: '6px 14px',
                cursor: 'pointer',
              }}
            >
              Sign out
            </button>
          </form>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px' }}>
        {/* Stats row */}
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

        {/* Submission cards */}
        {submissions && submissions.length === 0 && (
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
                <p
                  style={{
                    fontSize: '16px',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '4px',
                  }}
                >
                  {s.name}
                </p>
                <a
                  href={`mailto:${s.email}`}
                  style={{
                    fontSize: '13px',
                    color: '#F4D462',
                    wordBreak: 'break-all',
                  }}
                >
                  {s.email}
                </a>
                {s.company && (
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>
                    {s.company}
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
                    letterSpacing: '0.05em',
                  }}
                >
                  Inquiry
                </p>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: '#000000',
                    whiteSpace: 'pre-wrap',
                  }}
                >
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
