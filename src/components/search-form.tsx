'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  search: z.string().min(1),
});

type FormFields = z.infer<typeof schema>;

export default function SearchForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    router.push(`/events/${data.search}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full sm:w-[580px]">
      <input
        {...register('search')}
        className="ring-primary/50 h-12 w-full rounded-lg border border-zinc-800 bg-white/[7%] px-4 shadow outline-none transition focus:bg-white/10 focus:ring-2"
        type="text"
        placeholder="Search events in any city"
        spellCheck={false}
      />
    </form>
  );
}
