import Image from 'next/image';
import Link from 'next/link';

export default function AboutSnapshot() {
  return (
    <section style={{ background: '#ffffff', padding: '96px 0' }}>
      <div className="section-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
        >
          <div
            style={{
              position: 'relative',
              borderRadius: '6px',
              overflow: 'hidden',
              aspectRatio: '3/4',
            }}
          >
            <Image
              src="/images/rich.jpg"
              alt="Rich Pham"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', borderRadius: '6px' }}
            />
          </div>

          <div>
            <h2
              style={{
                fontSize: '48px',
                lineHeight: 1.2,
                color: '#0F2A71',
                marginBottom: '24px',
              }}
            >
              About Rich Pham
            </h2>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
                marginBottom: '36px',
              }}
            >
              I am a business leader and advisor with 30+ years of operating experience, having served as CEO, COO, Chairman, Chief of Staff, and Board-level leader across 16+ countries in Asia, Europe, and the Middle East.
            </p>

            <div style={{ marginBottom: '28px' }}>
              <h3
                style={{
                  fontSize: '20px',
                  lineHeight: 1.3,
                  color: '#0F2A71',
                  marginBottom: '10px',
                }}
              >
                Business Scaling
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#000000' }}>
                I have built and scaled businesses from zero to market leadership, including growing Pocari Sweat Vietnam to #1 market share in 3 years, scaling to 250 employees, and delivering multiple 2–3× growth phases.
              </p>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <h3
                style={{
                  fontSize: '20px',
                  lineHeight: 1.3,
                  color: '#0F2A71',
                  marginBottom: '10px',
                }}
              >
                Turnaround Leadership
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#000000' }}>
                I have also led turnarounds and category-leading growth at Danone and Coca-Cola, and advised technology organizations operating across global markets.
              </p>
            </div>

            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#000000',
                marginBottom: '36px',
              }}
            >
              Today, I work with founders, CEOs, and owners at the post-traction stage — helping them remove leadership bottlenecks, sharpen focus, and scale with confidence.
            </p>

            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
