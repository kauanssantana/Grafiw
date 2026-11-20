import { Component, computed, signal } from '@angular/core';
import { waLink } from '../../data/company';
import { TEXTURAS, TEXTURAS_ESCURAS, TINTAS } from '../../data/cores';

const normalize = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

@Component({
  selector: 'app-catalogo',
  template: `
    <section class="relative isolate overflow-hidden bg-brand-navy text-white">
      <img src="/images/banner-catalogo.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
      <div class="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p class="eyebrow">Catálogo</p>
        <h1 class="mt-3 font-heading text-5xl uppercase md:text-6xl">Catálogo de cores</h1>
        <p class="mt-4 max-w-xl text-lg text-white/85">Encontre a cor ideal para a sua obra. Gostou de alguma? Toque nela e peça seu orçamento no WhatsApp.</p>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-6 py-14 md:py-20">
      <div role="tablist" aria-label="Tipo de catálogo" class="mb-10 inline-flex border border-brand-navy">
        <button type="button" role="tab" [attr.aria-selected]="tab() === 'texturas'" (click)="tab.set('texturas')"
          class="px-6 py-3 font-heading text-sm uppercase tracking-widest transition-colors"
          [class]="tab() === 'texturas' ? 'bg-brand-navy text-white' : 'text-brand-navy hover:bg-grey-light'">Texturas</button>
        <button type="button" role="tab" [attr.aria-selected]="tab() === 'tintas'" (click)="tab.set('tintas')"
          class="px-6 py-3 font-heading text-sm uppercase tracking-widest transition-colors"
          [class]="tab() === 'tintas' ? 'bg-brand-navy text-white' : 'text-brand-navy hover:bg-grey-light'">Tintas</button>
      </div>

      @if (tab() === 'texturas') {
        <h2 class="section-title">Cores de <span class="text-brand-blue">texturas</span></h2>
        <div class="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          @for (t of texturas; track $index) {
            <a [href]="wa('Olá! Tenho interesse na textura cor ' + t.label + '.')" target="_blank" rel="noopener noreferrer"
              class="group block bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <img [src]="t.img" [alt]="'Textura cor ' + t.label" class="aspect-[3/4] w-full object-cover" loading="lazy" />
              <p class="px-2 py-2 text-center font-heading text-sm uppercase tracking-wider text-brand-navy group-hover:text-brand-orange">{{ t.label }}</p>
            </a>
          }
        </div>
        <p class="mt-10 max-w-3xl text-xs leading-relaxed text-gray-500">
          <strong>Informação legal:</strong> as cores deste catálogo apresentam variações de brilho e tonalidade, decorrentes das variações de exibição dos meios de hardware e dos ajustes de visualização do seu aparelho.
        </p>
      } @else {
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 class="section-title">Cores de <span class="text-brand-blue">tintas</span></h2>
          <label class="block w-full md:max-w-xs">
            <span class="sr-only">Buscar cor por nome ou código</span>
            <input type="search" placeholder="Buscar por nome ou código" [value]="q()" (input)="onSearch($event)"
              class="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-brand-blue" />
          </label>
        </div>
        <p class="mt-3 text-sm text-gray-500">{{ tintas().length }} {{ tintas().length === 1 ? 'cor' : 'cores' }}</p>

        <div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          @for (c of tintas(); track c.code) {
            <a [href]="wa('Olá! Tenho interesse na tinta ' + c.name + ' (' + c.code + ').')" target="_blank" rel="noopener noreferrer"
              class="group block bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div class="h-24 border-b border-gray-100" [style.background-color]="c.hex"></div>
              <div class="px-3 py-3">
                <p class="font-heading text-sm uppercase tracking-wide text-brand-navy group-hover:text-brand-orange">{{ c.name }}</p>
                <p class="text-xs text-gray-500">{{ c.code }}</p>
              </div>
            </a>
          } @empty {
            <p class="col-span-full py-10 text-gray-600">Nenhuma cor encontrada para “{{ q() }}”. Tente outro nome ou código.</p>
          }
        </div>
        <p class="mt-10 max-w-3xl text-xs leading-relaxed text-gray-500">
          <strong>Informação legal:</strong> as amostras são aproximadas da cor real da tinta. As cores são apenas uma referência e podem variar conforme a tela do seu aparelho, a superfície e a forma de aplicação.
        </p>
      }
    </section>

    <section class="bg-grey-light">
      <div class="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-14 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 class="font-heading text-3xl uppercase text-brand-navy">Precisa de ajuda para escolher?</h2>
          <p class="mt-2 text-gray-600">Nosso atendimento consultivo ajuda você a combinar cor, textura e acabamento.</p>
        </div>
        <a [href]="wa()" target="_blank" rel="noopener noreferrer" class="btn btn-orange shrink-0">Falar no WhatsApp</a>
      </div>
    </section>
  `,
})
export class Catalogo {
  wa = (msg?: string) => waLink(msg);
  tab = signal<'texturas' | 'tintas'>('texturas');
  q = signal('');
  texturas = [...TEXTURAS, ...TEXTURAS_ESCURAS];
  tintas = computed(() => {
    const t = normalize(this.q().trim());
    return t ? TINTAS.filter((c) => normalize(`${c.name} ${c.code}`).includes(t)) : TINTAS;
  });

  onSearch(e: Event) { this.q.set((e.target as HTMLInputElement).value); }
}
