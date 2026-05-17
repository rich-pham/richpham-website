import { NextRequest, NextResponse } from 'next/server';
import { supabase, INQUIRY_STATUSES, type InquiryStatus } from '@/lib/supabase';

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const { status } = (await request.json()) ?? {};

    if (!INQUIRY_STATUSES.includes(status as InquiryStatus)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    const { data, error } = await supabase.rpc('update_inquiry_status', {
      p_inquiry_id: id,
      p_status: status,
    });

    if (error) {
      console.error('update_inquiry_status RPC error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data });
  } catch (err) {
    console.error('Status update error:', err);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
