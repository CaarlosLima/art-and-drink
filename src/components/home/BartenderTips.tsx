import { Drumstick, RefreshCw, Blend, Flower2 } from 'lucide-react';

const techniques = [
  {
    icon: Drumstick,
    name: 'Muddling',
    title: 'Macerar com Precisão',
    description: 'A arte de extrair óleos essenciais e sabores de frutas, ervas e especiarias.',
    tips: [
      'Use pressão firme mas gentil para não amargar as ervas',
      'Gire o muddler em vez de esmagar repetidamente',
      'Para hortelã, apenas pressione levemente para liberar os óleos',
      'Frutas cítricas precisam de mais força que ervas',
    ],
    accent: 'from-green-500 to-emerald-600',
  },
  {
    icon: RefreshCw,
    name: 'Shaking',
    title: 'Agitar como Profissional',
    description: 'Técnica essencial para drinks com sucos, xaropes e ingredientes densos.',
    tips: [
      'Agite vigorosamente por 10-15 segundos',
      'Use gelo grande para diluição controlada',
      'Mantenha a coqueteleira na altura do ombro',
      'O som deve mudar quando o drink está pronto',
    ],
    accent: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Blend,
    name: 'Stirring',
    title: 'Mexer com Elegância',
    description: 'Para drinks com destilados puros que precisam apenas de diluição e resfriamento.',
    tips: [
      'Use uma colher bailarina longa',
      'Gire suavemente por 30-40 segundos',
      'Mantenha a colher sempre em contato com o copo',
      'O gelo não deve fazer barulho durante o processo',
    ],
    accent: 'from-gold to-copper',
  },
  {
    icon: Flower2,
    name: 'Garnishing',
    title: 'Decorar com Propósito',
    description: 'Guarnições que elevam a experiência visual e aromática do drink.',
    tips: [
      'Sempre use ingredientes frescos e de qualidade',
      'A guarnição deve complementar os sabores do drink',
      'Esprema cascas cítricas sobre o drink para liberar óleos',
      'Menos é mais - evite decorações excessivas',
    ],
    accent: 'from-pink-500 to-rose-600',
  },
];

export const BartenderTips = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-gold font-body mb-4 block text-sm uppercase tracking-widest">Técnicas Profissionais</span>
          <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">Dicas de Bartender</h2>
          <p className="text-muted-foreground">Domine as técnicas fundamentais que todo bartender profissional utiliza para criar drinks perfeitos.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {techniques.map((technique, index) => (
            <div
              key={technique.name}
              className="bg-card border-border hover:border-gold/30 animate-slide-up group relative overflow-hidden rounded-xl border transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient accent bar */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${technique.accent}`} />

              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className={`size-16 shrink-0 rounded-xl bg-gradient-to-br ${technique.accent} flex items-center justify-center shadow-lg`}>
                    <technique.icon className="size-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <span className="text-muted-foreground font-body text-xs uppercase tracking-widest">{technique.name}</span>
                    <h3 className="font-display text-foreground mb-2 mt-1 text-xl font-semibold">{technique.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{technique.description}</p>
                  </div>
                </div>

                <div className="border-border mt-6 border-t pt-6">
                  <h4 className="text-gold mb-4 flex items-center gap-2 text-sm font-semibold">
                    <span className="bg-gold size-1.5 rounded-full" />
                    Dicas Essenciais
                  </h4>
                  <ul className="space-y-3">
                    {technique.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-muted-foreground group-hover:text-foreground/80 flex items-start gap-3 text-sm transition-colors">
                        <span className="bg-gold/10 text-gold mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full text-xs font-medium">
                          {tipIndex + 1}
                        </span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pro tip callout */}
        <div className="from-gold/10 via-copper/10 to-gold/10 border-gold/20 mt-12 rounded-xl border bg-gradient-to-r p-6">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
            <div className="bg-gold/20 flex size-12 shrink-0 items-center justify-center rounded-full">
              <span className="text-2xl">💡</span>
            </div>
            <div>
              <h4 className="font-display text-foreground mb-1 text-lg font-semibold">Dica de Ouro</h4>
              <p className="text-muted-foreground text-sm">
                A regra mais importante da coquetelaria: <span className="text-gold font-medium">prove sempre</span>. Cada ingrediente varia, então ajuste
                doçura, acidez e diluição ao seu gosto. Um grande bartender usa a receita como guia, não como lei.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
