import { useEffect, useState } from 'react';
import { Event } from '../api/eventTypes';
import { fetchEvents } from '../api/eventApi';

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents()
      .then(setEvents)
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { events, isLoading, error };
};
