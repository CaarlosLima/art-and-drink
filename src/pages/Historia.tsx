import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
interface TimelineEvent {
  year: string;
  yearNumeric: number;
  title: string;
  description: string;
  expanded?: string;
  drink: string;
  drinkPath: string;
  color: string;
}

const allEvents: TimelineEvent[] = [
  // Vinho
  {
    year: '6000 a.C.',
    yearNumeric: -6000,
    title: 'Origens do Vinho',
    description: 'As evidências mais antigas de produção de vinho são encontradas no Cáucaso.',
    expanded: 'Jarros de cerâmica com resíduos de vinho foram descobertos na Geórgia, confirmando que a vinicultura tem mais de 8.000 anos.',
    drink: 'Vinho',
    drinkPath: '/vinho',
    color: 'wine',
  },
  {
    year: '3000 a.C.',
    yearNumeric: -3000,
    title: 'Vinho no Egito',
    description: 'O vinho se torna bebida de faraós e oferenda aos deuses.',
    expanded: 'Os egípcios desenvolveram técnicas de envelhecimento e rotulagem, indicando safra e origem nas ânforas.',
    drink: 'Vinho',
    drinkPath: '/vinho',
    color: 'wine',
  },
  {
    year: '1000 a.C.',
    yearNumeric: -1000,
    title: 'Pulque Sagrado',
    description: 'Povos mesoamericanos começam a fermentar o agave para criar pulque.',
    expanded: 'O pulque era uma bebida leitosa e sagrada, consumida em rituais religiosos. Os astecas acreditavam que foi um presente dos deuses.',
    drink: 'Tequila',
    drinkPath: '/tequila',
    color: 'tequila',
  },
  {
    year: '800 a.C.',
    yearNumeric: -800,
    title: 'Expansão Grega do Vinho',
    description: 'Os gregos espalham videiras por todo o Mediterrâneo.',
    expanded: 'Dionísio, o deus do vinho, tornou-se central na cultura grega. Os gregos classificavam vinhos por região.',
    drink: 'Vinho',
    drinkPath: '/vinho',
    color: 'wine',
  },
  {
    year: '100 d.C.',
    yearNumeric: 100,
    title: 'Império Romano',
    description: 'Roma estabelece vinhedos da Espanha à Alemanha.',
    expanded: 'Os romanos aperfeiçoaram técnicas de cultivo e envelhecimento. Regiões como Bordeaux foram plantadas nesta época.',
    drink: 'Vinho',
    drinkPath: '/vinho',
    color: 'wine',
  },

  // Vodka
  {
    year: 'Séc. VIII',
    yearNumeric: 750,
    title: 'Primeiros Destilados de Grãos',
    description: 'As primeiras destilações de grãos ocorrem na Rússia e Polônia.',
    expanded: "A origem exata é disputada entre os dois países. O termo 'vodka' deriva do eslavo 'voda', significando água.",
    drink: 'Vodka',
    drinkPath: '/vodka',
    color: 'gold',
  },

  // Gin
  {
    year: '1269',
    yearNumeric: 1269,
    title: 'Primeiros Destilados de Zimbro',
    description: 'Primeiras referências a destilados de zimbro aparecem na Holanda.',
    expanded: 'Monges e alquimistas usavam zimbro em destilados medicinais para tratar problemas estomacais e renais.',
    drink: 'Gin',
    drinkPath: '/gin',
    color: 'gin',
  },

  // Vodka
  {
    year: '1405',
    yearNumeric: 1405,
    title: 'Documento Polonês de Vodka',
    description: "A palavra 'wódka' aparece pela primeira vez em documentos oficiais poloneses.",
    expanded: 'O Tribunal de Sandomierz registra a palavra em um documento legal, marcando o primeiro uso oficial do termo na história.',
    drink: 'Vodka',
    drinkPath: '/vodka',
    color: 'gold',
  },

  // Rum
  {
    year: '1493',
    yearNumeric: 1493,
    title: 'Chegada da Cana ao Caribe',
    description: 'Cristóvão Colombo traz mudas de cana-de-açúcar para o Caribe.',
    expanded: 'Na segunda viagem às Américas, Colombo introduziu a cana-de-açúcar na ilha de Hispaniola.',
    drink: 'Rum',
    drinkPath: '/rum',
    color: 'rum',
  },

  // Whisky
  {
    year: '1494',
    yearNumeric: 1494,
    title: 'Primeiro Registro de Whisky',
    description: 'O primeiro registro escrito de destilação de whisky aparece nos registros fiscais escoceses.',
    expanded: "Frei John Cor recebeu 'oito bolls de malte' para fazer aquavitae para o Rei James IV da Escócia.",
    drink: 'Whisky',
    drinkPath: '/whisky',
    color: 'whisky',
  },

  // Tequila
  {
    year: '1519',
    yearNumeric: 1519,
    title: 'Destilação chega ao México',
    description: 'Conquistadores trazem a arte da destilação para o México.',
    expanded: 'Quando o brandy espanhol acabou, os colonizadores aplicaram técnicas de destilação ao pulque.',
    drink: 'Tequila',
    drinkPath: '/tequila',
    color: 'tequila',
  },

  // Vodka
  {
    year: '1533',
    yearNumeric: 1533,
    title: 'Vodka Medicinal na Rússia',
    description: 'Vodka é reconhecida oficialmente como remédio na Rússia.',
    expanded: "Médicos russos começam a prescrever vodka para diversas doenças. A bebida era conhecida como 'zhiznennia voda'.",
    drink: 'Vodka',
    drinkPath: '/vodka',
    color: 'gold',
  },

  // Cachaça
  {
    year: '1532',
    yearNumeric: 1532,
    title: 'Cana-de-açúcar chega ao Brasil',
    description: 'Martim Afonso de Sousa introduz a cana-de-açúcar no Brasil.',
    expanded: 'As primeiras mudas foram plantadas na Capitania de São Vicente, iniciando a história açucareira do Brasil.',
    drink: 'Cachaça',
    drinkPath: '/cachaca',
    color: 'rum',
  },
  {
    year: '1550',
    yearNumeric: 1550,
    title: 'Nasce a Cachaça',
    description: 'Escravos nos engenhos descobrem como destilar o caldo de cana fermentado.',
    expanded: 'A cachaça nasce como o primeiro destilado das Américas, anterior ao rum caribenho.',
    drink: 'Cachaça',
    drinkPath: '/cachaca',
    color: 'rum',
  },

  // Gin
  {
    year: '1575',
    yearNumeric: 1575,
    title: 'Nasce a Genever',
    description: 'A família Bols começa a produzir genever em Amsterdã.',
    expanded: 'Lucas Bols funda sua destilaria, criando a genever que seria o precursor direto do gin moderno.',
    drink: 'Gin',
    drinkPath: '/gin',
    color: 'gin',
  },

  // Tequila
  {
    year: '1600',
    yearNumeric: 1600,
    title: 'Primeira Destilaria de Tequila',
    description: 'A região de Tequila, Jalisco, começa a produzir mezcal de agave azul.',
    expanded: 'O vulcão de Tequila criou um solo único, rico em minerais, perfeito para o agave azul weber.',
    drink: 'Tequila',
    drinkPath: '/tequila',
    color: 'tequila',
  },

  // Whisky
  {
    year: '1608',
    yearNumeric: 1608,
    title: 'Licença de Bushmills',
    description: 'A destilaria Old Bushmills na Irlanda recebe a primeira licença oficial para destilar.',
    expanded: 'Tornando-se a destilaria licenciada mais antiga do mundo ainda em operação.',
    drink: 'Whisky',
    drinkPath: '/whisky',
    color: 'whisky',
  },

  // Cachaça
  {
    year: '1635',
    yearNumeric: 1635,
    title: 'Proibição da Cachaça',
    description: 'Portugal proíbe a produção de cachaça para proteger a bagaceira portuguesa.',
    expanded: 'A proibição durou décadas, mas a produção clandestina continuou. A cachaça se tornou símbolo de resistência.',
    drink: 'Cachaça',
    drinkPath: '/cachaca',
    color: 'rum',
  },

  // Rum
  {
    year: '1650',
    yearNumeric: 1650,
    title: 'Nascimento do Rum',
    description: 'Primeiros registros de produção de rum em Barbados.',
    expanded: "Escravos das plantações descobriram que o melaço podia ser fermentado e destilado. Chamavam a bebida de 'kill-devil'.",
    drink: 'Rum',
    drinkPath: '/rum',
    color: 'rum',
  },
  {
    year: '1655',
    yearNumeric: 1655,
    title: 'Rum da Marinha Britânica',
    description: 'A Marinha Real Britânica adota o rum como ração diária.',
    expanded: "O 'grog' - rum diluído com água e limão - era dado aos marinheiros para prevenir escorbuto.",
    drink: 'Rum',
    drinkPath: '/rum',
    color: 'rum',
  },

  // Gin
  {
    year: '1689',
    yearNumeric: 1689,
    title: 'Gin chega à Inglaterra',
    description: 'Guilherme III de Orange leva o gosto pelo gin da Holanda para a Inglaterra.',
    expanded: 'O rei holandês liberou a produção de destilados na Inglaterra, iniciando uma era de produção descontrolada.',
    drink: 'Gin',
    drinkPath: '/gin',
    color: 'gin',
  },

  // Whisky
  {
    year: '1707',
    yearNumeric: 1707,
    title: 'Ato de União',
    description: 'A união da Escócia com a Inglaterra traz impostos pesados sobre o whisky.',
    expanded: 'Os altos impostos levaram muitos destiladores a operar ilegalmente nas Highlands.',
    drink: 'Whisky',
    drinkPath: '/whisky',
    color: 'whisky',
  },

  // Rum
  {
    year: '1700s',
    yearNumeric: 1700,
    title: 'Era dos Piratas',
    description: 'O rum se torna a moeda do Caribe e bebida dos piratas.',
    expanded: 'O Triângulo do Comércio conectava rum, escravos e melaço. Piratas como Barba Negra eram conhecidos por seu amor pelo rum.',
    drink: 'Rum',
    drinkPath: '/rum',
    color: 'rum',
  },

  // Gin
  {
    year: '1720-1751',
    yearNumeric: 1735,
    title: 'Gin Craze',
    description: "A 'Febre do Gin' devasta Londres com milhares de destilarias caseiras.",
    expanded: "William Hogarth imortalizou a crise em sua gravura 'Gin Lane'. Estima-se que Londres tinha uma destilaria para cada cinco residências.",
    drink: 'Gin',
    drinkPath: '/gin',
    color: 'gin',
  },
  {
    year: '1751',
    yearNumeric: 1751,
    title: 'Gin Act',
    description: 'Legislação regulamenta a produção e inicia a era do gin de qualidade.',
    expanded: 'A lei aumentou impostos e criou licenças, forçando o fechamento de destilarias ilegais.',
    drink: 'Gin',
    drinkPath: '/gin',
    color: 'gin',
  },

  // Tequila
  {
    year: '1758',
    yearNumeric: 1758,
    title: 'Licença Cuervo',
    description: 'José Antonio de Cuervo obtém a primeira licença para produzir tequila comercialmente.',
    expanded: 'A família Cuervo estabeleceu padrões de qualidade que definiram a indústria.',
    drink: 'Tequila',
    drinkPath: '/tequila',
    color: 'tequila',
  },

  // Whisky
  {
    year: '1783',
    yearNumeric: 1783,
    title: 'Nasce o Bourbon',
    description: 'Evan Williams estabelece a primeira destilaria comercial no Kentucky.',
    expanded: 'Colonizadores escoceses e irlandeses adaptaram suas técnicas ao milho abundante na América.',
    drink: 'Whisky',
    drinkPath: '/whisky',
    color: 'whisky',
  },

  // Cachaça
  {
    year: '1789',
    yearNumeric: 1789,
    title: 'Cachaça na Inconfidência',
    description: 'A Inconfidência Mineira adota a cachaça como bebida da revolução.',
    expanded: 'Enquanto a elite bebia vinho português, os revolucionários brindavam com cachaça, rejeitando o colonialismo.',
    drink: 'Cachaça',
    drinkPath: '/cachaca',
    color: 'rum',
  },

  // Whisky
  {
    year: '1823',
    yearNumeric: 1823,
    title: 'Excise Act',
    description: 'Lei britânica legaliza a destilação e cria o sistema de licenciamento moderno.',
    expanded: 'George Smith foi o primeiro a obter uma licença legal, fundando o que se tornaria a destilaria Glenlivet.',
    drink: 'Whisky',
    drinkPath: '/whisky',
    color: 'whisky',
  },

  // Gin
  {
    year: '1830',
    yearNumeric: 1830,
    title: 'London Dry Nasce',
    description: 'A invenção do alambique de coluna permite criar o London Dry Gin.',
    expanded: 'Marcas como Tanqueray (1830) e Beefeater (1863) definiram o padrão.',
    drink: 'Gin',
    drinkPath: '/gin',
    color: 'gin',
  },

  // Whisky
  {
    year: '1831',
    yearNumeric: 1831,
    title: 'Alambique Coffey',
    description: 'Aeneas Coffey patenteia o alambique de coluna contínua.',
    expanded: 'Esta invenção revolucionou a produção de whisky, permitindo destilação contínua e mais eficiente.',
    drink: 'Whisky',
    drinkPath: '/whisky',
    color: 'whisky',
  },

  // Cachaça
  {
    year: '1850',
    yearNumeric: 1850,
    title: 'Paraty se Destaca',
    description: 'A cidade de Paraty se torna o maior centro produtor de cachaça do Brasil.',
    expanded: 'Os alambiques de Paraty produziam cachaça de altíssima qualidade, exportada para todo o país.',
    drink: 'Cachaça',
    drinkPath: '/cachaca',
    color: 'rum',
  },

  // Vinho
  {
    year: '1855',
    yearNumeric: 1855,
    title: 'Classificação de Bordeaux',
    description: 'Napoleão III ordena a classificação oficial dos vinhos de Bordeaux.',
    expanded: 'O sistema de Premiers Crus permanece essencialmente inalterado até hoje.',
    drink: 'Vinho',
    drinkPath: '/vinho',
    color: 'wine',
  },

  // Gin
  {
    year: '1857',
    yearNumeric: 1857,
    title: 'Nasce o Gin & Tônica',
    description: 'Oficiais britânicos na Índia misturam gin com água tônica medicinal.',
    expanded: 'Para disfarçar o gosto amargo do quinino (antimalárico), os soldados adicionavam gin, limão e açúcar.',
    drink: 'Gin',
    drinkPath: '/gin',
    color: 'gin',
  },

  // Rum
  {
    year: '1862',
    yearNumeric: 1862,
    title: 'Nasce a Bacardi',
    description: 'Don Facundo Bacardí revoluciona o rum em Cuba.',
    expanded: 'Usando carvão para filtração e barris de carvalho branco, Bacardí criou o primeiro rum suave e leve.',
    drink: 'Rum',
    drinkPath: '/rum',
    color: 'rum',
  },

  // Vodka
  {
    year: '1863',
    yearNumeric: 1863,
    title: 'Destilação Contínua de Vodka',
    description: 'Pyotr Smirnov adota a destilação em coluna e filtração com carvão.',
    expanded: 'Esta inovação revolucionou a produção, criando uma vodka mais pura e suave. A marca Smirnoff nasceu desta técnica.',
    drink: 'Vodka',
    drinkPath: '/vodka',
    color: 'gold',
  },

  // Vinho
  {
    year: '1863',
    yearNumeric: 1863,
    title: 'Crise da Filoxera',
    description: 'Praga americana devasta vinhedos europeus por décadas.',
    expanded: 'O pulgão Phylloxera destruiu milhões de hectares. A solução foi enxertar videiras europeias em raízes americanas.',
    drink: 'Vinho',
    drinkPath: '/vinho',
    color: 'wine',
  },

  // Tequila
  {
    year: '1873',
    yearNumeric: 1873,
    title: 'Exportação de Tequila',
    description: 'Sauza envia os primeiros barris de tequila para os Estados Unidos.',
    expanded: 'Cenobio Sauza foi pioneiro em exportar tequila, abrindo caminho para o mercado internacional.',
    drink: 'Tequila',
    drinkPath: '/tequila',
    color: 'tequila',
  },

  // Whisky
  {
    year: '1880',
    yearNumeric: 1880,
    title: 'Whisky se Expande',
    description: 'A praga da filoxera devastou os vinhedos europeus, abrindo espaço para o whisky.',
    expanded: 'Com a escassez de conhaque e brandy, o whisky escocês preencheu o vazio.',
    drink: 'Whisky',
    drinkPath: '/whisky',
    color: 'whisky',
  },

  // Rum
  {
    year: '1898',
    yearNumeric: 1898,
    title: 'Cuba Libre',
    description: 'A guerra hispano-americana dá nome ao drink que uniu rum e cola.',
    expanded: "Soldados americanos em Cuba misturaram rum Bacardi com Coca-Cola, brindando 'Por Cuba Libre!'",
    drink: 'Rum',
    drinkPath: '/rum',
    color: 'rum',
  },

  // Vodka
  {
    year: '1917',
    yearNumeric: 1917,
    title: 'Revolução Russa',
    description: 'A revolução força produtores de vodka a fugir, espalhando a bebida pelo mundo.',
    expanded: 'Vladimir Smirnov escapou para a Europa com a receita da família. A vodka chegou aos EUA através destes emigrantes.',
    drink: 'Vodka',
    drinkPath: '/vodka',
    color: 'gold',
  },

  // Cachaça
  {
    year: '1918',
    yearNumeric: 1918,
    title: 'Nasce a Caipirinha',
    description: 'O drink brasileiro mais famoso surge durante a gripe espanhola.',
    expanded: 'Originalmente uma receita medicinal com cachaça, limão, alho e mel, evoluiu para o drink que conhecemos.',
    drink: 'Cachaça',
    drinkPath: '/cachaca',
    color: 'rum',
  },

  // Whisky
  {
    year: '1920-1933',
    yearNumeric: 1926,
    title: 'Lei Seca Americana',
    description: 'A Proibição nos EUA paradoxalmente impulsiona o whisky escocês e canadense.',
    expanded: 'Marcas escocesas como Cutty Sark foram criadas especificamente para o mercado de contrabando.',
    drink: 'Whisky',
    drinkPath: '/whisky',
    color: 'whisky',
  },

  // Rum
  {
    year: '1930s',
    yearNumeric: 1935,
    title: 'Era dos Coquetéis em Havana',
    description: 'Havana se torna a capital mundial dos coquetéis com rum.',
    expanded: 'Bartenders como Constantino Ribalaigua no Floridita aperfeiçoaram clássicos como o Daiquiri.',
    drink: 'Rum',
    drinkPath: '/rum',
    color: 'rum',
  },

  // Vodka
  {
    year: '1941',
    yearNumeric: 1941,
    title: 'Moscow Mule',
    description: 'O coquetel Moscow Mule populariza a vodka nos Estados Unidos.',
    expanded: 'Criado em Hollywood, o drink servido em canecas de cobre transformou a vodka em fenômeno americano.',
    drink: 'Vodka',
    drinkPath: '/vodka',
    color: 'gold',
  },

  // Vodka
  {
    year: '1962',
    yearNumeric: 1962,
    title: 'James Bond e a Vodka',
    description: "'Vodka Martini, batido, não mexido' entra para a cultura pop.",
    expanded: 'O agente 007 ajudou a estabelecer a vodka como sinônimo de sofisticação internacional.',
    drink: 'Vodka',
    drinkPath: '/vodka',
    color: 'gold',
  },

  // Whisky
  {
    year: '1964',
    yearNumeric: 1964,
    title: 'Bourbon: Patrimônio Nacional',
    description: 'O Congresso dos EUA declara oficialmente o bourbon como produto distintivo americano.',
    expanded: 'A resolução estabeleceu padrões rígidos para a produção de bourbon.',
    drink: 'Whisky',
    drinkPath: '/whisky',
    color: 'whisky',
  },

  // Tequila
  {
    year: '1974',
    yearNumeric: 1974,
    title: 'Denominação de Origem da Tequila',
    description: 'México protege legalmente a tequila como produto de origem controlada.',
    expanded: 'Assim como o champagne, a tequila só pode ser produzida em regiões específicas do México.',
    drink: 'Tequila',
    drinkPath: '/tequila',
    color: 'tequila',
  },

  // Vinho
  {
    year: '1976',
    yearNumeric: 1976,
    title: 'Julgamento de Paris',
    description: 'Vinhos californianos vencem os franceses em degustação às cegas.',
    expanded: 'O evento revolucionou o mundo do vinho, provando que qualidade não era exclusividade do Velho Mundo.',
    drink: 'Vinho',
    drinkPath: '/vinho',
    color: 'wine',
  },

  // Tequila
  {
    year: '1994',
    yearNumeric: 1994,
    title: 'Boom da Tequila',
    description: 'NAFTA facilita exportações e a tequila conquista o mundo.',
    expanded: 'O consumo nos EUA explodiu, com a Margarita se tornando um dos drinks mais populares do mundo.',
    drink: 'Tequila',
    drinkPath: '/tequila',
    color: 'tequila',
  },

  // Cachaça
  {
    year: '2001',
    yearNumeric: 2001,
    title: 'Denominação de Origem da Cachaça',
    description: 'A cachaça é oficialmente reconhecida como produto brasileiro.',
    expanded: 'Decreto federal estabelece que cachaça só pode ser produzida no Brasil.',
    drink: 'Cachaça',
    drinkPath: '/cachaca',
    color: 'rum',
  },

  // Whisky, Vodka, Gin, Rum, Tequila, Vinho, Cachaça - Era Moderna
  {
    year: '2000s',
    yearNumeric: 2005,
    title: 'Renascimento do Single Malt',
    description: 'O século XXI vê uma explosão de interesse por whiskies premium e artesanais.',
    expanded: 'O whisky japonês ganha reconhecimento mundial, com Yamazaki e Hibiki conquistando prêmios.',
    drink: 'Whisky',
    drinkPath: '/whisky',
    color: 'whisky',
  },
  {
    year: '2000s',
    yearNumeric: 2006,
    title: 'Era Premium da Vodka',
    description: 'Vodkas artesanais e premium dominam o mercado de luxo.',
    expanded: 'Marcas como Grey Goose e Belvedere redefinem a categoria.',
    drink: 'Vodka',
    drinkPath: '/vodka',
    color: 'gold',
  },
  {
    year: '2000s',
    yearNumeric: 2007,
    title: 'Renascimento Craft do Gin',
    description: 'Explosão de destilarias artesanais redefine o mundo do gin.',
    expanded: "De Hendrick's a Monkey 47, novas marcas provaram que gin pode ser tão diverso quanto qualquer destilado.",
    drink: 'Gin',
    drinkPath: '/gin',
    color: 'gin',
  },
  {
    year: '2000s',
    yearNumeric: 2008,
    title: 'Rum Premium',
    description: 'Rums envelhecidos e artesanais conquistam o mercado de luxo.',
    expanded: 'Marcas como Diplomático e Zacapa provaram que rum pode competir com os melhores whiskies.',
    drink: 'Rum',
    drinkPath: '/rum',
    color: 'rum',
  },
  {
    year: '2000s',
    yearNumeric: 2009,
    title: 'Tequila Ultra-Premium',
    description: 'Tequilas ultra-premium e añejos redefinem a categoria.',
    expanded: 'Marcas como Clase Azul provaram que tequila pode ser um destilado de sipping.',
    drink: 'Tequila',
    drinkPath: '/tequila',
    color: 'tequila',
  },
  {
    year: '2000s',
    yearNumeric: 2010,
    title: 'Globalização do Vinho',
    description: 'Novos países produtores conquistam espaço no mercado mundial.',
    expanded: 'Chile, Argentina, Austrália e até Brasil produzem vinhos premiados internacionalmente.',
    drink: 'Vinho',
    drinkPath: '/vinho',
    color: 'wine',
  },
  {
    year: '2010s',
    yearNumeric: 2015,
    title: 'Era Artesanal da Cachaça',
    description: 'Cachaças premium ganham reconhecimento internacional.',
    expanded: 'Produtores artesanais de Minas Gerais conquistam prêmios mundiais.',
    drink: 'Cachaça',
    drinkPath: '/cachaca',
    color: 'rum',
  },
].sort((a, b) => a.yearNumeric - b.yearNumeric);

