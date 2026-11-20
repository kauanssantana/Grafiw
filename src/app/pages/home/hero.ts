import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY, waLink } from '../../data/company';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  template: `
    <section class="relative flex min-h-[85vh] flex-col overflow-hidden bg-grey-light lg:flex-row">
      <div class="z-10 flex w-full flex-col items-start justify-center px-8 pb-16 pt-16 lg:w-1/2 lg:px-16 lg:py-28 xl:px-24">
        <h1 class="font-heading text-5xl uppercase leading-[1.1] text-brand-navy lg:text-6xl xl:text-7xl">
          Textura e cor <br /> para a sua obra <br />
          <span class="text-brand-blue">direto da fábrica</span>
        </h1>
        <p class="mb-10 mt-6 max-w-md text-lg leading-relaxed text-gray-600">
          Fabricação própria desde {{ c.founded }}: tintas, texturas, grafiato e revestimentos com preço justo e qualidade total, para pequenas e grandes obras.
        </p>
        <div class="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <a [href]="wa" target="_blank" rel="noopener noreferrer" class="btn btn-orange">Orçamento no WhatsApp</a>
          <a routerLink="/catalogo-de-cores" class="btn btn-outline">Catálogo de cores</a>
        </div>
      </div>

      <div class="relative min-h-[50vh] w-full flex-grow lg:w-1/2">
        <img src="/images/fachada-grafiw.jpg" alt="Fachada da Grafiw com parede de amostras de texturas coloridas" class="absolute inset-0 h-full w-full object-cover object-[4%_center]" fetchpriority="high" />
        <div class="absolute bottom-6 left-6 bg-white px-5 py-3 shadow-lg">
          <p class="font-heading text-2xl text-brand-navy">★ {{ c.rating }} <span class="text-sm text-gray-500">no Google</span></p>
          <p class="text-xs text-gray-500">{{ c.reviews }} avaliações de clientes</p>
        </div>
      </div>
    </section>

    <section class="bg-brand-navy text-white">
      <div class="mx-auto grid max-w-7xl gap-px px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        @for (h of highlights; track h.title) {
          <div class="px-4 py-3">
            <p class="font-heading text-lg uppercase tracking-wider text-brand-orange">{{ h.title }}</p>
            <p class="mt-1 text-sm text-white/80">{{ h.text }}</p>
          </div>
        }
      </div>
    </section>
  `,
})
export class Hero {
  c = COMPANY;
  wa = waLink();
  highlights = [
    { title: 'Fabricação própria', text: 'Qualidade total do processo à entrega, desde 1997.' },
    { title: 'Ampla gama de cores', text: 'Texturas, grafiato e acabamentos para todo estilo de obra.' },
    { title: 'Atendimento consultivo', text: 'Nossa equipe tira suas dúvidas e indica o produto certo.' },
    { title: 'Entrega pontual', text: 'São Paulo e Grande SP. Outras cidades: consulte o frete.' },
  ];
}
