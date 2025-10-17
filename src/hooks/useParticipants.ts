import { useState, useEffect } from 'react';
import { Participant } from '../types';

// This hook will manage participant data
// To be implemented with mock data and API calls

export const useParticipants = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Implementation to be added
  
  return { participants, loading, error };
};