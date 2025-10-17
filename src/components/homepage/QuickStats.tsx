import React from 'react';

interface StatData {
  value: string | number;
  label: string;
}

const QuickStats: React.FC = () => {
  const stats: StatData[] = [
    { value: 24, label: 'Total Participants' },
    { value: 156, label: 'Total Toasts' },
    { value: 4.5, label: 'Average Rating' },
    { value: '🏆', label: 'Top Toaster' },
  ];

  return (
    <div className="mb-12">
      <h3 className="text-3xl font-bold text-neutral mb-6">Quick Stats</h3>
      <div className="stats stats-vertical lg:stats-horizontal shadow-toast w-full bg-base-200">
        {stats.map((stat, index) => (
          <div key={index} className="stat bg-base-200 hover:bg-base-300 transition-all hover:-translate-y-1 hover:shadow-toast-hover">
            <div className={`stat-value text-neutral ${typeof stat.value === 'string' ? 'text-4xl' : ''}`}>
              {stat.value}
            </div>
            <div className="stat-title text-base-content/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickStats;