import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">🍞 Toast App</h1>
          <button className="new-toast-btn">New Toast</button>
        </div>
      </header>

      <nav className="navigation">
        <a href="/" className="nav-link active">Home</a>
        <a href="/leaderboard" className="nav-link">Leaderboard</a>
        <a href="/participants" className="nav-link">Participants</a>
      </nav>

      <main className="main-content">
        <section className="hero">
          <h2 className="hero-title">Welcome to Toast App</h2>
          <p className="hero-description">
            The ultimate platform for toasting competitions and community engagement.
            Join us to celebrate the art of making perfect toast!
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View Participants</button>
            <button className="btn btn-secondary">See Leaderboard</button>
          </div>
        </section>

        <section className="quick-stats">
          <h3 className="section-title">Quick Stats</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">24</div>
              <div className="stat-label">Total Participants</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">156</div>
              <div className="stat-label">Total Toasts</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">4.5</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">🏆</div>
              <div className="stat-label">Top Toaster</div>
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
                <p className="toast-detail">Perfect golden brown • 5.0 ⭐</p>
              </div>
            </div>
            <div className="toast-item">
              <span className="toast-emoji">🍞</span>
              <div className="toast-info">
                <p className="toast-participant">Jane Smith</p>
                <p className="toast-detail">Crispy edges • 4.8 ⭐</p>
              </div>
            </div>
            <div className="toast-item">
              <span className="toast-emoji">🍞</span>
              <div className="toast-info">
                <p className="toast-participant">Mike Johnson</p>
                <p className="toast-detail">Even toasting • 4.6 ⭐</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Toast App. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
