import { useState } from 'react';
import type { LeaderboardEntry } from '../types';

// This hook will manage leaderboard data
// To be implemented with participant data processing

export const useLeaderboard = () => {
  const [leaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading] = useState(true);

  // Implementation to be added
  // When implementing, add back: setLeaderboard, setLoading, useEffect
  
  return { leaderboard, loading };
};