import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CreateEvent from './pages/CreateEvent';
import EventDetail from './pages/EventDetail';
import Home from './pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,  // Make sure Home renders <Outlet />
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'create-event',
        element: <CreateEvent />,
      },
      {
        path: 'event/:id',
        element: <EventDetail />,
      },
    ],
  },
]);
