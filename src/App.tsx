import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import Origin from './pages/Origin'
import Homepage from './pages/Homepage'
import Leaderboard from './pages/Leaderboard'
import Participants from './pages/Participants'
import type { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      {/* Navigation with DaisyUI Tabs */}
      <div className="bg-base-200 shadow-toast sticky top-0 z-40">
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
}

function App() {
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
