import React from 'react';
import Hero from '../components/homepage/Hero';
import QuickStats from '../components/homepage/QuickStats';
import RecentToasts from '../components/homepage/RecentToasts';

type PageType = "home" | "participants" | "leaderboard";

interface HomepageProps {
  onNavigate?: (page: PageType) => void;
}

const Homepage: React.FC<HomepageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12">
      <Hero />
      <QuickStats />
      <RecentToasts />
    </div>
  );
};

export default Homepage;
