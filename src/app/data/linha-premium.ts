import { Secao } from './produtos';

export interface CorLinha { nome: string; img: string }
export interface LinhaPremium {
  slug: string;
  nome: string;
  resumo: string;
  intro: string[];
  fatos: { rotulo: string; valor: string }[];
  caracteristicas: string[];
  secoes: Secao[];
  cores: CorLinha[];
  /** Slug da outra linha, usado no bloco "Conheça também". */
  outra: string;
  preco?: string;
}

const cor = (linha: 'fosco' | 'metalico', nome: string, arquivo: string): CorLinha => ({
  nome, img: `/images/linha-premium/${linha}-${arquivo}.jpg`,
});

// Passo a passo de aplicação (vem das páginas do site atual e vale para o Canue em geral).
const COMO_APLICAR: Secao = {
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
    resumo: 'Acabamento fosco e aveludado com efeito cimento queimado, em embalagem de 5 kg.',
    intro: [
      'A linha Canue Aveludado Fosco traz o efeito cimento queimado em acabamento fosco e aveludado, com sofisticação para salas, quartos, banheiros, lavabos e painéis de TV.',
      'Produto hidrorrepelente, com acabamento aveludado e pronto para uso, indicado para ambientes internos e externos.',
    ],
    fatos: [
      { rotulo: 'Embalagem', valor: '5 kg' },
      { rotulo: 'Acabamento', valor: 'Fosco e aveludado, efeito cimento queimado' },
      { rotulo: 'Indicação', valor: 'Uso interno e externo' },
      { rotulo: 'Rendimento e secagem', valor: 'Consulte nosso atendimento' },
    ],
    caracteristicas: ['Hidrorrepelente', 'Fácil aplicação', 'Pronto para uso', 'Acabamento aveludado'],
    secoes: [COMO_APLICAR],
    cores: [
      cor('fosco', 'Açaí', 'acai'), cor('fosco', 'Concreto', 'concreto'), cor('fosco', 'Cinza', 'cinza'),
      cor('fosco', 'Grafite', 'grafite'), cor('fosco', 'Ferrugem', 'ferrugem'), cor('fosco', 'Camurça', 'camurca'),
      cor('fosco', 'Morango Refrescante', 'morango-refrescante'), cor('fosco', 'Manguezal', 'manguezal'),
      cor('fosco', 'Azul Barim', 'azul-barim'), cor('fosco', 'Crômio', 'cromio'),
    ],
    outra: 'canue-metalico',
    preco: 'R$ 120,00 (Canue Concreto, 5 kg)',
  },
  {
    slug: 'canue-metalico',
    nome: 'Canue Metálico',
    resumo: 'Revestimento com acabamento metálico moderno e refinado, em baldes de 1,5 kg e 3 kg.',
    intro: [
      'Revestimento com acabamento metálico moderno e refinado. O Canue Metálico é uma massa para uso externo e interno, de fácil aplicação, que proporciona beleza e sofisticação aos ambientes.',
      'Desenvolvido com alta tecnologia, embeleza e protege o ambiente. Produto hidrorrepelente e pronto para uso.',
    ],
    fatos: [
      { rotulo: 'Embalagem e rendimento', valor: '1,5 kg: até 12 m² · 3 kg: até 24 m² (por demão)' },
      { rotulo: 'Secagem', valor: 'Ao toque: 30 min · Entre demãos: 1 h · Final: 24 h' },
      { rotulo: 'Demãos', valor: '2 a 3, podendo variar conforme o estado e a cor da superfície' },
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
