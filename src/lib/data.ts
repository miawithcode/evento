import { Event } from '@prisma/client';

export async function getEvents(city: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    {
      next: { revalidate: 60 * 5 },
    },
  );
  /**
   * no cache
   */
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
  //   {
  //     cache: 'no-cache',
  //   },
  // );
  const events: Event[] = await response.json();
  return { events };
}

export async function getEvent(slug: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`,
  );
  const event: Event = await response.json();
  return { event };
}
