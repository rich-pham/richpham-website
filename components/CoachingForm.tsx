'use client';

import { useState } from 'react';

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.10)',
  border: '1px solid rgba(255,255,255,0.25)',
  borderRadius: '6px',
  padding: '14px 16px',
  fontSize: '15px',
  color: '#ffffff',
  fontFamily: "'NunitoSans', sans-serif",
  outline: 'none',
  boxSizing: 'border-box' as const,
};

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 800,
  color: 'rgba(255,255,255,0.85)',
  marginBottom: '8px',
  fontFamily: "'NunitoSans', sans-serif",
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  message: string;
};

export default function CoachingForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    message: '',
  });
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
        body: JSON.stringify({
          ...form,
          type: 'coaching',
          subject: 'Coaching inquiry',
          source: 'coaching-page',
        }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div style={{ padding: '48px 0', textAlign: 'center' }}>
        <p style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
          Got it.
        </p>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
          Thanks for reaching out about coaching — I&apos;ll be in touch within a few business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label htmlFor="name" style={labelStyle}>Full name *</label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email *</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} style={inputStyle} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label htmlFor="company" style={labelStyle}>Company</label>
          <input id="company" name="company" type="text" value={form.company} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="role" style={labelStyle}>Your role</label>
          <input id="role" name="role" type="text" value={form.role} onChange={handleChange} style={inputStyle} />
        </div>
      </div>

      <div>
        <label htmlFor="phone" style={labelStyle}>Phone (optional)</label>
        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} style={inputStyle} />
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>
          What would you like to work on? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: 'vertical' }}
          placeholder="A short description of where you are now, what you're navigating, and what success would look like."
        />
      </div>

      {status === 'error' && (
        <p style={{ fontSize: '14px', color: '#ffb3b3' }}>
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
          {status === 'sending' ? 'Sending…' : 'Request a discovery call'}
        </button>
      </div>
    </form>
  );
}
