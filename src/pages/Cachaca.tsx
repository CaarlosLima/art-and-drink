import heroImage from '@/assets/cachaca-hero.jpg';
import { DrinkHero } from '@/components/drinks/DrinkHero';
import { DrinkTimeline } from '@/components/drinks/DrinkTimeline';
import { HistorySection } from '@/components/drinks/HistorySection';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const cachacaTimeline = [
  {
    year: '1532',
    title: 'Chegada da Cana',
    description: 'Martim Afonso de Sousa introduz a cana-de-açúcar no Brasil.',
    expanded: 'As primeiras mudas foram plantadas na Capitania de São Vicente, iniciando a história açucareira do Brasil.',
  },
  {
    year: '1550',
    title: 'Primeira Destilação',
    description: 'Escravos nos engenhos descobrem como destilar o caldo de cana fermentado.',
    expanded: "A cachaça nasce como o primeiro destilado das Américas, anterior ao rum caribenho. Era chamada de 'aguardente de cana'.",
  },
  {
    year: '1635',
    title: 'Proibição Portuguesa',
    description: 'Portugal proíbe a produção de cachaça para proteger a bagaceira portuguesa.',
    expanded: 'A proibição durou décadas, mas a produção clandestina continuou. A cachaça se tornou símbolo de resistência.',
  },
  {
    year: '1789',
    title: 'Símbolo de Independência',
    description: 'A Inconfidência Mineira adota a cachaça como bebida da revolução.',
    expanded: 'Enquanto a elite bebia vinho português, os revolucionários brindavam com cachaça, rejeitando o colonialismo.',
  },
  {
    year: '1850',
    title: 'Paraty se Destaca',
    description: 'A cidade de Paraty se torna o maior centro produtor do Brasil.',
    expanded: 'Os alambiques de Paraty produziam cachaça de altíssima qualidade, exportada para todo o país.',
  },
  {
    year: '1918',
    title: 'Nasce a Caipirinha',
    description: 'O drink brasileiro mais famoso surge durante a gripe espanhola.',
    expanded: 'Originalmente uma receita medicinal com cachaça, limão, alho e mel, a caipirinha evoluiu para o drink que conhecemos.',
  },
  {
    year: '2001',
    title: 'Denominação de Origem',
    description: 'A cachaça é oficialmente reconhecida como produto brasileiro.',
    expanded: 'Decreto federal estabelece que cachaça só pode ser produzida no Brasil, protegendo a identidade nacional da bebida.',
  },
  {
    year: '2010s',
    title: 'Era Artesanal',
    description: 'Cachaças premium ganham reconhecimento internacional.',
    expanded: 'Produtores artesanais de Minas Gerais conquistam prêmios mundiais, colocando a cachaça ao lado dos melhores destilados.',
  },
];

const Cachaca = () => {
  return (
    <Layout>
      <DrinkHero
        title="Cachaça"
        subtitle="O Espírito do Brasil"
        description="A bebida mais autenticamente brasileira, destilada da cana-de-açúcar fresca. Da Caipirinha aos bares de todo o mundo, a cachaça conquistou paladares com seu sabor único e versatilidade."
        image={heroImage}
        accentColor="rum"
      >
        <Button variant="outline" size="xl" asChild>
          <Link to="/receitas?categoria=Cachaça">
            Ver Receitas de Cachaça
            <BookOpen className="size-5" />
          </Link>
        </Button>
      </DrinkHero>

      <HistorySection
        title="Raízes Brasileiras"
        paragraphs={[
          'A cachaça nasceu no Brasil colonial do século XVI, quando os escravos nos engenhos de açúcar descobriram que o caldo de cana fermentado podia ser destilado. É considerada o primeiro destilado das Américas.',
          'Diferente do rum, que é feito a partir do melaço (subproduto do açúcar), a cachaça é destilada diretamente do caldo de cana fresco, o que lhe confere um sabor mais frutado e aromático.',
          'Por séculos foi considerada bebida popular, mas hoje a cachaça artesanal é reconhecida mundialmente como um destilado premium, com denominação de origem protegida desde 2001.',
        ]}
        image="https://images.unsplash.com/photo-1562601579-599dec564e06?w=800"
        imageAlt="Garrafa de cachaça artesanal"
        accentColor="rum"
      />

      <HistorySection
        title="Produção Artesanal"
        paragraphs={[
          'Cachaça de Alambique: Destilada em alambiques de cobre, em pequenos lotes. Preserva mais os sabores da cana e permite maior controle de qualidade. É o método tradicional e artesanal.',
          'Cachaça Industrial: Produzida em colunas de destilação contínua, em grande escala. Resulta em um destilado mais neutro e uniforme.',
          'Envelhecimento: A cachaça pode ser envelhecida em diversos tipos de madeira brasileira - bálsamo, amburana, jequitibá, carvalho - cada uma conferindo características únicas de cor, aroma e sabor.',
          'Minas Gerais é o coração da produção artesanal, com mais de 8.000 produtores. Paraty (RJ) e o interior de São Paulo também são regiões tradicionais.',
        ]}
        image="https://images.unsplash.com/photo-1445140463371-d8036feedc2f?w=800"
        imageAlt="Alambique de cobre tradicional"
        accentColor="rum"
        reverse
      />

      <DrinkTimeline
        title="A História da Cachaça"
        subtitle="Linha do Tempo"
        description="Uma jornada através dos séculos que moldaram o destilado mais autêntico do Brasil"
        events={cachacaTimeline}
        accentColor="rum"
      />
    </Layout>
  );
};

export default Cachaca;
