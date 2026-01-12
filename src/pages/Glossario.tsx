import { Layout } from '@/components/layout/Layout';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

const glossaryTerms = [
  {
    term: 'Jigger',
    category: 'Equipamento',
    description: 'Medidor duplo em formato de ampulheta usado para dosar ingredientes com precisão. Geralmente tem medidas de 30ml e 45ml ou 15ml e 30ml.',
  },
  {
    term: 'Strainer',
    category: 'Equipamento',
    description:
      'Coador usado para separar o gelo e sólidos do líquido ao servir o drink. Os tipos mais comuns são Hawthorne (com mola) e Julep (em forma de concha perfurada).',
  },
  {
    term: 'Bitters',
    category: 'Ingrediente',
    description:
      "Extrato aromático concentrado feito com ervas, especiarias, cascas e raízes. Usado em gotas para adicionar complexidade e equilíbrio aos drinks. Angostura e Peychaud's são os mais famosos.",
  },
  {
    term: 'Muddler',
    category: 'Equipamento',
    description: 'Pilão de bar usado para macerar frutas, ervas e açúcar diretamente no copo ou coqueteleira, extraindo sabores e óleos essenciais.',
  },
  {
    term: 'Shaker',
    category: 'Equipamento',
    description:
      'Coqueteleira usada para misturar, resfriar e diluir ingredientes. Os tipos principais são Boston (dois copos), Cobbler (três peças) e French (duas peças elegantes).',
  },
  {
    term: 'Mixing Glass',
    category: 'Equipamento',
    description: 'Copo largo e pesado usado para preparar drinks mexidos (stirred), como Martinis e Manhattans. Permite controle preciso da diluição.',
  },
  {
    term: 'Bar Spoon',
    category: 'Equipamento',
    description: 'Colher longa e fina com cabo torcido, usada para mexer drinks suavemente. O cabo facilita o giro contínuo sem agitar demais o líquido.',
  },
  {
    term: 'Simple Syrup',
    category: 'Ingrediente',
    description:
      'Xarope de açúcar feito com partes iguais de açúcar e água. Base essencial para adoçar drinks, pois dissolve facilmente em líquidos frios.',
  },
  {
    term: 'Dry Shake',
    category: 'Técnica',
    description: 'Agitar os ingredientes sem gelo primeiro, geralmente quando há clara de ovo ou aquafaba, para criar uma espuma cremosa e estável.',
  },
  {
    term: 'Double Strain',
    category: 'Técnica',
    description:
      'Usar dois coadores simultaneamente (strainer + peneira fina) para remover pequenos fragmentos de gelo e polpa, resultando em um drink mais sedoso.',
  },
  {
    term: 'Express',
    category: 'Técnica',
    description: 'Espremer a casca de uma fruta cítrica sobre o drink para liberar os óleos essenciais aromáticos na superfície.',
  },
  {
    term: 'Twist',
    category: 'Guarnição',
    description: 'Tira de casca de fruta cítrica usada como guarnição. Pode ser expressa sobre o drink e/ou deixada como decoração.',
  },
  {
    term: 'Rim',
    category: 'Técnica',
    description: 'Técnica de decorar a borda do copo com sal, açúcar ou especiarias, passando primeiro limão ou outro líquido para aderir.',
  },
  {
    term: 'Build',
    category: 'Técnica',
    description: 'Método de preparar o drink diretamente no copo de servir, adicionando os ingredientes em sequência sem usar coqueteleira.',
  },
  {
    term: 'Float',
    category: 'Técnica',
    description: 'Adicionar um ingrediente delicadamente sobre o drink para que fique na superfície, criando camadas visuais e gustativas.',
  },
  {
    term: 'Dash',
    category: 'Medida',
    description: 'Pequena quantidade de líquido, geralmente bitters, equivalente a aproximadamente 0,5ml ou uma gota rápida do frasco.',
  },
  {
    term: 'Splash',
    category: 'Medida',
    description: 'Quantidade maior que um dash, mas ainda pequena. Aproximadamente 5-10ml, usada para adicionar um toque de algum ingrediente.',
  },
  {
    term: 'Top',
    category: 'Técnica',
    description: 'Completar o drink com um ingrediente efervescente como água com gás, tônica ou espumante após os outros ingredientes.',
  },
  {
    term: 'Neat',
    category: 'Servir',
    description: 'Servir uma bebida pura, em temperatura ambiente, sem gelo, água ou qualquer adição. Comum para whisky e destilados premium.',
  },
  {
    term: 'On the Rocks',
    category: 'Servir',
    description: 'Servir uma bebida sobre gelo. O gelo dilui e resfria gradualmente, alterando o perfil do drink ao longo do tempo.',
  },
  {
    term: 'Straight Up',
    category: 'Servir',
    description: 'Drink que foi resfriado com gelo (agitado ou mexido) mas servido sem gelo em uma taça gelada.',
  },
  {
    term: 'Chaser',
    category: 'Servir',
    description: 'Bebida consumida imediatamente após um shot para suavizar o sabor. Pode ser água, cerveja, suco ou refrigerante.',
  },
  {
    term: 'Back',
    category: 'Servir',
    description: 'Bebida servida ao lado de outra, geralmente um copo de água ou cerveja acompanhando um shot ou drink forte.',
  },
  {
    term: 'Call Drink',
    category: 'Pedido',
    description: "Quando o cliente especifica a marca do destilado desejado no drink, como 'Gin Tanqueray Tônica' em vez de apenas 'Gin Tônica'.",
  },
  {
    term: 'Well Drink',
    category: 'Pedido',
    description: 'Drink preparado com as bebidas padrão da casa, geralmente mais acessíveis, quando nenhuma marca específica é solicitada.',
  },
  {
    term: 'Garnish',
    category: 'Guarnição',
    description: 'Decoração comestível ou aromática adicionada ao drink finalizado. Pode ser funcional (aromática) ou puramente estética.',
  },
  {
    term: 'Oliva',
    category: 'Guarnição',
    description: 'Azeitona usada em Martinis e outros drinks. Pode ser recheada com pimentão, alho ou queijo azul para variações.',
  },
  {
    term: 'Maraschino',
    category: 'Guarnição',
    description: 'Cereja em conserva usada como guarnição clássica. As Luxardo são consideradas premium, muito superiores às industriais.',
  },
  {
    term: 'Orgeat',
    category: 'Ingrediente',
    description: 'Xarope de amêndoas com água de flor de laranjeira, essencial para drinks tiki como o Mai Tai. Tem sabor doce e amendoado.',
  },
  {
    term: 'Falernum',
    category: 'Ingrediente',
    description: 'Xarope ou licor caribenho com sabores de amêndoa, gengibre, cravo e limão. Ingrediente clássico em drinks tropicais.',
  },
];

