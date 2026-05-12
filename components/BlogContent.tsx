'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '@/lib/posts';

const PAGE_SIZE = 9;

const categories = [
  'All',
  'Racing Through Life',
  'Reinvent to Succeed',
  'People Power',
  'Lessons from the Real World',
  'Curiosity-Driven Leadership',
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
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Posts ── */}
      <section style={{ background: '#F4F4F4', padding: '80px 0' }}>
        <div className="section-container">
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', alignItems: 'stretch' }}
            className="blog-grid"
          >
            {visible.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', flexShrink: 0 }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <div style={{ padding: '20px 24px 24px', background: '#ffffff', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Category tag — only on All */}
                  {active === 'All' && (
                    <p style={{
                      display: 'inline-block',
                      alignSelf: 'flex-start',
                      fontSize: '10px',
                      fontWeight: 800,
                      fontFamily: "'NunitoSans', sans-serif",
                      textTransform: 'uppercase',
                      color: '#F4D462',
                      background: '#ffffff',
                      border: '1px solid #F4D462',
                      padding: '3px 8px',
                      borderRadius: '3px',
                      marginBottom: '8px',
                    }}>
                      {post.category}
                    </p>
                  )}

                  {/* Date */}
                  {post.date && (
                    <p style={{ fontSize: '12px', color: '#999999', fontFamily: "'NunitoSans', sans-serif", marginBottom: '10px' }}>
                      {post.date}
                    </p>
                  )}

                  {/* Title */}
                  <p className="blog-card-title" style={{ fontSize: '16px', fontWeight: 800, lineHeight: 1.4, fontFamily: "'NunitoSans', sans-serif" }}>
                    {post.title}
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
