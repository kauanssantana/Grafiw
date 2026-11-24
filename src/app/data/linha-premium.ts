import { Secao } from './produtos';

export interface CorLinha {
  nome: string;
  slug: string;
  /** Foto usada nos cartões e no banner. */
  img: string;
  /** Fotos da página da cor (vêm das páginas do site atual). */
  galeria: string[];
  /** Preço de referência (vem do briefing). Pode mudar: confirmar no WhatsApp. */
  preco?: string;
}
export interface LinhaPremium {
  slug: string;
  nome: string;
  embalagem: string;
  resumo: string;
  intro: string[];
  fatos: { rotulo: string; valor: string }[];
  caracteristicas: string[];
  secoes: Secao[];
  cores: CorLinha[];
  /** Slug da outra linha, usado no bloco "Conheça também". */
  outra: string;
}

// Fotos de cada cor, extraídas dos PDFs. Cores sem PDF usam só a foto do cartão.
const GALERIAS: Record<string, string[]> = {
  'fosco/acai': ['/images/linha-premium/cores/fosco-acai-1.jpg', '/images/linha-premium/cores/fosco-acai-2.jpg', '/images/linha-premium/cores/fosco-acai-3.jpg'],
  'fosco/azul-barim': ['/images/linha-premium/cores/fosco-azul-barim-1.jpg', '/images/linha-premium/cores/balde-canue.jpg'],
  'fosco/camurca': ['/images/linha-premium/cores/fosco-camurca-1.jpg', '/images/linha-premium/cores/balde-canue.jpg'],
  'fosco/concreto': ['/images/linha-premium/cores/fosco-concreto-1.jpg', '/images/linha-premium/cores/balde-canue.jpg'],
  'fosco/cromio': ['/images/linha-premium/cores/fosco-cromio-1.jpg', '/images/linha-premium/cores/fosco-cromio-2.jpg'],
  'fosco/ferrugem': ['/images/linha-premium/cores/fosco-ferrugem-1.jpg', '/images/linha-premium/cores/balde-canue.jpg'],
  'fosco/grafite': ['/images/linha-premium/cores/fosco-grafite-1.jpg', '/images/linha-premium/cores/balde-canue.jpg'],
  'fosco/manguezal': ['/images/linha-premium/cores/fosco-manguezal-1.jpg', '/images/linha-premium/cores/fosco-manguezal-2.jpg', '/images/linha-premium/cores/balde-canue.jpg'],
  'metalico/acai': ['/images/linha-premium/cores/metalico-acai-1.jpg', '/images/linha-premium/cores/metalico-acai-2.jpg', '/images/linha-premium/cores/balde-canue.jpg'],
  'metalico/azul-barim': ['/images/linha-premium/cores/metalico-azul-barim-1.jpg', '/images/linha-premium/cores/metalico-azul-barim-2.jpg'],
  'metalico/camurca': ['/images/linha-premium/cores/metalico-camurca-1.jpg', '/images/linha-premium/cores/balde-canue.jpg'],
  'metalico/concreto': ['/images/linha-premium/cores/metalico-concreto-1.jpg', '/images/linha-premium/cores/balde-canue.jpg'],
  'metalico/cromio': ['/images/linha-premium/cores/metalico-cromio-1.jpg', '/images/linha-premium/cores/metalico-cromio-2.jpg', '/images/linha-premium/cores/metalico-cromio-3.jpg'],
  'metalico/ferrugem': ['/images/linha-premium/cores/metalico-ferrugem-1.jpg', '/images/linha-premium/cores/metalico-ferrugem-2.jpg'],
  'metalico/grafite': ['/images/linha-premium/cores/metalico-grafite-1.jpg', '/images/linha-premium/cores/balde-canue.jpg'],
  'metalico/manguezal': ['/images/linha-premium/cores/metalico-manguezal-1.jpg', '/images/linha-premium/cores/metalico-manguezal-2.jpg'],
  'metalico/morango-refrescante': ['/images/linha-premium/cores/metalico-morango-refrescante-1.jpg', '/images/linha-premium/cores/metalico-morango-refrescante-2.jpg'],
  'metalico/tabaco': ['/images/linha-premium/cores/metalico-tabaco-1.jpg', '/images/linha-premium/cores/metalico-tabaco-2.jpg', '/images/linha-premium/cores/metalico-tabaco-3.jpg'],
  'metalico/terracota': ['/images/linha-premium/cores/metalico-terracota-1.jpg', '/images/linha-premium/cores/metalico-terracota-2.jpg'],
};

const cor = (linha: 'fosco' | 'metalico', nome: string, slug: string, preco?: string): CorLinha => {
  const img = `/images/linha-premium/${linha}-${slug}.jpg`;
  return { nome, slug, img, galeria: GALERIAS[`${linha}/${slug}`] ?? [img], preco };
};

const SECAGEM = 'Ao toque: 30 min · Entre demãos: 1 h · Final: 24 h';
const DEMAOS = '2 a 3, podendo variar conforme o estado e a cor da superfície';

