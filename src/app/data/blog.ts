export interface Bloco {
  /** p = parágrafo, h2/h3 = títulos, ul = lista com marcadores, ol = lista numerada, img = imagem */
  t: 'p' | 'h2' | 'h3' | 'ul' | 'ol' | 'img';
  texto?: string;
  itens?: string[];
  src?: string;
  alt?: string;
  /** Largura máxima da imagem em px (útil para fotos pequenas). */
  larg?: number;
}

export interface Post {
  slug: string;
  titulo: string;
  categoria: string;
  /** Data no formato AAAA-MM-DD (usada para ordenar e para a tag <time>). */
  data: string;
  dataTexto: string;
  img: string;
  resumo: string;
  blocos: Bloco[];
}

const img = (n: string) => `/images/blog/${n}.jpg`;

export const POSTS: Post[] = [
  {
    slug: 'diferenca-entre-textura-e-grafiato',
    titulo: 'Qual é a diferença entre textura e grafiato?',
    categoria: 'Dicas',
    data: '2023-03-18',
    dataTexto: '18 de março de 2023',
    img: '/images/blog-texturas.jpg',
    resumo: 'Ambos são texturas, mas o grafiato, por causa das ranhuras, só pode ser aplicado com desempenadeira, e não com rolo.',
    blocos: [
      { t: 'p', texto: 'Na verdade, ambos são texturas. Porém, o grafiato, devido às suas ranhuras, só pode ser aplicado com desempenadeira e não é possível aplicar com rolo. Já a textura pode ser aplicada com ambos e, se quiser, até com os dedos: vai depender da sua criatividade.' },
      { t: 'img', src: img('grafiato-amostra'), alt: 'Amostra de parede com grafiato', larg: 320 },
      { t: 'p', texto: 'Ambas são capazes de criar um efeito de contraste em um ambiente de coloração uniforme. Esse recurso é excelente para ser usado em escritórios e residências de espaços integrados.' },

      { t: 'h3', texto: 'Decoração' },
      { t: 'img', src: img('parede-texturizada'), alt: 'Parede com acabamento texturizado', larg: 451 },
      { t: 'p', texto: 'Para melhorar o aspecto visual de um ambiente, você pode aplicar uma textura ou um grafiato, a fim de decorá-lo com facilidade e eficiência.' },

      { t: 'h3', texto: 'Controle da umidade' },
      { t: 'p', texto: 'Os dois são ótimas opções para evitar infiltrações e rachaduras, pois tornam a parede mais densa e mais resistente.' },

      { t: 'h3', texto: 'Lavável' },
      { t: 'p', texto: 'Por fim, tanto a textura quanto o grafiato são laváveis, o que, por sua vez, é uma ótima notícia para quem se preocupa com a limpeza das paredes.' },

      { t: 'h2', texto: 'Principais características do grafiato' },
      { t: 'img', src: img('grafiato-parede-cinza'), alt: 'Parede cinza com grafiato e um quadro', larg: 560 },
      { t: 'p', texto: 'O grafiato pode ser encontrado em diferentes malhas (gramaturas). Nesse caso, quanto mais grossa a malha for, mais profundos serão os riscos da parede. O número das malhas é contado de maneira decrescente. Por exemplo:' },
      { t: 'ul', itens: ['Uma malha 10 é mais grossa que uma malha 16.'] },
      { t: 'p', texto: 'A aplicação do grafiato é mais demorada que a da textura. Isso ocorre porque é necessário muito cuidado ao criar os “desenhos” da parede.' },
      { t: 'p', texto: 'Além disso, não é permitido criar emendas no grafiato. Ou seja, é preciso começar o trabalho e terminá-lo sem interrupções; do contrário, a parede pode ficar marcada, deixando a aparência feia.' },

      { t: 'h2', texto: 'Principais características da textura' },
      { t: 'img', src: img('aplicacao-rolo-textura'), alt: 'Aplicação de textura com rolo especial', larg: 560 },
      { t: 'p', texto: 'Já sabemos que a textura é aplicada com um tipo de rolo especial, o que resulta em uma experiência muito semelhante à da pintura convencional.' },
      { t: 'p', texto: 'É necessário manter a atenção durante a diluição da textura. Se você criar “massas” com diferentes consistências, o aspecto da parede pode ficar ruim.' },
      { t: 'p', texto: 'No geral, o restante do processo, como a secagem, é igual em ambas: é preciso aplicar e esperar que sequem naturalmente.' },
    ],
  },
  {
    slug: '7-dicas-para-pintar-as-paredes',
    titulo: 'Confira 7 dicas para pintar as paredes da casa sem erros',
    categoria: 'Dicas',
    data: '2022-07-13',
    dataTexto: '13 de julho de 2022',
    img: '/images/blog-sala-listras.jpg',
    resumo: 'Quer mudar o visual da casa e não sabe como? Que tal trocar a cor das paredes? Você mesmo pode ser o pintor.',
    blocos: [
      { t: 'p', texto: 'Quer mudar o visual da casa e não sabe como? Que tal trocar a cor das paredes? Se estiver disposto e quiser economizar, você mesmo pode ser o pintor. Para não errar, confira sete dicas mencionadas pelo designer de interiores Fábio Galeazzo em seu livro (Editora Alaúde, 64 p.):' },
      { t: 'ol', itens: [
        'A lista de materiais conta com lixa nº 150, lona plástica, fita-crepe, rolo de pintura, caçamba para tinta, tinta, massa corrida, gesso, misturador, trincha e espátula.',
        'Para saber a quantidade de tinta necessária, é preciso calcular o tamanho da área a ser pintada. Meça a parede e multiplique pela altura do pé-direito (altura do chão ao teto). Em seguida, multiplique essa metragem pelo número de demãos (normalmente, duas a três). O resultado da equação determina a metragem total. Algumas latas de tinta indicam a área que aquela quantidade cobre. Os vendedores também podem ajudar a calcular a partir da metragem a ser pintada.',
        'A cor da tinta na parede pode ficar diferente da que consta no catálogo. Antes de comprar uma lata, a dica é adquirir ¼ de galão e testar em uma pequena área.',
        'Forre o piso com a lona, retire os espelhos dos interruptores, cubra os móveis e proteja com fita-crepe as maçanetas, os rodapés e os batentes. Passe a massa corrida sobre a fita-crepe para impedir que a tinta penetre e use uma espátula para remover o excesso.',
        'Tampe os buracos superficiais da parede com massa corrida, usando uma espátula, e tampe os orifícios mais profundos com gesso. Deixe secar por 20 minutos e passe a lixa nº 150.',
        'Mexa a tinta com a trincha e pinte com cuidado uma faixa horizontal rente ao teto. Com um rolo, dê cor ao restante da parede, seguindo sempre a posição vertical. Espere que a tinta seque totalmente antes de passar a próxima camada.',
        'Se quiser que a parede tenha faixas coloridas, trace-as com fita-crepe. Escolha uma cor para ser a predominante e alterne com tonalidades harmônicas ou branco. Comece cobrindo com tinta uma parte sim e outra não. Espere secar totalmente e retire a fita. Com uma nova tira adesiva, cubra delicadamente a borda já pintada. Pinte os espaços restantes. Um pincel fininho dá o acabamento entre as cores.',
      ] },
    ],
  },
  {
    slug: 'dicas-de-pintura-e-combinacoes-de-cores',
    titulo: 'Dicas de pintura e combinações de cores',
    categoria: 'Dicas',
    data: '2022-07-11',
    dataTexto: '11 de julho de 2022',
    img: '/images/blog-sofa-laranja.jpg',
    resumo: 'Selecionamos as principais dúvidas sobre cores e ambientes, como: devo pintar a casa toda com a mesma cor?',
    blocos: [
      { t: 'p', texto: 'Selecionamos as principais dúvidas para esclarecê-las.' },
      { t: 'img', src: img('sala-colorida'), alt: 'Sala com paredes e teto em cores diferentes', larg: 760 },

      { t: 'h3', texto: 'Devo pintar a casa toda com a mesma cor?' },
      { t: 'p', texto: 'Você não precisa pintar todos os cômodos da casa com a mesma cor, a não ser que esta seja a sua escolha. Cada ambiente pode ser decorado com tonalidades diferentes.' },

      { t: 'h3', texto: 'A cor da fachada deve combinar com a cor de dentro da casa?' },
      { t: 'p', texto: 'Não. A cor da fachada deve combinar com o estilo da casa, com a cor dos portões, portas, janelas etc. Para os ambientes internos, o tom das paredes deve harmonizar com os móveis e elementos decorativos.' },
      { t: 'p', texto: 'Se você quer ter uma ideia de como as cores ficariam na fachada ou em outros cômodos da casa, pode usar o Coral Visualizer, um aplicativo para smartphones e tablets que usa realidade aumentada para mostrar como ficará a pintura nos ambientes.' },

      { t: 'h3', texto: 'Posso usar duas ou mais cores em um ambiente?' },
      { t: 'p', texto: 'Sim. Você pode destacar uma das paredes com uma cor mais escura e pintar as demais com outras tonalidades.' },
    ],
  },
];

export const postPorSlug = (slug: string | null | undefined) => POSTS.find((p) => p.slug === slug);
