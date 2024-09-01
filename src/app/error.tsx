'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-xl font-medium">Something went wrong</h1>
      <p className="mt-2">
        Please{' '}
        <button onClick={reset} className="underline">
          try again
        </button>{' '}
        later or{' '}
        <Link href="/" className="underline">
          go back home
        </Link>
      </p>
    </div>
  );
}
