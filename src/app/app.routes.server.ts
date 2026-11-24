import { RenderMode, ServerRoute } from '@angular/ssr';
import { PRODUTOS } from './data/produtos';
import { LINHAS_PREMIUM } from './data/linha-premium';

export const serverRoutes: ServerRoute[] = [
  // Gera uma página estática para cada produto
  {
    path: 'produtos/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => PRODUTOS.map((p) => ({ slug: p.slug })),
  },
  {
    path: 'linha-premium/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => LINHAS_PREMIUM.map((l) => ({ slug: l.slug })),
  },
  { path: '**', renderMode: RenderMode.Prerender },
];
