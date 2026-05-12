import Link from 'next/link';

export default function Hero() {
  return (
    <section
      style={{
        background: '#ffffff',
        paddingTop: '72px',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #E0E0E0',
      }}
    >
      <div className="section-container" style={{ width: '100%', padding: '96px 32px' }}>
        <div style={{ maxWidth: '900px' }}>
          <h1
            className="fade-in-up"
            style={{
              fontSize: '80px',
              lineHeight: 1.0,
              fontWeight: 800,
              color: '#000000',
              marginBottom: '32px',
            }}
          >
            Unlock the{' '}
            <span style={{ color: '#1C5BFF' }}>Bottlenecks</span>
            {' '}of Your Business
          </h1>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '64px',
              marginTop: '8px',
            }}
          >
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.6,
                color: '#444444',
                maxWidth: '480px',
                margin: 0,
              }}
            >
              After early success, growth depends less on effort and more on how leadership decisions are made. With over three decades of hands-on experience, I work with founders, CEOs, and owners navigating that shift.
            </p>

            <div style={{ flexShrink: 0 }}>
              <Link href="/contact" className="btn-blue" style={{ whiteSpace: 'nowrap' }}>
                Start the Conversation →
              </Link>
            </div>
          </div>

          <div
            style={{
              borderTop: '1px solid #E0E0E0',
              marginTop: '64px',
              paddingTop: '40px',
              display: 'flex',
              gap: '64px',
            }}
          >
            <div>
              <div style={{ fontSize: '40px', fontWeight: 800, color: '#000000', fontFamily: "'NunitoSans', sans-serif" }}>30+</div>
              <div style={{ fontSize: '14px', color: '#666666', marginTop: '4px' }}>Years of operating experience</div>
            </div>
            <div>
              <div style={{ fontSize: '40px', fontWeight: 800, color: '#000000', fontFamily: "'NunitoSans', sans-serif" }}>16+</div>
              <div style={{ fontSize: '14px', color: '#666666', marginTop: '4px' }}>Countries served as C-level leaders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
