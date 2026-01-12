import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  expanded?: string;
}

interface DrinkTimelineProps {
  title: string;
  subtitle: string;
  description: string;
  events: TimelineEvent[];
  accentColor?: string;
}

export const DrinkTimeline = ({ title, subtitle, description, events, accentColor = 'primary' }: DrinkTimelineProps) => {
  const [showAll, setShowAll] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const visibleEvents = showAll ? events : events.slice(0, 5);

  const toggleExpand = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const colorClasses: Record<string, { text: string; border: string; bg: string; glow: string }> = {
    whisky: {
      text: 'text-whisky',
      border: 'border-whisky/50 hover:border-whisky',
      bg: 'hover:bg-whisky/10',
      glow: 'shadow-[0_0_20px_hsl(var(--whisky)/0.5)]',
    },
    gold: {
      text: 'text-gold',
      border: 'border-gold/50 hover:border-gold',
      bg: 'hover:bg-gold/10',
      glow: 'shadow-[0_0_20px_hsl(var(--gold)/0.5)]',
    },
    gin: {
      text: 'text-gin',
      border: 'border-gin/50 hover:border-gin',
      bg: 'hover:bg-gin/10',
      glow: 'shadow-[0_0_20px_hsl(var(--gin)/0.5)]',
    },
    rum: {
      text: 'text-rum',
      border: 'border-rum/50 hover:border-rum',
      bg: 'hover:bg-rum/10',
      glow: 'shadow-[0_0_20px_hsl(var(--rum)/0.5)]',
    },
    tequila: {
      text: 'text-tequila',
      border: 'border-tequila/50 hover:border-tequila',
      bg: 'hover:bg-tequila/10',
      glow: 'shadow-[0_0_20px_hsl(var(--tequila)/0.5)]',
    },
    wine: {
      text: 'text-wine',
      border: 'border-wine/50 hover:border-wine',
      bg: 'hover:bg-wine/10',
      glow: 'shadow-[0_0_20px_hsl(var(--wine)/0.5)]',
    },
    primary: {
      text: 'text-primary',
      border: 'border-primary/50 hover:border-primary',
      bg: 'hover:bg-primary/10',
      glow: 'shadow-[0_0_20px_hsl(var(--primary)/0.5)]',
    },
  };

  const colors = colorClasses[accentColor] || colorClasses.primary;

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className={`${colors.text} text-sm font-medium uppercase tracking-widest`}>{subtitle}</span>
          <h2 className="text-foreground mt-2 font-serif text-4xl font-bold md:text-5xl">{title}</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">{description}</p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <div
            className={`via-current/50 absolute inset-y-0 left-8 w-0.5 bg-gradient-to-b from-current to-transparent md:left-1/2 md:-translate-x-1/2 ${colors.text}`}
            style={{ opacity: 0.6 }}
          />

          {visibleEvents.map((event, index) => (
            <div key={event.year} className={`relative mb-12 flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div
                className={`border-background absolute left-8 z-10 size-4 -translate-x-1/2 rounded-full border-4 md:left-1/2 ${colors.glow}`}
                style={{ backgroundColor: `hsl(var(--${accentColor}))` }}
              />

              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div
                  className={`bg-card/50 border-border/50 hover:border-${accentColor}/30 group cursor-pointer rounded-xl border p-6 backdrop-blur-sm transition-all duration-300`}
                  onClick={() => toggleExpand(index)}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className={`${colors.text} font-serif text-2xl font-bold`}>{event.year}</span>
                    <ChevronDown
                      className={`text-muted-foreground size-5 transition-transform duration-300 ${expandedItems.has(index) ? 'rotate-180' : ''}`}
                    />
                  </div>
                  <h3 className={`text-foreground group-hover:${colors.text} mb-2 font-serif text-xl font-semibold transition-colors`}>{event.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>

                  {/* Expanded content */}
                  {event.expanded && (
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        expandedItems.has(index) ? 'mt-4 max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-foreground/80 border-border/50 border-t pt-4 text-sm leading-relaxed">{event.expanded}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {events.length > 5 && (
          <div className="mt-8 text-center">
            <Button variant="outline" onClick={() => setShowAll(!showAll)} className={`${colors.border} ${colors.text} ${colors.bg} gap-2`}>
              {showAll ? (
                <>
                  <ChevronUp className="size-4" />
                  Mostrar Menos
                </>
              ) : (
                <>
                  <ChevronDown className="size-4" />
                  Mostrar Mais ({events.length - 5} eventos)
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
