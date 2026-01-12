import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Clock, History, Sparkles, Users, Wine } from 'lucide-react';

interface Ingredient {
  amount: string;
  name: string;
}

interface RecipeDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipe: {
    name: string;
    description: string;
    image: string;
    ingredients: Ingredient[];
    instructions: string[];
    prepTime: string;
    servings: string;
    category?: string;
    accentColor?: string;
  } | null;
}

const recipeExtras: Record<string, { history: string; occasion: string; tips: string }> = {
  'Old Fashioned': {
    history:
      "Criado no início do século XIX, o Old Fashioned é considerado o primeiro coquetel documentado. Surgiu quando bartenders começaram a adicionar açúcar, água e bitters ao whisky para suavizar seu sabor. O nome veio dos clientes que pediam drinks 'à moda antiga'.",
    occasion: 'Ideal para momentos de reflexão, reuniões íntimas ou como aperitivo antes do jantar. Perfeito para noites frias e conversas profundas.',
    tips: 'Use um cubo de gelo grande para diluição lenta. Prefira bourbon para um perfil mais doce ou rye para algo mais picante e seco.',
  },
  'Whisky Sour': {
    history:
      "Documentado pela primeira vez em 1862, o Whisky Sour faz parte da família dos 'sours' - drinks que equilibram destilado, cítrico e açúcar. A adição de clara de ovo, popularizada no século XX, criou a versão 'Boston Sour'.",
    occasion: 'Versátil, funciona em happy hours, jantares casuais ou como drink de transição entre aperitivo e refeição.',
    tips: "O 'dry shake' (agitar sem gelo primeiro) é essencial para criar a espuma cremosa da clara. Use limão siciliano para um sabor mais suave.",
  },
  Manhattan: {
    history:
      'Nasceu no Manhattan Club de Nova York nos anos 1870, supostamente criado para uma festa organizada pela mãe de Winston Churchill. É um dos coquetéis mais influentes da história, inspirando variações como o Rob Roy.',
    occasion: 'Drink de celebração e sofisticação. Ideal para ocasiões especiais, jantares elegantes e como digestivo.',
    tips: 'A qualidade do vermute é crucial. Use vermute fresco (refrigere após abrir) e experimente diferentes proporções até encontrar seu equilíbrio.',
  },
  'Moscow Mule': {
    history:
      'Criado em 1941 em Los Angeles, foi uma jogada de marketing genial que uniu um importador de vodka, um fabricante de ginger beer e um vendedor de canecas de cobre. A icônica caneca de cobre se tornou inseparável do drink.',
    occasion: 'Refrescante e descontraído, perfeito para tardes quentes, churrascos, happy hours e comemorações informais.',
    tips: 'A caneca de cobre não é apenas estética - ela mantém o drink gelado por mais tempo. Use ginger beer artesanal para mais intensidade.',
  },
  Cosmopolitan: {
    history:
      'Popularizado nos anos 90 pela série Sex and the City, o Cosmo na verdade surgiu nos anos 80 em Miami ou São Francisco. Tornou-se símbolo da cultura urbana e sofisticação feminina.',
    occasion: 'Drinks com amigas, festas, celebrações e noites especiais. Um clássico para eventos sociais.',
    tips: 'Use vodka cítrica de qualidade e cranberry 100% suco. A casca de laranja flambada adiciona óleos aromáticos que elevam o drink.',
  },
  'Bloody Mary': {
    history:
      "Criado nos anos 1920 por Fernand Petiot no Harry's New York Bar em Paris. O nome é controverso - pode homenagear a rainha Maria I ou uma cliente do bar. É o drink oficial de ressaca desde então.",
    occasion: 'Brunch dominical, manhãs de ressaca, acompanhamento de refeições matinais. Um ritual de fim de semana.',
    tips: 'Prepare sua própria mistura temperada. Experimente adicionar rábano fresco, pickle juice ou até bacon como guarnição.',
  },
  'Gin Tônica': {
    history:
      'Nasceu na Índia colonial britânica no século XIX. Oficiais britânicos misturavam gin ao quinino (água tônica) usado contra malária. A combinação foi tão bem-sucedida que sobreviveu à necessidade médica.',
    occasion: 'Aperitivo clássico, tardes ensolaradas, almoços ao ar livre. Funciona em praticamente qualquer ocasião social.',
    tips: 'Escolha botânicos que complementem seu gin. Experimente diferentes tônicas - cada uma realça notas diferentes do destilado.',
  },
  Negroni: {
    history:
      "Criado em 1919 em Florença quando o Conde Camillo Negroni pediu seu Americano favorito 'com mais força'. O bartender substituiu a água com gás por gin, nascendo um dos drinks mais influentes.",
    occasion: 'Aperitivo italiano por excelência. Ideal antes do jantar, em encontros sofisticados ou como ritual de fim de tarde.',
    tips: "Partes iguais são a base, mas ajuste conforme seu paladar. Um Negroni pode ser 'mais gin' ou 'mais Campari' dependendo da preferência.",
  },
  'Dry Martini': {
    history:
      "Evoluiu do Martinez dos anos 1880 para sua forma seca atual. Winston Churchill, James Bond e inúmeros ícones culturais o celebraram. 'Shaken, not stirred' de Bond é tecnicamente incorreto, mas icônico.",
    occasion: 'O epítome da elegância. Drinks formais, jantares importantes, ou quando você quer se sentir como um protagonista de filme noir.',
    tips: 'A proporção gin-vermute é pessoal. Churchill supostamente apenas olhava para a garrafa de vermute. A maioria prefere 5:1 ou mais seco.',
  },
  Mojito: {
    history:
      'Suas raízes remontam ao século XVI em Cuba, quando uma versão primitiva era usada como remédio. O Mojito moderno surgiu na Havana dos anos 1930, frequentado por Ernest Hemingway na Bodeguita del Medio.',
    occasion: 'Tardes tropicais, festas de verão, reuniões à beira-mar. O drink que transporta você para o Caribe.',
    tips: 'Macere a hortelã gentilmente - brutalizar libera amargor das hastes. Use hortelã fresca e abundante gelo picado.',
  },
  Daiquiri: {
    history:
      "Criado em Cuba no final do século XIX por um engenheiro americano. Hemingway era fã devoto, especialmente do 'Papa Doble' - versão dupla sem açúcar. É a essência da coquetelaria: equilíbrio perfeito.",
    occasion: 'Jantares elegantes, noites quentes, ou quando busca simplicidade sofisticada. Less is more.',
    tips: 'A qualidade do rum é fundamental. Use limão fresco e meça com precisão - pequenas variações afetam drasticamente o equilíbrio.',
  },
  'Piña Colada': {
    history:
      'Nasceu em Porto Rico nos anos 1950, disputada por diferentes bartenders do Hotel Caribe Hilton. Tornou-se a bebida oficial de Porto Rico em 1978 e sinônimo de férias tropicais.',
    occasion: 'Férias, piscina, praia, festas temáticas tropicais. Quando você quer escapar mentalmente para uma ilha.',
    tips: 'Use creme de coco, não leite de coco. Congele o abacaxi para um resultado mais cremoso sem diluir com muito gelo.',
  },
  Margarita: {
    history:
      'Múltiplas origens são reivindicadas, mas provavelmente surgiu no México nos anos 1930-40. É uma evolução do Daisy (margarita em espanhol), adaptada com tequila e licor de laranja.',
    occasion: 'Happy hours, festas mexicanas, tacos night, comemorações. O drink mais popular do México no mundo.',
    tips: 'Use tequila 100% agave. O sal na borda é opcional e deve ser fino. Experimente com sal de chili para variação.',
  },
  Paloma: {
    history:
      'Mais popular que a Margarita no México, a Paloma (pomba em espanhol) é o drink cotidiano mexicano. Simples, refrescante e perfeita para o clima quente.',
    occasion: 'Refeições mexicanas, churrascos, tardes quentes. O drink do dia-a-dia no México.',
    tips: 'Use Squirt ou Jarritos de grapefruit para autenticidade, ou faça sua versão com grapefruit fresco e água com gás.',
  },
  'Tequila Sunrise': {
    history:
      "Criado em Sausalito, Califórnia nos anos 1970, ganhou fama quando os Rolling Stones o adotaram em sua turnê de 1972, chamando-a de 'tour da tequila sunrise'.",
    occasion: 'Brunches, festas, ou quando você quer um drink visualmente impressionante e fácil de beber.',
    tips: 'Despeje a grenadine lentamente pela lateral do copo para o efeito de nascer do sol. Use grenadine caseira se possível.',
  },
  Sangria: {
    history:
      "Originária da Península Ibérica, a Sangria existe há séculos como forma de tornar vinhos mais palatáveis. O nome vem de 'sangre' (sangue) pela cor vermelha intensa.",
    occasion: 'Festas, churrascos, almoços de domingo, celebrações coletivas. Drink de compartilhamento por excelência.',
    tips: 'Deixe macerar por pelo menos 4 horas, idealmente overnight. Use frutas da estação e não use seu melhor vinho - a qualidade média funciona bem.',
  },
  'Kir Royal': {
    history:
      "Nomeado em homenagem ao Félix Kir, prefeito de Dijon que popularizou a mistura de cassis com vinho branco. A versão 'Royal' substitui o vinho por champagne.",
    occasion: 'Celebrações, brindes, recepções elegantes. O aperitivo francês por excelência.',
    tips: 'Use crème de cassis de qualidade (de Dijon, se possível). Não mexa após adicionar o champagne para preservar as bolhas.',
  },
  'Mulled Wine': {
    history:
      'Remonta ao Império Romano, quando especiarias eram adicionadas ao vinho para preservação e sabor. Tradição mantida através da Europa medieval até hoje nos mercados de Natal.',
    occasion: 'Inverno, festas de fim de ano, noites frias, reuniões aconchegantes. O abraço líquido.',
    tips: 'Nunca deixe ferver - isso evapora o álcool e torna amargo. Mantenha em fogo baixo, abaixo de 70°C.',
  },
  Caipirinha: {
    history:
      'Nasceu no interior de São Paulo no início do século XX, possivelmente como remédio para a gripe espanhola. Tornou-se o drink nacional do Brasil e embaixador da cachaça no mundo.',
    occasion: 'Festas, churrascos, praias, bares, qualquer celebração brasileira. O drink mais democrático do país.',
    tips: 'Use cachaça de qualidade e limão tahiti bem fresco. O segredo está na maceração - extraia os óleos da casca sem amargar.',
  },
  'Rabo de Galo': {
    history:
      'O Negroni brasileiro, surgiu provavelmente nos bares paulistanos do século XX. O nome pode vir da mistura de cores que lembra as penas de um galo.',
    occasion: 'Aperitivo sofisticado, encontros em bares clássicos, momentos de apreciação da cachaça envelhecida.',
    tips: 'Use cachaça envelhecida em carvalho para complexidade. A proporção tradicional é 2:1, mas ajuste ao seu gosto.',
  },
  'Batida de Coco': {
    history:
      'Criação brasileira que combina a cachaça com ingredientes tropicais. Popularizou-se nas praias e festas brasileiras, tornando-se símbolo do verão nacional.',
    occasion: 'Praias, festas de verão, carnaval, celebrações tropicais. Doce, cremosa e irresistível.',
    tips: 'Use leite de coco cremoso e leite condensado de qualidade. Adicione coco ralado tostado como guarnição para textura extra.',
  },
};

