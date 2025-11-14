import type React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Origin", icon: "🌟" },
    { path: "/home", label: "Home", icon: "🏠" },
    { path: "/leaderboard", label: "Leaderboard", icon: "🏆" },
    { path: "/participants", label: "Participants", icon: "👥" }
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-16 z-40 border-b border-primary/10 backdrop-filter backdrop-blur-lg">
      <div className="content-wrapper">
        <div className="tabs tabs-bordered flex-center sm:flex-start">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`tab tab-bordered pb-4 pt-4 text-base font-semibold transition-all duration-300 flex items-center gap-2 hover-lift ${location.pathname === item.path
                  ? "tab-active text-neutral border-primary border-b-4 gradient-text-primary"
                  : "text-neutral/60 hover:text-neutral hover:border-primary/50"
                }`}
            >
              <span className={`text-lg transition-transform duration-300 ${location.pathname === item.path ? "animate-bounce-slow" : "hover:scale-110"
                }`}>
                {item.icon}
              </span>
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
