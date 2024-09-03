import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import GsapLayout from '@/components/layouts/gsap-layout';

const inter = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000',
  ),
  title: 'Vyan Insya Nur Muhammad',
  description:
    'Craft digital masterpieces: pixel-perfect, captivating, and seamlessly accessible.',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className} suppressHydrationWarning>
        <GsapLayout>{children}</GsapLayout>
      </body>
    </html>
  );
}
