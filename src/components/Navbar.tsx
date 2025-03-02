import React from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Portfolio</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-indigo-600">
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;