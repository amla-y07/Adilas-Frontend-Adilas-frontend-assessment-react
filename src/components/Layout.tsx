import React from 'react';
import { Navbar } from './ui/Navbar';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-8">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center">© 2023 Event Dashboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};