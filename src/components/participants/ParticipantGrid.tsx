import type React from "react";
import ParticipantCard from "./ParticipantCard";

interface Participant {
  id: number;
  name: string;
  email: string;
  joinDate: string;
  totalToasts: number;
  timesToasted: number;
}

interface ParticipantGridProps {
  participants: Participant[];
}

const ParticipantGrid: React.FC<ParticipantGridProps> = ({ participants }) => {
  return (
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
        {participants.map((participant, index) => (
          <ParticipantCard key={participant.id} participant={participant} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ParticipantGrid;
