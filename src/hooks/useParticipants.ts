import { useState } from "react";
import type { Participant } from "../types";

// This hook will manage participant data
// To be implemented with mock data and API calls

export const useParticipants = () => {
  const [participants] = useState<Participant[]>([]);
  const [loading] = useState(true);
  const [error] = useState<string | null>(null);

  // Implementation to be added
  // When implementing, add back: setParticipants, setLoading, setError, useEffect

  return { participants, loading, error };
};
