import Image from 'next/image';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="cta-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr' }}>
      {/* Left — Rich's image */}
      <div className="cta-img-panel" style={{ position: 'relative', minHeight: '560px', background: '#0a0a0a' }}>
        <Image
          src="/images/CTA.jpg"
          alt="Rich Pham"
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          style={{ objectFit: 'cover', opacity: 0.90 }}
          priority
        />
      </div>

      {/* Right — text + CTA */}
      <div
        style={{
          background: '#ff0000',
          padding: '64px 48px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <h2 style={{ fontSize: '36px', lineHeight: 1.2, fontWeight: 800, color: '#ffffff', marginBottom: '20px' }}>
          Let's Talk It Through
        </h2>
        <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', marginBottom: '36px' }}>
          If you're navigating a stage where leadership decisions carry more weight than effort, a short conversation can help clarify whether the work makes sense. No pitch deck. No pressure.
        </p>
        <div>
          <Link href="/contact" className="btn-blue">
            Start the Conversation →
          </Link>
        </div>
      </div>
    </section>
  );
}
