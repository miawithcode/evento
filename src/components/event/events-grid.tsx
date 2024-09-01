import EventCard from './event-card';
import { cn } from '@/lib/utils';
import { getEvents } from '@/lib/data';
import PaginationControls from '../pagination-controls';
import { pageSize } from '@/lib/constants';

type EventsGridProps = {
  city: string;
  className?: string;
  page?: number;
};

export default async function EventsGrid({
  city,
  className,
  page = 1,
}: EventsGridProps) {
  const { events, totalCount } = await getEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : '';
  const nextPath =
    totalCount > page * pageSize ? `/events/${city}?page=${page + 1}` : '';

  return (
    <>
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

      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </>
  );
}
