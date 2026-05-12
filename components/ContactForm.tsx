'use client';

import { useState } from 'react';

const inputStyle = {
  width: '100%',
  background: '#F4F4F4',
  border: '1px solid #E0E0E0',
  borderRadius: '6px',
  padding: '14px 16px',
  fontSize: '15px',
  color: '#000000',
  fontFamily: "'NunitoSans', sans-serif",
  outline: 'none',
  boxSizing: 'border-box' as const,
};

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 800,
  color: '#000000',
  marginBottom: '8px',
  fontFamily: "'NunitoSans', sans-serif",
};

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div style={{ padding: '48px 0', textAlign: 'center' }}>
        <p style={{ fontSize: '24px', fontWeight: 800, color: '#000000', marginBottom: '12px' }}>
          Message received.
        </p>
        <p style={{ fontSize: '16px', color: '#555555', lineHeight: 1.6 }}>
          Thanks for reaching out — I'll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <label htmlFor="name" style={labelStyle}>Full name *</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="company" style={labelStyle}>Company name *</label>
        <input
          id="company"
          name="company"
          type="text"
          required
          value={form.company}
          onChange={handleChange}
          style={inputStyle}
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
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>

      {status === 'error' && (
        <p style={{ fontSize: '14px', color: '#cc0000' }}>
          Something went wrong. Please try again.
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-primary"
          style={{ opacity: status === 'sending' ? 0.6 : 1 }}
        >
          {status === 'sending' ? 'Sending…' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
