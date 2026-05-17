import { createClient } from '@supabase/supabase-js';

// Server-only Supabase client. Uses the service role key (bypasses RLS).
// NEVER import this from a client component.

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.warn(
    'Supabase env vars not configured (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY). Database features will not work.'
  );
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseServiceRoleKey || 'placeholder-key',
  {
    auth: { persistSession: false },
  }
);

export type InquiryType = 'general' | 'coaching' | 'speaker' | 'newsletter';

export type InquiryStatus =
  | 'new_lead'
  | 'contacted'
  | 'discovery_call'
  | 'proposal'
  | 'won'
  | 'lost';

export const INQUIRY_STATUSES: InquiryStatus[] = [
  'new_lead',
  'contacted',
  'discovery_call',
  'proposal',
  'won',
  'lost',
];

export const INQUIRY_TYPES: InquiryType[] = ['general', 'coaching', 'speaker', 'newsletter'];

export type InquiryRow = {
  id: string;
  type: InquiryType;
  status: InquiryStatus;
  subject: string | null;
  message: string | null;
  metadata: Record<string, unknown> | null;
  source: string | null;
  source_site: string | null;
  created_at: string;
  person_id: string;
  person_name: string | null;
  person_email: string | null;
  person_phone: string | null;
  person_company: string | null;
  person_role: string | null;
};
