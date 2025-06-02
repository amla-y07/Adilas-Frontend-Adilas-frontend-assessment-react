import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  registrations: number;
}

// Mock data (you can replace this with real API)
const mockEvents: Event[] = [
  {
    id: "1",
    title: "Conference 2025",
    date: "2025-07-15",
    description: "An event all about its ecosystem.",
    registrations: 150,
  },
  {
    id: "2",
    title: "JavaScript Summit",
    date: "2025-08-20",
    description: "Deep dive into JavaScript and modern frameworks.",
    registrations: 300,
  },
];

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const foundEvent = mockEvents.find((e) => e.id === id) || null;

    setTimeout(() => {
      setEvent(foundEvent);
      setLoading(false);
    }, 800); // simulate API delay
  }, [id]);

  if (loading) {
    return (
      <div className="text-center text-lg text-gray-600 mt-10">
        Loading event details...
      </div>
    );
  }

  if (!event) {
    return (
      <div className="text-center text-red-500 font-semibold mt-10">
        Event not found.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">{event.title}</h2>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold text-gray-800">Date:</span>{" "}
        {new Date(event.date).toLocaleDateString()}
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-semibold text-gray-800">Description:</span>{" "}
        {event.description}
      </p>
      <p className="text-gray-600">
        <span className="font-semibold text-gray-800">Registrations:</span>{" "}
        {event.registrations}
      </p>
    </div>
  );
};

export default EventDetail;
