import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-center bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-xl shadow-lg text-white">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
        Welcome to <span className="underline decoration-yellow-300">Adilas</span> Event Management
      </h1>
      <p className="text-xl max-w-3xl mx-auto mb-12 drop-shadow-md">
        Streamline your event planning with an all-in-one platform that empowers you to create, manage, and analyze your events like never before.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-yellow-300">Events Here..</h2>
          <p className="text-white/90">
            Design and launch events easily with customizable options to fit your needs.
          </p>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-yellow-300">Manage Registrations</h2>
          <p className="text-white/90">
            Seamlessly track attendee sign-ups and manage your event capacity in real-time.
          </p>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-yellow-300">View Analytics</h2>
          <p className="text-white/90">
            Gain valuable insights with detailed analytics to make data-driven decisions.
          </p>
        </div>
      </div>

      <div className="space-x-8">
        <Link
          to="/create"
          className="inline-block px-8 py-4 bg-yellow-400 text-indigo-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 hover:shadow-xl transition duration-300"
        >
          Create Your First Event
        </Link>
        <Link
          to="/dashboard"
          className="inline-block px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400 hover:text-indigo-900 hover:shadow-lg transition duration-300"
        >
          Explore Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
