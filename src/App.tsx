import "./App.css";
import { useState } from "react";
import Homepage from "./pages/Homepage";
import Leaderboard from "./pages/Leaderboard";
import Participants from "./pages/Participants";

type PageType = "home" | "participants" | "leaderboard";

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "participants":
        return <Participants />;
      case "leaderboard":
        return <Leaderboard />;
      default:
        return <Homepage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">🍞 Toast App</h1>
          <button type="button" className="new-toast-btn">
            New Toast
          </button>
        </div>
      </header>

      <nav className="navigation">
        <button
          type="button"
          className={`nav-link ${currentPage === "home" ? "active" : ""}`}
          onClick={() => setCurrentPage("home")}
        >
          Home
        </button>
        <button
          type="button"
          className={`nav-link ${currentPage === "leaderboard" ? "active" : ""}`}
          onClick={() => setCurrentPage("leaderboard")}
        >
          Leaderboard
        </button>
        <button
          type="button"
          className={`nav-link ${currentPage === "participants" ? "active" : ""}`}
          onClick={() => setCurrentPage("participants")}
        >
          Participants
        </button>
      </nav>

      <main className="main-content">{renderPage()}</main>

      <footer className="footer">
        <p>© 2025 Toast App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
