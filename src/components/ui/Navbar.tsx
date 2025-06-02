import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-600">
            Event Dashboard
          </Link>
          <div className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/create-event"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              Create Event
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};