// Passo a passo de aplicação (vem das páginas do site atual e vale para o Canue em geral).
export const COMO_APLICAR: Secao = {
  titulo: 'Como aplicar',
  texto: ['A parede deve estar branca ou com tom claro.'],
  passos: [
    'Preparação: a parede deve estar lisa, com massa corrida PVA ou acrílica. Se for repintura e a tinta for semibrilho ou acetinada, é necessário lixar com lixa 150 para melhorar a aderência, pois essas tintas são muito impermeáveis e prejudicam a absorção e a secagem do Canue.',
    'Aplicação: mexa bem a massa com uma espátula para homogeneizar e aplique a primeira demão com celulóide, espátula ou desempenadeira de aço inox, sempre com movimentos aleatórios, em sentidos diferentes, curtos e sem deixar excesso.',
    'Acabamento: depois que a primeira demão secar, aplique a segunda para dar acabamento. Se for necessário, aplique a terceira.',
  ],
};

export const LINHAS_PREMIUM: LinhaPremium[] = [
  {
    slug: 'canue-aveludado-fosco',
    nome: 'Canue Aveludado Fosco',
    embalagem: 'Balde de 5 kg',
    resumo: 'Revestimento aveludado de fino acabamento, com efeito cimento queimado, em balde de 5 kg.',
    intro: [
      'Revestimento aveludado de fino acabamento, que embeleza e dá um toque refinado ao ambiente, com o efeito cimento queimado em acabamento fosco. Ideal para salas, quartos, banheiros, lavabos e painéis de TV.',
      'O Canue Aveludado é uma massa para uso externo e interno, de fácil aplicação, que proporciona beleza e sofisticação aos ambientes. Desenvolvido com alta tecnologia, embeleza e protege o ambiente. Produto hidrorrepelente, com acabamento aveludado e pronto para uso.',
    ],
    fatos: [
      { rotulo: 'Embalagem e rendimento', valor: 'Balde plástico de 5 kg: até 30 m² por demão' },
      { rotulo: 'Secagem', valor: SECAGEM },
      { rotulo: 'Demãos', valor: DEMAOS },
      { rotulo: 'Indicação', valor: 'Uso interno e externo' },
    ],
    caracteristicas: ['Hidrorrepelente', 'Fácil aplicação', 'Pronto para uso', 'Acabamento aveludado'],
    secoes: [{ titulo: 'Diluição', texto: ['Pronto para uso.'] }, COMO_APLICAR],
    cores: [
      cor('fosco', 'Açaí', 'acai'), cor('fosco', 'Concreto', 'concreto', 'R$ 120,00 (5 kg)'), cor('fosco', 'Cinza', 'cinza'),
      cor('fosco', 'Grafite', 'grafite'), cor('fosco', 'Ferrugem', 'ferrugem'), cor('fosco', 'Camurça', 'camurca'),
      cor('fosco', 'Morango Refrescante', 'morango-refrescante'), cor('fosco', 'Manguezal', 'manguezal'),
      cor('fosco', 'Azul Barim', 'azul-barim'), cor('fosco', 'Crômio', 'cromio'),
    ],
    outra: 'canue-metalico',
  },
  {
    slug: 'canue-metalico',
    nome: 'Canue Metálico',
    embalagem: 'Baldes de 1,5 kg e 3 kg',
    resumo: 'Revestimento com acabamento metálico moderno e refinado, em baldes de 1,5 kg e 3 kg.',
    intro: [
      'Revestimento com acabamento metálico moderno e refinado. O Canue Metálico é uma massa para uso externo e interno, de fácil aplicação, que proporciona beleza e sofisticação aos ambientes.',
      'Desenvolvido com alta tecnologia, embeleza e protege o ambiente. Produto hidrorrepelente e pronto para uso.',
    ],
    fatos: [
      { rotulo: 'Embalagem e rendimento', valor: '1,5 kg: até 12 m² · 3 kg: até 24 m² (por demão)' },
      { rotulo: 'Secagem', valor: SECAGEM },
      { rotulo: 'Demãos', valor: DEMAOS },
      { rotulo: 'Indicação', valor: 'Uso interno e externo' },
    ],
    caracteristicas: ['Hidrorrepelente', 'Fácil aplicação', 'Pronto para uso', 'Acabamento metálico'],
    secoes: [{ titulo: 'Diluição', texto: ['Pronto para uso.'] }, COMO_APLICAR],
    cores: [
      cor('metalico', 'Concreto', 'concreto'), cor('metalico', 'Açaí', 'acai'), cor('metalico', 'Camurça', 'camurca'),
      cor('metalico', 'Azul Barim', 'azul-barim'), cor('metalico', 'Grafite', 'grafite'), cor('metalico', 'Manguezal', 'manguezal'),
      cor('metalico', 'Morango Refrescante', 'morango-refrescante'), cor('metalico', 'Tabaco', 'tabaco'),
      cor('metalico', 'Terracota', 'terracota'), cor('metalico', 'Ferrugem', 'ferrugem'), cor('metalico', 'Crômio', 'cromio'),
    ],
    outra: 'canue-aveludado-fosco',
  },
];

export const linhaPorSlug = (slug: string | null | undefined) => LINHAS_PREMIUM.find((l) => l.slug === slug);
export const corPorSlug = (linha: string | null | undefined, cor: string | null | undefined) =>
  linhaPorSlug(linha)?.cores.find((c) => c.slug === cor);
