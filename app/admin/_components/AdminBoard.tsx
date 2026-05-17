'use client';

import { useState } from 'react';
import type { InquiryRow } from '@/lib/supabase';
import InquiryTable from './InquiryTable';
import KanbanBoard from './KanbanBoard';

type View = 'list' | 'kanban';

const toggleBtnBase: React.CSSProperties = {
  padding: '8px 18px',
  fontSize: '12px',
  fontWeight: 800,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  fontFamily: "'NunitoSans', sans-serif",
  border: 'none',
  cursor: 'pointer',
  background: 'transparent',
  color: 'rgba(0,0,0,0.55)',
  transition: 'background 0.15s ease, color 0.15s ease',
};

export default function AdminBoard({ inquiries }: { inquiries: InquiryRow[] }) {
  const [view, setView] = useState<View>('list');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div
        style={{
          display: 'inline-flex',
          alignSelf: 'flex-end',
          border: '1px solid #D7DBE6',
          borderRadius: '8px',
          overflow: 'hidden',
          background: '#ffffff',
        }}
      >
        <button
          type="button"
          onClick={() => setView('list')}
          style={{
            ...toggleBtnBase,
            background: view === 'list' ? '#001740' : 'transparent',
            color: view === 'list' ? '#ffffff' : 'rgba(0,0,0,0.55)',
          }}
        >
          List
        </button>
        <button
          type="button"
          onClick={() => setView('kanban')}
          style={{
            ...toggleBtnBase,
            background: view === 'kanban' ? '#001740' : 'transparent',
            color: view === 'kanban' ? '#ffffff' : 'rgba(0,0,0,0.55)',
          }}
        >
          Kanban
        </button>
      </div>

      {view === 'list' ? (
        <InquiryTable inquiries={inquiries} />
      ) : (
        <KanbanBoard inquiries={inquiries} />
      )}
    </div>
  );
}
