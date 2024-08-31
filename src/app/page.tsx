import SearchForm from '@/components/search-form';
import Heading from '@/components/ui/heading';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Heading>Find events around you</Heading>
      <p className="mb-12 mt-7 text-xl opacity-75 md:text-2xl lg:text-3xl">
        Browse more than{' '}
        <span className="font-bold italic text-primary underline">
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
