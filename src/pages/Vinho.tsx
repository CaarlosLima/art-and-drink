import heroImage from '@/assets/vinho-hero.jpg';
import { DrinkHero } from '@/components/drinks/DrinkHero';
import { DrinkTimeline } from '@/components/drinks/DrinkTimeline';
import { HistorySection } from '@/components/drinks/HistorySection';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const vinhoTimeline = [
  {
    year: '6000 a.C.',
    title: 'Origens na Geórgia',
    description: 'As evidências mais antigas de produção de vinho são encontradas no Cáucaso.',
    expanded: 'Jarros de cerâmica com resíduos de vinho foram descobertos na Geórgia, confirmando que a vinicultura tem mais de 8.000 anos.',
  },
  {
    year: '3000 a.C.',
    title: 'Egito e Mesopotâmia',
    description: 'O vinho se torna bebida de faraós e oferenda aos deuses.',
    expanded: 'Os egípcios desenvolveram técnicas de envelhecimento e rotulagem, indicando safra e origem nas ânforas.',
  },
  {
    year: '800 a.C.',
    title: 'Expansão Grega',
    description: 'Os gregos espalham videiras por todo o Mediterrâneo.',
    expanded: 'Dionísio, o deus do vinho, tornou-se central na cultura grega. Os gregos classificavam vinhos por região, precursores das AOCs.',
  },
  {
    year: '100 d.C.',
    title: 'Império Romano',
    description: 'Roma estabelece vinhedos da Espanha à Alemanha.',
    expanded: 'Os romanos aperfeiçoaram técnicas de cultivo e envelhecimento. Regiões como Bordeaux e Mosel foram plantadas nesta época.',
  },
  {
    year: '500-1500',
    title: 'Era dos Mosteiros',
    description: 'Monges preservam e desenvolvem a viticultura na Europa medieval.',
    expanded: 'Cistercienses e beneditinos criaram os conceitos de terroir e cru. Os vinhedos de Borgonha foram mapeados por monges.',
  },
  {
    year: '1855',
    title: 'Classificação de Bordeaux',
    description: 'Napoleão III ordena a classificação oficial dos vinhos de Bordeaux.',
    expanded: 'O sistema de Premiers Crus a Cinquièmes Crus permanece essencialmente inalterado até hoje, definindo hierarquias de prestígio.',
  },
  {
    year: '1863',
    title: 'Crise da Filoxera',
    description: 'Praga americana devasta vinhedos europeus por décadas.',
    expanded: 'O pulgão Phylloxera destruiu milhões de hectares. A solução foi enxertar videiras europeias em raízes americanas resistentes.',
  },
  {
    year: '1976',
    title: 'Julgamento de Paris',
    description: 'Vinhos californianos vencem os franceses em degustação às cegas.',
    expanded: 'O evento revolucionou o mundo do vinho, provando que qualidade não era exclusividade do Velho Mundo.',
  },
  {
    year: '2000s',
    title: 'Globalização do Vinho',
    description: 'Novos países produtores conquistam espaço no mercado mundial.',
    expanded: 'Chile, Argentina, Austrália, Nova Zelândia e até Brasil produzem vinhos premiados internacionalmente.',
  },
];

const Vinho = () => {
  return (
    <Layout>
      <DrinkHero
        title="Vinho"
        subtitle="Tradição Milenar"
        description="Das vinhas ancestrais do Cáucaso aos terroirs mais prestigiados do mundo, o vinho é a bebida da civilização. Cada garrafa conta a história de um lugar, um ano e das mãos que a criaram."
        image={heroImage}
        accentColor="wine"
      >
        <Button variant="outline" size="xl" asChild>
          <Link to="/receitas?categoria=Vinho">
            Ver Receitas de Vinho
            <BookOpen className="size-5" />
          </Link>
        </Button>
      </DrinkHero>

      <HistorySection
        title="8.000 Anos de História"
        paragraphs={[
          'As evidências mais antigas de produção de vinho datam de 6.000 a.C., na região que hoje corresponde à Geórgia. Os antigos egípcios, gregos e romanos aperfeiçoaram a arte, espalhando videiras por todo o Mediterrâneo.',
          'Na Idade Média, os monges europeus preservaram e desenvolveram a viticultura. Foram eles que começaram a identificar os melhores terroirs e a criar as técnicas de vinificação que usamos até hoje.',
          'O século XIX trouxe a praga da filoxera, que devastou vinhedos europeus. A solução veio do enxerto com videiras americanas resistentes, salvando a indústria e iniciando uma nova era de viticultura científica.',
        ]}
        image="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800"
        imageAlt="Taça de vinho na vinícola"
        accentColor="wine"
      />

      <HistorySection
        title="Uvas e Estilos"
        paragraphs={[
          'Tintos: Da potência do Cabernet Sauvignon à elegância do Pinot Noir, do frutado Merlot à complexidade do Nebbiolo. Cada uva expressa sua personalidade única.',
          'Brancos: A versatilidade do Chardonnay, a frescura do Sauvignon Blanc, a aromática Riesling. Vinhos que vão do mineral ao tropical.',
          'Espumantes: O Champagne francês estabeleceu o padrão, mas Prosecco, Cava e espumantes do Novo Mundo conquistaram seu espaço com estilos distintos.',
          'Fortificados: Porto, Sherry e Madeira representam séculos de tradição em vinhos fortalecidos com aguardente vínica.',
        ]}
        image="https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800"
        imageAlt="Taça de vinho"
        accentColor="wine"
        reverse
      />

      <DrinkTimeline
        title="A História do Vinho"
        subtitle="Linha do Tempo"
        description="Uma jornada através dos milênios que moldaram a bebida mais antiga da civilização"
        events={vinhoTimeline}
        accentColor="wine"
      />
    </Layout>
  );
};

export default Vinho;
