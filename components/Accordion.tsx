'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

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

function AccordionItem({
  tab,
  isActive,
  onClick,
}: {
  tab: (typeof tabs)[0];
  isActive: boolean;
  onClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ borderBottom: '1px solid #E0E0E0' }}>
      <button
        onClick={onClick}
        style={{
          width: '100%',
          background: isActive ? '#F4F4F4' : '#ffffff',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 32px',
          textAlign: 'left',
          transition: 'background 0.25s ease',
        }}
      >
        <span
          style={{
            fontSize: '18px',
            fontFamily: "'NunitoSans', sans-serif",
            fontWeight: 800,
            color: isActive ? '#0F2A71' : '#000000',
            transition: 'color 0.25s ease',
          }}
        >
          {tab.label}
        </span>
        <span
          style={{
            color: isActive ? '#0F2A71' : '#A8B2BD',
            fontSize: '16px',
            transition: 'transform 0.3s ease, color 0.25s ease',
            transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
            display: 'inline-block',
            flexShrink: 0,
          }}
        >
          ↓
        </span>
      </button>

      {/* Animated content panel */}
      <div
        ref={contentRef}
        style={{
          overflow: 'hidden',
          maxHeight: isActive ? `${contentRef.current?.scrollHeight ?? 1000}px` : '0px',
          transition: 'max-height 0.35s ease',
          background: '#F4F4F4',
        }}
      >
        <div style={{ padding: '4px 32px 28px' }}>
          <h3
            style={{
              fontSize: '19px',
              lineHeight: 1.3,
              color: '#0F2A71',
              marginBottom: '10px',
              fontWeight: 800,
            }}
          >
            {tab.heading}
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#000000', marginBottom: '18px' }}>
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
              <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                {section.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: '#000000',
                      marginBottom: '4px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                    }}
                  >
                    <span style={{ color: '#0F2A71', fontWeight: 800, flexShrink: 0, marginTop: '1px' }}>•</span>
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
            <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none' }}>
              {tab.when.items.map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: '#000000',
                    marginBottom: '4px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                  }}
                >
                  <span style={{ color: '#0F2A71', fontWeight: 800, flexShrink: 0, marginTop: '1px' }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

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
            marginBottom: '48px',
            maxWidth: '680px',
          }}
        >
          Over the years, I've learned that businesses rarely stall because of strategy or effort. They stall because the leadership system that created early success no longer fits the scale of the company. That tension shows up differently depending on who is at the top.
        </p>

        {/* 2-column 1:1 */}
        <div
          className="accordion-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0',
            border: '1px solid #E0E0E0',
            borderRadius: '6px',
            overflow: 'hidden',
            minHeight: '520px',
          }}
        >
          {/* Col 1 — Accordion */}
          <div style={{ borderRight: '1px solid #E0E0E0' }}>
            {tabs.map((tab, i) => (
              <AccordionItem
                key={tab.id}
                tab={tab}
                isActive={active === i}
                onClick={() => setActive(i)}
              />
            ))}
          </div>

          {/* Col 2 — Image (top) + CTA (bottom) */}
          <div className="accordion-right-col" style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Row 1: image */}
            <div className="accordion-image-row" style={{ position: 'relative', flex: 1, minHeight: '300px' }}>
              <Image
                src={tabs[active].image}
                alt={tabs[active].label}
                fill
                sizes="50vw"
                style={{ objectFit: 'cover', transition: 'opacity 0.3s ease' }}
              />
            </div>

            {/* Row 2: CTA panel */}
            <div
              style={{
                background: '#0F2A71',
                padding: '36px 36px',
                borderTop: '1px solid rgba(255,255,255,0.10)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                Across all three situations, the work is the same at its core:
              </p>
              <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none' }}>
                {['Clarify decisions', 'Build leadership confidence', 'Remove the bottlenecks that limit scale'].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.7,
                      color: 'rgba(255,255,255,0.85)',
                      marginBottom: '2px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                    }}
                  >
                    <span style={{ color: '#F4D462', fontWeight: 800, flexShrink: 0 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                If you recognize your situation here, that's usually the right moment to start the conversation.
              </p>
              <div>
                <Link href="/contact" className="btn-blue">
                  Start the Conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
