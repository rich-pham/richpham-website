'use client';

import Image from 'next/image';

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

      {/* Right — navy */}
      <div
        style={{
          background: '#0F2A71',
          padding: '80px 72px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
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

        <div style={{ display: 'flex', gap: '48px' }}>
          {stats.map((s) => (
            <div key={s.numeral}>
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: 800,
                  color: '#F4D462',
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
      </div>
    </section>
  );
}
