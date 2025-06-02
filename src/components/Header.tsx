import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Adilas Events Management
        </h1>
        <nav className="space-x-6">
          <Link
            to="/"
            className={`text-gray-300 hover:text-yellow-400 transition ${
              location.pathname === "/" ? "text-yellow-400 font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className={`text-gray-300 hover:text-yellow-400 transition ${
              location.pathname === "/dashboard"
                ? "text-yellow-400 font-semibold"
                : ""
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/create"
            className={`text-gray-300 hover:text-yellow-400 transition ${
              location.pathname === "/create" ? "text-yellow-400 font-semibold" : ""
            }`}
          >
            Event
          </Link>
          <Link
            to="/event/1"
            className={`text-gray-300 hover:text-yellow-400 transition ${
              location.pathname === "/event/1" ? "text-yellow-400 font-semibold" : ""
            }`}
          >
            Detail
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
