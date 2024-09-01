// npm install server-only
import 'server-only';

import { capitalize } from './utils';
import prisma from './db';
import { notFound } from 'next/navigation';
import { pageSize } from './constants';
import { unstable_cache } from 'next/cache';

export const getEvents = unstable_cache(async (city: string, page = 1) => {
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
      city: city === 'all' ? undefined : { equals: city, mode: 'insensitive' },
    },
    orderBy: {
      date: 'asc',
    },
    take: pageSize,
    skip: (page - 1) * pageSize,
  });

  let totalCount;
  if (city === 'all') {
    totalCount = await prisma.event.count();
  } else {
    totalCount = await prisma.event.count({
      where: {
        city: capitalize(city),
      },
    });
  }

  if (!events) {
    return notFound();
  }

  return { events, totalCount };
});

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.event.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return { event };
});
