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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

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
          position: 'relative',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
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

        {/* Desktop links */}
        <div className="nav-links">
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
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ff0000')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#000000')}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-blue">
            Invite Rich to Speak
          </Link>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? (
            /* X icon */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6"  x2="21" y2="6"  />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu — always rendered, animated via maxHeight */}
      <div
        className="nav-mobile-menu"
        style={{ maxHeight: menuOpen ? '400px' : '0' }}
      >
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}
        <div className="nav-mobile-cta">
          <Link href="/contact" className="btn-blue" onClick={closeMenu}>
            Invite Rich to Speak
          </Link>
        </div>
      </div>
    </nav>
  );
}
