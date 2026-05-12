import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BlogContent from '@/components/BlogContent';

export const metadata: Metadata = {
  title: 'Insights on Leadership & Scale | Rich Pham',
  description:
    'Practical reflections on leadership, decision-making, and scaling challenges faced by founders and CEOs operating beyond early traction.',
};

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main>
        <BlogContent />
      </main>
      <Footer />
    </>
  );
}
