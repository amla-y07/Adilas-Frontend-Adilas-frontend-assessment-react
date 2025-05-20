import { useEffect, useState } from "react";

export default function Dashboard() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <ul className="space-y-2">
        {events.map((event) => (
          <li key={event.id} className="border p-4 rounded shadow">
            <div className="font-semibold">{event.title}</div>
            <div>{event.date}</div>
            <div>{event.status}</div>
            <div>Registered: {event.registrationCount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
