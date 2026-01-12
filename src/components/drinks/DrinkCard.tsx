import { Clock, Users, Eye, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface Ingredient {
  amount: string;
  name: string;
}

interface DrinkCardProps {
  name: string;
  description: string;
  image: string;
  ingredients: Ingredient[];
  instructions: string[];
  prepTime: string;
  servings: string;
  accentColor?: string;
  onViewDetails?: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export const DrinkCard = ({
  name,
  description,
  image,
  ingredients,
  instructions,
  prepTime,
  servings,
  accentColor = 'gold',
  onViewDetails,
  isFavorite = false,
  onToggleFavorite,
}: DrinkCardProps) => {
  return (
    <div className="bg-gradient-card border-border hover:border-gold/30 shadow-card hover:shadow-gold group overflow-hidden rounded-xl border transition-all duration-500">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={name} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="from-card absolute inset-0 bg-gradient-to-t to-transparent" />

        {/* Favorite Button */}
        {onToggleFavorite && (
          <button
            onClick={e => {
              e.stopPropagation();
              onToggleFavorite();
            }}
            className={cn(
              'absolute right-4 top-4 rounded-full p-2 transition-all duration-300',
              'bg-background/80 hover:bg-background backdrop-blur-sm',
              isFavorite ? 'text-red-500' : 'text-muted-foreground hover:text-red-500',
            )}
            aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          >
            <Heart className={cn('size-5 transition-all', isFavorite && 'fill-current')} />
          </button>
        )}

        <div className="absolute inset-x-4 bottom-4">
          <h3 className="font-display text-foreground mb-1 text-2xl">{name}</h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 p-6">
        {/* Meta */}
        <div className="text-muted-foreground flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Clock className={cn('size-4', `text-${accentColor}`)} />
            <span>{prepTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className={cn('size-4', `text-${accentColor}`)} />
            <span>{servings}</span>
          </div>
        </div>

        {/* Ingredients */}
        <div>
          <h4 className="font-display text-foreground mb-3 text-lg">Ingredientes</h4>
          <ul className="space-y-2">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-muted-foreground flex items-center gap-2 text-sm">
                <span className={cn('size-1.5 rounded-full', `bg-${accentColor}`)} />
                <span className="text-gold font-medium">{ingredient.amount}</span>
                <span>{ingredient.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h4 className="font-display text-foreground mb-3 text-lg">Preparo</h4>
          <ol className="space-y-2">
            {instructions.map((instruction, index) => (
              <li key={index} className="text-muted-foreground flex gap-3 text-sm">
                <span className={cn('font-display text-lg font-bold', `text-${accentColor}`)}>{index + 1}</span>
                <span className="pt-1">{instruction}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Ver Detalhes Button */}
        {onViewDetails && (
          <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10 hover:border-gold mt-4 w-full" onClick={onViewDetails}>
            <Eye className="mr-2 size-4" />
            Ver Detalhes Completos
          </Button>
        )}
      </div>
    </div>
  );
};
