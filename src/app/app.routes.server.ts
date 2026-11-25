import { RenderMode, ServerRoute } from '@angular/ssr';
import { PRODUTOS } from './data/produtos';
import { LINHAS_PREMIUM } from './data/linha-premium';
import { POSTS } from './data/blog';

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
  {
    path: 'linha-premium/:slug/:cor',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => LINHAS_PREMIUM.flatMap((l) => l.cores.map((c) => ({ slug: l.slug, cor: c.slug }))),
  },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => POSTS.map((p) => ({ slug: p.slug })),
  },
  { path: '**', renderMode: RenderMode.Prerender },
];
