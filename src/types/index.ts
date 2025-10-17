// TypeScript types for the Toast App

export interface Participant {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  joinDate: Date;
  totalToasts: number;
  winCount: number;
  lossCount: number;
  winRate: number;
  currentStreak: number;
  longestStreak: number;
  favoriteToastType?: string;
}

export interface Toast {
  id: string;
  participantId: string;
  participantName: string;
  toastType: string;
  description: string;
  timestamp: Date;
  rating: number;
  winner: boolean;
}

export interface LeaderboardEntry {
  participant: Participant;
  rank: number;
  points: number;
  change: number; // position change from last period
}

export interface ToastStats {
  totalParticipants: number;
  totalToasts: number;
  avgRating: number;
  topToaster: string;
  recentActivity: Toast[];
}