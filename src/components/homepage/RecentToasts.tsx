import type React from "react";

const RecentToasts: React.FC = () => {
  const recentToasts = [
    {
      id: 1,
      giver: "John",
      receiver: "Sarah",
      reason: "For leaving credentials in a public repository",
      icon: "🎉",
      timeAgo: "2 hours ago",
      gradient: "from-primary to-secondary"
    },
    {
      id: 2,
      giver: "Emma",
      receiver: "Mike",
      reason: "For using 'password123' as a password",
      icon: "🔒",
      timeAgo: "5 hours ago",
      gradient: "from-secondary to-accent"
    },
    {
      id: 3,
      giver: "Alex",
      receiver: "Lisa",
      reason: "For clicking on a suspicious email link",
      icon: "📧",
      timeAgo: "1 day ago",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section className="content-area">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-secondary mb-4">
          Recent Toasts
        </h2>
        <div className="flex items-center justify-center gap-2 text-2xl">
          <span className="animate-bounce-slow">🔥</span>
          <span className="text-base-content/60">Latest security awareness moments</span>
        </div>
      </div>

      <div className="space-y-6 max-w-6xl mx-auto">
        {recentToasts.map((toast, index) => (
          <div
            key={toast.id}
            className={`card bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-x-2 border border-primary/10 group animate-slide-in-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-body p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className={`text-5xl sm:text-6xl bg-gradient-to-br ${toast.gradient} rounded-2xl p-4 shadow-md group-hover:scale-110 transition-transform duration-300 animate-float`}>
                  {toast.icon}
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral group-hover:text-primary transition-colors duration-300">
                      <span className="gradient-text-primary">{toast.giver}</span> toasted{" "}
                      <span className="gradient-text-secondary">{toast.receiver}</span>
                    </h3>
                    <span className="text-sm font-medium text-neutral/60 bg-base-200 px-3 py-1 rounded-full">
                      {toast.timeAgo}
                    </span>
                  </div>

                  <p className="text-lg sm:text-xl text-base-content/70 leading-relaxed">
                    {toast.reason}
                  </p>

                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      SECURITY AWARENESS
                    </span>
                    <span className="text-xs text-neutral/50">•</span>
                    <span className="text-xs text-neutral/60">Learning moment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="btn btn-outline btn-lg hover:btn-neutral transition-all duration-300 group">
          <span className="group-hover:scale-110 transition-transform">👀</span>
          View All Toasts
        </button>
      </div>
    </section>
  );
};

export default RecentToasts;
