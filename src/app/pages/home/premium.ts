import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { waLink } from '../../data/company';

interface Effect { img: string; color: string }

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
        <div class="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a routerLink="/linha-premium/canue-fosco-e-aveludado" class="btn btn-orange">Conheça a linha Canue</a>
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
    { img: '/images/canue-fosco.jpg', color: '#6f6f6b' },
    { img: '/images/canue-verde.jpg', color: '#4f5d4a' },
    { img: '/images/canue-metalico-acai.jpg', color: '#5a2a5e' },
  ];
}
