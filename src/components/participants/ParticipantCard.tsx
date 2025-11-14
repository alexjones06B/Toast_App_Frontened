import type React from "react";

interface Participant {
  id: number;
  name: string;
  email: string;
  joinDate: string;
  totalToasts: number;
  timesToasted: number;
}

interface ParticipantCardProps {
  participant: Participant;
  index?: number;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({ participant, index = 0 }) => {
  const isTopContributor = participant.totalToasts > 10;

  return (
    <div
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
          {isTopContributor && (
            <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold">
              🔥 Top Contributor
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParticipantCard;
