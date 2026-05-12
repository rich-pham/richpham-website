import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Start the Conversation | Rich Pham',
  description:
    "If you're navigating leadership bottlenecks or scaling challenges, start a direct conversation with Rich Pham. No pitch. No pressure. Just clarity.",
};

const services = [
  {
    heading: 'Speaking',
    body: 'I speak on leadership, entrepreneurship, breaking through stereotypes, and the lessons I’ve learned from building and advising businesses. Let’s talk about your audience and how I can bring value to your event.',
  },
  {
    heading: 'Coaching',
    body: 'Whether you’re a founder, executive, or emerging leader, I offer coaching that’s grounded in 30+ years of experience. Together, we’ll clarify your goals, tackle challenges, and develop a path forward that aligns with how you want to lead and grow.',
  },
  {
    heading: 'Board Positions',
    body: 'I bring a strategic mindset, governance experience, and a deep understanding of business growth to the boardroom. Let’s explore how I can support your organization as a Non-Executive Director or Advisory Board Member.',
  },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section style={{ background: '#001740', paddingTop: '72px' }}>
          <div
            className="section-container"
            style={{ padding: '80px 32px' }}
          >
            <h1
              style={{
                fontSize: '64px',
                lineHeight: 1.1,
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '28px',
                maxWidth: '640px',
              }}
              className="about-hero-h1"
            >
              Let's Work Together
            </h1>
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.85)',
                maxWidth: '580px',
              }}
            >
              Want me to speak, mentor, or help you think through your next move? Whether it&apos;s a one-on-one conversation, a company workshop, or sharing my story at your event, I&apos;m here for it.
            </p>
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.85)',
                maxWidth: '580px',
                marginTop: '20px',
              }}
            >
              Drop me a message, and let&apos;s see how we can work together.
            </p>
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
                <div
                  key={s.heading}
                  style={{
                    borderTop: '3px solid #F4D462',
                    paddingTop: '28px',
                  }}
                >
                  <h4
                    style={{
                      fontSize: '20px',
                      fontWeight: 800,
                      color: '#0F2A71',
                      fontFamily: "'NunitoSans', sans-serif",
                      marginBottom: '16px',
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
        <section style={{ background: '#F4F4F4', padding: '96px 0' }}>
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
                    color: '#0F2A71',
                    marginBottom: '20px',
                  }}
                >
                  Anything Else?
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#444444' }}>
                  Have something else in mind? Whether it&apos;s collaboration, advisory work, or a project you want to explore, I&apos;m always open to meaningful conversations. Reach out and let&apos;s see how we can make it happen.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <CTABanner />

      </main>
      <Footer />
    </>
  );
}
