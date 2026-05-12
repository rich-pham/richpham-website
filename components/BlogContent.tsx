'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PAGE_SIZE = 9;

const categories = [
  'All',
  'Racing Through Life',
  'Reinvent to Succeed',
  'People Power',
  'Lessons from the Real World',
  'Curiosity-Driven Leadership',
];

const posts = [
  {
    title: "How to Find Your Competitive Edge On and Off The Race Track",
    href: "https://www.richpham.com/post/how-to-find-your-competitive-edge-on-and-off-the-race-track",
    image: "/images/about/world-class-racing-driver.jpg",
    category: "Racing Through Life",
    date: "",
    readTime: "",
  },
  {
    title: "From Zero to Factory: How I Brought Pocari Sweat to Vietnam's Fast Lane",
    href: "https://www.richpham.com/post/from-zero-to-factory-how-i-brought-pocari-sweat-to-vietnam-s-fast-lane",
    image: "/images/about/blog-pocari.png",
    category: "Racing Through Life",
    date: "Apr 17, 2025",
    readTime: "3 min read",
  },
  {
    title: "Building a Competitive Edge Is Easier Than You Think",
    href: "https://www.richpham.com/post/building-a-competitive-edge-is-easier-than-you-think",
    image: "/images/blog.jpg",
    category: "Racing Through Life",
    date: "Jan 23, 2025",
    readTime: "3 min read",
  },
  {
    title: "Racing and Business: How Can Racing Benefit A Leadership Coach?",
    href: "https://www.richpham.com/post/racing-and-business-how-can-racing-benefit-a-leadership-coach",
    image: "/images/blog.jpg",
    category: "Racing Through Life",
    date: "Jan 22, 2025",
    readTime: "3 min read",
  },
  {
    title: "Why Every Leader Should Learn from Mistakes for Growth and Innovation",
    href: "https://www.richpham.com/post/why-every-leader-should-learn-from-mistakes-for-growth-and-innovation",
    image: "/images/blog.jpg",
    category: "Reinvent to Succeed",
    date: "Jan 23, 2025",
    readTime: "",
  },
  {
    title: "The Role of a Leadership Coach in Turning Failure Into a Comeback Story",
    href: "https://www.richpham.com/post/the-role-of-a-leadership-coach-in-turning-failure-into-a-comeback-story",
    image: "/images/about/rich.jpg",
    category: "Reinvent to Succeed",
    date: "Jan 23, 2025",
    readTime: "3 min read",
  },
  {
    title: "How a Leadership Coach Can Help You Spot Untapped Opportunities",
    href: "https://www.richpham.com/post/how-a-leadership-coach-can-help-you-spot-untapped-opportunities",
    image: "/images/about/blog-leadership-coach.jpg",
    category: "Reinvent to Succeed",
    date: "",
    readTime: "",
  },
  {
    title: "How Perseverance Builds Resilient Businesses",
    href: "https://www.richpham.com/post/how-perseverance-builds-resilient-businesses",
    image: "/images/about/blog-perseverance.jpg",
    category: "Reinvent to Succeed",
    date: "",
    readTime: "",
  },
];

export default function BlogContent() {
  const [active, setActive] = useState('All');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const filtered = active === 'All' ? posts : posts.filter((p) => p.category === active);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const loadMore = useCallback(() => {
    setVisibleCount((n) => n + PAGE_SIZE);
  }, []);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [active]);

  useEffect(() => {
    if (!hasMore) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) loadMore(); },
      { rootMargin: '200px' }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, loadMore]);

  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#001740', paddingTop: '72px' }}
        className="about-hero-grid"
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '80px 64px 80px 32px' }}>
          <div style={{ maxWidth: '520px' }}>
            <h1
              style={{ fontSize: '56px', lineHeight: 1.1, fontWeight: 800, color: '#ffffff' }}
              className="about-hero-h1"
            >
              Insights and Inspiration on the Journey to Legacy
            </h1>
          </div>
        </div>
        <div style={{ position: 'relative', aspectRatio: '4/3' }} className="about-hero-img">
          <Image
            src="/images/blog.jpg"
            alt="Rich Pham Blog"
            fill
            sizes="50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>
      </section>

      {/* ── Category Filters ── */}
      <section style={{ background: '#ffffff', borderBottom: '1px solid #E0E0E0' }}>
        <div className="section-container">
          <div style={{ display: 'flex', gap: '0', overflowX: 'auto' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: active === cat ? '3px solid #F4D462' : '3px solid transparent',
                  padding: '20px 24px',
                  cursor: 'pointer',
                  fontFamily: "'NunitoSans', sans-serif",
                  fontWeight: 800,
                  fontSize: '13px',
                  color: active === cat ? '#0F2A71' : '#888888',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                  whiteSpace: 'nowrap',
                  marginBottom: '-1px',
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Posts ── */}
      <section style={{ background: '#F4F4F4', padding: '80px 0' }}>
        <div className="section-container">
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}
            className="blog-grid"
          >
            {visible.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-card"
              >
                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <div style={{ padding: '20px 24px 24px', background: '#ffffff' }}>
                  {/* Category tag — only on All */}
                  {active === 'All' && (
                    <p style={{
                      display: 'inline-block',
                      fontSize: '10px',
                      fontWeight: 800,
                      fontFamily: "'NunitoSans', sans-serif",
                      textTransform: 'uppercase',
                      color: '#0F2A71',
                      background: '#F4D462',
                      padding: '3px 8px',
                      borderRadius: '3px',
                      marginBottom: '12px',
                    }}>
                      {post.category}
                    </p>
                  )}

                  {/* Title */}
                  <p className="blog-card-title" style={{ fontSize: '16px', fontWeight: 800, lineHeight: 1.4, fontFamily: "'NunitoSans', sans-serif", marginBottom: '10px' }}>
                    {post.title}
                  </p>

                  {/* Date */}
                  {(post.date || post.readTime) && (
                    <p style={{ fontSize: '12px', color: '#999999', fontFamily: "'NunitoSans', sans-serif", marginBottom: '12px' }}>
                      {[post.date, post.readTime].filter(Boolean).join(' · ')}
                    </p>
                  )}

                  {/* CTA */}
                  <p className="blog-card-link" style={{ fontSize: '13px', fontWeight: 800, fontFamily: "'NunitoSans', sans-serif" }}>
                    Read more →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Infinite scroll sentinel */}
          {hasMore && <div ref={sentinelRef} style={{ height: '1px', marginTop: '40px' }} />}
        </div>
      </section>
    </>
  );
}
