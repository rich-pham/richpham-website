import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import AboutSnapshot from '@/components/AboutSnapshot';
import Accordion from '@/components/Accordion';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <AboutSnapshot />
        <Accordion />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
