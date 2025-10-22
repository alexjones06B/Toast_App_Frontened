import type React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="navbar bg-gradient-to-r from-primary to-secondary shadow-toast sticky top-0 z-50">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl font-bold text-neutral">
          🍞 Toast App
        </Link>
      </div>
      <div className="navbar-end">
        <button
          type="button"
          className="btn btn-neutral shadow-toast hover:shadow-toast-hover hover:-translate-y-0.5 transition-all"
        >
          New Toast
        </button>
      </div>
    </div>
  );
};

export default Header;
