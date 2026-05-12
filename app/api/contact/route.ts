import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, company, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  // TODO: wire up email provider (Resend, SendGrid, etc.)
  console.log('Contact form submission:', { name, email, company, message });

  return NextResponse.json({ ok: true });
}
