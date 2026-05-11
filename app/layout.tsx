import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rich Pham | Executive Advisor for Scaling CEOs',
  description:
    'Former CEO and board-level operator helping founders and CEOs remove leadership bottlenecks, clarify decision ownership, and scale beyond $3M with confidence.',
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
