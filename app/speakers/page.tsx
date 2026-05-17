import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SpeakerForm from '@/components/SpeakerForm';

export const metadata: Metadata = {
  title: 'Speaking | Rich Pham',
  description:
    'Invite Rich Pham to your stage. Keynotes, panels, and fireside chats on leadership, entrepreneurship, and breaking through stereotypes.',
};

const topics = [
  {
    heading: 'Leadership through change',
    body: "What it actually takes to lead when the ground keeps moving — judgment, calm, and the discipline to keep deciding.",
  },
  {
    heading: 'Building businesses that last',
    body: "Lessons from 30+ years of building, scaling, and advising — the moves that compound and the ones that quietly cost you.",
  },
  {
    heading: 'Breaking through the noise',
    body: "Identity, voice, and the work of becoming the leader your team needs without losing who you are.",
  },
];

const formats = [
  { label: 'Keynote', desc: '30–60 min stage talks with a single clear takeaway.' },
  { label: 'Fireside / interview', desc: 'A guided conversation, on-stage or on-camera.' },
  { label: 'Panel', desc: 'Bring a perspective your other speakers don’t have.' },
  { label: 'Workshop', desc: 'Half- or full-day sessions for leadership teams.' },
];

export default function SpeakersPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section style={{ background: '#001740', paddingTop: '72px', paddingBottom: '96px' }}>
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
              Speaking
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
              Bring Rich to your stage.
            </h1>
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.85)',
                maxWidth: '680px',
              }}
            >
              Keynotes, fireside chats, panels, and workshops on leadership, entrepreneurship,
              and the lessons that actually compound.
            </p>
          </div>
        </section>

        {/* Topics */}
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
              Topics
            </h2>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}
              className="blog-grid"
            >
              {topics.map((t) => (
                <div key={t.heading}>
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 800,
                      color: '#0F2A71',
                      fontFamily: "'NunitoSans', sans-serif",
                      marginBottom: '14px',
                    }}
                  >
                    {t.heading}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#444444' }}>
                    {t.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formats */}
        <section style={{ background: '#F4F4F4', padding: '96px 0' }}>
          <div className="section-container">
            <h2
              style={{
                fontSize: '36px',
                lineHeight: 1.2,
                fontWeight: 800,
                color: '#0F2A71',
                marginBottom: '40px',
              }}
            >
              Formats
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="blog-grid">
              {formats.map((f) => (
                <div
                  key={f.label}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #E0E0E0',
                    borderRadius: '8px',
                    padding: '24px 28px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '18px',
                      fontWeight: 800,
                      color: '#0F2A71',
                      fontFamily: "'NunitoSans', sans-serif",
                      marginBottom: '6px',
                    }}
                  >
                    {f.label}
                  </p>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#555555' }}>{f.desc}</p>
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
                  Invite Rich to speak.
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.75,
                    color: 'rgba(255,255,255,0.8)',
                  }}
                >
                  Send the details — event, audience, date, what you&apos;re hoping the room walks
                  away with. I&apos;ll get back to you within a few business days.
                </p>
              </div>
              <SpeakerForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
