import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Catalogo } from './pages/catalogo/catalogo';
import { ProdutoPage } from './pages/produto/produto';
import { ProdutosPage } from './pages/produtos/produtos';
import { LinhaPremiumPage } from './pages/linha-premium/linha-premium';
import { CorPremiumPage } from './pages/linha-premium/cor-premium';
import { MateriaPrima } from './pages/materia-prima/materia-prima';
import { Blog } from './pages/blog/blog';
import { PostPage } from './pages/blog/post';
import { Contato } from './pages/contato/contato';
import { Legal } from './pages/legal/legal';
import { EmBreve } from './pages/em-breve';

export const routes: Routes = [
  { path: '', component: Home, title: 'Grafiw Tintas e Texturas | Fábrica de tintas e texturas em São Paulo' },
  { path: 'produtos', component: ProdutosPage, title: 'Produtos | Grafiw Tintas e Texturas' },
  { path: 'produtos/:slug', component: ProdutoPage },
  { path: 'linha-premium/:slug', component: LinhaPremiumPage },
  { path: 'linha-premium/:slug/:cor', component: CorPremiumPage },
  { path: 'catalogo-de-cores', component: Catalogo, title: 'Catálogo de cores | Grafiw Tintas e Texturas' },
  { path: 'materia-prima', component: MateriaPrima, title: 'Matéria-prima | Grafiw Tintas e Texturas' },
  { path: 'blog', component: Blog, title: 'Blog | Grafiw Tintas e Texturas' },
  { path: 'blog/:slug', component: PostPage },
  { path: 'contato', component: Contato, title: 'Contato | Grafiw Tintas e Texturas' },
  { path: 'politica-de-privacidade', component: Legal, data: { doc: 'politica-de-privacidade' }, title: 'Política de Privacidade | Grafiw' },
  { path: 'termos-e-condicoes', component: Legal, data: { doc: 'termos-e-condicoes' }, title: 'Termos e Condições | Grafiw' },
  { path: '**', component: EmBreve, title: 'Página não encontrada | Grafiw' },
];
