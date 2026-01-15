import { DrinkCard } from '@/components/drinks/DrinkCard';
import { RecipeDetailModal } from '@/components/drinks/RecipeDetailModal';
import { Layout } from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { useFavorites } from '@/hooks/use-favorites';
import { ChevronLeft, ChevronRight, Heart, Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface Ingredient {
  amount: string;
  name: string;
}

interface Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: Ingredient[];
  instructions: string[];
  prepTime: string;
  servings: string;
  category: string;
  accentColor: string;
}

const allRecipes: Recipe[] = [
  // Whisky
  {
    name: 'Old Fashioned',
    description: 'O coquetel que definiu uma era. Elegante, complexo e atemporal.',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600',
    ingredients: [
      { amount: '45ml', name: 'Bourbon' },
      { amount: '1 cubo', name: 'Açúcar' },
      { amount: '2-3 dashes', name: 'Angostura Bitters' },
      { amount: 'Casca', name: 'Laranja para decorar' },
    ],
    instructions: [
      'Coloque o cubo de açúcar em um copo old fashioned.',
      'Adicione os bitters sobre o açúcar e algumas gotas de água.',
      'Misture até o açúcar começar a se dissolver.',
      'Adicione gelo grande e o whisky, mexendo suavemente.',
      'Finalize com a casca de laranja espremida sobre o drink.',
    ],
    prepTime: '5 min',
    servings: '1 pessoa',
    category: 'Whisky',
    accentColor: 'whisky',
  },
  {
    name: 'Whisky Sour',
    description: 'O equilíbrio perfeito entre acidez, doçura e o corpo do whisky.',
    image: 'https://images.unsplash.com/photo-1713720441159-466472b29b54?w=600',
    ingredients: [
      { amount: '60ml', name: 'Blended Whisky' },
      { amount: '25ml', name: 'Suco de limão fresco' },
      { amount: '20ml', name: 'Xarope de açúcar' },
      { amount: '1', name: 'Clara de ovo' },
      { amount: 'Cereja ou Limão', name: 'Para decorar' },
    ],
    instructions: [
      'Adicione todos os ingredientes na coqueteleira com gelo (dry shake).',
      'Agite vigorosamente por 15 segundos.',
      'Remova o gelo e agite novamente por mais 15 segundos.',
      'Coe para um copo com gelo fresco.',
      'Decore com uma cereja e/ou uma rodela de limão.',
    ],
    prepTime: '5 min',
    servings: '1 pessoa',
    category: 'Whisky',
    accentColor: 'whisky',
  },
  {
    name: 'Manhattan',
    description: 'Sofisticação em cada gole. O drink da elite nova-iorquina.',
    image: 'src/assets/manhattan.jpg',
    ingredients: [
      { amount: '60ml', name: 'Bourbon Whisky' },
      { amount: '20ml', name: 'Vermute doce' },
      { amount: '2-3 dashes', name: 'Angostura Bitters' },
      { amount: '1', name: 'Cereja para decorar' },
    ],
    instructions: [
      'Adicione gelo em uma mixing glass e resfrie.',
      'Descarte o excesso de água e adicione os ingredientes.',
      'Mexa por 30 segundos até bem gelado.',
      'Coe para uma taça martini gelada.',
      'Decore com uma cereja.',
    ],
    prepTime: '5 min',
    servings: '1 pessoa',
    category: 'Whisky',
    accentColor: 'whisky',
  },
  // Vodka
  {
    name: 'Moscow Mule',
    description: 'Refrescante e picante, servido na icônica caneca de cobre.',
    image: 'https://images.unsplash.com/photo-1527628126150-086ff233b951?w=600',
    ingredients: [
      { amount: '60ml', name: 'Vodka' },
      { amount: '20ml', name: 'Suco de limão fresco' },
      { amount: '120ml', name: 'Refrigerante de gengibre' },
      { amount: 'Fatias', name: 'Limão e hortelã para decorar' },
    ],
    instructions: [
      'Encha uma caneca de cobre com gelo.',
      'Adicione a vodka e o suco de limão.',
      'Complete com refrigerante de gengibre gelado.',
      'Mexa suavemente para misturar.',
      'Decore com fatias de limão e hortelã fresca.',
    ],
    prepTime: '3 min',
    servings: '1 pessoa',
    category: 'Vodka',
    accentColor: 'gold',
  },
  {
    name: 'Cosmopolitan',
    description: 'O drink que conquistou Nova York e o mundo nos anos 90.',
    image: 'https://images.unsplash.com/photo-1678007697757-cc531ba8b17b?w=600',
    ingredients: [
      { amount: '45ml', name: 'Vodka cítrica' },
      { amount: '15ml', name: 'Cointreau (ou licor de laranja de sua preferência)' },
      { amount: '15ml', name: 'Suco de limão' },
      { amount: '30ml', name: 'Suco de cranberry' },
      { amount: 'Casca', name: 'Laranja para decorar' },
    ],
    instructions: [
      'Adicione todos os ingredientes em uma coqueteleira com gelo.',
      'Agite vigorosamente por 15 segundos.',
      'Coe para uma taça martini gelada.',
      'Decore com uma casca de laranja.',
    ],
    prepTime: '4 min',
    servings: '1 pessoa',
    category: 'Vodka',
    accentColor: 'gold',
  },
  {
    name: 'Bloody Mary',
    description: 'O brunch em forma de drink. Complexo e revigorante.',
    image: 'https://images.unsplash.com/photo-1601609049827-e557cab443d1?w=600',
    ingredients: [
      { amount: '45ml', name: 'Vodka' },
      { amount: '90ml', name: 'Suco de tomate' },
      { amount: '15ml', name: 'Suco de limão' },
      { amount: '2 dashes', name: 'Molho inglês' },
      { amount: '1 dash', name: 'Tabasco (molho de pimenta)' },
      { amount: 'Pitada', name: 'Sal, pimenta e aipo' },
      { amount: 'Fatia', name: 'Limão para decorar' },
    ],
    instructions: [
      'Em um copo alto, adicione gelo até a metade.',
      'Despeje a vodka e o suco de tomate.',
      'Adicione o limão, molho inglês e tabasco.',
      'Tempere com sal e pimenta a gosto.',
      'Mexa bem e decore com um talo de aipo e uma fatia de limão.',
    ],
    prepTime: '5 min',
    servings: '1 pessoa',
    category: 'Vodka',
    accentColor: 'gold',
  },
  // Gin
  {
    name: 'Gin Tônica',
    description: 'A combinação perfeita que nasceu para combater a malária.',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600',
    ingredients: [
      { amount: '50ml', name: 'Gin London Dry' },
      { amount: '150ml', name: 'Água tônica premium' },
      { amount: 'Fatias', name: 'Pepino ou limão' },
      { amount: 'Ramos', name: 'Alecrim ou zimbro' },
    ],
    instructions: [
      'Encha um copo balloon com bastante gelo.',
      'Adicione o gin lentamente pela parede do copo.',
      'Complete com água tônica gelada, despejando suavemente.',
      'Adicione os botânicos de sua preferência.',
      'Mexa suavemente uma vez para integrar.',
    ],
    prepTime: '3 min',
    servings: '1 pessoa',
    category: 'Gin',
    accentColor: 'gin',
  },
  {
    name: 'Negroni',
    description: 'Italiano, amargo e irresistivelmente sofisticado.',
    image: 'https://images.unsplash.com/photo-1609951651556-5334e2706168?w=600',
    ingredients: [
      { amount: '30ml', name: 'Gin' },
      { amount: '30ml', name: 'Campari' },
      { amount: '30ml', name: 'Vermute doce' },
      { amount: 'Casca', name: 'Laranja para decorar' },
    ],
    instructions: [
      'Adicione gelo em um copo old fashioned.',
      'Despeje o gin, Campari e vermute.',
      'Mexa suavemente por 20 segundos.',
      'Decore com uma casca de laranja.',
    ],
    prepTime: '3 min',
    servings: '1 pessoa',
    category: 'Gin',
    accentColor: 'gin',
  },
  {
    name: 'Dry Martini',
    description: 'O epítome da elegância. Preferido de James Bond.',
    image: 'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?w=600',
    ingredients: [
      { amount: '60ml', name: 'Gin London Dry' },
      { amount: '10ml', name: 'Vermute seco' },
      { amount: '1', name: 'Azeitona ou casca de limão' },
    ],
    instructions: [
      'Resfrie uma taça martini no freezer.',
      'Em um mixing glass com gelo, adicione gin e vermute.',
      'Mexa por 30 segundos (ou agite, se preferir).',
      'Coe para a taça gelada.',
      'Decore com uma azeitona ou twist de limão.',
    ],
    prepTime: '4 min',
    servings: '1 pessoa',
    category: 'Gin',
    accentColor: 'gin',
  },
  // Rum
  {
    name: 'Mojito',
    description: 'O frescor de Cuba em cada gole. Hortelã, limão e rum branco.',
    image: 'https://images.unsplash.com/photo-1609345265499-2133bbeb6ce5?w=600',
    ingredients: [
      { amount: '60ml', name: 'Rum branco cubano' },
      { amount: '30ml', name: 'Suco de limão fresco' },
      { amount: '20ml', name: 'Xarope simples' },
      { amount: '6-8 folhas', name: 'Hortelã fresca' },
      { amount: 'Completar', name: 'Água com gás' },
    ],
    instructions: [
      'Macere gentilmente as folhas de hortelã com o xarope no copo.',
      'Adicione o suco de limão e o rum.',
      'Encha o copo com gelo picado.',
      'Complete com água com gás.',
      'Mexa suavemente e decore com mais hortelã.',
    ],
    prepTime: '5 min',
    servings: '1 pessoa',
    category: 'Rum',
    accentColor: 'rum',
  },
  {
    name: 'Daiquiri',
    description: 'Simplicidade perfeita. O drink que Hemingway amava.',
    image: 'https://images.unsplash.com/photo-1687852310878-654b4f39e8cd?w=600',
    ingredients: [
      { amount: '60ml', name: 'Rum branco' },
      { amount: '25ml', name: 'Suco de limão fresco' },
      { amount: '15ml', name: 'Xarope simples' },
      { amount: 'Rodela', name: 'Limão para decorar' },
    ],
    instructions: [
      'Adicione todos os ingredientes em uma coqueteleira.',
      'Encha com gelo e agite vigorosamente por 15 segundos.',
      'Coe para uma taça coupe gelada.',
      'Decore com uma rodela fina de limão.',
    ],
    prepTime: '3 min',
    servings: '1 pessoa',
    category: 'Rum',
    accentColor: 'rum',
  },
  {
    name: 'Piña Colada',
    description: 'O sabor tropical de Porto Rico em forma líquida.',
    image: 'https://images.unsplash.com/photo-1607644536940-6c300b5784c5?w=600',
    ingredients: [
      { amount: '60ml', name: 'Rum branco' },
      { amount: '90ml', name: 'Suco de abacaxi' },
      { amount: '45ml', name: 'Creme de coco' },
      { amount: '1 xícara', name: 'Gelo' },
      { amount: 'Fatia', name: 'Abacaxi e cereja' },
    ],
    instructions: [
      'Adicione todos os ingredientes no liquidificador.',
      'Bata até obter uma consistência cremosa.',
      'Despeje em um copo hurricane ou taça grande.',
      'Decore com uma fatia de abacaxi e cereja.',
    ],
    prepTime: '5 min',
    servings: '1 pessoa',
    category: 'Rum',
    accentColor: 'rum',
  },
  // Tequila
  {
    name: 'Margarita',
    description: 'O coquetel mexicano mais famoso do mundo. Refrescante e vibrante.',
    image: 'https://images.unsplash.com/photo-1634003311194-152e30e732f7?w=600',
    ingredients: [
      { amount: '50ml', name: 'Tequila' },
      { amount: '25ml', name: 'Cointreau' },
      { amount: '25ml', name: 'Suco de limão fresco' },
      { amount: 'Para bordar', name: 'Sal' },
      { amount: 'Rodela', name: 'Limão para decorar' },
    ],
    instructions: [
      'Passe limão na borda do copo e mergulhe no sal.',
      'Adicione tequila, Cointreau e limão na coqueteleira com gelo.',
      'Agite vigorosamente por 15 segundos.',
      'Coe para o copo preparado com gelo fresco.',
      'Decore com uma rodela de limão.',
    ],
    prepTime: '4 min',
    servings: '1 pessoa',
    category: 'Tequila',
    accentColor: 'tequila',
  },
  {
    name: 'Paloma',
    description: 'A favorita do México. Toranja e tequila em harmonia.',
    image: 'https://images.unsplash.com/photo-1692296979815-ba89f3ada00c?w=600',
    ingredients: [
      { amount: '60ml', name: 'Tequila' },
      { amount: '15ml', name: 'Suco de limão' },
      { amount: 'Completar', name: 'Refrigerante de toranja' },
      { amount: 'Pitada', name: 'Sal' },
      { amount: 'Fatia', name: 'Toranja para decorar' },
    ],
    instructions: [
      'Encha um copo highball com gelo.',
      'Adicione a tequila e o suco de limão.',
      'Complete com refrigerante de toranja.',
      'Mexa suavemente e decore.',
      'Adicione sal na borda do copo (opcional).',
    ],
    prepTime: '3 min',
    servings: '1 pessoa',
    category: 'Tequila',
    accentColor: 'tequila',
  },
  {
    name: 'Tequila Sunrise',
    description: 'Um nascer do sol no copo. Visual espetacular e sabor tropical.',
    image: 'https://www.thecocktaildb.com/images/media/drink/quqyqp1480879103.jpg',
    ingredients: [
      { amount: '45ml', name: 'Tequila' },
      { amount: '90ml', name: 'Suco de laranja' },
      { amount: '15ml', name: 'Grenadine' },
      { amount: 'Cereja', name: 'E laranja para decorar' },
    ],
    instructions: [
      'Encha um copo highball com gelo.',
      'Adicione a tequila e o suco de laranja.',
      'Mexa suavemente.',
      'Despeje a grenadine lentamente - ela vai afundar.',
      'Decore com uma cereja e fatia de laranja.',
    ],
    prepTime: '3 min',
    servings: '1 pessoa',
    category: 'Tequila',
    accentColor: 'tequila',
  },
  // Vinho
  {
    name: 'Sangria',
    description: 'A festa espanhola em forma de bebida. Frutas, vinho e alegria.',
    image: 'https://images.unsplash.com/photo-1610935590777-a644e5c30e29?w=600',
    ingredients: [
      { amount: '750ml', name: 'Vinho tinto (Rioja ou similar)' },
      { amount: '200ml', name: 'Suco de laranja' },
      { amount: '1', name: 'Colher de açúcar' },
      { amount: '1/2', name: 'Laranja fatiada' },
      { amount: '1/2', name: 'Maçã fatiada' },
      { amount: 'Completar', name: 'Água com gás' },
      { amount: 'Folhas', name: 'Hortelã para decorar' },
    ],
    instructions: [
      'Em uma jarra grande, combine o vinho e o suco de laranja.',
      'Adicione as frutas cortadas.',
      'Refrigere por pelo menos 30 minutos (cuidar para não deixar muito tempo para não oxidar).',
      'Antes de servir, adicione água com gás a gosto.',
      'Sirva em copos com gelo e frutas.',
      'Decore com hortelã.',
    ],
    prepTime: '10 min + 30 min',
    servings: '6 pessoas',
    category: 'Vinho',
    accentColor: 'wine',
  },
  {
    name: 'Kir Royal',
    description: 'Elegância francesa. Champagne e cassis em perfeita harmonia.',
    image: 'https://images.unsplash.com/photo-1609777182735-b3db74cb6276?w=600',
    ingredients: [
      { amount: '15ml', name: 'Crème de cassis (licor de groselha preta)' },
      { amount: 'Completar', name: 'Champagne ou espumante' },
      { amount: '1', name: 'Framboesa para decorar' },
    ],
    instructions: [
      'Despeje o crème de cassis em uma taça flute gelada.',
      'Complete lentamente com champagne bem gelado.',
      'Não mexa para preservar as bolhas.',
      'Decore com uma framboesa fresca.',
    ],
    prepTime: '2 min',
    servings: '1 pessoa',
    category: 'Vinho',
    accentColor: 'wine',
  },
  {
    name: 'Mulled Wine',
    description: 'O aquecedor de invernos europeus. Especiarias e conforto.',
    image: 'https://images.unsplash.com/photo-1542143601-0b3d84693663?w=600',
    ingredients: [
      { amount: '750ml', name: 'Vinho tinto encorpado' },
      { amount: '2', name: 'Paus de canela' },
      { amount: '6', name: 'Cravos-da-índia' },
      { amount: '2', name: 'Anis estrelado' },
      { amount: '1', name: 'Laranja fatiada' },
      { amount: '60ml', name: 'Mel ou açúcar mascavo' },
    ],
    instructions: [
      'Em uma panela, combine o vinho e todas as especiarias.',
      'Adicione as fatias de laranja e o mel.',
      'Aqueça em fogo baixo por 20 minutos (não deixe ferver).',
      'Coe as especiarias maiores.',
      'Sirva quente em canecas resistentes ao calor.',
    ],
    prepTime: '25 min',
    servings: '4 pessoas',
    category: 'Vinho',
    accentColor: 'wine',
  },
  // Cachaça
  {
    name: 'Caipirinha',
    description: 'O drink nacional brasileiro. Simples, refrescante e irresistível.',
    image: 'https://images.unsplash.com/photo-1666355704386-93cf5f887404?w=600',
    ingredients: [
      { amount: '60ml', name: 'Cachaça' },
      { amount: '1', name: 'Limão cortado em pedaços' },
      { amount: '2 colheres', name: 'Açúcar' },
      { amount: 'Bastante', name: 'Gelo' },
    ],
    instructions: [
      'Corte o limão em pedaços e coloque no copo.',
      'Adicione o açúcar sobre o limão.',
      'Macere bem para extrair o suco e os óleos da casca.',
      'Adicione a cachaça e misture bem.',
      'Complete com gelo e mexa.',
    ],
    prepTime: '3 min',
    servings: '1 pessoa',
    category: 'Cachaça',
    accentColor: 'gold',
  },
  {
    name: 'Rabo de Galo',
    description: 'O clássico brasileiro que rivaliza com o Negroni em complexidade.',
    image: 'https://images.unsplash.com/photo-1551751299-1b51cab2694c?w=600',
    ingredients: [
      { amount: '60ml', name: 'Cachaça envelhecida' },
      { amount: '20ml', name: 'Vermute tinto' },
      { amount: '15ml', name: 'Cynar (licor de alcachofra)' },
      { amount: 'Casca', name: 'Limão para decorar' },
    ],
    instructions: [
      'Em uma mixing glass, adicione gelo.',
      'Despeje a cachaça, o vermute, o Cynar e a Angostura Bitters.',
      'Mexa suavemente por 20 segundos.',
      'Coe para um copo baixo com um gelo grande.',
      'Finalize com uma casca de limão espremida.',
    ],
    prepTime: '3 min',
    servings: '1 pessoa',
    category: 'Cachaça',
    accentColor: 'gold',
  },
  {
    name: 'Banzeiro',
    description: 'Considerado um dos melhores drinks brasileiros, elogiado por sua complexidade e sabor',
    image: 'src/assets/banzeiro-2.jpg',
    ingredients: [
      { amount: '50ml', name: 'Cachaça' },
      { amount: '20ml', name: 'Suco de Limão' },
      { amount: '10ml', name: 'Xarope de açúcar' },
      { amount: '15ml', name: 'Vinho tinto seco' },
      { amount: 'Espuma', name: 'Gengibre' },
    ],
    instructions: [
      'Adicione a cachaça, suco de limão e o xarope de açúcar em uma coqueteleira com bastante gelo.',
      'Agite vigorosamente por 15 segundos.',
      'Coe em um copo baixo com um gelo grande.',
      'Com cuidado, despeje o vinho tinto sobre as costas de uma colher para criar uma camada.',
      'Finalize com a espuma de gengibre por cima.',
    ],
    prepTime: '3 min',
    servings: '1 pessoa',
    category: 'Cachaça',
    accentColor: 'gold',
  },
];

