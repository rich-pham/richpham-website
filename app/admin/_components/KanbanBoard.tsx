'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { DragDropContext, type DropResult } from '@hello-pangea/dnd';
import {
  INQUIRY_STATUSES,
  type InquiryRow,
  type InquiryStatus,
} from '@/lib/supabase';
import KanbanColumn from './KanbanColumn';

export default function KanbanBoard({ inquiries: initial }: { inquiries: InquiryRow[] }) {
  const [inquiries, setInquiries] = useState(initial);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [, startTransition] = useTransition();

  const grouped: Record<InquiryStatus, InquiryRow[]> = INQUIRY_STATUSES.reduce(
    (acc, s) => {
      acc[s] = [];
      return acc;
    },
    {} as Record<InquiryStatus, InquiryRow[]>
  );
  for (const inq of inquiries) {
    if (grouped[inq.status]) grouped[inq.status].push(inq);
  }

  async function handleDragEnd(result: DropResult) {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const nextStatus = destination.droppableId as InquiryStatus;
    if (!INQUIRY_STATUSES.includes(nextStatus)) return;

    const prev = inquiries;
    setInquiries((rows) =>
      rows.map((r) => (r.id === draggableId ? { ...r, status: nextStatus } : r))
    );
    setError(null);

    try {
      const res = await fetch(`/api/inquiries/${draggableId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus }),
      });
      if (!res.ok) {
        setInquiries(prev);
        setError('Failed to update status. Please try again.');
      } else {
        startTransition(() => router.refresh());
      }
    } catch {
      setInquiries(prev);
      setError('Network error while updating status.');
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {error && (
        <p
          style={{
            color: '#c0392b',
            padding: '10px 14px',
            background: '#fff',
            border: '1px solid #f5c6cb',
            borderRadius: '6px',
            fontSize: '13px',
          }}
        >
          {error}
        </p>
      )}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            paddingBottom: '8px',
          }}
        >
          {INQUIRY_STATUSES.map((status) => (
            <KanbanColumn
              key={status}
              status={status}
              inquiries={grouped[status]}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
