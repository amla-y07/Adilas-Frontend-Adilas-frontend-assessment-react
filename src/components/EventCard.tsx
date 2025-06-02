import { Link } from 'react-router-dom';
import { Event } from '../api/eventTypes';

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="p-4 border rounded shadow hover:shadow-lg transition">
    <h3 className="text-xl font-semibold">{event.title}</h3>
    <p className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
    <p>Status: {event.status}</p>
    <p>Registrations: {event.registrationCount}</p>
    <Link to={`/event/${event.id}`} className="text-blue-600 underline mt-2 block">
      View Details
    </Link>
  </div>
);

export default EventCard;
