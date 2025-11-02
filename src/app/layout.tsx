import type { Metadata, Viewport } from 'next';
import { gilroySemiBold, gilroyRegular } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Horizon - Professional Design System',
  description:
    'A pixel-perfect, professional design system built with Next.js, TypeScript, and Tailwind CSS',
  keywords: [
    'design system',
    'nextjs',
    'typescript',
    'tailwind',
    'professional',
  ],
  authors: [{ name: 'Horizon Team' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${gilroySemiBold.variable} ${gilroyRegular.variable} font-gilroy antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
