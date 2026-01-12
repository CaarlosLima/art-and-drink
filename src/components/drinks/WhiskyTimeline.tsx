import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  expanded?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '1494',
    title: 'Primeiro Registro Oficial',
    description: 'O primeiro registro escrito de destilação de whisky aparece nos registros fiscais escoceses.',
    expanded:
      "Frei John Cor recebeu 'oito bolls de malte' para fazer aquavitae (água da vida) para o Rei James IV da Escócia. Este documento, encontrado nos Exchequer Rolls, é considerado o nascimento oficial do whisky escocês.",
  },
  {
    year: '1608',
    title: 'Licença de Bushmills',
    description: 'A destilaria Old Bushmills na Irlanda recebe a primeira licença oficial para destilar.',
    expanded:
      'Tornando-se a destilaria licenciada mais antiga do mundo ainda em operação. A região de County Antrim já era conhecida pela produção de uisce beatha há séculos antes da licença oficial.',
  },
  {
    year: '1707',
    title: 'Ato de União',
    description: 'A união da Escócia com a Inglaterra traz impostos pesados sobre o whisky.',
    expanded:
      'Os altos impostos levaram muitos destiladores a operar ilegalmente nas Highlands. Estima-se que mais de 14.000 alambiques ilegais operavam na Escócia, criando uma cultura de contrabando que duraria mais de um século.',
  },
  {
    year: '1783',
    title: 'Nasce o Bourbon',
    description: 'Evan Williams estabelece a primeira destilaria comercial no Kentucky.',
    expanded:
      "Colonizadores escoceses e irlandeses adaptaram suas técnicas ao milho abundante na América. O nome 'bourbon' viria do Condado de Bourbon, Kentucky, onde o whisky era embarcado pelo Rio Ohio.",
  },
  {
    year: '1823',
    title: 'Excise Act',
    description: 'Lei britânica legaliza a destilação e cria o sistema de licenciamento moderno.',
    expanded:
      'Esta lei revolucionária reduziu drasticamente os impostos e simplificou o processo de licenciamento. George Smith foi o primeiro a obter uma licença legal, fundando o que se tornaria a destilaria Glenlivet.',
  },
  {
    year: '1831',
    title: 'Alambique Coffey',
    description: 'Aeneas Coffey patenteia o alambique de coluna contínua.',
    expanded:
      'Esta invenção revolucionou a produção de whisky, permitindo destilação contínua e mais eficiente. O whisky de grão produzido seria essencial para a criação dos blended whiskies que dominariam o mercado mundial.',
  },
  {
    year: '1880',
    title: 'Crise da Filoxera',
    description: 'A praga devastou os vinhedos europeus, abrindo espaço para o whisky.',
    expanded:
      "Com a escassez de conhaque e brandy, o whisky escocês preencheu o vazio, conquistando os paladares da elite europeia. Empresas como Johnnie Walker e Dewar's expandiram globalmente durante este período.",
  },
  {
    year: '1920-1933',
    title: 'Lei Seca Americana',
    description: 'A Proibição nos EUA paradoxalmente impulsiona o whisky escocês e canadense.',
    expanded:
      "Enquanto destilarias americanas fechavam, o whisky era contrabandeado do Canadá e importado 'para fins medicinais'. Marcas escocesas como Cutty Sark foram criadas especificamente para o mercado de contrabando.",
  },
  {
    year: '1964',
    title: 'Bourbon: Patrimônio Nacional',
    description: 'O Congresso dos EUA declara oficialmente o bourbon como produto distintivo americano.',
    expanded:
      'A resolução estabeleceu padrões rígidos: deve ser feito nos EUA com pelo menos 51% de milho, envelhecido em barris de carvalho novos carbonizados, e engarrafado com no mínimo 40% de álcool.',
  },
  {
    year: '2000s',
    title: 'Renascimento do Single Malt',
    description: 'O século XXI vê uma explosão de interesse por whiskies premium e artesanais.',
    expanded:
      'Novas destilarias surgem globalmente - do Japão à Índia, da Austrália ao Brasil. O whisky japonês ganha reconhecimento mundial, com Yamazaki e Hibiki conquistando prêmios internacionais.',
  },
];

export const WhiskyTimeline = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const visibleEvents = showAll ? timelineEvents : timelineEvents.slice(0, 5);

  const toggleExpand = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="text-whisky text-sm font-medium uppercase tracking-widest">Linha do Tempo</span>
          <h2 className="text-foreground mt-2 font-serif text-4xl font-bold md:text-5xl">A História do Whisky</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">Uma jornada através dos séculos que moldaram a bebida mais reverenciada do mundo</p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <div className="from-whisky via-whisky/50 absolute inset-y-0 left-8 w-0.5 bg-gradient-to-b to-transparent md:left-1/2 md:-translate-x-1/2" />

          {visibleEvents.map((event, index) => (
            <div key={event.year} className={`relative mb-12 flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="bg-whisky border-background absolute left-8 z-10 size-4 -translate-x-1/2 rounded-full border-4 shadow-[0_0_20px_hsl(var(--whisky)/0.5)] md:left-1/2" />

              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div
                  className="bg-card/50 border-border/50 hover:border-whisky/30 group cursor-pointer rounded-xl border p-6 backdrop-blur-sm transition-all duration-300"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-whisky font-serif text-2xl font-bold">{event.year}</span>
                    <ChevronDown
                      className={`text-muted-foreground size-5 transition-transform duration-300 ${expandedItems.has(index) ? 'rotate-180' : ''}`}
                    />
                  </div>
                  <h3 className="text-foreground group-hover:text-whisky mb-2 font-serif text-xl font-semibold transition-colors">{event.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>

                  {/* Expanded content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedItems.has(index) ? 'mt-4 max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-foreground/80 border-border/50 border-t pt-4 text-sm leading-relaxed">{event.expanded}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-8 text-center">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="border-whisky/50 text-whisky hover:bg-whisky/10 hover:border-whisky gap-2"
          >
            {showAll ? (
              <>
                <ChevronUp className="size-4" />
                Mostrar Menos
              </>
            ) : (
              <>
                <ChevronDown className="size-4" />
                Mostrar Mais ({timelineEvents.length - 5} eventos)
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};
