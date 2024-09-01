import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

type PaginationControlsProps = {
  nextPath: string;
  previousPath: string;
};

export default function PaginationControls({
  nextPath,
  previousPath,
}: PaginationControlsProps) {
  return (
    <section className="mt-4 flex w-full max-w-screen-lg justify-between px-6">
      {previousPath ? (
        <PaginationButton href={previousPath}>
          <ArrowLeftIcon />
          prev
        </PaginationButton>
      ) : (
        <div />
      )}
      {nextPath && (
        <PaginationButton href={nextPath}>
          next
          <ArrowRightIcon />
        </PaginationButton>
      )}
    </section>
  );
}

function PaginationButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded border bg-white px-6 py-2 capitalize opacity-75 hover:opacity-100"
    >
      {children}
    </Link>
  );
}
