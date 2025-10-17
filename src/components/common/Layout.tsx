import React from 'react';
import Header from './Header';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100" data-theme="toasttheme">
      <Header />
      <Navigation />
      
      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-8 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="footer footer-center p-8 bg-gradient-to-r from-primary to-secondary text-neutral">
        <aside>
          <p>© 2025 Toast App. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Layout;