import { Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Header } from './layout/header';
import { Footer } from './layout/footer';
import { FloatingButtons } from './layout/floating-buttons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, FloatingButtons],
  template: `
    <app-header />
    <main><router-outlet /></main>
    <app-footer />
    <app-floating-buttons />
  `,
})
export class App {
  constructor() {
    // Ao trocar de página, volta para o topo (trocar só o filtro da lista não rola)
    const scroller = inject(ViewportScroller);
    let ultima = '';
    inject(Router).events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        const caminho = e.urlAfterRedirects.split(/[?#]/)[0];
        if (caminho !== ultima) { scroller.scrollToPosition([0, 0]); ultima = caminho; }
      });
  }
}
