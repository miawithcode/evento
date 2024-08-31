import Link from 'next/link';
import Logo from '../Logo';

const routes = [
  { href: '/', label: 'Home' },
  { href: '/events/all', label: 'All Events' },
];

export default function Header() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex h-14 w-full max-w-screen-xl items-center justify-between px-2 md:px-6">
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
      </div>
    </header>
  );
}
