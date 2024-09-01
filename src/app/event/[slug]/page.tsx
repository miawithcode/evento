import { getEvent } from '@/lib/server-utils';
import { Metadata } from 'next';
import Image from 'next/image';
import { ReactNode } from 'react';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const { event } = await getEvent(slug);

  return {
    title: event.name,
  };
}

export async function generateStaticParams() {
  // top 100 most popular events
  return [
    {
      slug: 'comedy-extravaganza',
    },
    {
      slug: 'dj-practice-session',
    },
  ];
}

export default async function Page({ params }: Props) {
  const { slug } = params;
  const { event } = await getEvent(slug);

  return (
    <article className="mx-auto max-w-screen-md space-y-16 py-16">
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="relative aspect-video h-64 w-full overflow-hidden rounded-lg md:h-56">
          <Image
            src={event.imageUrl}
            fill
            alt={event.name}
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
        <div className="flex h-full flex-col gap-y-10 sm:gap-y-0">
          <div>
            <p className="text-sm text-black/60">
              {new Date(event.date).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <h1 className="whitespace-nowrap text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl">
              {event.name}
            </h1>
            <p className="mt-2 text-black/90">
              Organize by <span className="italic">{event.organizerName}</span>
            </p>
          </div>
          <div className="mt-auto">
            <button className="state-effects w-full rounded bg-primary/75 py-2 capitalize">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <Section>
        <SectionHeading>About this event</SectionHeading>
        <SectionContent>{event.description}</SectionContent>
      </Section>
      <Section>
        <SectionHeading>Location</SectionHeading>
        <SectionContent>{event.location}</SectionContent>
      </Section>
    </article>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="text-center">{children}</section>;
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 text-2xl font-semibold lg:text-3xl">{children}</h2>
  );
}

function SectionContent({ children }: { children: ReactNode }) {
  return (
    <p className="mx-auto max-w-prose leading-6 text-black/75 md:text-lg">
      {children}
    </p>
  );
}
