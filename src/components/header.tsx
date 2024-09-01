'use client';

import Link from 'next/link';
import Logo from './logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const routes = [
  { href: '/', label: 'Home' },
  { href: '/events/all', label: 'All Events' },
];

export default function Header() {
  const currentPath = usePathname();

  return (
    <header className="flex min-h-14 items-center justify-between border-b border-black/10">
      <Logo />

      <nav className="h-full">
        <ul className="flex h-full gap-x-4 text-sm md:gap-x-6">
          {routes.map((route) => (
            <li
              key={route.href}
              className={cn(
                'relative flex items-center text-black/50 transition hover:text-black',
                {
                  'text-black': currentPath === route.href,
                },
              )}
            >
              <Link href={route.href}>{route.label}</Link>

              {currentPath === route.href && (
                <motion.div
                  layoutId="header-active-link"
                  className="absolute bottom-0 h-1 w-full bg-primary"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
