import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
export class App {}
