import type React from "react";

type PageType = 'home' | 'participants' | 'leaderboard';

interface HomepageProps {
  onNavigate?: (page: PageType) => void;
}

const Homepage: React.FC<HomepageProps> = ({ onNavigate }) => {
  return (
    <>
      <section className="hero">
        <h2 className="hero-title">Welcome to Toast App</h2>
        <p className="hero-description">
          Track who's been toasted in your office! When someone leaves their laptop unlocked,
          colleagues can send toast messages from their account. Keep score of who's the most careless with their security!
        </p>
        <div className="hero-buttons">
          <button 
            className="btn btn-primary" 
            onClick={() => onNavigate?.('participants')}
          >
            View Participants
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => onNavigate?.('leaderboard')}
          >
            See Leaderboard
          </button>
        </div>
      </section>

      <section className="quick-stats">
        <h3 className="section-title">Quick Stats</h3>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">6</div>
            <div className="stat-label">Total Participants</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">41</div>
            <div className="stat-label">Total Times Toasted</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">41</div>
            <div className="stat-label">Toasts Sent</div>
          </div>
          <div className="stat-card">
            <div className="stat-value" style={{ fontSize: '1.5rem' }}>Mike Johnson</div>
            <div className="stat-label">Most Toasted</div>
          </div>
        </div>
      </section>

      <section className="recent-toasts">
        <h3 className="section-title">Recent Toasts</h3>
        <div className="toasts-list">
          <div className="toast-item">
            <span className="toast-emoji">🍞</span>
            <div className="toast-info">
              <p className="toast-participant">John Doe</p>
              <p className="toast-detail">Left laptop unlocked at lunch - got toasted!</p>
            </div>
          </div>
          <div className="toast-item">
            <span className="toast-emoji">�</span>
            <div className="toast-info">
              <p className="toast-participant">Jane Smith</p>
              <p className="toast-detail">Forgot to lock screen during meeting</p>
            </div>
          </div>
          <div className="toast-item">
            <span className="toast-emoji">�</span>
            <div className="toast-info">
              <p className="toast-participant">Mike Johnson</p>
              <p className="toast-detail">Left for coffee without locking computer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
