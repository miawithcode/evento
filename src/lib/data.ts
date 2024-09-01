import { capitalize } from './utils';
import prisma from './db';
import { notFound } from 'next/navigation';

export async function getEvents(city: string) {
  /**
   * revalidate
   */
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
  //   {
  //     next: { revalidate: 60 * 5 },
  //   },
  // );

  /**
   * no cache
   */
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
  //   {
  //     cache: 'no-cache',
  //   },
  // );
  const events = await prisma.event.findMany({
    where: {
      city: city === 'all' ? undefined : capitalize(city),
    },
    orderBy: {
      date: 'asc',
    },
  });

  if (!events) {
    return notFound();
  }

  return { events };
}

export async function getEvent(slug: string) {
  const event = await prisma.event.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return { event };
}