const categories = ['Todos', 'Equipamento', 'Ingrediente', 'Técnica', 'Guarnição', 'Medida', 'Servir', 'Pedido'];

const Glossario = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredTerms = glossaryTerms
    .filter(item => {
      const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => a.term.localeCompare(b.term));

  return (
    <Layout>
      {/* Hero Section */}
      <section className="from-card to-background bg-gradient-to-b pb-16 pt-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-gold font-body mb-4 block text-sm uppercase tracking-widest">Aprenda o Vocabulário</span>
            <h1 className="font-display text-foreground mb-6 text-4xl font-bold md:text-5xl">
              Glossário de <span className="text-gradient-gold">Coquetelaria</span>
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Domine os termos essenciais do mundo dos coquetéis. De equipamentos a técnicas, tudo que você precisa saber para falar como um bartender
              profissional.
            </p>

            {/* Search */}
            <div className="relative mx-auto max-w-md">
              <Search className="text-muted-foreground absolute left-4 top-1/2 size-5 -translate-y-1/2" />
              <Input
                type="text"
                placeholder="Buscar termo..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="bg-card border-border focus:border-gold h-12 pl-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-background border-border border-b py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-body rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gold text-background'
                    : 'bg-card text-muted-foreground hover:bg-gold/10 hover:text-gold border-border border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Grid */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          {filteredTerms.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">Nenhum termo encontrado para sua busca.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTerms.map((item, index) => (
                <div
                  key={item.term}
                  className="bg-card border-border hover:border-gold/30 animate-slide-up group rounded-xl border p-6 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.03}s` }}
                >
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="font-display text-foreground group-hover:text-gold text-xl font-semibold transition-colors">{item.term}</h3>
                    <span className="font-body bg-gold/10 text-gold rounded px-2 py-1 text-xs">{item.category}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          )}

          <div className="text-muted-foreground mt-12 text-center text-sm">
            Mostrando {filteredTerms.length} de {glossaryTerms.length} termos
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Glossario;
