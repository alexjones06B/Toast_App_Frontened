import type React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="navbar bg-white shadow-md sticky top-0 z-50 border-b-2 border-primary/20">
      <div className="navbar-start">
        <Link
          to="/"
          className="btn btn-ghost text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <span className="text-3xl animate-float">🍞</span>
          <span className="hidden sm:inline">Toast App</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="flex items-center gap-4 text-neutral/60">
          <span className="text-sm font-medium">Security Awareness Platform</span>
        </div>
      </div>
      <div className="navbar-end">
        <button
          type="button"
          className="btn btn-neutral shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
        >
          <span className="text-lg">+</span>
          <span className="hidden sm:inline">New Toast</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
