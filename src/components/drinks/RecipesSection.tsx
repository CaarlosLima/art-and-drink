import { DrinkCard } from './DrinkCard';

interface Ingredient {
  amount: string;
  name: string;
}

interface Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: Ingredient[];
  instructions: string[];
  prepTime: string;
  servings: string;
}

interface RecipesSectionProps {
  title: string;
  subtitle: string;
  recipes: Recipe[];
  accentColor?: string;
}

export const RecipesSection = ({ title, subtitle, recipes, accentColor = 'gold' }: RecipesSectionProps) => {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-gold font-body mb-4 block text-sm uppercase tracking-widest">{subtitle}</span>
          <h2 className="font-display text-foreground text-3xl font-bold md:text-4xl">{title}</h2>
        </div>

        {/* Recipes Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe, index) => (
            <div key={recipe.name} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <DrinkCard {...recipe} accentColor={accentColor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
