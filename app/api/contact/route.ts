import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase, INQUIRY_TYPES, type InquiryType } from '@/lib/supabase';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TYPE_LABELS: Record<InquiryType, string> = {
  general: 'General',
  coaching: 'Coaching',
  speaker: 'Speaker Booking',
  newsletter: 'Newsletter',
};

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const {
      name,
      email,
      company,
      phone,
      role,
      message,
      subject,
      type,
      source,
      date_requested,
      metadata,
    } = body ?? {};

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const resolvedType: InquiryType = INQUIRY_TYPES.includes(type) ? type : 'general';

    const { data: inquiryId, error: rpcError } = await supabase.rpc('submit_inquiry', {
      p_name: name.trim(),
      p_email: email.trim().toLowerCase(),
      p_type: resolvedType,
      p_phone: phone?.trim() || null,
      p_company: company?.trim() || null,
      p_role: role?.trim() || null,
      p_subject: subject?.trim() || null,
      p_message: message.trim(),
      p_metadata: metadata && typeof metadata === 'object' ? metadata : {},
      p_source: source?.trim() || null,
      p_source_site: 'richpham.com',
      p_date_requested: date_requested || null,
    });

    if (rpcError) {
      console.error('submit_inquiry RPC error:', rpcError);
      return NextResponse.json(
        { error: 'Failed to save your message. Please try again.' },
        { status: 500 }
      );
    }

    // Notification email (don't fail the request if it errors, but report status
    // back so failures are visible in dev tools / debugging).
    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not set — skipping notification email');
      return NextResponse.json({
        success: true,
        id: inquiryId,
        emailSent: false,
        emailError: 'RESEND_API_KEY not configured',
      });
    }

    const subjectLine = `[${TYPE_LABELS[resolvedType]}] ${name}${company ? ` — ${company}` : ''}`;

    const detailsRows: Array<[string, string]> = [
      ['Type', TYPE_LABELS[resolvedType]],
      ['Name', name],
      ['Email', email],
    ];
    if (company) detailsRows.push(['Company', company]);
    if (phone) detailsRows.push(['Phone', phone]);
    if (role) detailsRows.push(['Role', role]);
    if (date_requested) detailsRows.push(['Requested date', new Date(date_requested).toLocaleDateString()]);

    const rowsHtml = detailsRows
      .map(
        ([k, v]) => `
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555; width: 140px;">${k}</td>
          <td style="padding: 8px 0;">${v}</td>
        </tr>`
      )
      .join('');

    const { error: emailError } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'phamrich@gmail.com',
      subject: subjectLine,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0F2A71;">New ${TYPE_LABELS[resolvedType]} Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            ${rowsHtml}
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    if (emailError) {
      console.error('Resend email error:', emailError);
    }

    return NextResponse.json({
      success: true,
      id: inquiryId,
      emailSent: !emailError,
      emailError: emailError?.message ?? null,
    });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
