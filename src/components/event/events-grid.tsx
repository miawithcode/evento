import { TEvent } from '@/lib/types';
import EventCard from './event-card';
import { cn } from '@/lib/utils';

type EventsGridProps = {
  events: TEvent[];
  className?: string;
};

export default function EventsGrid({ events, className }: EventsGridProps) {
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
