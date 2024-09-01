import { TEvent } from '@/lib/types';
import EventCard from './event-card';
import { cn } from '@/lib/utils';

type EventsGridProps = {
  city: string;
  className?: string;
};

export default async function EventsGrid({ city, className }: EventsGridProps) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
  );
  const events: TEvent[] = await response.json();

  return (
    <section
      className={cn(
        'grid w-full max-w-screen-lg grid-cols-1 gap-4 px-6 sm:grid-cols-2 md:grid-cols-3',
        className,
      )}
    >
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
