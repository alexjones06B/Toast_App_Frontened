import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import Origin from './pages/Origin'
import Homepage from './pages/Homepage'
import Leaderboard from './pages/Leaderboard'
import Participants from './pages/Participants'

function App() {
  const location = useLocation()

  // Layout component with DaisyUI
  const Layout = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen flex flex-col bg-base-100" data-theme="toasttheme">
      {/* Header with DaisyUI Navbar */}
      <div className="navbar bg-gradient-to-r from-primary to-secondary shadow-toast sticky top-0 z-50">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl font-bold text-neutral">
            🍞 Toast App
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-neutral shadow-toast hover:shadow-toast-hover hover:-translate-y-0.5 transition-all">
            New Toast
          </button>
        </div>
      </div>

      {/* Navigation with DaisyUI Tabs */}
      <div className="bg-base-200 shadow-toast sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="tabs tabs-bordered">
            <Link 
              to="/" 
              className={`tab tab-bordered pb-4 pt-4 ${
                location.pathname === '/' 
                  ? 'tab-active text-neutral border-neutral' 
                  : 'text-base-content/70 hover:text-neutral'
              }`}
            >
              Origin
            </Link>
            <Link 
              to="/home" 
              className={`tab tab-bordered pb-4 pt-4 ${
                location.pathname === '/home' 
                  ? 'tab-active text-neutral border-neutral' 
                  : 'text-base-content/70 hover:text-neutral'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/leaderboard" 
              className={`tab tab-bordered pb-4 pt-4 ${
                location.pathname === '/leaderboard' 
                  ? 'tab-active text-neutral border-neutral' 
                  : 'text-base-content/70 hover:text-neutral'
              }`}
            >
              Leaderboard
            </Link>
            <Link 
              to="/participants" 
              className={`tab tab-bordered pb-4 pt-4 ${
                location.pathname === '/participants' 
                  ? 'tab-active text-neutral border-neutral' 
                  : 'text-base-content/70 hover:text-neutral'
              }`}
            >
              Participants
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-8 py-12">
        {children}
      </main>

      {/* Footer with DaisyUI */}
      <footer className="footer footer-center p-8 bg-gradient-to-r from-primary to-secondary text-neutral">
        <aside>
          <p>© 2025 Toast App. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  )

  return (
    <Routes>
      <Route path="/" element={<Origin />} />
      <Route path="/home" element={
        <Layout>
          <Homepage />
        </Layout>
      } />
      <Route path="/leaderboard" element={
        <Layout>
          <Leaderboard />
        </Layout>
      } />
      <Route path="/participants" element={
        <Layout>
          <Participants />
        </Layout>
      } />
    </Routes>
  )
}

export default App

