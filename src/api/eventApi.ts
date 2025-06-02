import axios from 'axios';

const API_URL = 'http://localhost:3001/events';

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'upcoming' | 'past' | 'cancelled';
  registrations?: number;
}

export const getEvents = async (): Promise<Event[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getEvent = async (id: string): Promise<Event> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createEvent = async (event: Omit<Event, 'id'>): Promise<Event> => {
  const response = await axios.post(API_URL, event);
  return response.data;
};