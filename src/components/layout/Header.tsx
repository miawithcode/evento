import Link from 'next/link';
import Logo from '../Logo';

const routes = [
  { href: '/', label: 'Home' },
  { href: '/events/all', label: 'All Events' },
];

export default function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-black/10">
      <Logo />

      <nav>
        <ul className="flex gap-x-4 text-sm md:gap-x-6">
          {routes.map((route) => (
            <li
              key={route.href}
              className="text-black/50 transition hover:text-black"
            >
              <Link href={route.href}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
