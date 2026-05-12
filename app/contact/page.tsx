import type { Metadata } from 'next';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Start the Conversation | Rich Pham',
  description:
    "If you're navigating leadership bottlenecks or scaling challenges, start a direct conversation with Rich Pham. No pitch. No pressure. Just clarity.",
};

const services = [
  {
    heading: 'Speaking',
    body: "I speak on leadership, entrepreneurship, breaking through stereotypes, and the lessons I've learned from building and advising businesses. Let's talk about your audience and how I can bring value to your event.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="6" width="16" height="26" rx="8" stroke="#F4D462" strokeWidth="2.5" />
        <path d="M10 28c0 9.941 8.059 18 18 18s18-8.059 18-18" stroke="#F4D462" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="28" y1="46" x2="28" y2="52" stroke="#F4D462" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20" y1="52" x2="36" y2="52" stroke="#F4D462" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    heading: 'Coaching',
    body: "Whether you're a founder, executive, or emerging leader, I offer coaching that's grounded in 30+ years of experience. Together, we'll clarify your goals, tackle challenges, and develop a path forward that aligns with how you want to lead and grow.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="22" r="14" stroke="#F4D462" strokeWidth="2.5" />
        <path d="M21 22a7 7 0 0 1 7-7" stroke="#F4D462" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="28" y1="36" x2="28" y2="42" stroke="#F4D462" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="21" y1="42" x2="35" y2="42" stroke="#F4D462" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="48" x2="32" y2="48" stroke="#F4D462" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    heading: 'Board Positions',
    body: "I bring a strategic mindset, governance experience, and a deep understanding of business growth to the boardroom. Let's explore how I can support your organization as a Non-Executive Director or Advisory Board Member.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="20" width="44" height="30" rx="2" stroke="#F4D462" strokeWidth="2.5" />
        <path d="M18 20V14a10 10 0 0 1 20 0v6" stroke="#F4D462" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="6" y1="32" x2="50" y2="32" stroke="#F4D462" strokeWidth="2" />
        <rect x="22" y="26" width="12" height="12" rx="1" fill="#F4D462" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero — full-bleed 1:1 split ── */}
        <section
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#001740', paddingTop: '72px' }}
          className="about-hero-grid"
        >
          {/* Left: text — right-aligned within column */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '80px 64px 80px 32px' }} className="about-hero-text">
            <div style={{ maxWidth: '520px' }}>
              <h1
                style={{ fontSize: '56px', lineHeight: 1.1, fontWeight: 800, color: '#ffffff', marginBottom: '28px' }}
                className="about-hero-h1"
              >
                Let's Work Together
              </h1>
              <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'rgba(255,255,255,0.85)', marginBottom: '20px' }}>
                Want me to speak, mentor, or help you think through your next move? Whether it&apos;s a one-on-one conversation, a company workshop, or sharing my story at your event, I&apos;m here for it.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'rgba(255,255,255,0.85)' }}>
                Drop me a message, and let&apos;s see how we can work together.
              </p>
            </div>
          </div>

          {/* Right: full-bleed image */}
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: '480px' }} className="about-hero-img">
            <Image
              src="/images/about/rich.jpg"
              alt="Rich Pham"
              fill
              sizes="50vw"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              priority
            />
          </div>
        </section>

        {/* ── Ways to Work With Me ── */}
        <section style={{ background: '#ffffff', padding: '96px 0' }}>
          <div className="section-container">
            <h3
              style={{ fontSize: '36px', lineHeight: 1.2, fontWeight: 800, color: '#0F2A71', marginBottom: '56px' }}
            >
              Ways to Work With Me
            </h3>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}
              className="blog-grid"
            >
              {services.map((s) => (
                <div key={s.heading}>
                  <div style={{ marginBottom: '20px' }}>{s.icon}</div>
                  <h4
                    style={{ fontSize: '20px', fontWeight: 800, color: '#0F2A71', fontFamily: "'NunitoSans', sans-serif", marginBottom: '14px' }}
                  >
                    {s.heading}
                  </h4>
                  <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#444444' }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact Form ── */}
        <section id="form" style={{ background: '#0F2A71', padding: '96px 0' }}>
          <div className="section-container">
            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
              className="bio-grid"
            >
              <div>
                <h3
                  style={{ fontSize: '36px', lineHeight: 1.2, fontWeight: 800, color: '#ffffff', marginBottom: '20px' }}
                >
                  Anything Else?
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'rgba(255,255,255,0.8)' }}>
                  Have something else in mind? Whether it&apos;s collaboration, advisory work, or a project you want to explore, I&apos;m always open to meaningful conversations. Reach out and let&apos;s see how we can make it happen.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
