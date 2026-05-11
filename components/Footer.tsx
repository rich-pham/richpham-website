'use client';

import Link from 'next/link';
import { useState } from 'react';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

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
              Rich Pham
            </div>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.65)',
              }}
            >
              Executive Advisor for Scaling CEOs, Founders, and Boards.
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              style={{
                fontSize: '12px',
                fontWeight: 800,
                fontFamily: "'NunitoSans', sans-serif",
                color: 'rgba(255,255,255,0.65)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Navigation
            </p>
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
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#F4D462')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <p
              style={{
                fontSize: '12px',
                fontWeight: 800,
                fontFamily: "'NunitoSans', sans-serif",
                color: 'rgba(255,255,255,0.65)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Newsletter
            </p>
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
            <div style={{ display: 'flex', gap: '0' }}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #A8B2BD',
                  borderRadius: '0',
                  padding: '10px 0',
                  fontSize: '14px',
                  color: '#ffffff',
                  outline: 'none',
                  flex: 1,
                  fontFamily: "'NunitoSans', sans-serif",
                }}
                onFocus={(e) => (e.target.style.borderBottomColor = '#0F2A71')}
                onBlur={(e) => (e.target.style.borderBottomColor = '#A8B2BD')}
              />
              <button
                className="btn-primary"
                style={{ borderRadius: '0 6px 6px 0', padding: '10px 20px', fontSize: '13px' }}
              >
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
                fontSize: '14px',
                color: 'rgba(255,255,255,0.65)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F4D462')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
