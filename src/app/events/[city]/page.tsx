import EventsGrid from '@/components/event/events-grid';
import Heading from '@/components/ui/heading';
import EventsGridSkeleton from '@/components/ui/skeleton/events-grid-skeleton';
import { Suspense } from 'react';

type PageProps = {
  params: {
    city: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { city } = params;
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <Heading>
        {city === 'all' ? (
          'All Events'
        ) : (
          <>
            Events on <span className="capitalize">{city}</span>
          </>
        )}
      </Heading>

      <Suspense fallback={<EventsGridSkeleton />}>
        <EventsGrid className="mt-10" city={city} />
      </Suspense>
    </div>
  );
}
