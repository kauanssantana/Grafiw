export interface Secao { titulo: string; texto?: string[]; itens?: string[]; passos?: string[] }
export interface Video { titulo: string; canal: string; id?: string; nota?: string }
export interface Produto {
  slug: string;
  categoria: 'texturas' | 'tintas';
  nome: string;
  resumo: string;
  intro: string[];
  fatos: { rotulo: string; valor: string }[];
  secoes: Secao[];
  imagens: { src: string; alt: string; legenda?: string }[];
  video?: Video;
  /** Preço de referência (vem do briefing). Pode mudar: confirmar no WhatsApp. */
  preco?: string;
}

const img = (n: string) => `/images/produtos/${n}.jpg`;

// Vídeos: o "id" é o código depois de v= no link do YouTube. Sem id, a página mostra um botão que abre a busca do vídeo.
export const PRODUTOS: Produto[] = [
  {
    slug: 'grafiato',
    categoria: 'texturas',
    nome: 'Grafiato',
    resumo: 'Revestimento acrílico com efeito de ranhuras, de fabricação própria. Malhas 10 e 14.',
    intro: [
      'Revestimento à base de polímeros acrílicos, dolomitas, calcitas e outros minerais que, depois de aplicado, apresenta aspecto de ranhuras. Possui ótima resistência às intempéries e aderência sobre a superfície, além de ação anti-umidade, antimofo e proteção contra raios UV.',
      'Não retém pó e é lavável: a formulação contém óxido, corantes industriais e hidro-repelentes que garantem maior durabilidade.',
    ],
    fatos: [
      { rotulo: 'Malha 10 (riscos maiores)', valor: '3,5 a 4,0 kg por m²' },
      { rotulo: 'Malha 14 (riscos menores)', valor: '3,3 a 3,5 kg por m²' },
      { rotulo: 'Demãos', valor: 'Apenas 1 demão' },
      { rotulo: 'Secagem', valor: 'Ao toque: 4 h · Completa: 24 h · Cura total: 15 dias' },
    ],
    secoes: [
      { titulo: 'Aplicação', texto: ['Use desempenadeira de aço para aplicar o produto e, para obter os riscos uniformes, a desempenadeira de PVC. Pode ser aplicado em ambientes internos e externos.'] },
      { titulo: 'Características', itens: [
        'Duas opções de granulometria: malha 10 (grãos maiores) e malha 14 (grãos menores).',
        'Classificado conforme ABNT NBR 11.702 de 04/1992 – Tipo 4.2.6.',
        'Substitui massa fina, massa corrida e tintas.',
      ] },
    ],
    imagens: [
      { src: img('grafiato-1'), alt: 'Parede com grafiato laranja' },
      { src: img('grafiato-2'), alt: 'Embalagem de grafiato Grafiw' },
    ],
    video: { titulo: 'Aprenda a aplicar grafiato sem segredos', id: 'Wpjx7HrHeAM', canal: 'Revelando Segredos' },
  },
  {
    slug: 'textura',
    categoria: 'texturas',
    nome: 'Textura Lisa',
    resumo: 'Textura acrílica de rolo com aspecto arrepiado, para áreas internas e externas.',
    intro: [
      'Revestimento à base de polímeros acrílicos, dolomita e outros minerais que, depois de aplicado, apresenta aspecto texturizado, arrepiado ou decorativo. Possui ótima resistência às intempéries e aderência sobre a superfície, além de ação anti-umidade, antimofo e proteção contra raios UV.',
      'Não retém pó e é lavável: a formulação contém óxido, corantes industriais e hidro-repelentes que garantem maior durabilidade.',
    ],
    fatos: [
      { rotulo: 'Rendimento', valor: '50 kg: 16 a 25 m² · 25 kg: 8 a 12 m²' },
      { rotulo: 'Secagem', valor: 'Ao toque: 4 h · Completa: 24 h · Cura total: 15 dias' },
      { rotulo: 'Uso', valor: 'Interno e externo' },
      { rotulo: 'Classificação', valor: 'ABNT NBR 11702 de 04/1992 – Tipo 4.5.3' },
    ],
    secoes: [
      { titulo: 'Ferramentas de aplicação', itens: ['Rolo rígido para textura', 'Rolo de lã', 'Rolo de pintura simples', 'Pincel', 'Desempenadeiras (aço e PVC)', 'Espátulas'] },
      { titulo: 'Vantagens', itens: ['Pode ser aplicada externa e internamente.', 'Substitui massa fina, massa corrida e tintas.'] },
    ],
    imagens: [
      { src: img('textura-1'), alt: 'Textura lisa na cor verde-água' },
      { src: img('textura-2'), alt: 'Textura lisa na cor turquesa' },
    ],
    video: { titulo: 'Textura de rolo passo a passo', id: 'UGwZB_CsL9s', canal: 'Revelando Segredos' },
    preco: 'R$ 104,00 (50 kg)',
  },
  {
    slug: 'textura-designer',
    categoria: 'texturas',
    nome: 'Textura Designer',
    resumo: 'Revestimento acrílico para criar efeitos decorativos e personalizar a parede.',
    intro: [
      'Revestimento acrílico com alta resistência às intempéries. Com a Textura Designer fica fácil dar à parede um toque pessoal, com efeito decorativo, sofisticado e moderno.',
      'É possível criar diversos efeitos usando as ferramentas apropriadas, a imaginação e a criatividade, deixando o ambiente ainda mais personalizado. O produto dispensa o uso de massa em superfícies de alvenaria e pode ser aplicado em ambientes internos e externos.',
    ],
    fatos: [
      { rotulo: 'Rendimento', valor: '50 kg: 16 a 25 m² · 25 kg: 8 a 12 m²' },
      { rotulo: 'Secagem', valor: 'Ao toque: 4 h · Completa: 24 h · Cura total: 15 dias' },
      { rotulo: 'Uso', valor: 'Interno e externo' },
      { rotulo: 'Classificação', valor: 'ABNT NBR 11702 de 04/1992 – Tipo 4.5.3' },
    ],
    secoes: [
      { titulo: 'Ferramentas de aplicação', itens: ['Rolo rígido para textura', 'Rolo de lã', 'Rolo de pintura simples', 'Pincel', 'Desempenadeiras', 'Espátulas'] },
      { titulo: 'Vantagens', itens: ['Pode ser usada tanto externa quanto internamente.', 'Substitui massa fina, massa corrida e tintas.'] },
    ],
    imagens: [
      { src: img('designer-1'), alt: 'Textura designer com efeito dourado' },
      { src: img('designer-2'), alt: 'Textura designer com efeito verde' },
    ],
    video: { titulo: 'Textura massa raspada: ensinando passo a passo', id: 'v6veJx_v2TU', canal: 'Revelando Segredos' },
  },
  {
    slug: 'textura-projetada',
    categoria: 'texturas',
    nome: 'Textura Projetada',
    resumo: 'Aplicada com pistola de alta pressão, com ótimo acabamento e alta produtividade.',
    intro: [
      'Revestimento texturizado aplicado com pistolas de alta pressão, que permite efeitos estéticos surpreendentes com alta produtividade. É aplicado em uma ou duas demãos, direto na cor desejada, e está disponível em mais de 1.000 cores.',
      'Indicada para texturizar e criar desenhos decorativos em superfícies internas e externas, com alta resistência a intempéries, excelente acabamento, rápida secagem e alta cobertura.',
    ],
    fatos: [
      { rotulo: 'Rendimento', valor: '50 kg: 26 m² · 25 kg: 12 m²' },
      { rotulo: 'Demãos', valor: 'Uma demão' },
      { rotulo: 'Secagem', valor: 'Ao toque: 4 h · Cura completa: 15 dias' },
      { rotulo: 'Diluição', valor: 'Máximo de 3% de água sobre o peso, se necessário' },
    ],
    secoes: [
      { titulo: 'Composição', texto: ['Resinas acrílicas em emulsão aquosa, pigmentos isentos de metais pesados, cargas inertes e aditivos. Hidrocarbonetos alifáticos e glicóis.'] },
      { titulo: 'Aplicação', passos: [
        'Aplique selador acrílico da mesma cor e aguarde a secagem por 4 horas.',
        'Aplique uma demão desempenada ou projete a textura com pistola de caneco alimentador por gravidade ou com chapiscadeira. Essa primeira demão serve de base.',
        'Depois que secar, aplique a segunda demão com a pistola. Se quiser apenas a textura projetada, ela já estará pronta.',
        'Para o efeito travertino, amasse as pontas com desempenadeira de aço inox ou PVC: projete a textura e, quando ela deixar de grudar ao encostar os dedos, é hora de alisar as pontas.',
      ] },
      { titulo: 'Boas práticas', itens: ['Mantenha a especificação e a diluição corretas; se diluir, use sempre o mesmo percentual.', 'Aplique em lances de aproximadamente 2 m².'] },
      { titulo: 'Superfícies', texto: ['Externas e internas, a partir de emboço curado, massa fina, repintura, bloco estrutural e massa corrida.'] },
      { titulo: 'Substitui', texto: ['Massa fina, massa corrida e tintas.'] },
    ],
    imagens: [
      { src: img('projetada-1'), alt: 'Textura projetada cinza' },
      { src: img('projetada-2'), alt: 'Textura projetada com efeito travertino' },
    ],
    video: { titulo: 'Como fazer textura projetada', id: 'i42SFwATi_0', canal: 'Grafiw Tintas e Texturas' },
    preco: 'R$ 104,00 (50 kg)',
  },
  {
    slug: 'cristaline-arenato',
    categoria: 'texturas',
    nome: 'Cristaline Arenato',
    resumo: 'Textura acrílica hidro-repelente, resistente e durável, para fachadas e ambientes internos.',
    intro: [
      'Textura decorativa acrílica hidro-repelente, com alta resistência e durabilidade, perfeita para fachadas e ambientes internos. De fácil aplicação, pode ser usada interna e externamente.',
    ],
    fatos: [
      { rotulo: 'Consumo', valor: '3 a 4 kg por m²' },
      { rotulo: 'Embalagens', valor: 'Barricas de 25 kg e 50 kg' },
      { rotulo: 'Secagem', valor: 'Ao toque: 4 h · Entre demãos: mínimo de 24 h' },
      { rotulo: 'Cura total', valor: '15 a 25 dias, conforme tempo, temperatura e umidade do ar' },
    ],
    secoes: [
      { titulo: 'Aplicação', passos: [
        'Aplique selador acrílico da mesma cor e aguarde a secagem por no mínimo 4 horas.',
        'Depois que o selador secar, aplique uma demão desempenada cobrindo toda a superfície. Nessa primeira demão não precisa se preocupar com o acabamento, mas aplique de forma generosa, para que o fundo não apareça mais.',
        'Aguarde no mínimo 24 horas para aplicar a segunda demão.',
        'Aplique a segunda demão com desempenadeira de aço e, em seguida, use a desempenadeira de PVC em movimentos circulares para dar o acabamento.',
      ] },
      { titulo: 'Boas práticas', itens: ['Mantenha a especificação e a diluição corretas.', 'Aplique em lances de aproximadamente 2 m².'] },
    ],
    imagens: [{ src: img('cristaline-1'), alt: 'Textura Cristaline Arenato' }],
    video: {
      titulo: 'Como fazer textura Cristaline ou Arenato', id: 'GwjzDmtVCho', canal: 'Revelando Segredos',
      nota: 'Vídeo ilustrativo. Para um bom acabamento são necessárias 2 demãos: uma demão desempenada e a segunda de acabamento.',
    },
    preco: 'R$ 116,00',
  },
  {
    slug: 'tinta-latex-acrilico-grafiw',
    categoria: 'tintas',
    nome: 'Tinta Látex Acrílico Grafiw',
    resumo: 'Tinta acrílica fosca com ótima cobertura e excelente rendimento. Várias cores.',
    intro: [
      'Ótima cobertura e excelente rendimento. O Látex Acrílico Grafiw é uma tinta acrílica de acabamento fosco com alto poder de cobertura, ótimo alastramento e baixo respingamento durante a aplicação, proporcionando requinte e sofisticação aos ambientes.',
      'Indicada para pintura de alvenaria em áreas externas e internas de massa corrida ou acrílica, fibrocimento, texturas, reboco, concreto, cerâmica não vitrificada e repinturas sobre tinta látex e/ou acrílica.',
    ],
    fatos: [
      { rotulo: 'Acabamento', valor: 'Fosco' },
      { rotulo: 'Embalagem', valor: '18 litros' },
      { rotulo: 'Secagem', valor: 'Ao toque: 4 h · Cura completa: 15 dias' },
      { rotulo: 'Cores', valor: 'Várias cores, com pronta entrega e entrega a domicílio' },
    ],
    secoes: [
      { titulo: 'Composição', texto: ['Resina à base de dispersão aquosa de copolímero estireno acrílico, pigmentos isentos de metais pesados, cargas minerais inertes, glicóis e tensoativos.'] },
      { titulo: 'Normas', itens: ['Classificado conforme a norma NBR 11702, tipo 4.2.7.', 'Em conformidade com a norma NBR 15079 da ABNT.'] },
    ],
    imagens: [
      { src: img('latex-1'), alt: 'Latas de tinta e pincéis' },
      { src: img('latex-2'), alt: 'Latas de tinta Grafiw empilhadas' },
    ],
    preco: 'R$ 198,00 (18 L)',
  },
  {
    slug: 'massa-corrida',
    categoria: 'tintas',
    nome: 'Massa Corrida',
    resumo: 'Massa corrida PVA (uso interno) e acrílica (uso interno e externo), pronta para uso.',
    intro: [
      'Disponível em duas versões: massa corrida PVA, para uso interno, e massa corrida acrílica, para uso externo e interno. Pronta para uso, em embalagens de 25 kg e 50 kg.',
    ],
    fatos: [
      { rotulo: 'Rendimento', valor: 'Em média 500 g por m² por demão' },
      { rotulo: 'Embalagens', valor: '25 kg e 50 kg' },
      { rotulo: 'Demãos', valor: '2 a 3, com intervalo mínimo de 1 hora' },
      { rotulo: 'Secagem', valor: 'Ao toque: 40 minutos · Final: 2 horas' },
    ],
    secoes: [
      { titulo: 'Aplicação', itens: [
        'Ferramentas: desempenadeiras de aço e espátulas de aço.',
        'Superfície: reboco (superfícies não seladas).',
        'Aplique camadas finas até obter o nivelamento.',
        'Lixe logo após a secagem entre demãos (cerca de 1 hora).',
        'Nunca use o produto com água nem aplique com rolo como fundo para pintura.',
      ] },
      { titulo: 'Composição', texto: ['Resina à base de dispersão aquosa de polímeros estireno acrílico, cargas minerais inertes, hidrocarbonetos alifáticos e aditivos.'] },
      { titulo: 'Importante', texto: ['Para obter o máximo de qualidade dos produtos Grafiw, é necessário um bom preparo da superfície a ser aplicada.'] },
    ],
    imagens: [
      { src: img('massa-1'), alt: 'Aplicação de massa corrida com espátula' },
      { src: img('massa-2'), alt: 'Pessoa preparando uma parede para pintura' },
    ],
  },
  {
    slug: 'cola-bloco',
    categoria: 'tintas',
    nome: 'Cola Bloco',
    resumo: 'Alternativa à argamassa para assentar blocos: economia de 30% a 50% e aplicação até 3 vezes mais rápida.',
    intro: ['O Cola Bloco Grafiw é uma alternativa à argamassa comum para assentar blocos, com mais economia, rapidez e segurança.'],
    fatos: [
      { rotulo: 'Economia', valor: '30% a 50%' },
      { rotulo: 'Rendimento', valor: 'Um saco de 25 kg assenta 17 m² de parede' },
      { rotulo: 'Velocidade', valor: 'Aplicação até 3 vezes maior' },
      { rotulo: 'Preparo', valor: 'Pronto para usar' },
    ],
    secoes: [
      { titulo: 'Economia de 30% a 50%', itens: [
        'Alto rendimento: um saco de 25 kg assenta 17 m² de parede.',
        'Não gera desperdício: sem perdas, diminui o entulho e mantém a obra limpa.',
        'Economiza em outros materiais: permite reboco mais fino e ancoragem sem usar telas, pinos ou grampos.',
      ] },
      { titulo: 'Velocidade de aplicação até 3 vezes maior', itens: [
        'Pronto para usar: não requer água, areia, cal ou betoneira.',
        'Fácil de aplicar: não exige conhecimento técnico e pode ser aplicado pelo auxiliar de pedreiro.',
        'Fácil logística: simples de armazenar e transportar dentro da obra, e pode ficar no próprio local da aplicação.',
      ] },
      { titulo: 'Segurança comprovada', itens: [
        'Atende às normas de mercado: produto ensaiado conforme normas NBR/ABNT.',
        'Formulação exclusiva e comprovada: rigorosos ensaios em câmaras climáticas e de envelhecimento acelerado.',
        'Controle de qualidade interno e externo: mais de 15 anos de experiência e várias certificações de qualidade.',
      ] },
    ],
    imagens: [
      { src: img('colabloco-1'), alt: 'Parede feita com argamassa comum', legenda: 'Parede feita com argamassa comum' },
      { src: img('colabloco-2'), alt: 'Parede feita com Cola Bloco Grafiw', legenda: 'Parede feita com Cola Bloco Grafiw' },
    ],
    video: { titulo: 'Cola Bloco: como assentar blocos de forma fácil e rápida', id: 'gRwZxLKxlSw', canal: 'Grafiw Tintas e Texturas' },
  },
];

export const produtoPorSlug = (slug: string | null | undefined) => PRODUTOS.find((p) => p.slug === slug);
