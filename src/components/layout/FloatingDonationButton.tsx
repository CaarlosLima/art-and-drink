import { Wine } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { DonationModal } from './DonationModal';

export const FloatingDonationButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="from-primary to-primary/80 text-primary-foreground group fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center gap-0 rounded-full bg-gradient-to-r shadow-lg transition-all duration-500 ease-in-out hover:w-auto hover:scale-105 hover:gap-2 hover:px-5 hover:shadow-xl [&_svg]:size-6"
        aria-label="Apoie o Projeto"
      >
        <Wine />

        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-500 ease-in-out group-hover:max-w-40 group-hover:opacity-100">
          Apoie o Projeto
        </span>
      </Button>

      <DonationModal isOpen={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};
