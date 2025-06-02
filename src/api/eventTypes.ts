export type EventStatus = "Upcoming" | "Past";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  status: EventStatus;
  registrationCount: number;
}

export interface CreateEventPayload {
  title: string;
  description: string;
  date: string;
  status: EventStatus;
}
