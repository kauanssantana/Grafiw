import { RenderMode, ServerRoute } from '@angular/ssr';
import { PRODUTOS } from './data/produtos';

export const serverRoutes: ServerRoute[] = [
  // Gera uma página estática para cada produto
  {
    path: 'produtos/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => PRODUTOS.map((p) => ({ slug: p.slug })),
  },
  { path: '**', renderMode: RenderMode.Prerender },
];
