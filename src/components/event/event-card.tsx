'use client';

import { TEvent } from '@/lib/types';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

type EventCardProps = {
  event: TEvent;
};

const MotionLink = motion(Link);

export default function EventCard({ event }: EventCardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <MotionLink
      ref={ref}
      href={`/event/${event.slug}`}
      className="state-effects relative flex w-full flex-col overflow-hidden rounded-xl border bg-white"
      style={{
        // @ts-ignore
        scale: scaleProgress,
        // @ts-ignore
        opacity: opacityProgress,
      }}
      initial={{ scale: 0.8, opacity: 0 }}
    >
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

      <section className="absolute left-3 top-3 flex h-12 w-12 flex-col items-center justify-center rounded-md bg-white/95 shadow-lg">
        <p className="-mb-[5px] text-xl font-semibold">
          {new Date(event.date).toLocaleDateString('en-US', {
            day: '2-digit',
          })}
        </p>
        <p className="text-xs uppercase text-primary">
          {new Date(event.date).toLocaleDateString('en-US', {
            month: 'short',
          })}
        </p>
      </section>
    </MotionLink>
  );
}
