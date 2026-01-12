import { SEOHelmet } from '@/components/SEOHelmet';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface DrinkHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accentColor?: string;
  children?: ReactNode;
}

export const DrinkHero = ({ title, subtitle, description, image, accentColor = 'gold', children }: DrinkHeroProps) => {
  return (
    <>
      <SEOHelmet title={title} description={description} image={image} />

      <section className="relative flex min-h-[70vh] items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={image} alt={title} className="size-full object-cover" />
          <div className="from-background via-background/80 to-background/60 absolute inset-0 bg-gradient-to-r" />
          <div className="from-background absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4">
          <div className="animate-slide-up max-w-2xl">
            <span className={cn('font-body mb-4 block text-sm uppercase tracking-widest', `text-${accentColor}`)}>{subtitle}</span>
            <h1 className="font-display text-foreground mb-6 text-5xl font-bold md:text-7xl">{title}</h1>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{description}</p>
            {children}
          </div>
        </div>
      </section>
    </>
  );
};
