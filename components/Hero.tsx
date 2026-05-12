import Link from 'next/link';

export default function Hero() {
  return (
    <section
      style={{
        background: '#ffffff',
        paddingTop: '72px',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #E0E0E0',
      }}
    >
      <div className="section-container" style={{ width: '100%', padding: '72px 32px' }}>
        <div style={{ maxWidth: '900px' }}>
          <h1
            className="fade-in-up hero-h1"
            style={{
              fontSize: '80px',
              lineHeight: 1.0,
              fontWeight: 800,
              color: '#000000',
              marginBottom: '32px',
            }}
          >
            Unlock the{' '}
            <span style={{ color: '#ff0000' }}>Bottlenecks</span>
            {' '}of Your Business
          </h1>

          <div
            className="hero-body-row"
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '64px',
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
        </div>
      </div>
    </section>
  );
}
