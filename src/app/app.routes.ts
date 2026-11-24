import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Catalogo } from './pages/catalogo/catalogo';
import { ProdutoPage } from './pages/produto/produto';
import { ProdutosPage } from './pages/produtos/produtos';
import { EmBreve } from './pages/em-breve';

export const routes: Routes = [
  { path: '', component: Home, title: 'Grafiw Tintas e Texturas | Fábrica de tintas e texturas em São Paulo' },
  { path: 'produtos', component: ProdutosPage, title: 'Produtos | Grafiw Tintas e Texturas' },
  { path: 'produtos/:slug', component: ProdutoPage },
  { path: 'catalogo-de-cores', component: Catalogo, title: 'Catálogo de cores | Grafiw Tintas e Texturas' },
  // Páginas ainda não criadas (produtos, catálogo, blog...) caem aqui. Vamos substituí-las uma a uma.
  { path: '**', component: EmBreve, title: 'Em breve | Grafiw' },
];
