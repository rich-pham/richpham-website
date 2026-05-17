import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const { email, name, source } = (await request.json()) ?? {};

    if (!email?.trim() || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const { data: inquiryId, error } = await supabase.rpc('submit_newsletter', {
      p_email: email.trim().toLowerCase(),
      p_name: name?.trim() || null,
      p_source: source?.trim() || 'footer',
      p_source_site: 'richpham.com',
    });

    if (error) {
      console.error('submit_newsletter RPC error:', error);
      return NextResponse.json({ error: 'Failed to subscribe. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: inquiryId });
  } catch (err) {
    console.error('Newsletter API error:', err);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
