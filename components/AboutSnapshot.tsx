'use client';

import Image from 'next/image';

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
          padding: '72px 72px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '0',
        }}
      >
        <h2
          style={{
            fontSize: '40px',
            lineHeight: 1.15,
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '20px',
          }}
        >
          About Rich Pham
        </h2>

        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '28px',
          }}
        >
          I am a business leader and advisor with 30+ years of operating experience, having served as CEO, COO, Chairman, Chief of Staff, and Board-level leader across 16+ countries in Asia, Europe, and the Middle East.
        </p>

        <div style={{ marginBottom: '20px' }}>
          <h3
            style={{
              fontSize: '18px',
              fontWeight: 800,
              color: '#F4D462',
              marginBottom: '8px',
              fontFamily: "'NunitoSans', sans-serif",
            }}
          >
            Business Scaling
          </h3>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
            I have built and scaled businesses from zero to market leadership, including growing Pocari Sweat Vietnam to #1 market share in 3 years, scaling to 250 employees, and delivering multiple 2–3× growth phases.
          </p>
        </div>

        <div style={{ marginBottom: '28px' }}>
          <h3
            style={{
              fontSize: '18px',
              fontWeight: 800,
              color: '#F4D462',
              marginBottom: '8px',
              fontFamily: "'NunitoSans', sans-serif",
            }}
          >
            Turnaround Leadership
          </h3>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
            I have also led turnarounds and category-leading growth at Danone and Coca-Cola, and advised technology organizations operating across global markets.
          </p>
        </div>

        <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
          Today, I work with founders, CEOs, and owners at the post-traction stage — helping them remove leadership bottlenecks, sharpen focus, and scale with confidence.
        </p>
      </div>
    </section>
  );
}
