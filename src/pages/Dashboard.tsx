import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

type Event = {
  id: string;
  title: string;
  date: string;
  status: "Upcoming" | "Past";
  registrationCount: number;
};

const Dashboard = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const statusFilter = searchParams.get("status") || "All";

  useEffect(() => {
    // Simulated API data — replace with real API call if needed
    const mockEvents: Event[] = [
      {
        id: "1",
        title: "React Conference 2025",
        date: "2025-07-15",
        status: "Upcoming",
        registrationCount: 150,
      },
      {
        id: "2",
        title: "JavaScript Summit",
        date: "2024-04-10",
        status: "Past",
        registrationCount: 200,
      },
      {
        id: "3",
        title: "Node.js Workshop",
        date: "2025-09-01",
        status: "Upcoming",
        registrationCount: 95,
      },
    ];

    setEvents(mockEvents);
  }, []);

  const filteredEvents = events
    .filter((event) => {
      if (statusFilter === "All") return true;
      return event.status === statusFilter;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const handleFilterChange = (status: string) => {
    setSearchParams(status === "All" ? {} : { status });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Event Dashboard</h1>

      {/* Filter Controls */}
      <div className="mb-4 flex gap-4">
        {["All", "Upcoming", "Past"].map((status) => (
          <button
            key={status}
            onClick={() => handleFilterChange(status)}
            className={`px-4 py-2 rounded-md font-medium transition ${
              statusFilter === status
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Event List */}
      <div className="grid gap-4">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              <Link to={`/event/${event.id}`} className="hover:underline">
                {event.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              📅 {new Date(event.date).toLocaleDateString()}
            </p>
            <p
              className={`text-sm font-medium mt-1 ${
                event.status === "Upcoming" ? "text-green-600" : "text-red-500"
              }`}
            >
              Status: {event.status}
            </p>
            <p className="text-sm mt-1 text-gray-700">
              👥 Registrations: {event.registrationCount}
            </p>
          </div>
        ))}

        {filteredEvents.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
