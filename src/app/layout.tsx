import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Evento',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          'relative flex h-full min-h-svh flex-col bg-zinc-100 antialiased',
          inter.className,
        )}
      >
        <Header />
        <main className="flex-1 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
