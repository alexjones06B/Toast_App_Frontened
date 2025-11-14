import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/common/Layout";
import Homepage from "./pages/Homepage";
import Leaderboard from "./pages/Leaderboard";
import Origin from "./pages/Origin";
import Participants from "./pages/Participants";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Origin />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/participants" element={<Participants />} />
      </Route>
    </Routes>
  );
}

export default App;
