import { Component } from '@angular/core';
import { waLink } from '../../data/company';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-materia-prima',
  imports: [Reveal],
  template: `
    <section class="relative isolate overflow-hidden bg-brand-navy text-white">
      <img src="/images/banner-catalogo.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
      <div class="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p class="eyebrow">Direto do fabricante</p>
        <h1 class="mt-3 font-heading text-5xl uppercase md:text-6xl">Matéria-prima</h1>
        <p class="mt-4 max-w-xl text-lg text-white/85">Dolomita, calcita, resinas e aditivos para fabricar a sua própria massa, textura ou grafiato.</p>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div class="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
        <div appReveal>
          <p class="eyebrow">Cargas minerais</p>
          <h2 class="section-title mt-3">Dolomita ou calcita <span class="text-brand-blue">malhas 10, 40 e 325</span></h2>
          <ul class="mt-6 space-y-3 text-gray-700">
            <li class="flex gap-3"><span class="text-brand-orange" aria-hidden="true">✓</span>Embalagens com 50 kg.</li>
            <li class="flex gap-3"><span class="text-brand-orange" aria-hidden="true">✓</span><strong class="text-brand-navy">Vendas também em pequenas quantidades:</strong> a partir de 1 saco de 50 kg.</li>
          </ul>
          <a [href]="wa('dolomita ou calcita')" target="_blank" rel="noopener noreferrer" class="btn btn-orange mt-8">Pedir orçamento</a>
        </div>
        <img appReveal="0.2" src="/images/materia-prima/dolomita.jpg" alt="Sacos de dolomita de 50 kg empilhados em paletes" width="300" height="230" class="w-full max-w-xs justify-self-center shadow-lg" loading="lazy" />
      </div>
    </section>

    <section class="bg-grey-light">
      <div class="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div class="grid items-start gap-10 md:grid-cols-[1.4fr_1fr]">
          <div appReveal>
            <p class="eyebrow">Resinas e aditivos</p>
            <h2 class="section-title mt-3">Tudo para <span class="text-brand-blue">fabricar a sua massa</span></h2>
            <p class="mt-6 text-gray-700"><strong class="text-brand-navy">Todos os materiais abaixo podem ser comprados a partir de 1 quilo ou em barricas de 50 quilos.</strong></p>

            <ul class="mt-4 space-y-3 text-gray-700">
              <li class="flex gap-3"><span class="text-brand-orange" aria-hidden="true">✓</span>Resina acrílica com 50% de sólidos.</li>
              <li class="flex gap-3"><span class="text-brand-orange" aria-hidden="true">✓</span>Resina gel pronta para fabricar texturas ou grafiato.</li>
            </ul>

            <div class="mt-8 border-l-4 border-brand-orange bg-white p-6">
              <h3 class="font-heading text-xl uppercase text-brand-navy">Resina gel: só adicionar água e as malhas</h3>
              <p class="mt-2 leading-relaxed text-gray-700">Com essa resina, basta colocar água e as malhas e a sua textura ou grafiato já estará pronto. Não há necessidade de acrescentar mais nada.</p>
              <p class="mt-4 text-sm font-bold uppercase tracking-widest text-brand-blue">O gel é uma resina preparada que contém</p>
              <ul class="mt-3 grid gap-x-6 gap-y-2 text-gray-700 sm:grid-cols-2">
                @for (i of composicao; track i) {
                  <li class="flex gap-3"><span class="text-brand-orange" aria-hidden="true">✓</span>{{ i }}</li>
                }
              </ul>
              <p class="mt-4 text-gray-700">Ou seja, todo o material necessário para a fabricação da sua massa. Você pode comprar também todo esse material a partir de 1 quilo.</p>
            </div>

            <a [href]="wa('resinas e aditivos')" target="_blank" rel="noopener noreferrer" class="btn btn-orange mt-8">Pedir orçamento</a>
          </div>
          <img appReveal="0.2" src="/images/materia-prima/resinas.jpg" alt="Barricas de 50 kg de resinas e aditivos" width="240" height="186" class="w-full max-w-xs justify-self-center shadow-lg" loading="lazy" />
        </div>
      </div>
    </section>

    <section class="bg-brand-blue text-white">
      <div class="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-14 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 class="font-heading text-3xl uppercase">Precisa de ajuda para escolher?</h2>
          <p class="mt-2 text-white/85">Fale com o nosso atendimento consultivo e peça seu orçamento.</p>
        </div>
        <a [href]="wa('matéria-prima')" target="_blank" rel="noopener noreferrer" class="btn btn-orange shrink-0">Falar no WhatsApp</a>
      </div>
    </section>
  `,
})
export class MateriaPrima {
  wa = (item: string) => waLink(`Olá! Gostaria de um orçamento de matéria-prima: ${item}.`);
  composicao = [
    'Resina com 50% de sólidos', 'Emulsão de parafina (hidrorrepelente)', 'Espessante', 'Plastificante',
    'Biocida', 'Bactericida', 'Dispersante', 'Regulador de pH',
  ];
}
