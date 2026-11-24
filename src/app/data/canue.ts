export type LinhaCanue = 'fosco' | 'metalico';

export interface Canue {
  nome: string;
  slug: string;
  linha: LinhaCanue;
  img: string;
  /** Preço de referência (vem do briefing). Pode mudar: confirmar no WhatsApp. */
  preco?: string;
}

export const LINHAS: Record<LinhaCanue, { rotulo: string; embalagem: string; efeito: string }> = {
  fosco: { rotulo: 'Fosco e Aveludado', embalagem: '5 kg', efeito: 'Efeito cimento queimado, fosco e aveludado' },
  metalico: { rotulo: 'Metálico Perolizado', embalagem: 'Baldes de 1,5 kg e 3 kg', efeito: 'Efeito metálico perolizado' },
};

const c = (linha: LinhaCanue, cor: string, arquivo: string, preco?: string): Canue => ({
  nome: linha === 'fosco' ? `Canue ${cor}` : `Canue Metálico ${cor}`,
  slug: arquivo,
  linha,
  img: `/images/canue/${linha}-${arquivo}.jpg`,
  preco,
});

// Mesma ordem da tela "Produtos" do site atual.
export const CANUE: Canue[] = [
  c('fosco', 'Concreto', 'concreto', 'R$ 120,00'),
  c('fosco', 'Crômio', 'cromio'),
  c('fosco', 'Cinza', 'cinza'),
  c('fosco', 'Açaí', 'acai'),
  c('fosco', 'Ferrugem', 'ferrugem'),
  c('fosco', 'Grafite', 'grafite'),
  c('fosco', 'Camurça', 'camurca'),
  c('fosco', 'Morango Refrescante', 'morango-refrescante'),
  c('fosco', 'Manguezal', 'manguezal'),
  c('fosco', 'Azul Barim', 'azul-barim'),
  c('metalico', 'Açaí', 'acai'),
  c('metalico', 'Grafite', 'grafite'),
  c('metalico', 'Manguezal', 'manguezal'),
  c('metalico', 'Morango Refrescante', 'morango-refrescante'),
  c('metalico', 'Concreto', 'concreto'),
  c('metalico', 'Tabaco', 'tabaco'),
  c('metalico', 'Terracota', 'terracota'),
  c('metalico', 'Ferrugem', 'ferrugem'),
  c('metalico', 'Crômio', 'cromio'),
  c('metalico', 'Camurça', 'camurca'),
  c('metalico', 'Azul Barim', 'azul-barim'),
];
