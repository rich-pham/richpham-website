'use client';

import Image from 'next/image';
import Link from 'next/link';

const cards = [
  {
    id: 'founders',
    label: 'For Founders',
    image: '/images/founders.jpg',
    heading: 'For Founders Who Still Carry Every Critical Decision',
    body: "Founders don't hold on because they want control — they hold on because no one has shown them a safe way to let go. I help clarify which decisions stay at the top and move the rest down with clear ownership.",
    cta: 'Start the Conversation →',
  },
  {
    id: 'ceos',
    label: 'For CEOs and Boards',
    image: '/images/ceo.jpg',
    heading: "For CEOs and Boards Leading Systems They Didn't Design",
    body: "Authority without alignment creates silent resistance. I help align authority, responsibility, and expectations at the top — making decision ownership explicit so leaders can act with confidence.",
    cta: 'Start the Conversation →',
  },
  {
    id: 'companies',
    label: 'For Companies',
    image: '/images/company.jpg',
    heading: 'For Companies That Have Hit a Scaling Wall',
    body: "When growth stalls, more effort is rarely the answer. I help leadership teams reset with fewer priorities clearly owned, and decision-making pushed to the right level so momentum returns.",
    cta: 'Start the Conversation →',
  },
];

export default function Accordion() {
  return (
    <section style={{ background: '#0a0a0a', padding: '0' }}>
      {/* Section header */}
      <div className="section-container" style={{ padding: '80px 32px 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px' }}>
          <h2
            style={{
              fontSize: '48px',
              lineHeight: 1.15,
              fontWeight: 800,
              color: '#ffffff',
              maxWidth: '560px',
              margin: 0,
            }}
          >
            What I've Learned (and Why Leaders Invite Me In)
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.60)',
              maxWidth: '400px',
              margin: 0,
              flexShrink: 0,
            }}
          >
            Businesses rarely stall because of strategy or effort. They stall because the leadership system that created early success no longer fits the scale of the company.
          </p>
        </div>
      </div>

      {/* Cards row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              position: 'relative',
              minHeight: '520px',
              overflow: 'hidden',
              borderRight: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '36px 32px',
              background: '#111111',
              transition: 'background 0.3s ease',
            }}
          >
            {/* Background image with dark overlay */}
            <div style={{ position: 'absolute', inset: 0 }}>
              <Image
                src={card.image}
                alt={card.label}
                fill
                sizes="25vw"
                style={{ objectFit: 'cover', opacity: 0.25 }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.2) 100%)',
                }}
              />
            </div>

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  fontFamily: "'NunitoSans', sans-serif",
                  color: '#1C5BFF',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}
              >
                {card.label}
              </p>
              <h3
                style={{
                  fontSize: '20px',
                  lineHeight: 1.3,
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '14px',
                }}
              >
                {card.heading}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.65)',
                  marginBottom: '24px',
                }}
              >
                {card.body}
              </p>
              <Link
                href="/contact"
                style={{
                  fontSize: '14px',
                  fontWeight: 800,
                  fontFamily: "'NunitoSans', sans-serif",
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.3)',
                  paddingBottom: '2px',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#1C5BFF';
                  e.currentTarget.style.borderColor = '#1C5BFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                }}
              >
                {card.cta}
              </Link>
            </div>
          </div>
        ))}

        {/* 4th card — closing statement */}
        <div
          style={{
            background: '#1C5BFF',
            minHeight: '520px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '36px 32px',
          }}
        >
          <p
            style={{
              fontSize: '22px',
              fontWeight: 800,
              fontFamily: "'NunitoSans', sans-serif",
              color: '#ffffff',
              lineHeight: 1.3,
              marginBottom: '24px',
            }}
          >
            If you recognize your situation here, that's usually the right moment to start the conversation.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              background: '#ffffff',
              color: '#1C5BFF',
              borderRadius: '6px',
              padding: '14px 24px',
              fontFamily: "'NunitoSans', sans-serif",
              fontWeight: 800,
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'background 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#000000';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = '#1C5BFF';
            }}
          >
            Get Started →
          </Link>
        </div>
      </div>
    </section>
  );
}
