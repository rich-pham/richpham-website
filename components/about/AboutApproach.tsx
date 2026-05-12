'use client';

import { useState } from 'react';

const pillars = [
  {
    label: 'Strategic Expertise',
    body: 'Over three decades of hands-on operating experience — as CEO, COO, Chairman, and Board advisor — means my strategic input is grounded in what actually works when decisions carry real consequence.',
  },
  {
    label: 'Industry Versatility',
    body: "From FMCG giants like Coca-Cola and Danone to high-growth tech organizations, I've led across industries and adapted strategy to fit radically different market conditions and cultures.",
  },
  {
    label: 'Proven Results',
    body: 'Market leadership, successful exits, and measurable 2–3× growth phases — the proof is in the outcomes. I work toward results, not just recommendations.',
  },
  {
    label: 'Collaborative Approach',
    body: 'I work alongside leadership teams, not just from a distance. My role is to bring clarity, ask the right questions, and help you build the confidence to execute.',
  },
];

export default function AboutApproach() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: '#0F2A71', padding: '96px 0' }}>
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
            fontSize: '48px',
            lineHeight: 1.2,
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '56px',
            maxWidth: '600px',
          }}
          className="approach-h2"
        >
          How I Work With Leaders
        </h2>

        {/* Pillar tabs */}
        <div
          style={{
            display: 'flex',
            gap: '0',
            borderBottom: '1px solid rgba(255,255,255,0.15)',
            marginBottom: '48px',
            overflowX: 'auto',
          }}
        >
          {pillars.map((p, i) => (
            <button
              key={p.label}
              onClick={() => setActive(i)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: active === i ? '2px solid #F4D462' : '2px solid transparent',
                padding: '14px 28px',
                cursor: 'pointer',
                fontFamily: "'NunitoSans', sans-serif",
                fontWeight: 800,
                fontSize: '15px',
                color: active === i ? '#F4D462' : 'rgba(255,255,255,0.55)',
                transition: 'color 0.2s ease, border-color 0.2s ease',
                whiteSpace: 'nowrap',
                marginBottom: '-1px',
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div style={{ maxWidth: '680px' }}>
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            {pillars[active].body}
          </p>
        </div>
      </div>
    </section>
  );
}
