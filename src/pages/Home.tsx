import heroImage from '@/assets/hero-home.jpg';
import { Layout } from '@/components/layout/Layout';
import { SEOHelmet } from '@/components/SEOHelmet';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Citrus, Flame, Grape, Leaf, Snowflake, Sparkles, Sun, Wine } from 'lucide-react';
import { Link } from 'react-router-dom';

const drinkCategories = [
  {
    name: 'Whisky',
    description: 'O destilado escocês com séculos de tradição',
    tagline: 'Elegância em cada gole',
    path: '/whisky',
    color: 'from-whisky to-copper',
    icon: Flame,
    stats: { drinks: 12, origin: 'Escócia' },
  },
  {
    name: 'Vodka',
    description: 'A pureza cristalina do leste europeu',
    tagline: 'Pureza absoluta',
    path: '/vodka',
    color: 'from-vodka to-slate-400',
    icon: Snowflake,
    stats: { drinks: 8, origin: 'Rússia' },
  },
  {
    name: 'Gin',
    description: 'Botânicos que contam histórias',
    tagline: 'Aromas que encantam',
    path: '/gin',
    color: 'from-gin to-emerald-600',
    icon: Leaf,
    stats: { drinks: 10, origin: 'Holanda' },
  },
  {
    name: 'Rum',
    description: 'O espírito caribenho que aquece a alma',
    tagline: 'Calor tropical',
    path: '/rum',
    color: 'from-rum to-amber-700',
    icon: Sun,
    stats: { drinks: 9, origin: 'Caribe' },
  },
  {
    name: 'Tequila',
    description: 'O orgulho mexicano do agave',
    tagline: 'Espírito mexicano',
    path: '/tequila',
    color: 'from-tequila to-yellow-600',
    icon: Sun,
    stats: { drinks: 7, origin: 'México' },
  },
  {
    name: 'Cachaça',
    description: 'O espírito brasileiro da cana-de-açúcar',
    tagline: 'Alma brasileira',
    path: '/cachaca',
    color: 'from-rum to-lime-600',
    icon: Citrus,
    stats: { drinks: 5, origin: 'Brasil' },
  },
  {
    name: 'Vinho',
    description: 'A tradição milenar das videiras',
    tagline: 'Tradição secular',
    path: '/vinho',
    color: 'from-wine to-rose-800',
    icon: Grape,
    stats: { drinks: 6, origin: 'França' },
  },
];

const Home = () => {
  return (
    <Layout>
      <SEOHelmet
        title={'Arte & Coquetel'}
        description={'Descubra a história fascinante das bebidas mais icônicas do mundo e aprenda a criar coquetéis extraordinários.'}
        image={heroImage}
      />

      <section className="relative flex min-h-screen items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Bar elegante com coquetéis" className="size-full object-cover" />
          <div className="from-background via-background/80 absolute inset-0 bg-gradient-to-r to-transparent" />
          <div className="from-background absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="animate-slide-up max-w-2xl">
            <span className="text-gold font-body mb-6 inline-flex items-center gap-2 text-sm uppercase tracking-widest">
              <Wine className="size-4" />A Arte da Coquetelaria
            </span>

            <h1 className="font-display text-foreground mb-6 text-5xl font-bold leading-tight md:text-7xl">
              Descubra a <span className="text-gradient-gold">Magia</span> por Trás de Cada Drink
            </h1>

            <p className="text-muted-foreground mb-8 text-lg leading-relaxed md:text-xl">
              Explore a história fascinante das bebidas mais icônicas do mundo e aprenda a criar coquetéis extraordinários em casa.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <Link to="/historia">
                  Começar a Explorar
                  <ArrowRight className="size-5" />
                </Link>
              </Button>

              <Button variant="outline" size="xl" asChild>
                <Link to="/receitas">
                  Ver Receitas
                  <BookOpen className="size-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-gold font-body mb-4 block text-sm uppercase tracking-widest">Por que explorar</span>
            <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">Mais do que Receitas</h2>
            <p className="text-muted-foreground">Uma jornada completa pelo universo das bebidas destiladas e fermentadas.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: 'História Rica',
                description: 'Conheça a origem e evolução de cada bebida, desde suas raízes ancestrais.',
              },
              {
                icon: Wine,
                title: 'Receitas Exclusivas',
                description: 'Drinks clássicos e contemporâneos com instruções detalhadas passo a passo.',
              },
              {
                icon: Sparkles,
                title: 'Dicas de Expert',
                description: 'Técnicas profissionais para elevar suas criações ao próximo nível.',
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="bg-gradient-card border-border hover:border-gold/30 animate-slide-up group rounded-xl border p-8 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gold/10 group-hover:bg-gold/20 mb-6 flex size-14 items-center justify-center rounded-lg transition-colors">
                  <feature.icon className="text-gold size-7" />
                </div>
                <h3 className="font-display text-foreground mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background relative overflow-hidden py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="bg-gold absolute left-10 top-20 size-72 rounded-full blur-3xl" />
          <div className="bg-copper absolute bottom-20 right-10 size-96 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="text-gold font-body mb-4 inline-flex items-center gap-2 text-sm uppercase tracking-widest">
              <Wine className="size-4" />
              Explore por categoria
            </span>
            <h2 className="font-display text-foreground mb-4 text-4xl font-bold md:text-5xl">
              Escolha Sua <span className="text-gradient-gold">Bebida</span>
            </h2>
            <p className="text-muted-foreground text-lg">Cada destilado possui uma história única e sabores que aguardam para serem descobertos</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {drinkCategories.map((category, index) => (
              <Link
                key={category.name}
                to={category.path}
                className="animate-slide-up border-border/50 hover:border-gold/40 hover:shadow-gold/10 group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 transition-all duration-500 group-hover:opacity-40`} />

                <div className="bg-card/80 absolute inset-0 backdrop-blur-sm" />

                <div className="relative flex h-full min-h-[320px] flex-col p-8">
                  <div className="mb-6 flex items-start justify-between">
                    <div
                      className={`size-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110`}
                    >
                      <category.icon className="text-foreground size-8" />
                    </div>
                    <span className="text-muted-foreground font-body bg-background/50 rounded-full px-3 py-1 text-xs uppercase tracking-wider">
                      {category.tagline}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-foreground group-hover:text-gold mb-3 text-3xl font-bold transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                  </div>

                  <div className="border-border/50 mt-6 border-t pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-muted-foreground">
                          <span className="text-gold font-semibold">{category.stats.drinks}</span> drinks
                        </span>
                        <span className="text-muted-foreground">
                          Origem: <span className="text-foreground">{category.stats.origin}</span>
                        </span>
                      </div>
                      <div className="bg-gold/10 group-hover:bg-gold/20 flex size-10 items-center justify-center rounded-full transition-colors">
                        <ArrowRight className="text-gold size-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Não sabe por onde começar? Explore nossa coleção completa de receitas</p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/receitas">
                <BookOpen className="mr-2 size-5" />
                Ver Todas as Receitas
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
