import type React from "react";

const QuickStats: React.FC = () => {
  return (
    <section className="content-area">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-primary mb-4">
          Quick Stats
        </h2>
        <div className="flex items-center justify-center gap-2 text-2xl">
          <span className="animate-bounce-slow">📊</span>
          <span className="text-base-content/60">Real-time platform metrics</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="stat bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 py-8 text-center border border-primary/10 group animate-scale-in">
          <div className="stat-value text-5xl sm:text-6xl lg:text-7xl gradient-text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
            42
          </div>
          <div className="stat-title text-lg sm:text-xl uppercase tracking-widest font-semibold text-neutral/80">
            Total Participants
          </div>
          <div className="mt-2 text-sm text-neutral/60">
            <span className="inline-flex items-center gap-1">
              <span className="text-green-500">↗️</span>
              <span>+12 this week</span>
            </span>
          </div>
        </div>

        <div className="stat bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 py-8 text-center border border-secondary/10 group animate-scale-in animate-delay-100">
          <div className="stat-value text-5xl sm:text-6xl lg:text-7xl gradient-text-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
            156
          </div>
          <div className="stat-title text-lg sm:text-xl uppercase tracking-widest font-semibold text-neutral/80">
            Total Toasts
          </div>
          <div className="mt-2 text-sm text-neutral/60">
            <span className="inline-flex items-center gap-1">
              <span className="text-green-500">↗️</span>
              <span>+28 this week</span>
            </span>
          </div>
        </div>

        <div className="stat bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 py-8 text-center border border-accent/10 group animate-scale-in animate-delay-200">
          <div className="stat-value text-4xl sm:text-5xl lg:text-6xl gradient-text-full mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center gap-2">
            <span className="animate-pulse-glow">🎯</span>
            <span>Sarah</span>
          </div>
          <div className="stat-title text-lg sm:text-xl uppercase tracking-widest font-semibold text-neutral/80">
            Most Toasted
          </div>
          <div className="mt-2 text-sm text-neutral/60">
            <span className="inline-flex items-center gap-1">
              <span className="text-yellow-500">🏆</span>
              <span>23 toasts</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
