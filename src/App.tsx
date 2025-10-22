import { Routes, Route } from 'react-router-dom'
import './App.css'
import Origin from './pages/Origin'
import Homepage from './pages/Homepage'
import Leaderboard from './pages/Leaderboard'
import Participants from './pages/Participants'
import Layout from './components/common/Layout'

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

