import { cn } from '@/lib/utils';

interface HistorySectionProps {
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  accentColor?: string;
  reverse?: boolean;
}

export const HistorySection = ({ title, paragraphs, image, imageAlt, accentColor = 'gold', reverse = false }: HistorySectionProps) => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className={cn('grid items-center gap-12 md:grid-cols-2', reverse && 'md:[direction:rtl]')}>
          {/* Text Content */}
          <div className={cn(reverse && 'md:[direction:ltr]')}>
            <span className={cn('mb-6 block h-1 w-12 rounded-full', `bg-${accentColor}`)} />
            <h2 className="font-display text-foreground mb-6 text-3xl font-bold md:text-4xl">{title}</h2>
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Image */}
          {image && (
            <div className={cn('relative', reverse && 'md:[direction:ltr]')}>
              <div className="shadow-card relative overflow-hidden rounded-xl">
                <img src={image} alt={imageAlt || title} className="h-80 w-full object-cover md:h-96" />
                <div className="from-background/50 absolute inset-0 bg-gradient-to-t to-transparent" />
              </div>
              <div className={cn('absolute -bottom-4 -right-4 -z-10 size-32 rounded-xl', `bg-${accentColor}/20`)} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
