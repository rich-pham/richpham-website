import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AboutApproach from '@/components/about/AboutApproach';
import CTABanner from '@/components/CTABanner';

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
    title: "From Zero to Factory: How I Brought Pocari Sweat to Vietnam's Fast Lane",
    href: 'https://www.richpham.com/post/from-zero-to-factory-how-i-brought-pocari-sweat-to-vietnam-s-fast-lane',
    image: '/images/about/blog-pocari.png',
  },
  {
    title: 'How a Leadership Coach Can Help You Spot Untapped Opportunities',
    href: 'https://www.richpham.com/post/how-a-leadership-coach-can-help-you-spot-untapped-opportunities',
    image: '/images/about/blog-leadership-coach.jpg',
  },
  {
    title: 'How Perseverance Builds Resilient Businesses',
    href: 'https://www.richpham.com/post/how-perseverance-builds-resilient-businesses',
    image: '/images/about/blog-perseverance.jpg',
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
            background: '#001740',
            paddingTop: '72px',
            overflow: 'visible',
          }}
          className="about-hero-grid"
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 32px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'start',
            }}
            className="about-hero-inner"
          >
            {/* Left: heading + photo */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '72px 0 48px' }}>
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
                  Leadership<br />is the engine.
                </h1>
                <p
                  style={{
                    fontSize: '20px',
                    lineHeight: 1.5,
                    color: 'rgba(255,255,255,0.85)',
                    fontWeight: 800,
                    fontFamily: "'NunitoSans', sans-serif",
                  }}
                  className="about-hero-sub"
                >
                  Strategy is the plan. Implementation is the race.
                </p>
              </div>
              {/* Photo — bleeds below section */}
              <div
                style={{ position: 'relative', width: '100%', aspectRatio: '3/4', maxHeight: '520px', marginBottom: '-120px' }}
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

            {/* Right: bio text + signature */}
            <div style={{ padding: '72px 0 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'rgba(255,255,255,0.9)', marginBottom: '28px' }}>
                My name is Rich Pham. I rose from <strong style={{ color: '#ffffff' }}>entry-level roles to the C-suite</strong>, founded multiple companies, and earned my <strong style={{ color: '#ffffff' }}>MBA from the University of Chicago Booth School of Business</strong>, joining a global network of top-tier leaders. I've experienced the full journey — failures, growth, and the hands-on work of building businesses across industries and countries.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'rgba(255,255,255,0.9)', marginBottom: '40px' }}>
                Now, <strong style={{ color: '#ffffff' }}>I help C-level executives and owners do the same.</strong> Every business hits a plateau, and that's where real experience matters. Whether you're trying to get unstuck, lead more effectively, or build systems that free you to focus on the bigger picture, I bring the clarity and perspective to help you move forward with confidence.
              </p>
              <div>
                <p style={{ fontFamily: 'var(--font-handwriting)', fontSize: '36px', color: '#ffffff' }}>Rich Pham</p>
              </div>
            </div>
          </div>
        </section>

        {/* Spacer to account for photo bleed */}
        <div style={{ background: '#ffffff', paddingTop: '140px' }} />

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
                  <span style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', fontFamily: "'NunitoSans', sans-serif" }}>
                    {m.milestone}
                  </span>
                  <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
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
                    <p style={{ fontSize: '16px', fontWeight: 800, color: '#0F2A71', marginBottom: '6px', fontFamily: "'NunitoSans', sans-serif" }}>
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
        <section style={{ background: '#ffffff', padding: '96px 0' }}>
          <div className="section-container">
            {/* Row 1: centered heading */}
            <h3
              style={{ fontSize: '40px', lineHeight: 1.2, fontWeight: 800, color: '#0F2A71', marginBottom: '48px', textAlign: 'center' }}
              className="global-h3"
            >
              Extensive Global Experience
            </h3>
            {/* Row 2: 3:1 — map left, stats right */}
            <div
              style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '48px', alignItems: 'start' }}
              className="global-stats-grid"
            >
              {/* Map */}
              <div>
                <Image
                  src="/images/about/map.png"
                  alt="Global experience map"
                  width={1136}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              {/* 4 stats stacked vertically */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <div>
                  <p style={{ fontSize: '18px', fontWeight: 800, color: '#0F2A71', fontFamily: "'NunitoSans', sans-serif", marginBottom: '6px' }}>11+ Countries</p>
                  <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.6 }}>Hands-on global experience across diverse markets.</p>
                </div>
                <div>
                  <p style={{ fontSize: '18px', fontWeight: 800, color: '#0F2A71', fontFamily: "'NunitoSans', sans-serif", marginBottom: '6px' }}>4 of Top 10</p>
                  <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.6 }}>Fortune 500 leadership — Coca-Cola, J&amp;J, P&amp;G, Danone.</p>
                </div>
                <div>
                  <p style={{ fontSize: '18px', fontWeight: 800, color: '#0F2A71', fontFamily: "'NunitoSans', sans-serif", marginBottom: '6px' }}>Cultural Adaptability</p>
                  <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.6 }}>Diverse cultural insights driving global strategies.</p>
                </div>
                <div>
                  <p style={{ fontSize: '18px', fontWeight: 800, color: '#0F2A71', fontFamily: "'NunitoSans', sans-serif", marginBottom: '6px' }}>Operational Excellence</p>
                  <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.6 }}>Effective management practices enhancing performance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── World-Class Racing Driver ── */}
        <section
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '520px' }}
          className="racing-grid"
        >
          {/* Content left — light grey */}
          <div style={{ background: '#F4F4F4', padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3
              style={{ fontSize: '36px', lineHeight: 1.2, fontWeight: 800, color: '#0F2A71', marginBottom: '36px' }}
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
                    borderBottom: i < racingAchievements.length - 1 ? '1px solid #E0E0E0' : 'none',
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                    gap: '20px',
                  }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 800, color: '#0F2A71', fontFamily: "'NunitoSans', sans-serif" }}>
                    {a.achievement}
                  </span>
                  <span style={{ fontSize: '15px', color: '#444444', lineHeight: 1.6 }}>
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-card"
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
                    <p className="blog-card-title" style={{ fontSize: '16px', fontWeight: 800, lineHeight: 1.4, fontFamily: "'NunitoSans', sans-serif" }}>
                      {post.title}
                    </p>
                    <p className="blog-card-link" style={{ fontSize: '14px', marginTop: '12px', fontWeight: 800, fontFamily: "'NunitoSans', sans-serif" }}>
                      Read more →
                    </p>
                  </div>
                </Link>
              ))}
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
