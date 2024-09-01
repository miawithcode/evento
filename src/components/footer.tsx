import Link from 'next/link';

const routes = [
  { href: '/legal/terms-conditions', label: 'Terms & Conditions' },
  { href: '/legal/privacy-policy', label: 'Privacy Policy' },
];

export default function Footer() {
  return (
    <footer className="flex min-h-16 items-center justify-between border-t border-black/10 text-xs text-black/50">
      <p>&copy;{new Date().getFullYear()} Mia</p>

      <ul className="flex items-center gap-x-6">
        {routes.map((route) => (
          <li key={route.href}>
            <Link href={route.href}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
