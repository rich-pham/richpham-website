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
  event_name: string;
  event_format: 'in_person' | 'virtual' | 'hybrid' | '';
  event_location: string;
  audience_size: string;
  date_requested: string;
  message: string;
};

const FORMAT_OPTIONS: Array<{ value: FormState['event_format']; label: string }> = [
  { value: '', label: 'Select a format…' },
  { value: 'in_person', label: 'In person' },
  { value: 'virtual', label: 'Virtual' },
  { value: 'hybrid', label: 'Hybrid' },
];

export default function SpeakerForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    event_name: '',
    event_format: '',
    event_location: '',
    audience_size: '',
    date_requested: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const metadata: Record<string, unknown> = {};
      if (form.event_name) metadata.event_name = form.event_name;
      if (form.event_format) metadata.event_format = form.event_format;
      if (form.event_location) metadata.event_location = form.event_location;
      if (form.audience_size) metadata.audience_size = form.audience_size;

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: form.message,
          subject: form.event_name || 'Speaker booking inquiry',
          type: 'speaker',
          source: 'speakers-page',
          date_requested: form.date_requested || null,
          metadata,
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
          Thanks for the invitation.
        </p>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
          I&apos;ll review the details and get back to you within a few business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label htmlFor="name" style={labelStyle}>Your name *</label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email *</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} style={inputStyle} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label htmlFor="company" style={labelStyle}>Organization *</label>
          <input id="company" name="company" type="text" required value={form.company} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="phone" style={labelStyle}>Phone (optional)</label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} style={inputStyle} />
        </div>
      </div>

      <div>
        <label htmlFor="event_name" style={labelStyle}>Event name *</label>
        <input id="event_name" name="event_name" type="text" required value={form.event_name} onChange={handleChange} style={inputStyle} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
        <div>
          <label htmlFor="event_format" style={labelStyle}>Format *</label>
          <select id="event_format" name="event_format" required value={form.event_format} onChange={handleChange} style={inputStyle}>
            {FORMAT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} style={{ color: '#000' }}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="event_location" style={labelStyle}>City / location</label>
          <input id="event_location" name="event_location" type="text" value={form.event_location} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="audience_size" style={labelStyle}>Audience size</label>
          <input id="audience_size" name="audience_size" type="text" placeholder="e.g. 200" value={form.audience_size} onChange={handleChange} style={inputStyle} />
        </div>
      </div>

      <div>
        <label htmlFor="date_requested" style={labelStyle}>Event date</label>
        <input id="date_requested" name="date_requested" type="date" value={form.date_requested} onChange={handleChange} style={inputStyle} />
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>
          Tell me about the audience and topic *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: 'vertical' }}
          placeholder="Who's in the room, what outcome you're hoping for, and any specific topics you'd like me to cover."
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
          {status === 'sending' ? 'Sending…' : 'Submit speaker request'}
        </button>
      </div>
    </form>
  );
}
