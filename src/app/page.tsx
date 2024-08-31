import SearchForm from '@/components/SearchForm';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl">
        Find events around you
      </h1>
      <p className="mb-12 mt-7 text-xl opacity-75 md:text-2xl lg:text-3xl">
        Browse more than{' '}
        <span className="text-primary font-bold italic underline">
          10,000 events
        </span>{' '}
        worldwide
      </p>

      <SearchForm />

      <section className="mt-4 flex gap-x-2 text-sm text-black/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </div>
  );
}
