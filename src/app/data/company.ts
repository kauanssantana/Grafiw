export const COMPANY = {
  name: 'Grafiw Tintas e Texturas',
  founded: 1997,
  // ⚠️ CONFIRMAR: o site atual mostra (11) 98659-9772, o briefing diz 98659-4772.
  whatsapp: '5511986599772',
  whatsappLabel: '(11) 98659-9772',
  phone: '(11) 2749-6257',
  phoneHref: 'tel:+551127496257',
  email: 'contato@grafiw.com.br',
  // ⚠️ CONFIRMAR: o site atual mostra "1502 - Parque do Carmo", o briefing diz 1512 / Itaquera.
  addressLines: ['Av. Afonso de Sampaio e Sousa, 1512', 'Itaquera, São Paulo - SP', 'CEP 08275-025'],
  mapQuery: 'Av. Afonso de Sampaio e Sousa, 1512, Itaquera, São Paulo - SP, 08275-025',
  rating: '4,5',
  reviews: 296,
  // TikTok ainda sem link: quando tiver, adicione aqui { name: 'TikTok', url: '...' }
  social: [
    { name: 'Facebook', url: 'https://www.facebook.com/texturagrafiwgps/' },
    { name: 'Instagram', url: 'https://www.instagram.com/grafiwtexturas/' },
    { name: 'YouTube', url: 'https://www.youtube.com/channel/UCt3Vez_0q3YXNCaIkQhPYew' },
  ],
};

export const waLink = (msg = 'Olá! Vim pelo site da Grafiw e gostaria de um orçamento.') =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`;

const slug = (s: string) =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const sub = (base: string, labels: string[]) => labels.map((label) => ({ label, link: `${base}/${slug(label)}` }));

export interface NavLink { label: string; link: string; query?: Record<string, string> }
export interface NavItem { label: string; link?: string; query?: Record<string, string>; children?: NavLink[] }

export const NAV: NavItem[] = [
  { label: 'Produtos', link: '/produtos', children: sub('/produtos', ['Grafiato', 'Textura', 'Textura Designer', 'Textura Projetada', 'Cristaline Arenato', 'Tinta Látex Acrílico Grafiw', 'Massa Corrida', 'Cola Bloco']) },
  {
    label: 'Linha Premium', link: '/produtos', query: { filtro: 'premium' },
    children: [
      { label: 'Canue Aveludado Fosco', link: '/linha-premium/canue-aveludado-fosco' },
      { label: 'Canue Metálico', link: '/linha-premium/canue-metalico' },
    ],
  },
  { label: 'Catálogo de Cores', link: '/catalogo-de-cores' },
  { label: 'Matéria-Prima', link: '/materia-prima' },
  { label: 'Contato', link: '/contato' },
  { label: 'Blog', link: '/blog' },
];
