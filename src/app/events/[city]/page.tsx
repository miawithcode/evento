import EventsGrid from '@/components/event/events-grid';
import Heading from '@/components/ui/heading';
import EventsGridSkeleton from '@/components/ui/skeleton/events-grid-skeleton';
import { capitalize } from '@/lib/utils';
import { Metadata } from 'next';
import { Suspense } from 'react';

type Props = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const { city } = params;

  return {
    title: city === 'all' ? `All Events` : `Events in ${capitalize(city)}`,
  };
}

export default async function Page({ params }: Props) {
  const { city } = params;
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <Heading>
        {city === 'all' ? (
          'All Events'
        ) : (
          <>
            Events in <span className="capitalize">{city}</span>
          </>
        )}
      </Heading>

      <Suspense fallback={<EventsGridSkeleton />}>
        <EventsGrid className="mt-10" city={city} />
      </Suspense>
    </div>
  );
}
