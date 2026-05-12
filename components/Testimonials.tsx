'use client';

import Image from 'next/image';

const testimonials = [
  {
    quote: 'I have known Rich for almost 20+ years. He brings a very unique blend of street-smart savviness with disciplined brand and business-building concepts. His focus and calmness when the going gets tough allows him to see through issues and solution better than most people I know.',
    name: 'Shakir Moin',
    role: 'President, Coca-Cola North America',
    photo: '/images/testimonials-Shakir-Moin.jpeg',
  },
  {
    quote: 'Rich Pham has been a much-trusted colleague and friend since we first worked together at Coca-Cola. His vast experience in FMCG is now significantly enhanced by his second highly successful career in creating exponential growth while heading up startup companies from scratch. This impressive track record makes him uniquely qualified for his latest role in executive coaching.',
    name: 'Seán D. Shilton',
    role: 'Former MD Gillette multiple markets / Former Region Manager Coca-Cola',
    photo: null,
  },
  {
    quote: 'Rich sees the big picture when others are stuck in the weeds. His strategic direction consistently brings clarity and momentum to complex challenges.',
    name: 'Esther Nguyen',
    role: 'Founder/CEO, POPS Worldwide',
    photo: null,
  },
  {
    quote: 'With a strong background in management and an ability to cut through the clutter, Rich is able to bring clarity, focus and practical solutions as a way to drive business momentum.',
    name: 'Winnie Khor',
    role: 'Former Senior Director, PepsiCo Inc.',
    photo: '/images/testimonials-Winnie-Khor.jpeg',
  },
];

export default function Testimonials() {
  return (
    <section style={{ background: '#F4F4F4', padding: '96px 0' }}>
      <div className="section-container">
        <h2
          className="testimonials-h2"
          style={{ fontSize: '48px', lineHeight: 1.2, color: '#ff0000', marginBottom: '56px' }}
        >
          Hear from Top Executives
        </h2>

        <div
          className="testimonials-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: '#ffffff',
                borderRadius: '6px',
                padding: '32px',
                transition: 'box-shadow 0.2s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(15, 42, 113, 0.10)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
            >
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#000000', marginBottom: '24px', fontStyle: 'italic' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {t.photo ? (
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                    <Image src={t.photo} alt={t.name} fill sizes="48px" style={{ objectFit: 'cover' }} />
                  </div>
                ) : (
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#ff0000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#F4D462', fontFamily: "'NunitoSans', sans-serif", fontWeight: 800, fontSize: '18px' }}>
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#ff0000', fontFamily: "'NunitoSans', sans-serif" }}>{t.name}</div>
                  <div style={{ fontSize: '14px', color: '#000000', lineHeight: 1.5 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
