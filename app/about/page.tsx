import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AboutApproach from '@/components/about/AboutApproach';

export const metadata: Metadata = {
  title: 'About Rich Pham | Former CEO & Executive Advisor',
  description:
    'Rich Pham is a former CEO and board-level operator with 30+ years of experience scaling businesses across global markets. Today, he advises founders and CEOs navigating leadership at scale.',
};

const pocariMilestones = [
  { milestone: 'Founding Vision', detail: 'Established Pocari Vietnam, a leading venture in the market.' },
  { milestone: 'Leadership Excellence', detail: 'Guided the company through strategic milestones and challenges.' },
  { milestone: 'Impressive Growth', detail: 'Scaled the company to a valuation exceeding $200 million USD.' },
  { milestone: 'Major Milestone', detail: "Key contributor to launching Vietnam's Pocari factory, one of eight worldwide." },
  { milestone: 'Successful Exit', detail: 'Achieved a lucrative exit, demonstrating strong business acumen.' },
];

const eoRoles = [
  { role: 'Founding Member', detail: 'President, board member, and regional roles to support continued growth every year.' },
  { role: 'Presidential Role', detail: "Served as President, driving the organization's mission and initiatives." },
  { role: 'Community Building', detail: 'Fostered a vibrant network of entrepreneurs and business leaders.' },
  { role: 'Supportive Initiatives', detail: 'Implemented programs to support startups and mentorship opportunities.' },
];

const racingAchievements = [
  { achievement: 'Racing Achievements', detail: 'Secured more than 45 podium finishes.' },
  { achievement: 'Global Competitions', detail: 'Competed on three continents, showcasing adaptability.' },
  { achievement: 'Entrepreneurial Spirit', detail: 'Owner of Black Arts Racing, promoting innovation in motorsport.' },
  { achievement: 'Passion for Excellence', detail: 'Committed to continuous improvement and team success.' },
];

const blogPosts = [
  {
    title: 'From Zero to Factory: How I Brought Pocari Sweat to Vietnam's Fast Lane',
    href: '/post/from-zero-to-factory-how-i-brought-pocari-sweat-to-vietnam-s-fast-lane',
    image: '/images/about/pocari-sweat.jpg',
  },
  {
    title: 'How a Leadership Coach Can Help You Spot Untapped Opportunities',
    href: '/post/how-a-leadership-coach-can-help-you-spot-untapped-opportunities',
    image: '/images/about/rich.jpg',
  },
  {
    title: 'How Perseverance Builds Resilient Businesses',
    href: '/post/how-perseverance-builds-resilient-businesses',
    image: '/images/about/world-class-racing-driver.jpg',
  },
];

