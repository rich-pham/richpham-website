const pillars = [
  {
    label: 'Strategic Expertise',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" stroke="#F4D462" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="9" stroke="#F4D462" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="3" fill="#F4D462" />
      </svg>
    ),
  },
  {
    label: 'Industry Versatility',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 24C9 15.716 15.716 9 24 9" stroke="#F4D462" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M39 24C39 32.284 32.284 39 24 39" stroke="#F4D462" strokeWidth="2.5" strokeLinecap="round" />
        <polyline points="20,9 24,4.5 28,9" stroke="#F4D462" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="28,39 24,43.5 20,39" stroke="#F4D462" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Proven Results',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="28" width="8" height="14" fill="#F4D462" />
        <rect x="20" y="18" width="8" height="24" fill="#F4D462" />
        <rect x="32" y="8" width="8" height="34" fill="#F4D462" />
      </svg>
    ),
  },
  {
    label: 'Collaborative Approach',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17" cy="18" r="6" stroke="#F4D462" strokeWidth="2.5" />
        <circle cx="31" cy="18" r="6" stroke="#F4D462" strokeWidth="2.5" />
        <path d="M6 40c0-6.075 4.925-11 11-11h14c6.075 0 11 4.925 11 11" stroke="#F4D462" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AboutApproach() {
  return (
    <section style={{ background: '#ffffff', padding: '80px 0' }}>
      <div className="section-container">
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}
          className="approach-grid"
        >
          {/* Left: heading */}
          <h2
            style={{ fontSize: '40px', lineHeight: 1.2, fontWeight: 800, color: '#0F2A71' }}
            className="approach-h2"
          >
            How I Work With Leaders
          </h2>

          {/* Right: 2×2 icon grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            {pillars.map((p) => (
              <div key={p.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '14px' }}>
                {p.icon}
                <p style={{ fontSize: '16px', fontWeight: 800, color: '#000000', fontFamily: "'NunitoSans', sans-serif", lineHeight: 1.3 }}>
                  {p.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
