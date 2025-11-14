import type React from "react";
import { Link } from "react-router-dom";

const Origin: React.FC = () => {
  return (
    <div className="w-full -mx-8 -my-12 animate-fade-in">
      {/* Hero Section */}
      <section className="min-h-[80vh] bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-center px-8 py-20">
        <div className="max-w-6xl w-full">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-12 lg:p-20 shadow-2xl border border-white/20 animate-scale-in">
            <div className="animate-bounce-slow text-8xl mb-8">🍞</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-neutral mb-8 leading-tight gradient-text-full">
              Welcome to Toast Central
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-neutral/80 mb-12 leading-relaxed max-w-4xl mx-auto">
              The ultimate hub for all your toasting adventures! Navigate to explore leaderboards,
              participants, and your home base.
            </p>

            {/* Navigation Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-slide-in-up animate-delay-200">
              {[
                { to: "/home", label: "Home", icon: "🏠", variant: "btn-neutral" },
                { to: "/leaderboard", label: "Leaderboard", icon: "🏆", variant: "btn-primary" },
                {
                  to: "/participants",
                  label: "Participants",
                  icon: "👥",
                  variant: "btn-secondary",
                },
              ].map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`btn ${item.variant} btn-lg gap-3 shadow-toast hover:shadow-toast-hover hover:-translate-y-2 transition-all duration-300 group`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="text-lg font-semibold">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Information Section About Toasting */}
      <section className="section-padding-lg bg-gradient-to-b from-base-200 to-base-100">
        <div className="content-wrapper">
          <div className="text-center mb-20 animate-slide-in-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-primary mb-6">
              What is "Toasting"?
            </h2>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-4xl animate-bounce-slow">🔒</span>
              <span className="text-xl text-neutral/60">Security awareness made fun</span>
            </div>
            <p className="text-xl sm:text-2xl text-neutral/80 max-w-3xl mx-auto leading-relaxed">
              A playful security reminder in the form of a harmless prank!
            </p>
          </div>

          {/* Cards explaining toasting */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: "🔐",
                title: "The Concept",
                description:
                  'When someone leaves their laptop unlocked and unattended, it\'s an opportunity for a friendly security reminder through "toasting" - a harmless action that highlights the importance of locking your device.',
                gradient: "from-primary to-secondary",
              },
              {
                icon: "💡",
                title: "Security Awareness",
                description:
                  "It's a fun way to promote cybersecurity best practices in the workplace. A gentle reminder that unlocked devices can be vulnerable to more serious security threats.",
                gradient: "from-secondary to-accent",
              },
              {
                icon: "🎉",
                title: "Community Fun",
                description:
                  "Our toast app tracks these playful security reminders, creating a leaderboard of the most security-conscious (and sometimes forgetful) team members!",
                gradient: "from-accent to-primary",
              },
            ].map((card, index) => (
              <div
                key={card.title}
                className="content-area hover-lift animate-slide-in-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-8">
                    <div
                      className={`p-6 bg-gradient-to-br ${card.gradient} rounded-2xl text-white text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300 animate-float`}
                    >
                      {card.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral mb-6 group-hover:gradient-text-primary transition-all duration-300">
                    {card.title}
                  </h3>
                  <p className="text-neutral/80 leading-relaxed text-lg">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex justify-center animate-scale-in animate-delay-400">
            <div className="content-area bg-gradient-to-br from-primary to-secondary text-white max-w-5xl w-full text-center">
              <div className="animate-float text-6xl mb-8">🚀</div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
                Ready to Start Toasting?
              </h2>
              <p className="text-xl sm:text-2xl lg:text-3xl mb-12 leading-relaxed opacity-90">
                Join our community and help promote better security practices through friendly
                pranks and awareness!
              </p>
              <div className="flex gap-6 justify-center flex-wrap">
                <Link
                  to="/participants"
                  className="btn btn-neutral btn-lg text-xl px-10 py-4 shadow-toast hover:shadow-toast-hover hover:-translate-y-2 transition-all duration-300 group"
                >
                  <span className="group-hover:scale-110 transition-transform">👥</span>
                  View Participants
                </Link>
                <Link
                  to="/leaderboard"
                  className="btn btn-outline btn-lg text-xl px-10 py-4 shadow-toast hover:shadow-toast-hover hover:-translate-y-2 transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-neutral group"
                >
                  <span className="group-hover:scale-110 transition-transform">🏆</span>
                  Check Leaderboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Origin;
