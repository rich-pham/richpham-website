'use client';

import Link from 'next/link';
import { useState } from 'react';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer style={{ background: '#001740', padding: '64px 0 32px' }}>
      <div className="section-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '48px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "'NunitoSans', sans-serif",
                fontWeight: 800,
                fontSize: '20px',
                color: '#ffffff',
                marginBottom: '16px',
              }}
            >
              RICH PHAM
            </div>
          </div>

          {/* Links — no "Navigation" label */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.65)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter — no "Newsletter" label */}
          <div>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.65)',
                marginBottom: '16px',
                lineHeight: 1.5,
              }}
            >
              Join the Leadership &amp; Growth Newsletter
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  background: 'rgba(255,255,255,0.10)',
                  border: 'none',
                  outline: 'none',
                  borderRadius: '6px',
                  padding: '10px 14px',
                  fontSize: '14px',
                  color: '#ffffff',
                  flex: 1,
                  fontFamily: "'NunitoSans', sans-serif",
                }}
              />
              <button className="btn-blue" style={{ padding: '10px 18px', fontSize: '13px', whiteSpace: 'nowrap' }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>
              © 2025 Rich Pham. All Rights Reserved.
            </p>
            <a
              href="https://www.linkedin.com/in/richpham/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'rgba(255,255,255,0.65)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
