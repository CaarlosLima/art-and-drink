import heroImage from '@/assets/tequila-hero.jpg';
import { DrinkHero } from '@/components/drinks/DrinkHero';
import { DrinkTimeline } from '@/components/drinks/DrinkTimeline';
import { HistorySection } from '@/components/drinks/HistorySection';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const tequilaTimeline = [
  {
    year: '1000 a.C.',
    title: 'Pulque Sagrado',
    description: 'Povos mesoamericanos começam a fermentar o agave para criar pulque.',
    expanded: 'O pulque era uma bebida leitosa e sagrada, consumida em rituais religiosos. Os astecas acreditavam que foi um presente dos deuses.',
  },
  {
    year: '1519',
    title: 'Chegada dos Espanhóis',
    description: 'Conquistadores trazem a arte da destilação para o México.',
    expanded: 'Quando o brandy espanhol acabou, os colonizadores aplicaram técnicas de destilação ao pulque, criando o primeiro mezcal destilado.',
  },
  {
    year: '1600',
    title: 'Primeira Destilaria',
    description: 'A região de Tequila, Jalisco, começa a produzir mezcal de agave azul.',
    expanded: 'O vulcão de Tequila criou um solo único, rico em minerais, perfeito para o agave azul weber.',
  },
  {
    year: '1758',
    title: 'Licença Cuervo',
    description: 'José Antonio de Cuervo obtém a primeira licença para produzir tequila comercialmente.',
    expanded: 'A família Cuervo estabeleceu padrões de qualidade que definiram a indústria. A marca existe até hoje.',
  },
  {
    year: '1873',
    title: 'Exportação Inicia',
    description: 'Sauza envia os primeiros barris de tequila para os Estados Unidos.',
    expanded: 'Cenobio Sauza foi pioneiro em exportar tequila, abrindo caminho para o mercado internacional.',
  },
  {
    year: '1974',
    title: 'Denominação de Origem',
    description: 'México protege legalmente a tequila como produto de origem controlada.',
    expanded: 'Assim como o champagne, a tequila só pode ser produzida em regiões específicas do México, principalmente Jalisco.',
  },
  {
    year: '1994',
    title: 'Boom Internacional',
    description: 'NAFTA facilita exportações e a tequila conquista o mundo.',
    expanded: 'O consumo nos EUA explodiu, com a Margarita se tornando um dos drinks mais populares do mundo.',
  },
  {
    year: '2000s',
    title: 'Era Premium',
    description: 'Tequilas ultra-premium e añejos redefinem a categoria.',
    expanded: 'Marcas como Clase Azul e Don Julio 1942 provaram que tequila pode ser um destilado de sipping, comparável aos melhores whiskies.',
  },
];

const Tequila = () => {
  return (
    <Layout>
      <DrinkHero
        title="Tequila"
        subtitle="O Orgulho Mexicano"
        description="Das terras vulcânicas de Jalisco, a tequila é o coração líquido do México. Feita exclusivamente do agave azul, esta bebida ancestral carrega a alma de uma cultura milenar em cada gole."
        image={heroImage}
        accentColor="tequila"
      >
        <Button variant="outline" size="xl" asChild>
          <Link to="/receitas?categoria=Tequila">
            Ver Receitas de Tequila
            <BookOpen className="size-5" />
          </Link>
        </Button>
      </DrinkHero>

      <HistorySection
        title="Das Terras do Agave"
        paragraphs={[
          'Os povos mesoamericanos já fermentavam o agave há mais de 2.000 anos, criando o pulque - uma bebida leitosa e sagrada. A destilação chegou com os espanhóis no século XVI, dando origem ao mezcal e, eventualmente, à tequila.',
          'A cidade de Tequila, em Jalisco, deu nome à bebida no século XVIII. A família Cuervo obteve a primeira licença para produção comercial em 1758, iniciando uma tradição que perdura até hoje.',
          'Em 1974, a tequila recebeu denominação de origem protegida, significando que só pode ser produzida em regiões específicas do México, principalmente em Jalisco.',
        ]}
        image="https://images.unsplash.com/photo-1683313890724-ec2df503a9d6?w=800"
        imageAlt="Campos de agave no México"
        accentColor="tequila"
      />

      <HistorySection
        title="Classificações e Sabores"
        paragraphs={[
          'Blanco/Plata: Engarrafada logo após a destilação ou descansada por até 60 dias. Sabor puro de agave, vegetal e picante. Ideal para coquetéis.',
          'Reposado: Descansada de 2 a 12 meses em barris de carvalho. Desenvolve notas sutis de baunilha e madeira mantendo o caráter de agave.',
          'Añejo: Envelhecida de 1 a 3 anos. Mais complexa e suave, com sabores de caramelo, chocolate e especiarias.',
          'Extra Añejo: Maturada por mais de 3 anos. Uma experiência de degustação comparável aos melhores whiskies e conhaques.',
        ]}
        image="https://images.unsplash.com/photo-1732636190689-c0396cc1e5a6?w=800"
        imageAlt="Diferentes tipos de tequila"
        accentColor="tequila"
        reverse
      />

      <DrinkTimeline
        title="A História da Tequila"
        subtitle="Linha do Tempo"
        description="Uma jornada através dos séculos que moldaram o destilado mais vibrante do México"
        events={tequilaTimeline}
        accentColor="tequila"
      />
    </Layout>
  );
};

export default Tequila;
