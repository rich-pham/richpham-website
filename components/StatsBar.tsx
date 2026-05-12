const stats = [
  { numeral: '30+', label: 'Years of operating experience' },
  { numeral: '16+', label: 'Countries served as C-level leaders' },
];

export default function StatsBar() {
  return (
    <section style={{ background: '#0F2A71', padding: '56px 0' }}>
      <div className="section-container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '120px',
          }}
        >
          {stats.map((stat) => (
            <div key={stat.numeral} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '64px',
                  lineHeight: 1,
                  fontWeight: 800,
                  color: '#F4D462',
                  fontFamily: "'NunitoSans', sans-serif",
                  marginBottom: '8px',
                }}
              >
                {stat.numeral}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  lineHeight: 1.5,
                  color: '#ffffff',
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
