export interface Post {
  slug: string;
  titulo: string;
  categoria: string;
  /** Data no formato AAAA-MM-DD (usada para ordenar e para a tag <time>). */
  data: string;
  dataTexto: string;
  img: string;
  resumo: string;
  /** Parágrafos do artigo. */
  corpo: string[];
  /** false = só temos o resumo do site antigo; a página mostra um aviso. Mude para true quando colar o texto completo em "corpo". */
  completo: boolean;
}

// ⚠️ Os PDFs só trazem o início de cada post. Cole o texto completo em "corpo" e troque "completo" para true.
export const POSTS: Post[] = [
  {
    slug: 'diferenca-entre-textura-e-grafiato',
    titulo: 'Qual é a diferença entre textura e grafiato?',
    categoria: 'Dicas',
    data: '2023-03-18',
    dataTexto: '18 de março de 2023',
    img: '/images/blog-texturas.jpg',
    resumo: 'Ambos são texturas, mas o grafiato, por causa das ranhuras, só pode ser aplicado com desempenadeira, e não com rolo.',
    corpo: ['Na verdade, ambos são texturas. Porém, o grafiato, devido às suas ranhuras, só pode ser aplicado com desempenadeira e não é possível aplicar com rolo.'],
    completo: false,
  },
  {
    slug: '7-dicas-para-pintar-as-paredes',
    titulo: 'Confira 7 dicas para pintar as paredes da casa sem erros',
    categoria: 'Dicas',
    data: '2022-07-13',
    dataTexto: '13 de julho de 2022',
    img: '/images/blog-sala-listras.jpg',
    resumo: 'Quer mudar o visual da casa e não sabe como? Que tal trocar a cor das paredes?',
    corpo: ['Quer mudar o visual da casa e não sabe como? Que tal trocar a cor das paredes?'],
    completo: false,
  },
  {
    slug: 'dicas-de-pintura-e-combinacoes-de-cores',
    titulo: 'Dicas de pintura e combinações de cores',
    categoria: 'Dicas',
    data: '2022-07-11',
    dataTexto: '11 de julho de 2022',
    img: '/images/blog-sofa-laranja.jpg',
    resumo: 'Selecionamos as principais dúvidas sobre cores e ambientes, como: devo pintar a casa toda com a mesma cor?',
    corpo: ['Selecionamos as principais dúvidas para esclarecê-las: “devo pintar a casa toda com a mesma cor?”'],
    completo: false,
  },
];

export const postPorSlug = (slug: string | null | undefined) => POSTS.find((p) => p.slug === slug);
