import { useState, useEffect } from 'react';
import { type Tour, tourSchema } from './types';

const url = 'https://www.course-api.com/react-tours-project';

function Component() {
  // tours
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch tours...`);
        }

        const rawData: Tour[] = await response.json();
        const result = tourSchema.array().safeParse(rawData);

        if (!result.success) {
          throw new Error(`Failed to parse tours`);
        }
      } catch (error) {
        const message =
          error instanceof Error ? error.message : 'there was an error...';
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>Error: {isError}</h3>;
  }

  return (
    <div>
      <h2 className="mb-1">Tours</h2>
      {tours.map((t) => (
        <p key={t.id}>{t.name}</p>
      ))}
    </div>
  );
}
export default Component;
