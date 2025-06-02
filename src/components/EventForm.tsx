// src/api/eventApi.ts
import { Event, CreateEventPayload } from "./eventTypes";

const BASE_URL = "http://localhost:3001/events";

export const fetchEvents = async (): Promise<Event[]> => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch events");
  return res.json();
};

export const fetchEventById = async (id: string): Promise<Event> => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("Event not found");
  return res.json();
};

export const createEvent = async (data: CreateEventPayload): Promise<Event> => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, registrationCount: 0 }),
  });
  if (!res.ok) throw new Error("Failed to create event");
  return res.json();
};