const categories = ['Todos', 'Whisky', 'Vodka', 'Gin', 'Rum', 'Tequila', 'Vinho', 'Cachaça'];
const ITEMS_PER_PAGE = 6;

const Receitas = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('categoria');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl && categories.includes(categoryFromUrl) ? categoryFromUrl : 'Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const { isFavorite, toggleFavorite, favoritesCount } = useFavorites();

  const handleViewDetails = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  const filteredRecipes = useMemo(() => {
    return allRecipes.filter(recipe => {
      const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todos' || recipe.category === selectedCategory;
      const matchesFavorites = !showFavoritesOnly || isFavorite(recipe.name);
      return matchesSearch && matchesCategory && matchesFavorites;
    });
  }, [searchTerm, selectedCategory, showFavoritesOnly, isFavorite]);

  const totalPages = Math.ceil(filteredRecipes.length / ITEMS_PER_PAGE);

  const paginatedRecipes = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredRecipes.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredRecipes, currentPage]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, showFavoritesOnly]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="from-background to-card relative bg-gradient-to-b py-24">
        <div className="from-card via-background to-background absolute inset-0 bg-gradient-to-b" />
        <div className="absolute inset-0 opacity-10">
          <div className="bg-gold absolute left-10 top-20 size-72 rounded-full blur-3xl" />
          <div className="bg-wine absolute bottom-20 right-10 size-96 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-gold font-body mb-4 block text-sm uppercase tracking-widest">Coleção Completa</span>
            <h1 className="font-display animate-slide-up text-foreground mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Receitas de Coquetéis</h1>
            <p className="text-muted-foreground font-body text-lg">
              Explore nossa coleção de {allRecipes.length} receitas clássicas e descubra seu próximo drink favorito.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-card border-border border-y py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2" />
              <Input
                type="text"
                placeholder="Buscar por nome..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="bg-background border-border pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {/* Favorites Filter */}
              <button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`font-body flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                  showFavoritesOnly ? 'bg-red-500 text-white' : 'bg-background text-foreground border-border border hover:bg-red-500/20'
                }`}
              >
                <Heart className={`size-4 ${showFavoritesOnly ? 'fill-current' : ''}`} />
                Favoritos {favoritesCount > 0 && `(${favoritesCount})`}
              </button>

              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`font-body rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                    selectedCategory === category ? 'bg-gold text-background' : 'bg-background text-foreground hover:bg-gold/20 border-border border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <p className="text-muted-foreground font-body mb-8">
            {filteredRecipes.length} {filteredRecipes.length === 1 ? 'receita encontrada' : 'receitas encontradas'}
            {totalPages > 1 && ` • Página ${currentPage} de ${totalPages}`}
          </p>

          {/* Recipes Grid */}
          {paginatedRecipes.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {paginatedRecipes.map((recipe, index) => (
                <div key={recipe.name} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                  <DrinkCard
                    name={recipe.name}
                    description={recipe.description}
                    image={recipe.image}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    prepTime={recipe.prepTime}
                    servings={recipe.servings}
                    accentColor={recipe.accentColor}
                    onViewDetails={() => handleViewDetails(recipe)}
                    isFavorite={isFavorite(recipe.name)}
                    onToggleFavorite={() => toggleFavorite(recipe.name)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-muted-foreground font-body text-lg">Nenhuma receita encontrada com os filtros selecionados.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="border-border bg-background text-foreground hover:bg-gold/20 hover:border-gold rounded-full border p-2 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ChevronLeft className="size-5" />
              </button>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`font-body size-10 rounded-full text-sm transition-all duration-300 ${
                      currentPage === page ? 'bg-gold text-background' : 'bg-background text-foreground hover:bg-gold/20 border-border border'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="border-border bg-background text-foreground hover:bg-gold/20 hover:border-gold rounded-full border p-2 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Recipe Detail Modal */}
      <RecipeDetailModal isOpen={isModalOpen} onClose={handleCloseModal} recipe={selectedRecipe} />
    </Layout>
  );
};

export default Receitas;
