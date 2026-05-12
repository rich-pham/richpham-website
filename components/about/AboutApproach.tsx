const pillars = [
  {
    label: 'Strategic Expertise',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" stroke="#F4D462" strokeWidth="2" />
        <circle cx="16" cy="16" r="6" stroke="#F4D462" strokeWidth="2" />
        <circle cx="16" cy="16" r="2" fill="#F4D462" />
      </svg>
    ),
  },
  {
    label: 'Industry Versatility',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 16C6 10.477 10.477 6 16 6" stroke="#F4D462" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 16C26 21.523 21.523 26 16 26" stroke="#F4D462" strokeWidth="2" strokeLinecap="round" />
        <polyline points="13,6 16,3 19,6" stroke="#F4D462" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="19,26 16,29 13,26" stroke="#F4D462" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Proven Results',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="18" width="4" height="8" fill="#F4D462" />
        <rect x="14" y="12" width="4" height="14" fill="#F4D462" />
        <rect x="22" y="6" width="4" height="20" fill="#F4D462" />
      </svg>
    ),
  },
  {
    label: 'Collaborative Approach',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="12" r="4" stroke="#F4D462" strokeWidth="2" />
        <circle cx="21" cy="12" r="4" stroke="#F4D462" strokeWidth="2" />
        <path d="M4 26c0-3.866 3.134-7 7-7h10c3.866 0 7 3.134 7 7" stroke="#F4D462" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AboutApproach() {
  return (
    <section style={{ background: '#ffffff', padding: '80px 0' }}>
      <div className="section-container">
        <h2
          style={{
            fontSize: '40px',
            lineHeight: 1.2,
            fontWeight: 800,
            color: '#0F2A71',
            marginBottom: '48px',
          }}
          className="approach-h2"
        >
          How I Work With Leaders
        </h2>
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}
          className="approach-grid"
        >
          {pillars.map((p) => (
            <div key={p.label}>
              <div style={{ marginBottom: '16px' }}>{p.icon}</div>
              <p style={{ fontSize: '16px', fontWeight: 800, color: '#000000', fontFamily: "'NunitoSans', sans-serif", lineHeight: 1.3 }}>
                {p.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
