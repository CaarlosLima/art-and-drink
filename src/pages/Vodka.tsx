import heroImage from '@/assets/vodka-hero.jpg';
import { DrinkHero } from '@/components/drinks/DrinkHero';
import { DrinkTimeline } from '@/components/drinks/DrinkTimeline';
import { HistorySection } from '@/components/drinks/HistorySection';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const vodkaTimeline = [
  {
    year: 'Séc. VIII',
    title: 'Primeiros Registros',
    description: 'As primeiras destilações de grãos ocorrem na Rússia e Polônia.',
    expanded:
      "A origem exata é disputada entre os dois países. O termo 'vodka' deriva do eslavo 'voda', significando água - referência à sua aparência cristalina.",
  },
  {
    year: '1405',
    title: 'Primeiro Documento Polonês',
    description: "A palavra 'wódka' aparece pela primeira vez em documentos oficiais poloneses.",
    expanded: 'O Tribunal de Sandomierz registra a palavra em um documento legal, marcando o primeiro uso oficial do termo na história.',
  },
  {
    year: '1533',
    title: 'Uso Medicinal na Rússia',
    description: 'Vodka é reconhecida oficialmente como remédio na Rússia.',
    expanded: "Médicos russos começam a prescrever vodka para diversas doenças. A bebida era conhecida como 'zhiznennia voda' - água da vida.",
  },
  {
    year: '1863',
    title: 'Destilação Contínua',
    description: 'Pyotr Smirnov adota a destilação em coluna e filtração com carvão.',
    expanded: 'Esta inovação revolucionou a produção, criando uma vodka mais pura e suave. A marca Smirnoff nasceu desta técnica.',
  },
  {
    year: '1917',
    title: 'Revolução Russa',
    description: 'A revolução força produtores a fugir, espalhando a vodka pelo mundo.',
    expanded: 'Vladimir Smirnov escapou para a Europa com a receita da família. A vodka chegou aos Estados Unidos e França através destes emigrantes.',
  },
  {
    year: '1941',
    title: 'Moscow Mule',
    description: 'O coquetel Moscow Mule populariza a vodka nos Estados Unidos.',
    expanded: 'Criado em Hollywood, o drink servido em canecas de cobre transformou a vodka de bebida desconhecida em fenômeno americano.',
  },
  {
    year: '1962',
    title: 'James Bond',
    description: "'Vodka Martini, batido, não mexido' entra para a cultura pop.",
    expanded: 'O agente 007 ajudou a estabelecer a vodka como sinônimo de sofisticação internacional nos filmes de espionagem.',
  },
  {
    year: '2000s',
    title: 'Era Premium',
    description: 'Vodkas artesanais e premium dominam o mercado de luxo.',
    expanded: 'Marcas como Grey Goose e Belvedere redefinem a categoria, provando que vodka pode ser tão complexa quanto outros destilados.',
  },
];

const Vodka = () => {
  return (
    <Layout>
      <DrinkHero
        title="Vodka"
        subtitle="Pureza Cristalina"
        description="Originária das vastas planícies do Leste Europeu, a vodka é sinônimo de pureza e versatilidade. De celebrações imperiais russas aos bares mais modernos do mundo, esta bebida transparente conquistou paladares globais."
        image={heroImage}
        accentColor="gold"
      >
        <Button variant="outline" size="xl" asChild>
          <Link to="/receitas?categoria=Vodka">
            Ver Receitas de Vodka
            <BookOpen className="size-5" />
          </Link>
        </Button>
      </DrinkHero>

      <HistorySection
        title="Das Estepes para o Mundo"
        paragraphs={[
          "A origem da vodka é disputada entre Rússia e Polônia, com registros datando do século VIII. Originalmente chamada de 'gorzalka' na Polônia e 'voda' (água) na Rússia, a bebida era inicialmente usada como remédio e perfume.",
          'No século XIV, a vodka começou a ser produzida em escala comercial na Rússia. O governo russo eventualmente monopolizou a produção, tornando-a uma importante fonte de receita para o estado.',
          'A Revolução Bolchevique de 1917 forçou muitos produtores a fugir, levando a vodka para a Europa Ocidental e América, onde encontrou um novo público ávido por sua neutralidade e mixabilidade.',
        ]}
        image="https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?w=800"
        imageAlt="Produção tradicional de vodka"
        accentColor="gold"
      />

      <HistorySection
        title="A Arte da Destilação"
        paragraphs={[
          'A vodka pode ser produzida a partir de praticamente qualquer substância que contenha amido ou açúcar: batatas, grãos, uvas e até beterraba. Cada base confere características sutilmente diferentes ao produto final.',
          'O processo de destilação múltipla remove impurezas e sabores, resultando em um espírito quase puro. Algumas vodkas premium passam por até sete destilações.',
          'A filtração, frequentemente através de carvão ativado, é outro passo crucial que contribui para a suavidade característica. Algumas marcas utilizam métodos únicos como filtração através de diamantes ou prata.',
        ]}
        image="https://images.unsplash.com/photo-1598509523659-6d5cd643c571?w=800"
        imageAlt="Destilaria moderna de vodka"
        accentColor="gold"
        reverse
      />

      <DrinkTimeline
        title="A História da Vodka"
        subtitle="Linha do Tempo"
        description="Uma jornada através dos séculos que moldaram o destilado mais versátil do mundo"
        events={vodkaTimeline}
        accentColor="gold"
      />
    </Layout>
  );
};

export default Vodka;
