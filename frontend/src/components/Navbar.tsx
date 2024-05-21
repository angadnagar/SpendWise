
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-white font-bold text-lg hover:text-green-300">
                $pendwise
              </Link>
            </div>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <Link
                to="/"
                className="text-white hover:font-bold hover:text-green-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>

              <Link
                to="/dashboard"
                className="text-white hover:font-bold hover:text-green-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </Link>

              <Link
                to="/pricing"
                className="text-white hover:font-bold hover:text-green-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Pricing
              </Link>

              <Link
                to="/about"
                className="text-white hover:font-bold hover:text-green-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                About us
              </Link>

              <Link
                to="/signin"
                className="text-white hover:font-bold hover:text-green-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="text-white hover:font-bold hover:text-green-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

