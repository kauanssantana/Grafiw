import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { EmBreve } from './pages/em-breve';

export const routes: Routes = [
  { path: '', component: Home, title: 'Grafiw Tintas e Texturas | Fábrica de tintas e texturas em São Paulo' },
  // Páginas ainda não criadas (produtos, catálogo, blog...) caem aqui. Vamos substituí-las uma a uma.
  { path: '**', component: EmBreve, title: 'Em breve | Grafiw' },
];
