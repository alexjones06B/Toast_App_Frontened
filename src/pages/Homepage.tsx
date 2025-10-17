import React from 'react';
import Hero from '../components/homepage/Hero';
import QuickStats from '../components/homepage/QuickStats';
import RecentToasts from '../components/homepage/RecentToasts';

const Homepage: React.FC = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <QuickStats />
      <RecentToasts />
    </div>
  );
};

export default Homepage;