import EventCardSkeleton from './event-card-skeleton';

export default function EventsGridSkeleton() {
  return (
    <div className="mt-10 grid w-full max-w-screen-lg grid-cols-1 gap-4 px-6 sm:grid-cols-2 md:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <EventCardSkeleton key={i} />
      ))}
    </div>
  );
}
