'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        background: '#ffffff',
        borderBottom: scrolled ? '1px solid #E0E0E0' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div
        className="section-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "'NunitoSans', sans-serif",
            fontWeight: 800,
            fontSize: '20px',
            color: '#000000',
            textDecoration: 'none',
          }}
        >
          RICH PHAM
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'NunitoSans', sans-serif",
                fontWeight: 400,
                fontSize: '15px',
                color: '#000000',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1C5BFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#000000')}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-blue">
            Invite Rich to Speak
          </Link>
        </div>
      </div>
    </nav>
  );
}
