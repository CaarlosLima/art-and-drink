import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface Origin {
  id: string;
  name: string;
  country: string;
  description: string;
  x: number;
  y: number;
  color: string;
}

const origins: Origin[] = [
  {
    id: 'vinho',
    name: 'Vinho',
    country: 'Geórgia / Mediterrâneo',
    description: 'Berço da viticultura, há mais de 8.000 anos',
    x: 58,
    y: 32,
    color: 'hsl(var(--wine))',
  },
  {
    id: 'vodka',
    name: 'Vodka',
    country: 'Rússia / Polônia',
    description: 'Disputada entre os dois países desde o século XIV',
    x: 55,
    y: 25,
    color: 'hsl(var(--vodka))',
  },
  {
    id: 'whisky',
    name: 'Whisky',
    country: 'Escócia / Irlanda',
    description: 'Tradição de destilação desde o século XV',
    x: 45,
    y: 23,
    color: 'hsl(var(--whisky))',
  },
  {
    id: 'gin',
    name: 'Gin',
    country: 'Holanda / Inglaterra',
    description: 'Originado do genever holandês no século XVII',
    x: 47,
    y: 26,
    color: 'hsl(var(--gin))',
  },
  {
    id: 'rum',
    name: 'Rum',
    country: 'Caribe',
    description: 'Nascido nas plantações de cana-de-açúcar coloniais',
    x: 25,
    y: 42,
    color: 'hsl(var(--rum))',
  },
  {
    id: 'tequila',
    name: 'Tequila',
    country: 'México',
    description: 'Produzida exclusivamente na região de Jalisco',
    x: 18,
    y: 40,
    color: 'hsl(var(--tequila))',
  },
  {
    id: 'cachaca',
    name: 'Cachaça',
    country: 'Brasil',
    description: 'O destilado mais antigo das Américas, desde 1532',
    x: 32,
    y: 58,
    color: 'hsl(var(--cachaca))',
  },
];

const OriginsMap = () => {
  const [activeOrigin, setActiveOrigin] = useState<Origin | null>(null);
  const [hoveredOrigin, setHoveredOrigin] = useState<string | null>(null);

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">Origens Geográficas</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Explore o mapa e descubra onde nasceu cada destilado que marcou a história da humanidade
          </p>
        </div>

        <div className="relative">
          {/* World Map SVG */}
          <div className="bg-card/50 border-border/50 relative overflow-hidden rounded-2xl border p-4 backdrop-blur-sm md:p-8">
            <svg viewBox="0 0 100 60" className="h-auto w-full" style={{ minHeight: '300px' }}>
              {/* Simplified World Map Path */}
              <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--muted))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--muted))" stopOpacity="0.1" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Ocean background */}
              <rect x="0" y="0" width="100" height="60" fill="hsl(var(--background))" />

              {/* Simplified continents */}
              {/* North America */}
              <path
                d="M5,15 Q10,10 20,12 L25,15 Q30,20 28,30 L25,35 Q20,38 15,35 L10,30 Q5,25 5,15"
                fill="url(#mapGradient)"
                stroke="hsl(var(--border))"
                strokeWidth="0.2"
              />

              {/* South America */}
              <path
                d="M25,40 Q30,38 32,42 L35,50 Q35,58 30,60 L25,58 Q22,55 23,48 L25,40"
                fill="url(#mapGradient)"
                stroke="hsl(var(--border))"
                strokeWidth="0.2"
              />

              {/* Europe */}
              <path
                d="M42,18 Q48,16 52,18 L55,22 Q56,26 54,28 L48,30 Q44,28 42,24 L42,18"
                fill="url(#mapGradient)"
                stroke="hsl(var(--border))"
                strokeWidth="0.2"
              />

              {/* Africa */}
              <path
                d="M42,32 Q50,30 55,35 L58,45 Q56,55 50,58 L45,55 Q40,50 40,40 L42,32"
                fill="url(#mapGradient)"
                stroke="hsl(var(--border))"
                strokeWidth="0.2"
              />

              {/* Asia */}
              <path
                d="M55,15 Q65,12 80,15 L88,20 Q92,28 90,35 L82,40 Q75,42 68,38 L60,32 Q55,25 55,15"
                fill="url(#mapGradient)"
                stroke="hsl(var(--border))"
                strokeWidth="0.2"
              />

              {/* Australia */}
              <path
                d="M78,48 Q85,46 90,50 L92,55 Q90,58 85,58 L80,55 Q78,52 78,48"
                fill="url(#mapGradient)"
                stroke="hsl(var(--border))"
                strokeWidth="0.2"
              />

              {/* Origin markers */}
              {origins.map(origin => (
                <g
                  key={origin.id}
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredOrigin(origin.id)}
                  onMouseLeave={() => setHoveredOrigin(null)}
                  onClick={() => setActiveOrigin(activeOrigin?.id === origin.id ? null : origin)}
                  filter={hoveredOrigin === origin.id || activeOrigin?.id === origin.id ? 'url(#glow)' : undefined}
                >
                  {/* Pulse animation */}
                  <circle
                    cx={origin.x}
                    cy={origin.y}
                    r={hoveredOrigin === origin.id || activeOrigin?.id === origin.id ? 3 : 2}
                    fill={origin.color}
                    opacity={0.3}
                    className="animate-pulse"
                  />
                  {/* Main dot */}
                  <circle
                    cx={origin.x}
                    cy={origin.y}
                    r={hoveredOrigin === origin.id || activeOrigin?.id === origin.id ? 1.5 : 1}
                    fill={origin.color}
                    className="transition-all duration-300"
                  />
                </g>
              ))}
            </svg>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:gap-4">
              {origins.map(origin => (
                <button
                  key={origin.id}
                  onClick={() => setActiveOrigin(activeOrigin?.id === origin.id ? null : origin)}
                  className={`flex items-center gap-2 rounded-full border px-3 py-1.5 transition-all duration-300 ${
                    activeOrigin?.id === origin.id ? 'border-primary bg-primary/10' : 'border-border/50 hover:border-primary/50 bg-card/50'
                  }`}
                  onMouseEnter={() => setHoveredOrigin(origin.id)}
                  onMouseLeave={() => setHoveredOrigin(null)}
                >
                  <span className="size-2.5 rounded-full" style={{ backgroundColor: origin.color }} />
                  <span className="text-foreground text-xs font-medium md:text-sm">{origin.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Info Card */}
          {activeOrigin && (
            <div className="animate-fade-in absolute inset-x-4 bottom-4 md:bottom-8 md:left-auto md:right-8 md:w-80">
              <div className="glass border-border/50 rounded-xl border p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg p-2" style={{ backgroundColor: `${activeOrigin.color}20` }}>
                    <MapPin className="size-5" style={{ color: activeOrigin.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-foreground text-lg font-semibold">{activeOrigin.name}</h3>
                    <p className="text-primary text-sm font-medium">{activeOrigin.country}</p>
                    <p className="text-muted-foreground mt-1 text-sm">{activeOrigin.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OriginsMap;
