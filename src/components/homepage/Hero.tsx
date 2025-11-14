import type React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="hero min-h-[700px] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl shadow-2xl">
      <div className="hero-content text-center section-padding">
        <div className="max-w-5xl space-y-professional">
          <div className="animate-scale-in">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Welcome to Toast App!
              <span className="block text-5xl sm:text-6xl lg:text-7xl mt-4 animate-bounce-slow">
                🍞
              </span>
            </h1>
          </div>

          <div className="animate-fade-in animate-delay-200">
            <p className="text-xl sm:text-2xl lg:text-3xl text-base-content/80 leading-relaxed max-w-4xl mx-auto">
              Track, celebrate, and learn from security awareness moments in a fun and engaging way.
              <span className="block mt-2 font-medium text-primary">
                Join our community of security-conscious individuals!
              </span>
            </p>
          </div>

          <div className="animate-slide-in-up animate-delay-400">
            <div className="flex gap-6 justify-center flex-wrap pt-8">
              <Link
                to="/participants"
                className="btn btn-neutral btn-lg shadow-toast hover:shadow-toast-hover hover:-translate-y-2 transition-all duration-300 text-lg sm:text-xl px-8 sm:px-12 py-4 group"
              >
                <span className="group-hover:scale-110 transition-transform">👥</span>
                View Participants
              </Link>
              <Link
                to="/leaderboard"
                className="btn btn-outline btn-lg shadow-toast hover:shadow-toast-hover hover:-translate-y-2 transition-all duration-300 text-lg sm:text-xl px-8 sm:px-12 py-4 group border-2 border-neutral hover:bg-neutral hover:text-white"
              >
                <span className="group-hover:scale-110 transition-transform">🏆</span>
                Check Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
