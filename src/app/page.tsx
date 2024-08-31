import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-auto flex h-full w-full max-w-screen-xl flex-col items-center justify-center px-2 md:px-4">
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

      <form className="w-full sm:w-[580px]">
        <input
          className="ring-primary/50 h-12 w-full rounded-lg border border-zinc-800 bg-white/[7%] px-4 shadow outline-none transition focus:bg-white/10 focus:ring-2"
          type="text"
          placeholder="Search events in any city"
          spellCheck={false}
        />
      </form>

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
