import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FloatingDonationButton } from './FloatingDonationButton';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { SupportCTA } from './SupportCTA';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-16 md:pt-20">{children}</main>

      <SupportCTA />

      <Footer />

      <FloatingDonationButton />
    </div>
  );
};
