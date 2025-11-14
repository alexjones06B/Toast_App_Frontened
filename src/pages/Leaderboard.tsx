import type React from "react";

const Leaderboard: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="min-h-[75vh] flex flex-col justify-center">
        <div className="text-center mb-24">
          <h1 className="text-8xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Leaderboard 🏆
          </h1>
          <p className="text-3xl text-base-content/70">See who's leading the toast count!</p>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="card bg-base-100 shadow-2xl p-24 text-center">
            <div className="mb-16 text-[12rem] animate-bounce-slow">🏆</div>
            <h2 className="text-6xl font-bold mb-10">Coming Soon!</h2>
            <p className="text-2xl text-base-content/70 max-w-2xl mx-auto leading-relaxed">
              The leaderboard is currently under development. Check back soon to see the top
              toasters!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
