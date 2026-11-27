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
  /** Links para produtos citados no texto (aparecem no fim do post). */
  relacionados?: { texto: string; link: string; query?: Record<string, string> }[];
}

const img = (n: string) => `/images/blog/${n}.jpg`;

const LISTA: Post[] = [
  {
    slug: 'efeito-cimento-queimado-com-canue',
    titulo: 'Efeito cimento queimado na parede: como aplicar a linha Canue',
    categoria: 'Linha Premium',
    data: '2026-11-25',
    dataTexto: '25 de novembro de 2026',
    img: '/images/canue-azul-barim.jpg',
    resumo: 'Conheça as versões Aveludado Fosco e Metálico da linha Canue, veja o passo a passo da aplicação e aprenda a calcular quanto comprar.',
    blocos: [
      { t: 'p', texto: 'O efeito cimento queimado dá personalidade a salas, quartos, banheiros, lavabos, painéis de TV e até escadas. A linha Canue, fabricada pela Grafiw, entrega esse visual em uma massa pronta para usar e de fácil aplicação. Neste post, você vê as versões disponíveis, o passo a passo e como estimar a quantidade que precisa comprar.' },

      { t: 'h2', texto: 'Duas versões: Aveludado Fosco e Metálico' },
      { t: 'p', texto: 'O Canue Aveludado Fosco tem acabamento fosco e aveludado, com o efeito cimento queimado, e vem em balde de 5 kg. O Canue Metálico tem acabamento metálico moderno e refinado e vem em baldes de 1,5 kg e 3 kg.' },
      { t: 'p', texto: 'As duas versões têm em comum:' },
      { t: 'ul', itens: ['Hidrorrepelente.', 'Fácil aplicação.', 'Pronto para uso, sem diluição.', 'Indicadas para ambientes internos e externos.'] },
      { t: 'img', src: '/images/linha-premium/metalico-tabaco.jpg', alt: 'Parede com acabamento Canue Metálico na cor Tabaco', larg: 520 },

      { t: 'h2', texto: 'Cores disponíveis' },
      { t: 'p', texto: 'São 10 cores no Aveludado Fosco (Açaí, Concreto, Cinza, Grafite, Ferrugem, Camurça, Morango Refrescante, Manguezal, Azul Barim e Crômio) e 11 no Metálico (as mesmas, mais Tabaco e Terracota, e sem o Cinza).' },
      { t: 'p', texto: 'Tem tons neutros, como Concreto, Cinza e Grafite, e tons marcantes, como Açaí, Azul Barim e Manguezal. A cor que você vê na tela pode variar um pouco da real: antes de comprar, veja a cor pessoalmente ou teste em uma pequena área.' },
      { t: 'img', src: '/images/canue/fosco-grafite.jpg', alt: 'Banheiro com parede Canue Aveludado Fosco na cor Grafite', larg: 520 },

      { t: 'h2', texto: 'Passo a passo da aplicação' },
      { t: 'ol', itens: [
        'Confira o fundo: a parede deve estar branca ou com tom claro.',
        'Prepare a superfície: a parede deve estar lisa, com massa corrida PVA ou acrílica. Se for repintura sobre tinta semibrilho ou acetinada, lixe com lixa 150 para melhorar a aderência, porque essas tintas são muito impermeáveis e prejudicam a absorção e a secagem.',
        'Misture bem: mexa a massa com uma espátula para homogeneizar. Não precisa diluir.',
        'Aplique a primeira demão com celulóide, espátula ou desempenadeira de aço inox, em movimentos aleatórios, curtos e em sentidos diferentes, sem deixar excesso.',
        'Espere secar e aplique a segunda demão para dar acabamento. Se for necessário, aplique a terceira. O número de demãos pode variar conforme o estado e a cor da superfície.',
        'Respeite os tempos de secagem: 30 minutos ao toque, 1 hora entre demãos e 24 horas para a secagem final.',
      ] },

      { t: 'h2', texto: 'Quanto comprar' },
      { t: 'p', texto: 'O rendimento do Aveludado Fosco é de até 30 m² por demão em cada balde de 5 kg. No Metálico, 1,5 kg rende até 12 m² e 3 kg rende até 24 m², também por demão.' },
      { t: 'p', texto: 'Para estimar, multiplique a área da parede pelo número de demãos e divida pelo rendimento do balde. Exemplo: uma parede de 15 m² com 2 demãos precisa de 30 m² de cobertura, ou seja, cerca de 1 balde de 5 kg do Fosco. Como o rendimento é “até”, o ideal é arredondar para cima e confirmar a quantidade com o nosso atendimento.' },
      { t: 'p', texto: 'Ficou com dúvida sobre cor, quantidade ou aplicação? Fale com a gente pelo WhatsApp: nosso atendimento é consultivo e ajuda você a escolher.' },
    ],
    relacionados: [
      { texto: 'Canue Aveludado Fosco', link: '/linha-premium/canue-aveludado-fosco' },
      { texto: 'Canue Metálico', link: '/linha-premium/canue-metalico' },
      { texto: 'Linha Premium Canue', link: '/produtos', query: { filtro: 'premium' } },
    ],
  },
  {
    slug: 'qual-textura-escolher',
    titulo: 'Qual textura escolher? Grafiato, lisa, projetada, Cristaline ou designer',
    categoria: 'Guia',
    data: '2026-11-20',
    dataTexto: '20 de novembro de 2026',
    img: '/images/fachada-grafiw.jpg',
    resumo: 'Compare grafiato, textura lisa, projetada, Cristaline Arenato e Textura Designer: visual, aplicação e rendimento de cada uma.',
    blocos: [
      { t: 'p', texto: 'Na hora de texturizar uma parede, a dúvida é comum: grafiato, textura lisa, projetada, Cristaline ou designer? Cada acabamento tem um visual, um jeito de aplicar e um rendimento. Este guia resume as diferenças dos produtos que a Grafiw fabrica para ajudar você a decidir.' },

      { t: 'h2', texto: 'Antes de escolher, pense em três pontos' },
      { t: 'ul', itens: [
        'Visual: ranhuras marcadas, relevo arrepiado ou um efeito decorativo?',
        'Ferramenta: desempenadeira, rolo ou pistola?',
        'Tamanho da área: quanto rende o produto e quanto tempo leva a aplicação?',
      ] },

      { t: 'h2', texto: 'Grafiato' },
      { t: 'img', src: '/images/produtos/grafiato-1.jpg', alt: 'Parede com grafiato laranja', larg: 258 },
      { t: 'p', texto: 'Tem aspecto de ranhuras. Existe em duas malhas: a malha 10 deixa riscos maiores e a malha 14, riscos menores.' },
      { t: 'ul', itens: [
        'Aplicação: desempenadeira de aço e, para os riscos uniformes, desempenadeira de PVC. Não dá para aplicar com rolo.',
        'Consumo: 3,5 a 4,0 kg por m² (malha 10) e 3,3 a 3,5 kg por m² (malha 14).',
        'Demãos: apenas uma.',
        'Atenção: não pode ter emendas. Comece e termine a parede sem interrupções.',
      ] },

      { t: 'h2', texto: 'Textura lisa (de rolo)' },
      { t: 'img', src: '/images/produtos/textura-1.jpg', alt: 'Textura lisa na cor verde-água', larg: 200 },
      { t: 'p', texto: 'Tem aspecto texturizado e arrepiado. Como é aplicada com rolo, a experiência é parecida com a da pintura convencional.' },
      { t: 'ul', itens: [
        'Aplicação: rolo rígido para textura, rolo de lã, rolo de pintura simples, pincel, desempenadeiras ou espátulas.',
        'Rendimento: 50 kg rendem de 16 a 25 m² e 25 kg rendem de 8 a 12 m².',
        'Atenção: mantenha a mesma diluição em toda a obra, para a consistência não mudar.',
      ] },

      { t: 'h2', texto: 'Textura projetada' },
      { t: 'img', src: '/images/produtos/projetada-2.jpg', alt: 'Textura projetada com efeito travertino', larg: 259 },
      { t: 'p', texto: 'É aplicada com pistola de alta pressão, o que dá alta produtividade. Está disponível em mais de 1.000 cores e pode ganhar efeito travertino: depois de projetar, amasse as pontas com desempenadeira de aço inox ou de PVC.' },
      { t: 'ul', itens: [
        'Aplicação: pistola com caneco alimentador por gravidade ou chapiscadeira.',
        'Rendimento: 50 kg rendem 26 m² e 25 kg rendem 12 m².',
        'Demãos: uma ou duas.',
      ] },

      { t: 'h2', texto: 'Cristaline Arenato' },
      { t: 'img', src: '/images/produtos/cristaline-1.jpg', alt: 'Textura Cristaline Arenato', larg: 225 },
      { t: 'p', texto: 'Textura decorativa acrílica hidro-repelente, com alta resistência e durabilidade, boa para fachadas e ambientes internos.' },
      { t: 'ul', itens: [
        'Aplicação: selador acrílico da mesma cor, uma demão desempenada generosa, 24 horas de espera e uma segunda demão com desempenadeira de aço, finalizada com a desempenadeira de PVC em movimentos circulares.',
        'Consumo: 3 a 4 kg por m².',
        'Embalagens: barricas de 25 kg e 50 kg.',
      ] },

      { t: 'h2', texto: 'Textura Designer' },
      { t: 'img', src: '/images/produtos/designer-1.jpg', alt: 'Textura Designer com efeito dourado', larg: 162 },
      { t: 'p', texto: 'Revestimento acrílico para criar efeitos decorativos e personalizar a parede. Dá para fazer vários desenhos, com as ferramentas certas e criatividade. Dispensa massa em superfícies de alvenaria.' },
      { t: 'ul', itens: [
        'Aplicação: rolo rígido para textura, rolo de lã, rolo simples, pincel, desempenadeiras ou espátulas.',
        'Rendimento: 50 kg rendem de 16 a 25 m² e 25 kg rendem de 8 a 12 m².',
      ] },

      { t: 'h2', texto: 'Resumo rápido' },
      { t: 'ul', itens: [
        'Quer ranhuras marcadas? Grafiato.',
        'Quer aplicar com rolo, como pintura? Textura lisa.',
        'Tem uma área grande e quer produtividade? Textura projetada.',
        'Quer um relevo arenoso e resistente? Cristaline Arenato.',
        'Quer criar um efeito próprio? Textura Designer.',
      ] },
      { t: 'p', texto: 'Grafiato, textura lisa, projetada e designer substituem massa fina, massa corrida e tintas, e podem ser usados em áreas internas e externas. Para qualquer uma, prepare bem a superfície e siga a diluição indicada.' },

      { t: 'h2', texto: 'Escolha a cor' },
      { t: 'p', texto: 'No nosso catálogo de cores, você encontra mais de 35 cores de textura numeradas e mais cinco opções: Cinza Asfalto, Chumbo, Cinza 1004, Preto e Gelo. As cores variam um pouco conforme a tela e a aplicação, então vale confirmar com o nosso atendimento antes de fechar o pedido.' },
    ],
    relacionados: [
      { texto: 'Grafiato', link: '/produtos/grafiato' },
      { texto: 'Textura Lisa', link: '/produtos/textura' },
      { texto: 'Textura Projetada', link: '/produtos/textura-projetada' },
      { texto: 'Cristaline Arenato', link: '/produtos/cristaline-arenato' },
      { texto: 'Textura Designer', link: '/produtos/textura-designer' },
      { texto: 'Catálogo de cores', link: '/catalogo-de-cores' },
    ],
  },
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

/** Mais recente primeiro. Para publicar um post novo, adicione-o à LISTA acima. */
export const POSTS: Post[] = [...LISTA].sort((a, b) => b.data.localeCompare(a.data));

export const postPorSlug = (slug: string | null | undefined) => POSTS.find((p) => p.slug === slug);
