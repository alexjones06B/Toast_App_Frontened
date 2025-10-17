import type React from "react";

const Leaderboard: React.FC = () => {
  return (
    <div className="participants-page">
      <div className="participants-header">
        <h1 className="page-title">Leaderboard</h1>
        <p className="page-description">See who's making the best toast in our community!</p>
      </div>

      <div className="participants-list-section">
        <h2 className="section-title">Coming Soon</h2>
        <p style={{ textAlign: "center", color: "var(--color-text-light)", fontSize: "1.1rem" }}>
          The leaderboard feature is currently under development.
        </p>
      </div>
    </div>
  );
};

export default Leaderboard;
