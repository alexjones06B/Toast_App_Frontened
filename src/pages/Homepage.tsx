import type React from "react";
import Hero from "../components/homepage/Hero";
import QuickStats from "../components/homepage/QuickStats";
import RecentToasts from "../components/homepage/RecentToasts";

const Homepage: React.FC = () => {
  return (
    <div className="space-y-professional-lg w-full">
      <div className="animate-fade-in">
        <Hero />
      </div>
      <div className="animate-slide-in-up animate-delay-200">
        <QuickStats />
      </div>
      <div className="animate-slide-in-up animate-delay-400">
        <RecentToasts />
      </div>
    </div>
  );
};

export default Homepage;
