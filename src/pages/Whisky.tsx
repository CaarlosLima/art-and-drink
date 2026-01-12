import heroImage from '@/assets/whisky-hero.jpg';
import { DrinkHero } from '@/components/drinks/DrinkHero';
import { HistorySection } from '@/components/drinks/HistorySection';
import { WhiskyTimeline } from '@/components/drinks/WhiskyTimeline';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Whisky = () => {
  return (
    <Layout>
      <DrinkHero
        title="Whisky"
        subtitle="O Espírito Escocês"
        description="Nascido nas terras frias da Escócia e Irlanda, o whisky é uma bebida que carrega séculos de tradição em cada gota. Do single malt ao bourbon americano, cada garrafa conta uma história única de terroir, tempo e maestria."
        image={heroImage}
        accentColor="whisky"
      >
        <Button variant="outline" size="xl" asChild>
          <Link to="/receitas?categoria=Whisky">
            Ver Receitas de Whisky
            <BookOpen className="size-5" />
          </Link>
        </Button>
      </DrinkHero>

      <HistorySection
        title="Uma História Destilada no Tempo"
        paragraphs={[
          "A palavra 'whisky' deriva do gaélico 'uisce beatha', que significa 'água da vida'. Os primeiros registros de destilação datam do século XV na Escócia e Irlanda, onde monges utilizavam a técnica para criar remédios medicinais.",
          'Com o passar dos séculos, a produção evoluiu de pequenas destilarias caseiras para grandes operações comerciais. A Lei de 1823 no Reino Unido legalizou a destilação, criando o ambiente para o surgimento das icônicas destilarias que conhecemos hoje.',
          'O whisky americano, especialmente o bourbon, nasceu nas colinas do Kentucky, onde colonizadores escoceses e irlandeses adaptaram suas técnicas ao milho local, criando um estilo único e distintivo.',
        ]}
        image="https://images.unsplash.com/photo-1638286629485-bb417ced482e?w=800"
        imageAlt="Barris de whisky em envelhecimento"
        accentColor="whisky"
      />

      <HistorySection
        title="Tipos de Whisky"
        paragraphs={[
          'Single Malt: Produzido em uma única destilaria usando apenas cevada maltada. É considerado a expressão mais pura do terroir escocês.',
          'Blended: Combina whiskies de diferentes destilarias para criar perfis de sabor consistentes e complexos. Responsável por grande parte do consumo mundial.',
          'Bourbon: Whisky americano feito com pelo menos 51% de milho e envelhecido em barris de carvalho carbonizados. Notas de caramelo, baunilha e especiarias.',
          'Rye: Whisky feito majoritariamente de centeio, oferecendo um perfil mais picante e seco, perfeito para coquetéis clássicos.',
        ]}
        image="https://images.unsplash.com/photo-1576457680175-fec5cefc5ea5?w=800"
        imageAlt="Garrafa de whisky single malt"
        accentColor="whisky"
        reverse
      />

      <WhiskyTimeline />
    </Layout>
  );
};

export default Whisky;
