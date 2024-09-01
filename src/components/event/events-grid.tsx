import EventCard from './event-card';
import { cn } from '@/lib/utils';
import { getEvents } from '@/lib/data';

type EventsGridProps = {
  city: string;
  className?: string;
};

export default async function EventsGrid({ city, className }: EventsGridProps) {
  const { events } = await getEvents(city);

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
