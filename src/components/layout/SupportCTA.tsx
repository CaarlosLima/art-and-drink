import { useState } from 'react';
import { Wine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DonationModal } from './DonationModal';

export const SupportCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-card/50 border-gold/10 border-t py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-foreground mb-4 text-2xl md:text-3xl lg:text-4xl">Curtiu o conteúdo? Que tal pagar uma dose? 🥃</h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
            Este site é mantido por paixão. Sua contribuição ajuda a manter o bar aberto e as histórias fluindo.
          </p>
          <div className="flex justify-center">
            <Button variant="hero" size="lg" className="gap-2" onClick={() => setIsModalOpen(true)}>
              <Wine className="size-5" />
              Apoie o Projeto
            </Button>
          </div>
        </div>
      </section>

      <DonationModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};
