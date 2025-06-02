import { Event } from '../api/eventTypes';

const EventStats: React.FC<{ events: Event[] }> = ({ events }) => {
  const total = events.length;
  const registrations = events.reduce((acc, e) => acc + e.registrationCount, 0);

  return (
    <div className="mb-4 text-sm text-gray-700">
      <p>Total Events: {total}</p>
      <p>Total Registrations: {registrations}</p>
    </div>
  );
};

export default EventStats;
