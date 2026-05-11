import Link from 'next/link';

export default function CTABanner() {
  return (
    <section style={{ background: '#001740', padding: '96px 0' }}>
      <div
        className="section-container"
        style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}
      >
        <p className="eyebrow" style={{ color: '#F4D462', marginBottom: '16px' }}>
          Executive Advisory
        </p>
        <h2
          style={{
            fontSize: '48px',
            lineHeight: 1.2,
            color: '#ffffff',
            marginBottom: '24px',
          }}
        >
          Let's Talk It Through
        </h2>
        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.5,
            color: 'rgba(255,255,255,0.80)',
            marginBottom: '40px',
          }}
        >
          If you're navigating a stage where leadership decisions carry more weight than effort, a short conversation can help clarify whether the work makes sense. No pitch deck. No pressure. Just a thoughtful discussion.
        </p>
        <Link href="/contact" className="btn-primary">
          Start the Conversation
        </Link>
      </div>
    </section>
  );
}