export const RecipeDetailModal = ({ isOpen, onClose, recipe }: RecipeDetailModalProps) => {
  if (!recipe) return null;

  const extras = recipeExtras[recipe.name] || {
    history: 'Uma receita clássica apreciada por conhecedores ao redor do mundo.',
    occasion: 'Versátil, funciona em diversas ocasiões sociais.',
    tips: 'Prepare com ingredientes frescos e de qualidade para melhores resultados.',
  };

  const accentColor = recipe.accentColor || 'gold';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border max-h-[90vh] max-w-2xl overflow-hidden p-0">
        <ScrollArea className="max-h-[90vh]">
          {/* Hero Image */}
          <div className="relative h-64">
            <img src={recipe.image} alt={recipe.name} className="size-full object-cover" />
            <div className="from-card via-card/50 absolute inset-0 bg-gradient-to-t to-transparent" />
            <div className="absolute inset-x-6 bottom-4">
              {recipe.category && (
                <span className={cn('mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium', 'bg-background/80 text-gold')}>{recipe.category}</span>
              )}
              <DialogHeader>
                <DialogTitle className="font-display text-foreground text-3xl">{recipe.name}</DialogTitle>
              </DialogHeader>
              <p className="text-muted-foreground mt-1">{recipe.description}</p>
            </div>
          </div>

          <div className="space-y-8 p-6">
            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm">
              <div className="text-muted-foreground flex items-center gap-2">
                <Clock className={cn('size-4', `text-${accentColor}`)} />
                <span>{recipe.prepTime}</span>
              </div>
              <div className="text-muted-foreground flex items-center gap-2">
                <Users className={cn('size-4', `text-${accentColor}`)} />
                <span>{recipe.servings}</span>
              </div>
            </div>

            {/* História */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <History className={cn('size-5', `text-${accentColor}`)} />
                <h3 className="font-display text-foreground text-lg">História</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{extras.history}</p>
            </div>

            {/* Momento para Beber */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className={cn('size-5', `text-${accentColor}`)} />
                <h3 className="font-display text-foreground text-lg">Momento Ideal</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{extras.occasion}</p>
            </div>

            {/* Ingredientes */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Wine className={cn('size-5', `text-${accentColor}`)} />
                <h3 className="font-display text-foreground text-lg">Ingredientes</h3>
              </div>
              <ul className="grid grid-cols-2 gap-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-muted-foreground bg-background/50 flex items-center gap-2 rounded-lg p-3 text-sm">
                    <span className={cn('size-1.5 shrink-0 rounded-full', `bg-${accentColor}`)} />
                    <span className="text-gold font-medium">{ingredient.amount}</span>
                    <span>{ingredient.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preparo */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Wine className={cn('size-5', `text-${accentColor}`)} />
                <h3 className="font-display text-foreground text-lg">Modo de Preparo</h3>
              </div>
              <ol className="space-y-3">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4 text-sm">
                    <span
                      className={cn(
                        'font-display flex size-7 shrink-0 items-center justify-center rounded-full font-bold',
                        `bg-${accentColor}/20 text-${accentColor}`,
                      )}
                    >
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground pt-1">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Dicas */}
            <div className="bg-gold/5 border-gold/20 space-y-3 rounded-xl border p-4">
              <h3 className="font-display text-gold text-lg">💡 Dica do Bartender</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{extras.tips}</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
