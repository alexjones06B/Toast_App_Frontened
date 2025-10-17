import type React from "react";

// Mock data for participants
const mockParticipants = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@email.com",
    joinDate: "2024-01-15",
    totalToasts: 8,
    timesToasted: 12,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@email.com",
    joinDate: "2024-02-03",
    totalToasts: 6,
    timesToasted: 9,
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@email.com",
    joinDate: "2024-01-28",
    totalToasts: 11,
    timesToasted: 15,
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah.wilson@email.com",
    joinDate: "2024-03-10",
    totalToasts: 4,
    timesToasted: 6,
  },
  {
    id: 5,
    name: "David Brown",
    email: "david.brown@email.com",
    joinDate: "2024-02-20",
    totalToasts: 7,
    timesToasted: 11,
  },
  {
    id: 6,
    name: "Emily Davis",
    email: "emily.davis@email.com",
    joinDate: "2024-03-05",
    totalToasts: 5,
    timesToasted: 8,
  },
];

const Participants: React.FC = () => {
  const handleAddParticipant = () => {
    // This function will be implemented later
    console.log("Add participant clicked");
  };

  // Calculate total toasts (which equals total times people have been toasted)
  const totalToasts = mockParticipants.reduce((sum, p) => sum + p.totalToasts, 0);

  return (
    <div className="participants-page">
      <div className="participants-header">
        <h1 className="page-title">Participants</h1>
        <p className="page-description">
          Manage and view all participants in the Toast App community.
        </p>
        <button
          type="button"
          className="btn btn-primary add-participant-btn"
          onClick={handleAddParticipant}
        >
          ➕ Add Participant
        </button>
      </div>

      <div className="participants-stats">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">{mockParticipants.length}</div>
            <div className="stat-label">Total Participants</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{totalToasts}</div>
            <div className="stat-label">Total Times Toasted</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{totalToasts}</div>
            <div className="stat-label">Total toasts</div>
          </div>
          <div className="stat-card">
            <div className="stat-value" style={{ fontSize: "1.5rem" }}>
              {
                mockParticipants.find(
                  (p) => p.timesToasted === Math.max(...mockParticipants.map((p) => p.timesToasted))
                )?.name
              }
            </div>
            <div className="stat-label">Most Toasted</div>
          </div>
        </div>
      </div>

      <div className="participants-list-section">
        <h2 className="section-title">All Participants</h2>
        <div className="participants-grid">
          {mockParticipants.map((participant) => (
            <div key={participant.id} className="participant-card">
              <div className="participant-info">
                <h3 className="participant-name">{participant.name}</h3>
                <p className="participant-email">{participant.email}</p>
                <div className="participant-stats">
                  <div className="participant-stat">
                    <span className="stat-value-small">{participant.totalToasts}</span>
                    <span className="stat-label-small">Toasts Sent</span>
                  </div>
                  <div className="participant-stat">
                    <span className="stat-value-small">{participant.timesToasted}</span>
                    <span className="stat-label-small">Times Toasted</span>
                  </div>
                  <div className="participant-stat">
                    <span className="stat-value-small">
                      {new Date(participant.joinDate).toLocaleDateString()}
                    </span>
                    <span className="stat-label-small">Joined</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Participants;
