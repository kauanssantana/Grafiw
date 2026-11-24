import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { waLink } from '../../data/company';

interface Effect { img: string; color: string; name: string }

@Component({
  selector: 'app-premium',
  imports: [RouterLink],
  template: `
    <section class="relative overflow-hidden px-6 py-24 text-white transition-colors duration-700 md:py-32"
      [style.background-color]="active()?.color ?? '#0e2748'">
      <div class="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        [style.background-image]="active() ? 'url(' + active()!.img + ')' : 'none'"
        [style.opacity]="active() ? 0.35 : 0"></div>

      <div class="relative mx-auto max-w-6xl text-center">
        <p class="eyebrow mb-6">Linha premium Canue</p>
        <p class="font-heading text-4xl uppercase leading-[1.5] md:text-6xl md:leading-[1.6] lg:text-7xl">
          Descubra o efeito
          <span class="chip" [style.background-image]="'url(' + effects[0].img + ')'" (mouseenter)="active.set(effects[0])" (mouseleave)="active.set(null)"></span>
          cimento queimado, <br />
          <span class="chip" [style.background-image]="'url(' + effects[1].img + ')'" (mouseenter)="active.set(effects[1])" (mouseleave)="active.set(null)"></span>
          aveludado e
          <span class="chip" [style.background-image]="'url(' + effects[2].img + ')'" (mouseenter)="active.set(effects[2])" (mouseleave)="active.set(null)"></span>
          metálico perolizado.
        </p>
        <p class="mt-8 h-6 font-heading uppercase tracking-widest text-white/80">{{ active()?.name }}</p>
        <div class="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a routerLink="/produtos" [queryParams]="{ filtro: 'premium' }" class="btn btn-orange">Conheça a linha Canue</a>
          <a [href]="wa" target="_blank" rel="noopener noreferrer" class="btn border border-white text-white hover:bg-white hover:text-brand-navy">Pedir orçamento</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .chip { display: inline-block; width: 1.8em; height: .8em; margin: 0 .15em; vertical-align: middle; border-radius: 9999px; background-size: cover; background-position: center; transition: transform .3s; cursor: pointer; }
    .chip:hover { transform: scale(1.15); }
  `,
})
export class Premium {
  wa = waLink('Olá! Quero saber mais sobre a linha premium Canue.');
  active = signal<Effect | null>(null);
  effects: Effect[] = [
    { img: '/images/canue-morango-refrescante.jpg', color: '#6b4457', name: 'Canue Morango Refrescante' },
    { img: '/images/canue-azul-barim.jpg', color: '#1d3a4b', name: 'Canue Azul Barim Fosco Aveludado' },
    { img: '/images/canue-verde-manguezal.jpg', color: '#4b4c2a', name: 'Canue Verde Manguezal' },
  ];
}
