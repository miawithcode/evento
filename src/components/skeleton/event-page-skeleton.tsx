import Skeleton from './skeleton';

export default function EventPageSkeleton() {
  return (
    <div className="mx-auto max-w-screen-md space-y-16 py-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Skeleton className="aspect-video h-64 w-full rounded-lg md:h-56" />
        <div className="flex flex-col">
          <div>
            <Skeleton className="h-6 w-40" />
            <Skeleton className="mt-1 h-12 w-64" />
            <Skeleton className="mt-2 h-6 w-48" />
          </div>
          <Skeleton className="mt-auto h-10 w-full" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Skeleton className="h-10 w-36" />
        <Skeleton className="mt-4 h-5 w-full" />
        <Skeleton className="mt-1 h-5 w-full" />
        <Skeleton className="mt-1 h-5 w-full" />
        <Skeleton className="mt-1 h-5 w-full" />
        <Skeleton className="mt-1 h-5 w-1/2" />
      </div>
    </div>
  );
}
