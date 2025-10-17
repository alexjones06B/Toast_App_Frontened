import type React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Layout component - to be implemented */}
      {children}
    </div>
  );
};

export default Layout;
