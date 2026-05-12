import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact | Rich Pham',
  description: 'Start a conversation with Rich Pham about executive advisory and leadership coaching.',
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section style={{ background: '#ffffff', padding: '96px 0' }}>
          <div className="section-container" style={{ maxWidth: '720px' }}>
            <p className="eyebrow" style={{ color: '#ff0000', marginBottom: '16px' }}>Get in touch</p>
            <h1 style={{ fontSize: '48px', lineHeight: 1.2, color: '#000000', marginBottom: '20px' }}>
              Let's Talk It Through
            </h1>
            <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#555555', marginBottom: '56px' }}>
              If you're navigating a leadership challenge or want to explore whether working together makes sense, reach out. No pitch deck. No pressure.
            </p>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
