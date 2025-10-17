import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-base-200 shadow-toast sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-8">
        <div className="tabs tabs-bordered">
          <Link 
            to="/" 
            className={`tab tab-bordered pb-4 pt-4 ${
              location.pathname === '/' 
                ? 'tab-active text-neutral border-neutral' 
                : 'text-base-content/70 hover:text-neutral'
            }`}
          >
            Origin
          </Link>
          <Link 
            to="/home" 
            className={`tab tab-bordered pb-4 pt-4 ${
              location.pathname === '/home' 
                ? 'tab-active text-neutral border-neutral' 
                : 'text-base-content/70 hover:text-neutral'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/leaderboard" 
            className={`tab tab-bordered pb-4 pt-4 ${
              location.pathname === '/leaderboard' 
                ? 'tab-active text-neutral border-neutral' 
                : 'text-base-content/70 hover:text-neutral'
            }`}
          >
            Leaderboard
          </Link>
          <Link 
            to="/participants" 
            className={`tab tab-bordered pb-4 pt-4 ${
              location.pathname === '/participants' 
                ? 'tab-active text-neutral border-neutral' 
                : 'text-base-content/70 hover:text-neutral'
            }`}
          >
            Participants
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;