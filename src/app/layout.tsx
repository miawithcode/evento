import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Evento - Find events around you',
  description: 'Browse more than 10,000 events worldwide',
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
          'relative h-full overflow-y-scroll bg-zinc-100 antialiased',
          inter.className,
        )}
      >
        <Container>
          <Header />
          <main className="flex-1 flex-grow">{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
