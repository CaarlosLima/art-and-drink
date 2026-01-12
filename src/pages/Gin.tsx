import heroImage from '@/assets/gin-hero.jpg';
import { DrinkHero } from '@/components/drinks/DrinkHero';
import { DrinkTimeline } from '@/components/drinks/DrinkTimeline';
import { HistorySection } from '@/components/drinks/HistorySection';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const ginTimeline = [
  {
    year: '1269',
    title: 'Primeiros Registros',
    description: 'Primeiras referências a destilados de zimbro aparecem na Holanda.',
    expanded: 'Monges e alquimistas usavam zimbro em destilados medicinais para tratar problemas estomacais e renais.',
  },
  {
    year: '1575',
    title: 'Nasce a Genever',
    description: 'A família Bols começa a produzir genever em Amsterdã.',
    expanded: 'Lucas Bols funda sua destilaria, criando a genever que seria o precursor direto do gin moderno.',
  },
  {
    year: '1689',
    title: 'Gin na Inglaterra',
    description: 'Guilherme III de Orange leva o gosto pelo gin da Holanda para a Inglaterra.',
    expanded: 'O rei holandês liberou a produção de destilados na Inglaterra, iniciando uma era de produção descontrolada.',
  },
  {
    year: '1720-1751',
    title: 'Gin Craze',
    description: "A 'Febre do Gin' devasta Londres com milhares de destilarias caseiras.",
    expanded: "William Hogarth imortalizou a crise em sua gravura 'Gin Lane'. Estima-se que Londres tinha uma destilaria para cada cinco residências.",
  },
  {
    year: '1751',
    title: 'Gin Act',
    description: 'Legislação regulamenta a produção e inicia a era do gin de qualidade.',
    expanded: 'A lei aumentou impostos e criou licenças, forçando o fechamento de destilarias ilegais e abrindo caminho para produtores respeitáveis.',
  },
  {
    year: '1830',
    title: 'London Dry Nasce',
    description: 'A invenção do alambique de coluna permite criar o London Dry Gin.',
    expanded: 'O novo estilo era mais seco, limpo e elegante que a genever. Marcas como Tanqueray (1830) e Beefeater (1863) definiram o padrão.',
  },
  {
    year: '1857',
    title: 'Gin & Tônica',
    description: 'Oficiais britânicos na Índia misturam gin com água tônica medicinal.',
    expanded: 'Para disfarçar o gosto amargo do quinino (antimalárico), os soldados adicionavam gin, limão e açúcar. Nascia o G&T.',
  },
  {
    year: '2000s',
    title: 'Renascimento Craft',
    description: 'Explosão de destilarias artesanais redefine o mundo do gin.',
    expanded: "De Hendrick's a Monkey 47, novas marcas provaram que gin pode ser tão diverso e complexo quanto qualquer destilado premium.",
  },
];

const Gin = () => {
  return (
    <Layout>
      <DrinkHero
        title="Gin"
        subtitle="O Espírito Botânico"
        description="Nascido nos mosteiros holandeses e aperfeiçoado nas destilarias inglesas, o gin é uma sinfonia de botânicos liderada pelo zimbro. De remédio medicinal a estrela dos coquetéis contemporâneos."
        image={heroImage}
        accentColor="gin"
      >
        <Button variant="outline" size="xl" asChild>
          <Link to="/receitas?categoria=Gin">
            Ver Receitas de Gin
            <BookOpen className="size-5" />
          </Link>
        </Button>
      </DrinkHero>

      <HistorySection
        title="Dos Mosteiros aos Bares"
        paragraphs={[
          "O gin tem suas raízes na genever holandesa do século XVII, uma bebida medicinal aromatizada com zimbro. Soldados ingleses descobriram a 'Dutch Courage' durante a Guerra dos Oitenta Anos e levaram o gosto para casa.",
          "Na Inglaterra, o gin explodiu em popularidade durante a 'Gin Craze' do século XVIII, quando a destilação caseira descontrolada causou uma crise de saúde pública. Pinturas de Hogarth retratavam a destruição social causada pela bebida.",
          'A Lei do Gin de 1751 regulamentou a produção, e gradualmente surgiu o London Dry Gin - um estilo mais refinado que se tornaria o padrão global.',
        ]}
        image="https://images.unsplash.com/photo-1608885898957-a559228e8749?w=800"
        imageAlt="Botânicos do gin"
        accentColor="gin"
      />

      <HistorySection
        title="A Magia dos Botânicos"
        paragraphs={[
          'O zimbro é o coração do gin - sem ele, legalmente não pode ser chamado de gin. Suas bagas conferem notas de pinho, resina e um toque levemente cítrico.',
          'Além do zimbro, cada gin carrega sua própria assinatura botânica: coentro para citrus, raiz de angélica para terroir, casca de cítricos para frescor, especiarias para calor.',
          'O renascimento do gin artesanal trouxe botânicos exóticos: rosa búlgara, chá japonês, ervas locais. Cada destilaria conta sua história através de suas escolhas aromáticas.',
        ]}
        image="https://images.unsplash.com/photo-1453824943068-95a30afe74c1?w=800"
        imageAlt="Frutas vermelhas e fatias de limão"
        accentColor="gin"
        reverse
      />

      <DrinkTimeline
        title="A História do Gin"
        subtitle="Linha do Tempo"
        description="Uma jornada através dos séculos que moldaram o destilado mais aromático do mundo"
        events={ginTimeline}
        accentColor="gin"
      />
    </Layout>
  );
};

export default Gin;
