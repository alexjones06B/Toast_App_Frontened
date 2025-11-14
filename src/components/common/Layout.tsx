import type React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Header />
      <Navigation />
      <main className="flex-1 section-padding">
        <div className="content-wrapper animate-fade-in">
          <Outlet />
        </div>
      </main>
      <footer className="footer footer-center section-padding bg-gradient-to-r from-primary via-secondary to-accent text-neutral-content shadow-2xl border-t border-primary/20">
        <div className="animate-slide-in-up">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl animate-float">🍞</span>
            <p className="font-bold text-3xl gradient-text-full">Toast App</p>
          </div>
          <p className="text-xl opacity-90 max-w-md text-center leading-relaxed">
            Making security awareness fun and engaging since 2024
          </p>
          <div className="mt-6 text-sm opacity-75">
            <p>&copy; 2024 Toast App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
