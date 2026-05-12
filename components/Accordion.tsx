'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const tabs = [
  {
    id: 'founders',
    label: 'For Founders',
    image: '/images/founders.jpg',
    heading: 'For Founders Who Still Carry Every Critical Decision',
    intro: "I've learned that founders don't hold on because they want control; they hold on because no one has shown them a safe way to let go.",
    sections: [
      {
        title: 'What I consistently see:',
        items: [
          'Decisions quietly accumulating at the top',
          'Capable leaders waiting for direction instead of acting',
          'Growth slowing because ownership was never deliberately designed',
        ],
      },
      {
        title: 'What actually changes things:',
        items: [
          'Clarifying which decisions must stay with the founder',
          'Moving the rest down with clear ownership and accountability',
          'Building leadership confidence so the business can operate without constant escalation',
        ],
      },
    ],
    when: {
      title: 'This is usually when founders invite me in:',
      items: [
        'They know they need to step back',
        "They don't want to lose control of what they built",
      ],
    },
  },
  {
    id: 'ceos',
    label: 'For CEOs and Boards',
    image: '/images/ceo.jpg',
    heading: "For CEOs, Owners, and Boards Leading Systems They Didn't Design",
    intro: "I've learned that authority without alignment creates silent resistance.",
    sections: [
      {
        title: 'What typically gets in the way:',
        items: [
          'Inherited structures with unclear accountability',
          'Legacy roles that no longer match the business',
          'Decision ownership fragmented across executives, boards, or regions',
        ],
      },
      {
        title: 'What restores momentum:',
        items: [
          'Aligning authority, responsibility, and expectations at the top',
          'Making decision ownership explicit so leaders can act with confidence',
          'Reducing politics by removing ambiguity, not forcing compliance',
        ],
      },
    ],
    when: {
      title: 'This is when professional CEOs and boards invite me in:',
      items: ['Results are expected', 'The system is working against them'],
    },
  },
  {
    id: 'companies',
    label: 'For Companies',
    image: '/images/company.jpg',
    heading: 'For Companies That Have Hit a Scaling Wall',
    intro: "I've learned that when growth stalls, more effort is rarely the answer.",
    sections: [
      {
        title: 'What the wall usually looks like:',
        items: [
          'Too many priorities and no clear focus',
          "Leadership stretched thin across decisions that shouldn't sit at the top",
          'Execution slowing despite capable people',
        ],
      },
      {
        title: 'What actually helps:',
        items: [
          'Fewer priorities, clearly owned',
          "A leadership model that matches the company's current size and complexity",
          'Decision-making pushed to the right level so momentum returns',
        ],
      },
    ],
    when: {
      title: 'This is when leadership teams bring me in:',
      items: ['Not to push harder', 'But to reset how the organization leads and decides'],
    },
  },
];

