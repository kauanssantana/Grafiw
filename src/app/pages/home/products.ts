import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { waLink } from '../../data/company';
import { Reveal } from '../../shared/reveal';

interface Product { name: string; desc: string; img: string; link: string; query?: Record<string, string>; price?: string; priceNote?: string }

@Component({
  selector: 'app-products',
  imports: [RouterLink, Reveal],
  template: `
    <section id="produtos" class="bg-grey-light">
      <div class="section-pad">
        <div appReveal class="mb-14 text-center">
          <p class="eyebrow">Em destaque</p>
          <h2 class="section-title mt-3">Nossos <span class="text-brand-blue">produtos</span></h2>
          <p class="mx-auto mt-4 max-w-xl text-gray-600">Tudo para sua obra ou reforma, direto do fabricante.</p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          @for (p of products; track p.name; let i = $index) {
            <article [appReveal]="(i % 3) * 0.1" class="group flex flex-col bg-white shadow-sm transition hover:shadow-xl">
              <a [routerLink]="p.link" [queryParams]="p.query" class="block aspect-[4/3] overflow-hidden bg-white">
                <img [src]="p.img" [alt]="p.name" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              </a>
              <div class="flex flex-1 flex-col p-6">
                <h3 class="font-heading text-xl uppercase text-brand-navy">{{ p.name }}</h3>
                <p class="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{{ p.desc }}</p>
                @if (p.price) {
                  <p class="mt-4 text-sm text-gray-500">{{ p.priceNote }} <strong class="text-base text-brand-navy">{{ p.price }}</strong></p>
                }
                <div class="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                  <a [routerLink]="p.link" [queryParams]="p.query" class="text-xs font-bold uppercase tracking-widest text-brand-blue hover:text-brand-orange">Ver produto →</a>
                  <a [href]="wa(p.name)" target="_blank" rel="noopener noreferrer" class="text-xs font-bold uppercase tracking-widest text-brand-orange hover:text-brand-navy">Orçamento</a>
                </div>
              </div>
            </article>
          }
        </div>

        <div class="mt-10 text-center">
          <a routerLink="/produtos" class="btn btn-navy">Ver todos os produtos</a>
        </div>

        <div appReveal class="mt-16 grid items-center gap-8 bg-brand-navy p-8 text-white md:grid-cols-2 md:p-12">
          <div>
            <h3 class="font-heading text-3xl uppercase">Encontre a cor ideal</h3>
            <p class="mt-3 leading-relaxed text-white/80">Consulte o catálogo de cores e fale com nossa equipe para combinar tom e acabamento com o seu projeto.</p>
            <div class="mt-6 flex flex-col gap-4 sm:flex-row">
              <a routerLink="/catalogo-de-cores" class="btn btn-orange">Ver catálogo de cores</a>
              <a [href]="wa('catálogo de cores')" target="_blank" rel="noopener noreferrer" class="btn border border-white text-white hover:bg-white hover:text-brand-navy">Falar no WhatsApp</a>
            </div>
          </div>
          <div class="grid grid-cols-7 gap-2">
            @for (s of swatches; track s.name) {
              <div class="text-center">
                <div class="h-28 rounded-sm" [style.background-color]="s.hex"></div>
                <p class="mt-2 text-[10px] uppercase tracking-wider text-white/70">{{ s.name }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Products {
  wa = (name: string) => waLink(`Olá! Gostaria de um orçamento: ${name}.`);

  products: Product[] = [
    { name: 'Cristaline Arenato', desc: 'Textura para decoração e proteção, em embalagens de 25 kg e 50 kg.', img: '/images/cristaline.jpg', link: '/produtos/cristaline-arenato', price: 'R$ 116,00', priceNote: 'Ref.' },
    { name: 'Canue Fosco e Aveludado', desc: 'Efeito cimento queimado, em acabamento fosco e aveludado. Linha premium.', img: '/images/canue-fosco.jpg', link: '/produtos', query: { filtro: 'fosco' }, price: 'R$ 120,00', priceNote: 'Ref. 5 kg' },
    { name: 'Canue Metálico Açaí', desc: 'Metálico perolizado para paredes com muito brilho e personalidade.', img: '/images/canue-metalico-acai.jpg', link: '/produtos', query: { filtro: 'metalico' } },
    { name: 'Látex Acrílico Salmon', desc: 'Tinta látex acrílico Grafiw para ambientes internos e externos.', img: '/images/latex-salmon.jpg', link: '/produtos/tinta-latex-acrilico-grafiw', price: 'R$ 198,00', priceNote: 'Ref. 18 L' },
    { name: 'Grafiato', desc: 'Fabricação própria, com ranhuras marcantes. Aplicado com desempenadeira.', img: '/images/grafiato.jpg', link: '/produtos/grafiato' },
    { name: 'Complementos', desc: 'Massa corrida, seladores, cola bloco e tudo para o acabamento da sua pintura.', img: '/images/colabloco.jpg', link: '/produtos/massa-corrida' },
  ];

  swatches = [
    { name: 'Camurça', hex: '#b89b72' }, { name: 'Concreto', hex: '#9a9a96' }, { name: 'Rose Gold', hex: '#c98f84' },
    { name: 'Terracota', hex: '#b4573a' }, { name: 'Tabaco', hex: '#6b4a35' }, { name: 'Açaí', hex: '#5a2a5e' }, { name: 'Grafite', hex: '#3b3d40' },
  ];
}
