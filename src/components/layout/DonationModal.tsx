import qrCodeImage from '@/assets/qr-code-pix.png';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Check, Copy, Wine } from 'lucide-react';
import { useState } from 'react';

interface DonationModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DonationModal = ({ isOpen, onOpenChange }: DonationModalProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopyPix = async () => {
    try {
      const pixKey =
        '00020101021126580014br.gov.bcb.pix0136b414d633-e310-4ccf-9a8c-9aafe975e4775204000053039865802BR5922CARLOS EDUARDO DE LIMA6013BRACO DO NORT62070503***63040B6F';
      await navigator.clipboard.writeText(pixKey);

      setCopied(true);

      toast({
        title: 'Chave PIX copiada!',
        description: 'Cole no seu app de pagamento. Obrigado pelo apoio! 🥃',
      });

      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: 'Erro ao copiar',
        description: 'Tente copiar manualmente a chave PIX.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border sm:max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="font-display text-foreground flex items-center justify-center gap-2 text-2xl">
            <Wine className="text-primary size-6" />
            Pague uma Dose
          </DialogTitle>
          <DialogDescription className="text-muted-foreground font-body">
            Gostou do conteúdo? Que tal me pagar uma dose? Sua contribuição ajuda a manter o projeto no ar!
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6 py-4">
          <div className="flex size-48 items-center justify-center rounded-lg bg-white p-3 shadow-inner">
            <div className="from-muted to-muted/50 flex size-full items-center justify-center rounded bg-gradient-to-br">
              <img src={qrCodeImage} alt={''} className="size-full object-cover" />
            </div>
          </div>

          <div className="space-y-2 text-center">
            <p className="text-muted-foreground font-body text-sm">Escaneie o QR Code ou use o link abaixo</p>
            <div className="flex flex-col gap-2">
              <Button variant="default" className="w-full gap-2" onClick={handleCopyPix}>
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copied ? 'Copiado!' : 'Copiar Chave PIX'}
              </Button>
            </div>
          </div>

          <p className="text-muted-foreground/70 font-body text-center text-xs italic">Cada contribuição é uma dose de motivação. Saúde! 🥃</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
