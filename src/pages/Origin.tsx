import type React from "react";
import { Link } from "react-router-dom";
import "./Origin.css";

const Origin: React.FC = () => {
  return (
    <div className="origin-page" data-theme="toasttheme">
      {/* Hero Section */}
      <div className="origin-hero">
        <div className="origin-hero-content">
          <div className="origin-hero-text">
            <h1 className="origin-title">🍞 Welcome to Toast Central</h1>
            <p className="origin-description">
              The ultimate hub for all your toasting adventures! Navigate to explore leaderboards,
              participants, and your home base.
            </p>

            {/* Navigation Buttons */}
            <div className="origin-nav-buttons">
              <Link to="/home" className="origin-btn origin-btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="origin-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  role="img"
                  aria-label="Home icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Home
              </Link>

              <Link to="/leaderboard" className="origin-btn origin-btn-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="origin-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  role="img"
                  aria-label="Leaderboard icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Leaderboard
              </Link>

              <Link to="/participants" className="origin-btn origin-btn-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="origin-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  role="img"
                  aria-label="Participants icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
                Participants
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Information Section About Toasting */}
      <div className="origin-content">
        <div className="origin-section-header">
          <h2 className="origin-section-title">What is "Toasting"? 🔒</h2>
          <p className="origin-section-subtitle">
            A playful security reminder in the form of a harmless prank!
          </p>
        </div>

        {/* Cards explaining toasting */}
        <div className="origin-cards-grid">
          <div className="origin-card">
            <div className="origin-card-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="origin-card-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                role="img"
                aria-label="Security lock icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-9a2 2 0 00-2-2H6a2 2 0 00-2 2v9a2 2 0 002 2zm10-12V6a2 2 0 00-2-2H8a2 2 0 00-2 2v3m8 0V9a2 2 0 00-2-2H8a2 2 0 00-2 2v0"
                />
              </svg>
              <h3 className="origin-card-title">The Concept</h3>
            </div>
            <p className="origin-card-text">
              When someone leaves their laptop unlocked and unattended, it's an opportunity for a
              friendly security reminder through "toasting" - a harmless action that highlights the
              importance of locking your device.
            </p>
          </div>

          <div className="origin-card">
            <div className="origin-card-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="origin-card-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                role="img"
                aria-label="Light bulb icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <h3 className="origin-card-title">Security Awareness</h3>
            </div>
            <p className="origin-card-text">
              It's a fun way to promote cybersecurity best practices in the workplace. A gentle
              reminder that unlocked devices can be vulnerable to more serious security threats.
            </p>
          </div>

          <div className="origin-card">
            <div className="origin-card-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="origin-card-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                role="img"
                aria-label="Community icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h3 className="origin-card-title">Community Fun</h3>
            </div>
            <p className="origin-card-text">
              Our toast app tracks these playful security reminders, creating a leaderboard of the
              most security-conscious (and sometimes forgetful) team members!
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="origin-cta">
          <div className="origin-cta-card">
            <h2 className="origin-cta-title">Ready to Start Toasting? 🚀</h2>
            <p className="origin-cta-text">
              Join our community and help promote better security practices through friendly pranks
              and awareness!
            </p>
            <div className="origin-cta-buttons">
              <Link to="/participants" className="origin-btn origin-btn-primary">
                View Participants
              </Link>
              <Link to="/leaderboard" className="origin-btn origin-btn-outline">
                Check Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <footer className="origin-footer">
        <div className="origin-footer-content">
          <div className="origin-footer-icon">🍞</div>
          <p className="origin-footer-title">Toast App - Security Through Fun</p>
          <p className="origin-footer-subtitle">
            Remember: Always lock your screen when stepping away!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Origin;
