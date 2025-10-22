import type React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="hero min-h-96 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-toast">
      <div className="hero-content text-center px-8 py-16">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-neutral mb-6">Welcome to Toast App</h1>
          <p className="text-xl text-base-content/80 mb-8 leading-relaxed max-w-xl mx-auto">
            The ultimate platform for toasting competitions and community engagement. Join us to
            celebrate the art of making perfect toast!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/participants"
              className="btn btn-neutral btn-lg shadow-toast hover:shadow-toast-hover hover:-translate-y-1 transition-all"
            >
              View Participants
            </Link>
            <Link
              to="/leaderboard"
              className="btn btn-primary btn-lg shadow-toast hover:shadow-toast-hover hover:-translate-y-1 transition-all"
            >
              See Leaderboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
