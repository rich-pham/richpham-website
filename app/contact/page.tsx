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
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="4" width="12" height="20" rx="6" stroke="#0F2A71" strokeWidth="2.5" />
        <path d="M7 20c0 7.18 5.82 13 13 13s13-5.82 13-13" stroke="#0F2A71" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20" y1="33" x2="20" y2="38" stroke="#0F2A71" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="14" y1="38" x2="26" y2="38" stroke="#0F2A71" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    heading: 'Coaching',
    body: "Whether you're a founder, executive, or emerging leader, I offer coaching that's grounded in 30+ years of experience. Together, we'll clarify your goals, tackle challenges, and develop a path forward that aligns with how you want to lead and grow.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="16" r="10" stroke="#0F2A71" strokeWidth="2.5" />
        <path d="M15 16a5 5 0 0 1 5-5" stroke="#0F2A71" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20" y1="26" x2="20" y2="30" stroke="#0F2A71" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="15" y1="30" x2="25" y2="30" stroke="#0F2A71" strokeWidth="2" strokeLinecap="round" />
        <line x1="17" y1="34" x2="23" y2="34" stroke="#0F2A71" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    heading: 'Board Positions',
    body: "I bring a strategic mindset, governance experience, and a deep understanding of business growth to the boardroom. Let's explore how I can support your organization as a Non-Executive Director or Advisory Board Member.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="14" width="32" height="22" rx="2" stroke="#0F2A71" strokeWidth="2.5" />
        <path d="M13 14V10a7 7 0 0 1 14 0v4" stroke="#0F2A71" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="4" y1="23" x2="36" y2="23" stroke="#0F2A71" strokeWidth="2" />
        <rect x="16" y="19" width="8" height="8" rx="1" fill="#0F2A71" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section
          style={{ background: '#001740', paddingTop: '72px', overflow: 'hidden' }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 32px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'center',
            }}
            className="about-hero-inner"
          >
            {/* Left: text */}
            <div style={{ padding: '80px 0' }}>
              <h1
                style={{
                  fontSize: '56px',
                  lineHeight: 1.1,
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '28px',
                }}
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

            {/* Right: Rich's image */}
            <div
              style={{ position: 'relative', alignSelf: 'end', aspectRatio: '3/4', maxHeight: '520px', marginBottom: '-1px' }}
              className="about-hero-img"
            >
              <Image
                src="/images/about/rich.jpg"
                alt="Rich Pham"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                priority
              />
            </div>
          </div>
        </section>

        {/* ── Ways to Work With Me ── */}
        <section style={{ background: '#ffffff', padding: '96px 0' }}>
          <div className="section-container">
            <h3
              style={{
                fontSize: '36px',
                lineHeight: 1.2,
                fontWeight: 800,
                color: '#0F2A71',
                marginBottom: '56px',
              }}
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
                    style={{
                      fontSize: '20px',
                      fontWeight: 800,
                      color: '#0F2A71',
                      fontFamily: "'NunitoSans', sans-serif",
                      marginBottom: '14px',
                    }}
                  >
                    {s.heading}
                  </h4>
                  <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#444444' }}>
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact Form ── */}
        <section style={{ background: '#0F2A71', padding: '96px 0' }}>
          <div className="section-container">
            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
              className="bio-grid"
            >
              <div>
                <h3
                  style={{
                    fontSize: '36px',
                    lineHeight: 1.2,
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '20px',
                  }}
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
