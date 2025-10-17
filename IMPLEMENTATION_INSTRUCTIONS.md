# Toast App Frontend Implementation Instructions

## Overview
This document provides step-by-step instructions for implementing a toasting application frontend with three main pages:
- **Homepage**: Main landing page with navigation and overview
- **Leaderboard**: Display rankings of participants
- **Participants View**: View all participants and their details

## Prerequisites
- React 19.1.1 with TypeScript
- Vite as the build tool
- Basic understanding of React hooks and components

## Step 1: Install Additional Dependencies

First, install the necessary dependencies for routing and styling:

```bash
npm install react-router-dom
npm install @types/react-router-dom --save-dev
```

For styling (optional but recommended):
```bash
npm install styled-components
npm install @types/styled-components --save-dev
```

## Step 2: Project Structure Setup

Create the following folder structure in your `src` directory:

```
src/
├── components/
│   ├── common/
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   └── Layout.tsx
│   ├── homepage/
│   │   ├── Hero.tsx
│   │   ├── QuickStats.tsx
│   │   └── RecentToasts.tsx
│   ├── leaderboard/
│   │   ├── LeaderboardTable.tsx
│   │   ├── LeaderboardItem.tsx
│   │   └── FilterControls.tsx
│   └── participants/
│       ├── ParticipantCard.tsx
│       ├── ParticipantGrid.tsx
│       └── SearchBar.tsx
├── pages/
│   ├── Homepage.tsx
│   ├── Leaderboard.tsx
│   └── Participants.tsx
├── types/
│   └── index.ts
├── hooks/
│   ├── useParticipants.ts
│   └── useLeaderboard.ts
├── utils/
│   └── helpers.ts
└── styles/
    ├── globals.css
    └── variables.css
```

## Step 3: Define TypeScript Types

Create `src/types/index.ts` with interfaces for:
- **Participant**: Contains user information, stats, and toast history
- **Toast**: Individual toast entries with ratings and metadata
- **LeaderboardEntry**: Participant rankings with points and position changes
- **ToastStats**: Overall application statistics and metrics

## Step 4: Setup Routing

Update `src/main.tsx`:
- Wrap the App component with BrowserRouter for routing functionality

Update `src/App.tsx`:
- Import Routes, Route from react-router-dom
- Create routes for: "/" (Homepage), "/leaderboard" (Leaderboard), "/participants" (Participants)
- Wrap routes with Layout component for consistent structure

## Step 5: Create Common Components

### Layout Component (`src/components/common/Layout.tsx`)
- Create a wrapper component that includes Header and Navigation
- Accepts children props to render page content
- Provides consistent structure across all pages

### Header Component (`src/components/common/Header.tsx`)
- Display app logo/title with toast emoji
- Include action buttons (e.g., "New Toast" button)
- Style with header container and flexbox layout

### Navigation Component (`src/components/common/Navigation.tsx`)
- Create navigation menu with three main routes
- Use React Router's Link and useLocation for active state
- Include icons and labels for each navigation item
- Highlight current active route

## Step 6: Create Custom Hooks

### Participants Hook (`src/hooks/useParticipants.ts`)
- Manage participant data with loading and error states
- Create mock data array with sample participants
- Implement async data fetching with useEffect
- Return participants array, loading state, and error handling

### Leaderboard Hook (`src/hooks/useLeaderboard.ts`)
- Calculate leaderboard rankings from participant data
- Sort participants by win count and total points
- Add rank positions and mock ranking changes
- Depend on useParticipants hook for data source

## Step 7: Create Page Components

### Homepage (`src/pages/Homepage.tsx`)
- Import and render Hero, QuickStats, and RecentToasts components
- Create main landing page layout
- Serve as entry point for the application

### Leaderboard Page (`src/pages/Leaderboard.tsx`)
- Include page header with title and description
- Add FilterControls for sorting and filtering options
- Display LeaderboardTable with participant rankings

### Participants Page (`src/pages/Participants.tsx`)
- Create page header with participants information
- Include SearchBar for filtering participants
- Display ParticipantGrid showing all participants in card format

## Step 8: Create Feature Components

### Hero Component (`src/components/homepage/Hero.tsx`)
- Create welcome section with app title and description
- Add call-to-action buttons linking to participants and leaderboard
- Style with gradient background and centered content

### Quick Stats Component (`src/components/homepage/QuickStats.tsx`)
- Use useParticipants hook to calculate statistics
- Display total participants, toasts, average rating, and top toaster
- Create grid layout with stat cards

### Leaderboard Table (`src/components/leaderboard/LeaderboardTable.tsx`)
- Use useLeaderboard hook for ranking data
- Create table with columns: Rank, Participant, Wins, Total Toasts, Win Rate, Points, Change
- Handle loading state and map through leaderboard entries
- Import and use LeaderboardItem component for each row

### Participant Grid (`src/components/participants/ParticipantGrid.tsx`)
- Use useParticipants hook for participant data
- Implement search functionality filtering by name and email
- Create grid layout displaying ParticipantCard components
- Handle loading and empty states

## Step 9: Add Styling

Create `src/styles/globals.css` with:
- **CSS Variables**: Define color palette, typography, and spacing
- **Global Styles**: Reset margins/padding, set font family and base styles
- **Layout Styles**: App layout, header, navigation, and main content areas
- **Component Styles**: Buttons, cards, grids, hero section, and loading states
- **Responsive Design**: Use CSS Grid with auto-fit for responsive layouts
- **Color Scheme**: Primary (orange), secondary (blue), accent (yellow) colors

## Step 10: Implementation Checklist

- [ ] Install dependencies (react-router-dom, styled-components)
- [ ] Create folder structure
- [ ] Define TypeScript types
- [ ] Setup routing in main.tsx and App.tsx
- [ ] Create Layout, Header, and Navigation components
- [ ] Create custom hooks for data management
- [ ] Implement page components (Homepage, Leaderboard, Participants)
- [ ] Create feature-specific components
- [ ] Add CSS styling
- [ ] Test navigation between pages
- [ ] Add mock data for development
- [ ] Implement search and filter functionality
- [ ] Add responsive design
- [ ] Optimize performance

## Step 11: Future Enhancements

Once the basic structure is complete, consider adding:

1. **State Management**: Add Redux or Zustand for complex state
2. **API Integration**: Replace mock data with real API calls
3. **Authentication**: Add user login/registration
4. **Real-time Updates**: WebSocket integration for live updates
5. **Toast Creation**: Add forms to create new toasts
6. **Animations**: Add smooth transitions and animations
7. **Mobile Optimization**: Ensure mobile responsiveness
8. **Testing**: Add unit and integration tests
9. **PWA Features**: Make it installable as a Progressive Web App
10. **Data Visualization**: Add charts and graphs for statistics

## Notes

- Replace all mock data with actual API endpoints when backend is ready
- Consider using a UI library like Material-UI or Chakra UI for faster development
- Implement proper error handling and loading states
- Add accessibility features (ARIA labels, keyboard navigation)
- Use environment variables for configuration
- Implement proper SEO with React Helmet

This structure provides a solid foundation for your toasting application frontend with clear separation of concerns and scalable architecture.