export default function Accordion() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: '#ffffff', padding: '96px 0' }}>
      <div className="section-container">
        {/* Section header */}
        <h2
          style={{
            fontSize: '48px',
            lineHeight: 1.2,
            color: '#0F2A71',
            marginBottom: '16px',
            maxWidth: '700px',
          }}
        >
          What I've Learned (and Why Leaders Invite Me In)
        </h2>
        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.5,
            color: '#000000',
            marginBottom: '56px',
            maxWidth: '680px',
          }}
        >
          Over the years, I've learned that businesses rarely stall because of strategy or effort. They stall because the leadership system that created early success no longer fits the scale of the company. That tension shows up differently depending on who is at the top.
        </p>

        {/* 3-column 2:1:1 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: '0',
            minHeight: '520px',
            border: '1px solid #E0E0E0',
            borderRadius: '6px',
            overflow: 'hidden',
          }}
        >
          {/* Col 1 — Accordion (2fr) */}
          <div style={{ borderRight: '1px solid #E0E0E0', padding: '0' }}>
            {tabs.map((tab, i) => (
              <div
                key={tab.id}
                style={{ borderBottom: i < tabs.length - 1 ? '1px solid #E0E0E0' : 'none' }}
              >
                <button
                  onClick={() => setActive(i)}
                  style={{
                    width: '100%',
                    background: active === i ? '#F4F4F4' : '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '24px 32px',
                    textAlign: 'left',
                    transition: 'background 0.2s ease',
                  }}
                >
                  <span
                    style={{
                      fontSize: '18px',
                      fontFamily: "'NunitoSans', sans-serif",
                      fontWeight: 800,
                      color: active === i ? '#0F2A71' : '#000000',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {tab.label}
                  </span>
                  <span
                    style={{
                      color: active === i ? '#0F2A71' : '#A8B2BD',
                      fontSize: '16px',
                      transition: 'transform 0.2s ease, color 0.2s ease',
                      transform: active === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      display: 'inline-block',
                      flexShrink: 0,
                    }}
                  >
                    ↓
                  </span>
                </button>

                {active === i && (
                  <div style={{ padding: '0 32px 28px', background: '#F4F4F4' }}>
                    <h3
                      style={{
                        fontSize: '20px',
                        lineHeight: 1.3,
                        color: '#0F2A71',
                        marginBottom: '12px',
                        fontWeight: 800,
                      }}
                    >
                      {tab.heading}
                    </h3>
                    <p
                      style={{
                        fontSize: '15px',
                        lineHeight: 1.6,
                        color: '#000000',
                        marginBottom: '20px',
                      }}
                    >
                      {tab.intro}
                    </p>
                    {tab.sections.map((section) => (
                      <div key={section.title} style={{ marginBottom: '14px' }}>
                        <p
                          style={{
                            fontSize: '13px',
                            fontWeight: 800,
                            color: '#0F2A71',
                            marginBottom: '6px',
                            fontFamily: "'NunitoSans', sans-serif",
                          }}
                        >
                          {section.title}
                        </p>
                        <ul style={{ margin: 0, paddingLeft: '18px' }}>
                          {section.items.map((item) => (
                            <li
                              key={item}
                              style={{
                                fontSize: '14px',
                                lineHeight: 1.6,
                                color: '#000000',
                                marginBottom: '3px',
                              }}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div>
                      <p
                        style={{
                          fontSize: '13px',
                          fontWeight: 800,
                          color: '#0F2A71',
                          marginBottom: '6px',
                          fontFamily: "'NunitoSans', sans-serif",
                        }}
                      >
                        {tab.when.title}
                      </p>
                      <ul style={{ margin: 0, paddingLeft: '18px' }}>
                        {tab.when.items.map((item) => (
                          <li
                            key={item}
                            style={{
                              fontSize: '14px',
                              lineHeight: 1.6,
                              color: '#000000',
                              marginBottom: '3px',
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Col 2 — Image (1fr) */}
          <div style={{ position: 'relative', borderRight: '1px solid #E0E0E0' }}>
            <Image
              src={tabs[active].image}
              alt={tabs[active].label}
              fill
              sizes="25vw"
              style={{ objectFit: 'cover', transition: 'opacity 0.3s ease' }}
            />
          </div>

          {/* Col 3 — Static closing panel (1fr) */}
          <div
            style={{
              background: '#0F2A71',
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.85)',
                  marginBottom: '20px',
                }}
              >
                Across all three situations, the work is the same at its core:
              </p>
              <ul style={{ margin: '0 0 20px', paddingLeft: '18px' }}>
                {['Clarify decisions', 'Build leadership confidence', 'Remove the bottlenecks that limit scale'].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.7,
                      color: 'rgba(255,255,255,0.85)',
                      marginBottom: '4px',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.85)',
                  marginBottom: '32px',
                }}
              >
                If you recognize your situation here, that's usually the right moment to start the conversation.
              </p>
            </div>
            <Link href="/contact" className="btn-blue">
              Start the Conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
