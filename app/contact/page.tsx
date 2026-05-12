'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setForm({ name: '', email: '', company: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    fontSize: '15px',
    fontFamily: "'NunitoSans', sans-serif",
    fontWeight: 400,
    color: '#000000',
    background: '#ffffff',
    border: '1px solid #A8B2BD',
    borderRadius: '6px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 800,
    fontFamily: "'NunitoSans', sans-serif",
    color: '#000000',
    marginBottom: '8px',
    textTransform: 'uppercase',
  };

  return (
    <>
      <Nav />
      <main>
        {/* Hero band */}
        <section style={{ background: '#0F2A71', padding: '80px 0 72px' }}>
          <div className="section-container">
            <p className="eyebrow" style={{ color: '#F4D462', marginBottom: '16px' }}>
              Get in touch
            </p>
            <h1 style={{ fontSize: '48px', lineHeight: 1.15, color: '#ffffff', maxWidth: '560px' }}>
              Let's Start a Conversation
            </h1>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.65)',
                maxWidth: '480px',
                marginTop: '20px',
              }}
            >
              No pitch deck. No pressure. Just a short conversation to see if the work makes sense.
            </p>
          </div>
        </section>

        {/* Form section */}
        <section style={{ padding: '80px 0 100px', background: '#F4F4F4' }}>
          <div className="section-container" style={{ maxWidth: '680px' }}>
            {status === 'success' ? (
              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid #E0E0E0',
                  borderRadius: '8px',
                  padding: '56px 48px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '20px' }}>✓</div>
                <h2 style={{ fontSize: '28px', color: '#0F2A71', marginBottom: '12px' }}>
                  Message Received
                </h2>
                <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(0,0,0,0.6)' }}>
                  Thanks for reaching out. I'll be in touch within 1–2 business days.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-primary"
                  style={{ marginTop: '32px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid #E0E0E0',
                  borderRadius: '8px',
                  padding: '56px 48px',
                }}
              >
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                    <div>
                      <label htmlFor="name" style={labelStyle}>Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = '#0F2A71')}
                        onBlur={(e) => (e.target.style.borderColor = '#A8B2BD')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" style={labelStyle}>Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = '#0F2A71')}
                        onBlur={(e) => (e.target.style.borderColor = '#A8B2BD')}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label htmlFor="company" style={labelStyle}>Company / Role</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="CEO at Acme Inc. (optional)"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#0F2A71')}
                      onBlur={(e) => (e.target.style.borderColor = '#A8B2BD')}
                    />
                  </div>

                  <div style={{ marginBottom: '32px' }}>
                    <label htmlFor="message" style={labelStyle}>Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What's on your mind?"
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                      onFocus={(e) => (e.target.style.borderColor = '#0F2A71')}
                      onBlur={(e) => (e.target.style.borderColor = '#A8B2BD')}
                    />
                  </div>

                  {status === 'error' && (
                    <p
                      style={{
                        color: '#c0392b',
                        fontSize: '14px',
                        marginBottom: '20px',
                        padding: '12px 16px',
                        background: '#fdf0f0',
                        borderRadius: '6px',
                        border: '1px solid #f5c6c6',
                      }}
                    >
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary"
                    style={{ opacity: status === 'loading' ? 0.6 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
                  >
                    {status === 'loading' ? 'Sending…' : 'Send Message →'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
