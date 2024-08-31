import Heading from '@/components/ui/Heading';

type PageProps = {
  params: {
    city: string;
  };
};

export default function Page({ params }: PageProps) {
  const { city } = params;
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <Heading>
        {city === 'all' ? (
          'All Events'
        ) : (
          <>
            Events on <span className="capitalize">{city}</span>
          </>
        )}
      </Heading>
    </div>
  );
}
