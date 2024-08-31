import { TEvent } from '@/lib/types';
import Image from 'next/image';

type EventCardProps = {
  event: TEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-xl border bg-white">
      <div className="relative aspect-video w-full">
        <Image
          alt={event.name}
          fill
          src={event.imageUrl}
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center px-2 py-6">
        <h2 className="text-xl font-semibold">{event.name}</h2>
        <p className="italic text-black/75">{event.organizerName}</p>
        <p className="mt-4 text-sm text-black/50">{event.location}</p>
      </div>
    </article>
  );
}
