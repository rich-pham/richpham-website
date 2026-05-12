const pillars = [
  'Strategic Expertise',
  'Industry Versatility',
  'Proven Results',
  'Collaborative Approach',
];

export default function AboutApproach() {
  return (
    <section style={{ background: '#ffffff', padding: '80px 0' }}>
      <div className="section-container">
        <p
          style={{
            fontSize: '12px',
            fontWeight: 800,
            fontFamily: "'NunitoSans', sans-serif",
            color: '#F4D462',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          My Approach
        </p>
        <h2
          style={{
            fontSize: '40px',
            lineHeight: 1.2,
            fontWeight: 800,
            color: '#0F2A71',
            marginBottom: '40px',
          }}
          className="approach-h2"
        >
          How I Work With Leaders
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {pillars.map((pillar) => (
            <div key={pillar} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10L8 14L16 6" stroke="#F4D462" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: '17px', fontWeight: 800, color: '#000000', fontFamily: "'NunitoSans', sans-serif" }}>
                {pillar}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
