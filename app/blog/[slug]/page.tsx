import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { getPostBySlug, getRecentPosts, posts } from '@/lib/posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} | Rich Pham` };
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const recent = getRecentPosts(slug, 3);

  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section style={{ background: '#001740', paddingTop: '72px' }}>
          <div className="section-container" style={{ padding: '80px 32px 56px', textAlign: 'center' }}>
            <p
              className="eyebrow"
              style={{ color: '#F4D462', marginBottom: '20px' }}
            >
              {post.category}
            </p>
            <h1
              style={{ fontSize: '48px', lineHeight: 1.1, fontWeight: 800, color: '#ffffff', marginBottom: '28px' }}
              className="about-hero-h1"
            >
              {post.title}
            </h1>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', fontFamily: "'NunitoSans', sans-serif" }}>
              Rich Pham &nbsp;·&nbsp; {post.date}
            </p>
          </div>
          <div className="section-container" style={{ padding: '0 32px' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '6px 6px 0 0' }}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 1264px) 100vw, 1200px"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority
              />
            </div>
          </div>
        </section>

        {/* ── Post Content + Recent Posts ── */}
        <section style={{ background: '#F4F4F4', padding: '80px 0' }}>
          <div className="section-container">
            <div
              style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px', alignItems: 'start' }}
              className="blog-post-grid"
            >
              {/* Left: post body */}
              <div style={{ background: '#ffffff', borderRadius: '6px', padding: '48px' }}>
                {post.body.length > 0 ? (
                  post.body.map((para, i) => (
                    <p
                      key={i}
                      style={{ fontSize: '17px', lineHeight: 1.85, color: '#333333', marginBottom: '28px', fontFamily: "'NunitoSans', sans-serif" }}
                    >
                      {para}
                    </p>
                  ))
                ) : (
                  <p style={{ fontSize: '17px', lineHeight: 1.85, color: '#999999', fontFamily: "'NunitoSans', sans-serif" }}>
                    Content coming soon.
                  </p>
                )}
              </div>

              {/* Right: recent posts stacked */}
              {recent.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <h3
                    style={{ fontSize: '18px', fontWeight: 800, color: '#0F2A71', fontFamily: "'NunitoSans', sans-serif", marginBottom: '4px' }}
                  >
                    More Posts
                  </h3>
                  {recent.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="blog-card"
                      style={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', flexShrink: 0 }}>
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div style={{ padding: '16px 20px 20px', background: '#ffffff', flex: 1 }}>
                        <p style={{ fontSize: '11px', color: '#999999', fontFamily: "'NunitoSans', sans-serif", marginBottom: '8px' }}>
                          {p.date}
                        </p>
                        <p
                          className="blog-card-title"
                          style={{ fontSize: '14px', fontWeight: 800, lineHeight: 1.4, fontFamily: "'NunitoSans', sans-serif" }}
                        >
                          {p.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
