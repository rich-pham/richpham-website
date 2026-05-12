import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    // Store in Supabase
    const { error: dbError } = await supabase.from('contact_submissions').insert({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim() || null,
      message: message.trim(),
    });

    if (dbError) {
      console.error('Supabase insert error:', dbError);
      return NextResponse.json({ error: 'Failed to save your message. Please try again.' }, { status: 500 });
    }

    // Send notification email
    const { error: emailError } = await resend.emails.send({
      from: 'Contact Form <contact@infiniteleverage-3.com>',
      to: 'phamrich@gmail.com',
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0F2A71;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Name</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Company</td>
              <td style="padding: 8px 0;">${company}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    if (emailError) {
      // Log but don't fail — data is already saved
      console.error('Resend email error:', emailError);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
