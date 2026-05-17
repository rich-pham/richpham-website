import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CoachingForm from '@/components/CoachingForm';

export const metadata: Metadata = {
  title: 'Coaching | Rich Pham',
  description:
    'Executive and founder coaching with Rich Pham. Grounded in 30+ years of building and advising businesses. Request a discovery call.',
};

const whoFor = [
  {
    heading: 'Founders & CEOs',
    body: 'Navigating the moves only the person in your seat can make — scale, hiring, capital, ownership of the next chapter.',
  },
  {
    heading: 'Executives & senior leaders',
    body: 'Stepping into bigger scope, leading through ambiguity, or finding clarity on what you actually want next.',
  },
  {
    heading: 'Emerging leaders',
    body: 'Building the muscle to lead with confidence — your voice, your judgment, your edge.',
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Discovery call',
    body: "A 30-minute conversation. No pitch — we get clear on what you're navigating and whether we're a fit.",
  },
  {
    step: '02',
    title: 'Engagement design',
    body: "We agree on cadence, format, and outcomes. Most engagements run 3–6 months with twice-monthly sessions.",
  },
  {
    step: '03',
    title: 'The work',
    body: "Sessions that move things forward — clarity, decisions, action. Plus async support between calls when you need it.",
  },
];

export default function CoachingPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          style={{ background: '#001740', paddingTop: '72px', paddingBottom: '96px' }}
        >
          <div className="section-container" style={{ paddingTop: '96px' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#F4D462',
                marginBottom: '20px',
              }}
            >
              Coaching
            </p>
            <h1
              style={{
                fontSize: '56px',
                lineHeight: 1.1,
                fontWeight: 800,
                color: '#ffffff',
                maxWidth: '780px',
                marginBottom: '28px',
              }}
              className="about-hero-h1"
            >
              Coaching for leaders ready for what&apos;s next.
            </h1>
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.85)',
                maxWidth: '680px',
              }}
            >
              30+ years of building, leading and advising — distilled into a working relationship
              that helps you make the calls only you can make.
            </p>
          </div>
        </section>

        {/* Who it's for */}
        <section style={{ background: '#ffffff', padding: '96px 0' }}>
          <div className="section-container">
            <h2
              style={{
                fontSize: '36px',
                lineHeight: 1.2,
                fontWeight: 800,
                color: '#0F2A71',
                marginBottom: '56px',
              }}
            >
              Who I work with
            </h2>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}
              className="blog-grid"
            >
              {whoFor.map((item) => (
                <div key={item.heading}>
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 800,
                      color: '#0F2A71',
                      fontFamily: "'NunitoSans', sans-serif",
                      marginBottom: '14px',
                    }}
                  >
                    {item.heading}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#444444' }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section style={{ background: '#F4F4F4', padding: '96px 0' }}>
          <div className="section-container">
            <h2
              style={{
                fontSize: '36px',
                lineHeight: 1.2,
                fontWeight: 800,
                color: '#0F2A71',
                marginBottom: '56px',
              }}
            >
              How it works
            </h2>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}
              className="blog-grid"
            >
              {howItWorks.map((item) => (
                <div key={item.step}>
                  <p
                    style={{
                      fontSize: '13px',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      color: '#F4D462',
                      marginBottom: '12px',
                    }}
                  >
                    {item.step}
                  </p>
                  <h3
                    style={{
                      fontSize: '22px',
                      fontWeight: 800,
                      color: '#0F2A71',
                      fontFamily: "'NunitoSans', sans-serif",
                      marginBottom: '14px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#444444' }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="form" style={{ background: '#0F2A71', padding: '96px 0' }}>
          <div className="section-container">
            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
              className="bio-grid"
            >
              <div>
                <h2
                  style={{
                    fontSize: '36px',
                    lineHeight: 1.2,
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '20px',
                  }}
                >
                  Request a discovery call.
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.75,
                    color: 'rgba(255,255,255,0.8)',
                  }}
                >
                  Tell me a bit about where you are and what you&apos;re working through. If we&apos;re
                  a fit, I&apos;ll send a calendar link. If we&apos;re not, I&apos;ll point you toward
                  someone who is.
                </p>
              </div>
              <CoachingForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
