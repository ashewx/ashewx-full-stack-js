import Footer from './Footer';
import Navigation from './Navigation';
import type { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <main className="dark text-foreground bg-background">
      <Navigation />
      <div className="page">{children}</div>
      <Footer />
    </main>
  );
};

export default AppLayout;