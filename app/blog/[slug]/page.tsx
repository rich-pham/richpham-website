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
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 32px 56px' }}>
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
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', maxHeight: '560px', overflow: 'hidden' }}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        </section>

        {/* ── Post Content ── */}
        <section style={{ background: '#ffffff', padding: '80px 0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 32px' }}>
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
        </section>

        {/* ── Recent Posts ── */}
        {recent.length > 0 && (
          <section style={{ background: '#F4F4F4', padding: '80px 0' }}>
            <div className="section-container">
              <h3
                style={{ fontSize: '28px', fontWeight: 800, color: '#0F2A71', fontFamily: "'NunitoSans', sans-serif", marginBottom: '40px' }}
              >
                More Posts
              </h3>
              <div
                style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', alignItems: 'stretch' }}
                className="blog-grid"
              >
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
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ padding: '20px 24px 24px', background: '#ffffff', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <p style={{ fontSize: '12px', color: '#999999', fontFamily: "'NunitoSans', sans-serif", marginBottom: '10px' }}>
                        {p.date}
                      </p>
                      <p
                        className="blog-card-title"
                        style={{ fontSize: '16px', fontWeight: 800, lineHeight: 1.4, fontFamily: "'NunitoSans', sans-serif" }}
                      >
                        {p.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