const drinks = [
  { name: 'Todos', color: 'primary' },
  { name: 'Whisky', color: 'whisky' },
  { name: 'Vodka', color: 'gold' },
  { name: 'Gin', color: 'gin' },
  { name: 'Rum', color: 'rum' },
  { name: 'Tequila', color: 'tequila' },
  { name: 'Cachaça', color: 'rum' },
  { name: 'Vinho', color: 'wine' },
];

const Historia = () => {
  const [selectedDrink, setSelectedDrink] = useState('Todos');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const timelineRef = useRef<HTMLDivElement>(null);

  const filteredEvents = selectedDrink === 'Todos' ? allEvents : allEvents.filter(e => e.drink === selectedDrink);

  const visibleEvents = showAll ? filteredEvents : filteredEvents.slice(0, 15);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px -50px 0px',
      },
    );

    const elements = timelineRef.current?.querySelectorAll('[data-timeline-item]');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleEvents]);

  // Reset visible items when filter changes
  useEffect(() => {
    setVisibleItems(new Set());
  }, [selectedDrink, showAll]);

  const toggleExpand = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const colorClasses: Record<string, { text: string; bg: string; border: string }> = {
    whisky: { text: 'text-whisky', bg: 'bg-whisky', border: 'border-whisky' },
    gold: { text: 'text-gold', bg: 'bg-gold', border: 'border-gold' },
    gin: { text: 'text-gin', bg: 'bg-gin', border: 'border-gin' },
    rum: { text: 'text-rum', bg: 'bg-rum', border: 'border-rum' },
    tequila: { text: 'text-tequila', bg: 'bg-tequila', border: 'border-tequila' },
    wine: { text: 'text-wine', bg: 'bg-wine', border: 'border-wine' },
    primary: { text: 'text-primary', bg: 'bg-primary', border: 'border-primary' },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="from-card via-background to-background absolute inset-0 bg-gradient-to-b" />
        <div className="absolute inset-0 opacity-10">
          <div className="bg-gold absolute left-10 top-20 size-72 rounded-full blur-3xl" />
          <div className="bg-wine absolute bottom-20 right-10 size-96 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <span className="text-gold animate-fade-in mb-4 block text-sm font-medium uppercase tracking-widest">Linha do Tempo</span>
          <h1 className="font-display text-foreground animate-slide-up mb-6 text-5xl font-bold md:text-6xl">A História dos Destilados</h1>
          <p className="text-muted-foreground animate-fade-in mx-auto max-w-2xl text-lg" style={{ animationDelay: '0.2s' }}>
            Uma jornada através de milênios, desde as primeiras fermentações até a era dos destilados artesanais premium
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-card border-border border-y py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end gap-4 overflow-x-auto pb-2">
            <div className="text-muted-foreground flex shrink-0 items-center gap-2">
              <Filter className="size-4" />
              <span className="text-sm font-medium">Filtrar:</span>
            </div>
            <div className="flex gap-2">
              {drinks.map(drink => (
                <Button
                  key={drink.name}
                  variant={selectedDrink === drink.name ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setSelectedDrink(drink.name);
                    setExpandedItems(new Set());
                    setShowAll(false);
                  }}
                  className={`font-body rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                    selectedDrink === drink.name ? 'bg-gold text-background' : 'bg-background text-foreground hover:bg-gold/20 border-border border'
                  }`}
                >
                  {drink.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="text-muted-foreground">
              Mostrando <span className="text-foreground font-semibold">{visibleEvents.length}</span> de{' '}
              <span className="text-foreground font-semibold">{filteredEvents.length}</span> eventos
              {selectedDrink !== 'Todos' && (
                <span className={cn('ml-2', colorClasses[drinks.find(d => d.name === selectedDrink)?.color || 'primary'].text)}>• {selectedDrink}</span>
              )}
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl" ref={timelineRef}>
            {/* Timeline line */}
            <div className="from-gold via-wine absolute inset-y-0 left-8 w-0.5 bg-gradient-to-b to-transparent md:left-1/2 md:-translate-x-1/2" />

            {visibleEvents.map((event, index) => {
              const colors = colorClasses[event.color] || colorClasses.primary;
              const isVisible = visibleItems.has(index);

              return (
                <div
                  key={`${event.year}-${event.title}-${index}`}
                  data-timeline-item
                  data-index={index}
                  className={cn(
                    'relative mb-12 flex items-start transition-all duration-700 ease-out',
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
                  )}
                  style={{ transitionDelay: `${(index % 5) * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div
                    className={cn(
                      'border-background absolute left-8 z-10 size-4 -translate-x-1/2 rounded-full border-4 transition-all duration-500 md:left-1/2',
                      colors.bg,
                      isVisible ? 'scale-100' : 'scale-0',
                    )}
                    style={{
                      boxShadow: isVisible ? `0 0 20px hsl(var(--${event.color}) / 0.5)` : 'none',
                      transitionDelay: `${(index % 5) * 100 + 200}ms`,
                    }}
                  />

                  {/* Content card */}
                  <div
                    className={cn(
                      'ml-16 transition-all duration-700 md:ml-0 md:w-[calc(50%-2rem)]',
                      index % 2 === 0 ? 'md:pr-8' : 'md:pl-8',
                      isVisible ? (index % 2 === 0 ? 'md:translate-x-0' : 'md:translate-x-0') : index % 2 === 0 ? 'md:-translate-x-8' : 'md:translate-x-8',
                    )}
                    style={{ transitionDelay: `${(index % 5) * 100 + 100}ms` }}
                  >
                    <div
                      className={cn(
                        'bg-card/50 border-border/50 group cursor-pointer rounded-xl border p-6 backdrop-blur-sm transition-all duration-300',
                        isVisible && 'hover:scale-[1.02] hover:shadow-lg',
                        isVisible && `hover:border-${event.color}/50 hover:shadow-[0_0_30px_hsl(var(--${event.color})/0.15)]`,
                      )}
                      onClick={() => toggleExpand(index)}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className={cn('font-serif text-2xl font-bold', colors.text)}>{event.year}</span>
                        <div className="flex items-center gap-2">
                          <Link
                            to={event.drinkPath}
                            onClick={e => e.stopPropagation()}
                            className={cn('rounded-full border px-2 py-1 text-xs transition-colors', colors.border, colors.text, 'hover:bg-current/10')}
                          >
                            {event.drink}
                          </Link>
                          <ChevronDown
                            className={cn('text-muted-foreground size-5 transition-transform duration-300', expandedItems.has(index) && 'rotate-180')}
                          />
                        </div>
                      </div>
                      <h3 className={cn('text-foreground mb-2 font-serif text-xl font-semibold transition-colors', `group-hover:${colors.text}`)}>
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>

                      {/* Expanded content */}
                      {event.expanded && (
                        <div
                          className={cn(
                            'overflow-hidden transition-all duration-500',
                            expandedItems.has(index) ? 'mt-4 max-h-40 opacity-100' : 'max-h-0 opacity-0',
                          )}
                        >
                          <p className="text-foreground/80 border-border/50 border-t pt-4 text-sm leading-relaxed">{event.expanded}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Show More Button */}
          {filteredEvents.length > 15 && (
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(!showAll)}
                className="border-gold/50 text-gold hover:bg-gold/10 hover:border-gold gap-2"
              >
                {showAll ? (
                  <>
                    <ChevronUp className="size-5" />
                    Mostrar Menos
                  </>
                ) : (
                  <>
                    <ChevronDown className="size-5" />
                    Mostrar Mais ({filteredEvents.length - 15} eventos)
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Historia;
