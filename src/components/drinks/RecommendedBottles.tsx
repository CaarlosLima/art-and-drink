import { ExternalLink, Wine, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Bottle {
  name: string;
  image: string;
  description: string;
  price: string;
  buyLink: string;
  badge?: string;
}

interface RecommendedBottlesProps {
  bottles: Bottle[];
  accentColor?: string;
}

export const RecommendedBottles = ({ bottles, accentColor = 'gold' }: RecommendedBottlesProps) => {
  return (
    <section className="from-background to-card/50 bg-gradient-to-b py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className={cn('font-body text-sm uppercase tracking-widest', `text-${accentColor}`)}>Seleção Especial</span>
          <h2 className="font-display text-foreground mt-2 text-3xl md:text-4xl lg:text-5xl">Garrafas Recomendadas</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">Nossa curadoria de rótulos essenciais para começar ou expandir sua coleção</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bottles.map((bottle, index) => (
            <div
              key={index}
              className="bg-gradient-card border-border hover:border-gold/30 shadow-card hover:shadow-gold group flex flex-col overflow-hidden rounded-xl border transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img src={bottle.image} alt={bottle.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="from-card via-card/40 absolute inset-0 bg-gradient-to-t to-transparent" />

                {/* Badge */}
                {bottle.badge && (
                  <div className="absolute left-4 top-4">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium',
                        'bg-gold/90 text-background backdrop-blur-sm',
                      )}
                    >
                      <Star className="size-3 fill-current" />
                      {bottle.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                {/* Name */}
                <h3 className="font-display text-foreground mb-3 text-xl">{bottle.name}</h3>

                {/* Description */}
                <div className="mb-4 flex flex-1 items-start gap-3">
                  <Wine className={cn('mt-0.5 size-4 shrink-0', `text-${accentColor}`)} />
                  <p className="text-muted-foreground text-sm">{bottle.description}</p>
                </div>

                {/* Price and Button */}
                <div className="border-border/50 flex items-center justify-between gap-3 border-t pt-4">
                  <span className={cn('font-display text-2xl font-bold', `text-${accentColor}`)}>{bottle.price}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gold/30 text-gold hover:bg-gold/10 hover:border-gold gap-1.5"
                    onClick={() => window.open(bottle.buyLink, '_blank')}
                  >
                    Comprar
                    <ExternalLink className="size-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground/60 mt-8 text-center text-xs">* Links de afiliado. Ao comprar através deles, você ajuda a manter o site.</p>
      </div>
    </section>
  );
};
