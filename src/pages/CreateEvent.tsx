import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreateEvent = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    status: "Upcoming" as EventStatus,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitError, setSubmitError] = useState<string>("");

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.title.trim()) newErrors.title = "Title is required.";
    if (!form.description.trim()) newErrors.description = "Description is required.";
    if (!form.date) newErrors.date = "Date is required.";
    if (!form.status) newErrors.status = "Status is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validate()) return;

    try {
      await createEvent(form);
      navigate("/dashboard");
    } catch (error) {
      setSubmitError("Failed to create event. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Create New Event</h2>

      {submitError && <p className="text-red-600 mb-4">{submitError}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/* Date */}
        <div>
          <label className="block font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
        </div>

        {/* Status */}
        <div>
          <label className="block font-medium">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option value="Upcoming">Upcoming</option>
            <option value="Past">Past</option>
          </select>
          {errors.status && <p className="text-red-500 text-sm">{errors.status}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
