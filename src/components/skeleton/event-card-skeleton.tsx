import Skeleton from './skeleton';

export default function EventCardSkeleton() {
  return (
    <div className="w-full overflow-hidden rounded-xl border bg-white">
      <Skeleton className="aspect-video w-full" />
      <div className="flex flex-col items-center justify-center px-2 py-6">
        <Skeleton className="h-8 w-56" />
        <Skeleton className="mt-1 h-6 w-24" />
        <Skeleton className="mt-4 h-6 w-40" />
      </div>
    </div>
  );
}
