import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      style={{
        background: '#001740',
        paddingTop: '72px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="section-container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
            padding: '96px 0',
          }}
        >
          <div className="fade-in-up">
            <h1
              style={{
                fontSize: '72px',
                lineHeight: 1.05,
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '28px',
              }}
            >
              Unlock the Bottlenecks of Your Business
            </h1>
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.5,
                color: 'rgba(255,255,255,0.80)',
                marginBottom: '40px',
                maxWidth: '520px',
              }}
            >
              After early success, growth depends less on effort and more on how leadership decisions are made. With over three decades of hands-on experience, I work with founders, CEOs, and owners navigating that shift, helping them move forward with clarity and confidence.
            </p>
            <Link href="/contact" className="btn-primary">
              Start the Conversation
            </Link>
          </div>

          <div
            style={{
              position: 'relative',
              borderRadius: '6px',
              overflow: 'hidden',
              aspectRatio: '4/5',
            }}
          >
            <Image
              src="/images/hero.jpg"
              alt="Rich Pham — Executive Advisor"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', borderRadius: '6px' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
