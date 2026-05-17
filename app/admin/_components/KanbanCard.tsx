'use client';

import { Draggable } from '@hello-pangea/dnd';
import type { InquiryRow } from '@/lib/supabase';
import { TypeBadge } from './Badges';

function daysSince(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
}

export default function KanbanCard({
  inquiry,
  index,
}: {
  inquiry: InquiryRow;
  index: number;
}) {
  const days = daysSince(inquiry.created_at);
  const isStale = days > 7;

  return (
    <Draggable draggableId={inquiry.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            background: '#ffffff',
            border: '1px solid #E0E0E0',
            borderRadius: '8px',
            padding: '12px 14px',
            boxShadow: snapshot.isDragging
              ? '0 8px 24px rgba(15,42,113,0.18)'
              : '0 1px 2px rgba(0,0,0,0.04)',
            transition: snapshot.isDragging ? 'none' : 'box-shadow 0.15s ease',
            cursor: 'grab',
            ...provided.draggableProps.style,
          }}
        >
          <p
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#000',
              marginBottom: '4px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {inquiry.person_name || inquiry.person_email || '(no name)'}
          </p>
          {inquiry.person_company && (
            <p
              style={{
                fontSize: '12px',
                color: 'rgba(0,0,0,0.55)',
                marginBottom: '8px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {inquiry.person_company}
            </p>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <TypeBadge type={inquiry.type} />
            <span
              style={{
                fontSize: '11px',
                color: isStale ? '#D1458B' : 'rgba(0,0,0,0.45)',
                fontWeight: isStale ? 700 : 400,
              }}
            >
              {days === 0 ? 'today' : `${days}d`}
            </span>
          </div>
        </div>
      )}
    </Draggable>
  );
}
