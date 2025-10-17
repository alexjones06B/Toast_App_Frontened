// Utility functions for the Toast App
// To be implemented with helper functions for data processing, formatting, etc.

export const formatDate = (date: Date): string => {
  // Implementation to be added
  return date.toLocaleDateString();
};

export const calculateWinRate = (wins: number, total: number): number => {
  // Implementation to be added
  return total > 0 ? (wins / total) * 100 : 0;
};
