interface Props {
  currentFilter: string;
  onChange: (status: string) => void;
}

const EventFilter: React.FC<Props> = ({ currentFilter, onChange }) => (
  <div className="space-x-2 mb-4">
    {['All', 'Upcoming', 'Past'].map(status => (
      <button
        key={status}
        onClick={() => onChange(status)}
        className={`px-4 py-2 rounded ${currentFilter === status ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
      >
        {status}
      </button>
    ))}
  </div>
);

export default EventFilter;
