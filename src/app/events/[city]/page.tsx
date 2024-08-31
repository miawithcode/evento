import EventsGrid from '@/components/event/events-grid';
import Heading from '@/components/ui/heading';
import { TEvent } from '@/lib/types';

type PageProps = {
  params: {
    city: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { city } = params;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
  );
  const events: TEvent[] = await response.json();

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
      <EventsGrid className="mt-10" events={events} />
    </div>
  );
}
