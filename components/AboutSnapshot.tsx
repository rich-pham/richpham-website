import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { numeral: '30+', label: 'Years of operating experience' },
  { numeral: '16+', label: 'Countries served as C-level leaders' },
];

export default function AboutSnapshot() {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', minHeight: '600px' }}>
      {/* Left — dark with photo */}
      <div style={{ background: '#0a0a0a', position: 'relative', minHeight: '600px' }}>
        <Image
          src="/images/rich.jpg"
          alt="Rich Pham"
          fill
          sizes="40vw"
          style={{ objectFit: 'cover', opacity: 0.85 }}
        />
      </div>

      {/* Right — blue */}
      <div
        style={{
          background: '#1C5BFF',
          padding: '80px 72px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            fontSize: '13px',
            fontWeight: 800,
            fontFamily: "'NunitoSans', sans-serif",
            color: 'rgba(255,255,255,0.70)',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          About Us
        </p>

        <h2
          style={{
            fontSize: '42px',
            lineHeight: 1.15,
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '24px',
          }}
        >
          30 Years of Business Leadership Across 16+ Countries.
        </h2>

        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '48px',
          }}
        >
          I am a business leader and advisor having served as CEO, COO, Chairman, Chief of Staff, and Board-level leader across Asia, Europe, and the Middle East. Today I work with founders and CEOs to remove leadership bottlenecks and scale with confidence.
        </p>

        <div style={{ display: 'flex', gap: '48px', marginBottom: '48px' }}>
          {stats.map((s) => (
            <div key={s.numeral}>
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: 800,
                  color: '#ffffff',
                  fontFamily: "'NunitoSans', sans-serif",
                  lineHeight: 1,
                }}
              >
                {s.numeral}
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.70)', marginTop: '6px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div>
          <Link
            href="/about"
            style={{
              display: 'inline-block',
              background: '#ffffff',
              color: '#1C5BFF',
              borderRadius: '6px',
              padding: '14px 28px',
              fontFamily: "'NunitoSans', sans-serif",
              fontWeight: 800,
              fontSize: '15px',
              textDecoration: 'none',
              transition: 'background 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#000000';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = '#1C5BFF';
            }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
