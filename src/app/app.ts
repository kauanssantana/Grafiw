import { Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { TopBar } from './layout/top-bar';
import { Header } from './layout/header';
import { Footer } from './layout/footer';
import { FloatingButtons } from './layout/floating-buttons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBar, Header, Footer, FloatingButtons],
  template: `
    <app-top-bar />
    <app-header />
    <main><router-outlet /></main>
    <app-footer />
    <app-floating-buttons />
  `,
})
export class App {
  constructor() {
    // Ao trocar de página, volta para o topo
    const scroller = inject(ViewportScroller);
    inject(Router).events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => scroller.scrollToPosition([0, 0]));
  }
}
