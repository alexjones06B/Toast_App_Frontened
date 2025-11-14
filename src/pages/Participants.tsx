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
    <div className="space-y-professional-lg w-full animate-fade-in">
      {/* Header Section */}
      <section className="text-center animate-slide-in-up">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-primary mb-6 leading-tight">
          Participants
        </h1>
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="text-3xl animate-bounce-slow">👥</span>
          <span className="text-xl text-neutral/60">Toast App community members</span>
        </div>
        <p className="text-lg sm:text-xl text-neutral/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Manage and view all participants in the Toast App community.
        </p>
        <button
          type="button"
          className="btn btn-primary btn-lg shadow-toast hover:shadow-toast-hover hover:-translate-y-2 transition-all duration-300 text-lg group"
          onClick={handleAddParticipant}
        >
          <span className="group-hover:scale-110 transition-transform">➕</span>
          Add Participant
        </button>
      </section>

      {/* Stats Section */}
      <section className="content-area animate-slide-in-up animate-delay-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="stat bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 p-8 text-center border border-primary/10 group">
            <div className="stat-value text-5xl sm:text-6xl lg:text-7xl gradient-text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
              {mockParticipants.length}
            </div>
            <div className="stat-title text-lg uppercase tracking-widest font-semibold text-neutral/80">
              Total Participants
            </div>
            <div className="mt-2 text-sm text-neutral/60">
              <span className="inline-flex items-center gap-1">
                <span className="text-green-500">👤</span>
                <span>Active members</span>
              </span>
            </div>
          </div>

          <div className="stat bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 p-8 text-center border border-secondary/10 group">
            <div className="stat-value text-5xl sm:text-6xl lg:text-7xl gradient-text-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
              {totalToasts}
            </div>
            <div className="stat-title text-lg uppercase tracking-widest font-semibold text-neutral/80">
              Total Toasts
            </div>
            <div className="mt-2 text-sm text-neutral/60">
              <span className="inline-flex items-center gap-1">
                <span className="text-orange-500">🍞</span>
                <span>Sent by community</span>
              </span>
            </div>
          </div>

          <div className="stat bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 p-8 text-center border border-accent/10 group">
            <div className="stat-value text-3xl sm:text-4xl lg:text-5xl gradient-text-full mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center gap-2">
              <span className="animate-pulse-glow">🎯</span>
              <span className="truncate">
                {mockParticipants.reduce((max, p) => p.totalToasts > max.totalToasts ? p : max).name.split(' ')[0]}
              </span>
            </div>
            <div className="stat-title text-lg uppercase tracking-widest font-semibold text-neutral/80">
              Most Active
            </div>
            <div className="mt-2 text-sm text-neutral/60">
              <span className="inline-flex items-center gap-1">
                <span className="text-yellow-500">🏆</span>
                <span>Top contributor</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Participants List Section */}
      <section className="animate-slide-in-up animate-delay-400">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text-secondary mb-4">
            All Participants
          </h2>
          <div className="flex items-center justify-center gap-2 text-xl">
            <span className="animate-bounce-slow">📋</span>
            <span className="text-neutral/60">Community directory</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockParticipants.map((participant, index) => (
            <div
              key={participant.id}
              className="content-area hover-lift group min-h-[320px] flex flex-col animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header Section */}
              <div className="text-center mb-6 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-xl font-bold text-white shadow-md group-hover:scale-110 transition-transform duration-300 animate-float">
                  {participant.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-neutral mb-2 group-hover:gradient-text-primary transition-all duration-300 leading-tight">
                  {participant.name}
                </h3>
                <p className="text-sm text-neutral/60 truncate px-2" title={participant.email}>
                  {participant.email}
                </p>
              </div>

              {/* Stats Section */}
              <div className="flex-grow space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {participant.totalToasts}
                    </div>
                    <div className="text-xs text-neutral/70 font-semibold uppercase tracking-wide">
                      Toasts Sent
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">
                      {participant.timesToasted}
                    </div>
                    <div className="text-xs text-neutral/70 font-semibold uppercase tracking-wide">
                      Times Toasted
                    </div>
                  </div>
                </div>

                {/* Join Date */}
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-3 text-center">
                  <div className="text-sm font-semibold text-neutral mb-1">
                    Joined {new Date(participant.joinDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="text-xs text-neutral/60 uppercase tracking-wide">
                    Member Since
                  </div>
                </div>

                {/* Activity Indicator */}
                <div className="flex items-center justify-center gap-2 pt-2">
                  <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Active
                  </div>
                  {participant.totalToasts > 10 && (
                    <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold">
                      🔥 Top Contributor
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Participants;
