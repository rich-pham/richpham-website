'use client';

import { Droppable, type DroppableProvided, type DroppableStateSnapshot } from '@hello-pangea/dnd';
import { STATUS_META, type InquiryRow, type InquiryStatus } from '@/lib/supabase';
import KanbanCard from './KanbanCard';

export default function KanbanColumn({
  status,
  inquiries,
}: {
  status: InquiryStatus;
  inquiries: InquiryRow[];
}) {
  const meta = STATUS_META[status];

  return (
    <div
      style={{
        width: '280px',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        background: '#F4F4F4',
        border: '1px solid #E0E0E0',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 14px',
          background: '#ffffff',
          borderBottom: '1px solid #E0E0E0',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: meta.color,
          }}
        />
        <h3
          style={{
            fontSize: '13px',
            fontWeight: 800,
            color: '#0F2A71',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          {meta.label}
        </h3>
        <span
          style={{
            marginLeft: 'auto',
            background: '#F4F4F4',
            color: 'rgba(0,0,0,0.6)',
            fontSize: '12px',
            fontWeight: 700,
            padding: '2px 10px',
            borderRadius: '999px',
          }}
        >
          {inquiries.length}
        </span>
      </div>

      <Droppable droppableId={status}>
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              flex: 1,
              minHeight: '240px',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              background: snapshot.isDraggingOver ? 'rgba(40,123,232,0.06)' : 'transparent',
              transition: 'background 0.15s ease',
            }}
          >
            {inquiries.map((inquiry, index) => (
              <KanbanCard key={inquiry.id} inquiry={inquiry} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