const partners = [
  { name: 'Coca-Cola', logo: '/images/about/partner-Coca-Cola.png' },
  { name: 'Pocari Sweat', logo: '/images/about/partner-pocari-sweat.png' },
  { name: 'NFQ', logo: '/images/about/partner-nfq.png' },
  { name: 'Johnson & Johnson', logo: '/images/about/partner-Johnson_and_Johnson.png' },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section
          style={{
            background: '#ffffff',
            paddingTop: '72px',
            minHeight: '60vh',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            overflow: 'hidden',
          }}
          className="about-hero-grid"
        >
          <div
            style={{
              padding: '80px 64px 80px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              maxWidth: '680px',
              marginLeft: 'auto',
            }}
          >
            <h1
              style={{
                fontSize: '72px',
                lineHeight: 1.05,
                fontWeight: 800,
                color: '#000000',
                marginBottom: '24px',
              }}
              className="about-hero-h1"
            >
              Leadership is the <span style={{ color: '#0F2A71' }}>engine.</span>
            </h1>
            <p
              style={{
                fontSize: '24px',
                lineHeight: 1.4,
                color: '#444444',
                fontWeight: 800,
                fontFamily: "'NunitoSans', sans-serif",
              }}
              className="about-hero-sub"
            >
              Strategy is the plan. Implementation is the race.
            </p>
          </div>
          <div style={{ position: 'relative', minHeight: '400px' }} className="about-hero-img">
            <Image
              src="/images/about/rich.jpg"
              alt="Rich Pham"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </section>

        {/* ── Bio Introduction ── */}
        <section style={{ background: '#F4F4F4', padding: '96px 0' }}>
          <div className="section-container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '80px',
                alignItems: 'center',
              }}
              className="bio-grid"
            >
              <div>
                <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#000000', marginBottom: '24px' }}>
                  My name is Rich Pham. I rose from entry-level roles to the C-suite, founded multiple companies, and earned my MBA from the University of Chicago Booth School of Business, joining a global network of top-tier leaders. I've experienced the full journey — failures, growth, and the hands-on work of building businesses across industries and countries.
                </p>
                <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#000000' }}>
                  Now, I help C-level executives and owners do the same. Every business hits a plateau, and that's where real experience matters. Whether you're trying to get unstuck, lead more effectively, or build systems that free you to focus on the bigger picture, I bring the clarity and perspective to help you move forward with confidence.
                </p>
              </div>
              <div style={{ position: 'relative', borderRadius: '6px', overflow: 'hidden', aspectRatio: '4/3' }}>
                <Image
                  src="/images/about/map.png"
                  alt="Global experience map"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', borderRadius: '6px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── My Approach ── */}
        <AboutApproach />

        {/* ── Partner With ── */}
        <section style={{ background: '#ffffff', padding: '72px 0' }}>
          <div className="section-container">
            <p
              style={{
                fontSize: '12px',
                fontWeight: 800,
                fontFamily: "'NunitoSans', sans-serif",
                color: '#0F2A71',
                textTransform: 'uppercase',
                marginBottom: '40px',
                textAlign: 'center',
              }}
            >
              Partner with
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '64px',
                flexWrap: 'wrap',
              }}
            >
              {partners.map((p) => (
                <div key={p.name} style={{ position: 'relative', height: '48px', width: '140px' }}>
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    sizes="140px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pocari Vietnam ── */}
        <section
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '560px' }}
          className="pocari-grid"
        >
          {/* Image left */}
          <div style={{ position: 'relative', minHeight: '400px' }}>
            <Image
              src="/images/about/pocari-sweat.jpg"
              alt="Pocari Sweat Vietnam"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          {/* Content right — navy */}
          <div style={{ background: '#0F2A71', padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2
              style={{ fontSize: '36px', lineHeight: 1.2, fontWeight: 800, color: '#ffffff', marginBottom: '36px' }}
              className="pocari-h2"
            >
              Entrepreneurial Success with Pocari Vietnam
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {pocariMilestones.map((m, i) => (
                <div
                  key={m.milestone}
                  style={{
                    padding: '16px 0',
                    borderBottom: i < pocariMilestones.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                    gap: '20px',
                  }}
                >
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#F4D462', fontFamily: "'NunitoSans', sans-serif" }}>
                    {m.milestone}
                  </span>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                    {m.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EO Vietnam ── */}
        <section style={{ background: '#F4F4F4', padding: '96px 0' }}>
          <div className="section-container">
            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
              className="eo-grid"
            >
              <div>
                <h3
                  style={{ fontSize: '36px', lineHeight: 1.2, fontWeight: 800, color: '#0F2A71', marginBottom: '28px' }}
                  className="eo-h3"
                >
                  Entrepreneurs' Organization (EO) Vietnam
                </h3>
                <blockquote
                  style={{
                    borderLeft: '3px solid #F4D462',
                    paddingLeft: '20px',
                    margin: '0 0 32px',
                    fontStyle: 'italic',
                    fontSize: '17px',
                    lineHeight: 1.7,
                    color: '#000000',
                  }}
                >
                  "Leadership is about service. Community is built one contribution at a time."
                  <footer style={{ marginTop: '10px', fontSize: '14px', color: '#0F2A71', fontStyle: 'normal', fontWeight: 800, fontFamily: "'NunitoSans', sans-serif" }}>
                    — Rich Pham
                  </footer>
                </blockquote>
                <div style={{ position: 'relative', borderRadius: '6px', overflow: 'hidden', aspectRatio: '4/3' }}>
                  <Image
                    src="/images/about/EO.jpg"
                    alt="EO Vietnam"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover', borderRadius: '6px' }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {eoRoles.map((r, i) => (
                  <div
                    key={r.role}
                    style={{
                      padding: '20px 0',
                      borderBottom: i < eoRoles.length - 1 ? '1px solid #E0E0E0' : 'none',
                    }}
                  >
                    <p style={{ fontSize: '14px', fontWeight: 800, color: '#0F2A71', marginBottom: '6px', fontFamily: "'NunitoSans', sans-serif" }}>
                      {r.role}
                    </p>
                    <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#000000' }}>{r.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Global Experience ── */}
        <section style={{ background: '#0F2A71', padding: '96px 0' }}>
          <div className="section-container">
            <h3
              style={{ fontSize: '40px', lineHeight: 1.2, fontWeight: 800, color: '#ffffff', marginBottom: '56px', maxWidth: '600px' }}
              className="global-h3"
            >
              Extensive Global Experience
            </h3>
            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '40px', marginBottom: '56px' }}
              className="global-stats-grid"
            >
              <div>
                <div style={{ fontSize: '64px', fontWeight: 800, color: '#F4D462', fontFamily: "'NunitoSans', sans-serif", lineHeight: 1 }}>11+</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', marginTop: '10px', lineHeight: 1.5 }}>
                  Countries of hands-on global experience, leading and adapting across diverse markets.
                </div>
              </div>
              <div>
                <div style={{ fontSize: '64px', fontWeight: 800, color: '#F4D462', fontFamily: "'NunitoSans', sans-serif", lineHeight: 1 }}>4/10</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', marginTop: '10px', lineHeight: 1.5 }}>
                  Senior leadership roles in four of the top ten Fortune 500 companies — Coca-Cola, J&J, P&G, and Danone.
                </div>
              </div>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>Cultural Adaptability</h4>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'rgba(255,255,255,0.75)' }}>
                  Leveraged diverse cultural insights to drive global strategies.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>Operational Excellence</h4>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'rgba(255,255,255,0.75)' }}>
                  Enhanced performance through effective management practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── World-Class Racing Driver ── */}
        <section
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '520px' }}
          className="racing-grid"
        >
          {/* Content left — dark */}
          <div style={{ background: '#0a0a0a', padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3
              style={{ fontSize: '36px', lineHeight: 1.2, fontWeight: 800, color: '#ffffff', marginBottom: '36px' }}
              className="racing-h3"
            >
              World-Class Racing Driver
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {racingAchievements.map((a, i) => (
                <div
                  key={a.achievement}
                  style={{
                    padding: '16px 0',
                    borderBottom: i < racingAchievements.length - 1 ? '1px solid rgba(255,255,255,0.10)' : 'none',
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                    gap: '20px',
                  }}
                >
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#F4D462', fontFamily: "'NunitoSans', sans-serif" }}>
                    {a.achievement}
                  </span>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.6 }}>
                    {a.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Image right */}
          <div style={{ position: 'relative', minHeight: '400px' }}>
            <Image
              src="/images/about/world-class-racing-driver.jpg"
              alt="Rich Pham — Racing Driver"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>

        {/* ── Blog Preview ── */}
        <section style={{ background: '#ffffff', padding: '96px 0' }}>
          <div className="section-container">
            <h2
              style={{ fontSize: '48px', lineHeight: 1.2, fontWeight: 800, color: '#0F2A71', marginBottom: '48px' }}
              className="blog-h2"
            >
              Follow My Stories
            </h2>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
              className="blog-grid"
            >
              {blogPosts.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  style={{ textDecoration: 'none', display: 'block', borderRadius: '6px', overflow: 'hidden', border: '1px solid #E0E0E0', transition: 'box-shadow 0.2s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(15,42,113,0.10)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}
                >
                  <div style={{ position: 'relative', aspectRatio: '16/9' }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <p style={{ fontSize: '16px', fontWeight: 800, color: '#0F2A71', lineHeight: 1.4, fontFamily: "'NunitoSans', sans-serif" }}>
                      {post.title}
                    </p>
                    <p style={{ fontSize: '14px', color: '#0F2A71', marginTop: '12px', fontWeight: 800, fontFamily: "'NunitoSans', sans-serif" }}>
                      Read more →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
