import heroImage from '@/assets/rum-hero.jpg';
import { DrinkHero } from '@/components/drinks/DrinkHero';
import { DrinkTimeline } from '@/components/drinks/DrinkTimeline';
import { HistorySection } from '@/components/drinks/HistorySection';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const rumTimeline = [
  {
    year: '1493',
    title: 'Chegada da Cana',
    description: 'Cristóvão Colombo traz mudas de cana-de-açúcar para o Caribe.',
    expanded: 'Na segunda viagem às Américas, Colombo introduziu a cana-de-açúcar na ilha de Hispaniola, iniciando a história do rum no Novo Mundo.',
  },
  {
    year: '1650',
    title: 'Nascimento do Rum',
    description: 'Primeiros registros de produção de rum em Barbados.',
    expanded:
      "Escravos das plantações descobriram que o melaço, subproduto do açúcar, podia ser fermentado e destilado. Chamavam a bebida de 'kill-devil'.",
  },
  {
    year: '1655',
    title: 'Rum da Marinha',
    description: 'A Marinha Real Britânica adota o rum como ração diária.',
    expanded: "O 'grog' - rum diluído com água e limão - era dado aos marinheiros para prevenir escorbuto e manter a moral. A tradição durou até 1970.",
  },
  {
    year: '1700s',
    title: 'Era dos Piratas',
    description: 'O rum se torna a moeda do Caribe e bebida dos piratas.',
    expanded: 'O Triângulo do Comércio conectava rum, escravos e melaço. Piratas como Barba Negra eram conhecidos por seu amor pelo rum.',
  },
  {
    year: '1862',
    title: 'Nasce a Bacardi',
    description: 'Don Facundo Bacardí revoluciona o rum em Cuba.',
    expanded: 'Usando carvão para filtração e barris de carvalho branco, Bacardí criou o primeiro rum suave e leve, definindo o estilo cubano.',
  },
  {
    year: '1898',
    title: 'Cuba Libre',
    description: 'A guerra hispano-americana dá nome ao drink que uniu rum e cola.',
    expanded: "Soldados americanos em Cuba misturaram rum Bacardi com a recém-chegada Coca-Cola, brindando 'Por Cuba Libre!' - viva Cuba livre.",
  },
  {
    year: '1930s',
    title: 'Era dos Coquetéis',
    description: 'Havana se torna a capital mundial dos coquetéis com rum.',
    expanded: 'Bartenders como Constantino Ribalaigua no Floridita aperfeiçoaram clássicos como o Daiquiri, atraindo celebridades como Hemingway.',
  },
  {
    year: '2000s',
    title: 'Renascimento Premium',
    description: 'Rums envelhecidos e artesanais conquistam o mercado de luxo.',
    expanded: 'Marcas como Diplomático, Zacapa e Ron del Barrilito provaram que rum pode competir com os melhores whiskies e conhaques.',
  },
];

const Rum = () => {
  return (
    <Layout>
      <DrinkHero
        title="Rum"
        subtitle="O Espírito do Caribe"
        description="Nascido nas plantações de cana-de-açúcar caribenhas, o rum carrega o sol tropical em cada gota. De piratas a poetas, esta bebida dourada conquistou corações e inspirou lendas."
        image={heroImage}
        accentColor="rum"
      >
        <Button variant="outline" size="xl" asChild>
          <Link to="/receitas?categoria=Rum">
            Ver Receitas de Rum
            <BookOpen className="size-5" />
          </Link>
        </Button>
      </DrinkHero>

      <HistorySection
        title="Ouro Líquido do Caribe"
        paragraphs={[
          'O rum nasceu nas ilhas caribenhas do século XVII, quando escravos das plantações descobriram que o melaço, subproduto do açúcar, poderia ser fermentado e destilado.',
          "Rapidamente, o rum tornou-se a bebida dos piratas e da Marinha Real Britânica. O famoso 'grog' - rum diluído com água e limão - era a ração diária dos marinheiros, ajudando a prevenir o escorbuto.",
          'Cada ilha desenvolveu seu próprio estilo: o rum cubano leve e suave, o jamaicano intenso e frutado, o porto-riquenho equilibrado e o da Martinica com seu terroir de cana fresca.',
        ]}
        image="https://images.unsplash.com/photo-1588700063276-8163d6dd9544?w=800"
        imageAlt="Garrafa de rum do Porto Rico"
        accentColor="rum"
      />

      <HistorySection
        title="Estilos e Tradições"
        paragraphs={[
          'Rum Branco: Destilado e filtrado para remover cor, é leve e versátil. Perfeito para coquetéis refrescantes como Mojito e Daiquiri.',
          'Rum Dourado: Envelhecido brevemente em barris, ganha tons âmbar e sabores de caramelo e baunilha. O equilíbrio entre leveza e complexidade.',
          'Rum Escuro: Anos em barris de carvalho desenvolvem sabores profundos de especiarias, frutas secas e melaço. Ideal para saborear puro ou em drinks robustos.',
          'Rhum Agricole: Produzido na Martinica com suco de cana fresco ao invés de melaço, oferece um perfil mais vegetal e terroso.',
        ]}
        image="https://images.unsplash.com/photo-1648238867730-380469d9a2b8?w=800"
        imageAlt="Diferentes tipos de rum"
        accentColor="rum"
        reverse
      />

      <DrinkTimeline
        title="A História do Rum"
        subtitle="Linha do Tempo"
        description="Uma jornada através dos séculos que moldaram o destilado mais tropical do mundo"
        events={rumTimeline}
        accentColor="rum"
      />
    </Layout>
  );
};

export default Rum;
