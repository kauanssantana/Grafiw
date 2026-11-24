import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { waLink } from '../../data/company';
import { CANUE, LINHAS, LinhaCanue } from '../../data/canue';
import { PRODUTOS } from '../../data/produtos';

type Categoria = 'texturas' | 'tintas' | 'premium';
interface Item {
  nome: string; categoria: Categoria; linha?: LinhaCanue; img: string;
  desc: string; tag?: string; link?: string; preco?: string;
}

// Ordem da lista: texturas, tintas e complementos, depois a linha Canue.
const BASICOS: Item[] = PRODUTOS
  .map((p) => ({ nome: p.nome, categoria: p.categoria, img: p.imagens[0].src, desc: p.resumo, link: `/produtos/${p.slug}`, preco: p.preco } as Item))
  .sort((a, b) => (a.categoria === b.categoria ? 0 : a.categoria === 'texturas' ? -1 : 1));

const PREMIUM: Item[] = CANUE.map((c) => ({
  nome: c.nome, categoria: 'premium', linha: c.linha, img: c.img, preco: c.preco,
  link: `/linha-premium/${c.linha === 'fosco' ? 'canue-aveludado-fosco' : 'canue-metalico'}/${c.slug}`,
  tag: `Linha premium · ${LINHAS[c.linha].rotulo}`,
  desc: `${LINHAS[c.linha].efeito}. ${c.linha === 'fosco' ? 'Embalagem' : 'Embalagens'}: ${LINHAS[c.linha].embalagem.replace('Baldes de ', 'baldes de ')}.`,
}));

const TODOS: Item[] = [...BASICOS, ...PREMIUM];
const FILTROS = ['todos', 'texturas', 'tintas', 'premium', 'fosco', 'metalico'];

@Component({
  selector: 'app-produtos',
  imports: [RouterLink],
  template: `
    <section class="relative isolate overflow-hidden bg-brand-navy text-white">
      <img src="/images/banner-catalogo.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
      <div class="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p class="eyebrow">Fabricação própria</p>
        <h1 class="mt-3 font-heading text-5xl uppercase md:text-6xl">Produtos</h1>
        <p class="mt-4 max-w-xl text-lg text-white/85">Texturas, grafiato, tintas, massa corrida e a linha premium Canue. Escolha e peça seu orçamento no WhatsApp.</p>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-6 py-14 md:py-20">
      <nav aria-label="Filtrar produtos" class="flex flex-wrap gap-3">
        @for (c of chips; track c.id) {
          <a routerLink="/produtos" [queryParams]="c.id === 'todos' ? {} : { filtro: c.id }"
            class="border border-brand-navy px-5 py-2.5 font-heading text-sm uppercase tracking-widest transition-colors"
            [class]="chipAtivo(c.id) ? 'bg-brand-navy text-white' : 'text-brand-navy hover:bg-grey-light'">
            {{ c.rotulo }} <span class="opacity-60">({{ c.total }})</span>
          </a>
        }
      </nav>

      @if (mostraLinhas()) {
        <nav aria-label="Filtrar linha Canue" class="mt-3 flex flex-wrap gap-3">
          @for (s of subchips; track s.id) {
            <a routerLink="/produtos" [queryParams]="{ filtro: s.id }"
              class="border px-4 py-2 text-xs uppercase tracking-widest transition-colors"
              [class]="filtro() === s.id ? 'border-brand-orange bg-brand-orange text-white' : 'border-gray-300 text-gray-700 hover:border-brand-orange'">
              {{ s.rotulo }} <span class="opacity-70">({{ s.total }})</span>
            </a>
          }
        </nav>
      }

      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        @for (i of itens(); track i.nome + i.tag) {
          <article class="group flex flex-col bg-white shadow-sm transition hover:shadow-xl">
            @if (i.link) {
              <a [routerLink]="i.link" class="block aspect-square overflow-hidden bg-grey-light">
                <img [src]="i.img" [alt]="i.nome" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              </a>
            } @else {
              <a [href]="wa(i.nome)" target="_blank" rel="noopener noreferrer" class="block aspect-square overflow-hidden bg-grey-light">
                <img [src]="i.img" [alt]="i.nome" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              </a>
            }
            <div class="flex flex-1 flex-col p-5">
              @if (i.tag) { <p class="text-[11px] font-bold uppercase tracking-widest text-brand-orange">{{ i.tag }}</p> }
              <h2 class="mt-1 font-heading text-lg uppercase leading-snug text-brand-navy">{{ i.nome }}</h2>
              <p class="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{{ i.desc }}</p>
              @if (i.preco) { <p class="mt-3 text-sm text-gray-500">Ref. <strong class="text-brand-navy">{{ i.preco }}</strong></p> }
              <div class="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                @if (i.link) {
                  <a [routerLink]="i.link" class="text-xs font-bold uppercase tracking-widest text-brand-blue hover:text-brand-orange">{{ i.categoria === 'premium' ? 'Ver cor →' : 'Ver produto →' }}</a>
                }
                <a [href]="wa(i.nome)" target="_blank" rel="noopener noreferrer" class="text-xs font-bold uppercase tracking-widest text-brand-orange hover:text-brand-navy">Orçamento</a>
              </div>
            </div>
          </article>
        }
      </div>

      <p class="mt-10 text-xs text-gray-500">Valores de referência, sujeitos a alteração. Confirme preço e disponibilidade no WhatsApp.</p>
    </section>

    <section class="bg-grey-light">
      <div class="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-14 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 class="font-heading text-3xl uppercase text-brand-navy">Não achou o que procura?</h2>
          <p class="mt-2 text-gray-600">Fale com nosso atendimento consultivo e peça seu orçamento.</p>
        </div>
        <div class="flex flex-col gap-4 sm:flex-row">
          <a routerLink="/catalogo-de-cores" class="btn btn-outline">Catálogo de cores</a>
          <a [href]="wa()" target="_blank" rel="noopener noreferrer" class="btn btn-orange">Falar no WhatsApp</a>
        </div>
      </div>
    </section>
  `,
})
export class ProdutosPage {
  wa = (nome?: string) => waLink(nome ? `Olá! Gostaria de um orçamento: ${nome}.` : undefined);

  filtro = toSignal(
    inject(ActivatedRoute).queryParamMap.pipe(map((m) => { const f = m.get('filtro') ?? 'todos'; return FILTROS.includes(f) ? f : 'todos'; })),
    { initialValue: 'todos' },
  );

  private conta = (f: (i: Item) => boolean) => TODOS.filter(f).length;
  chips = [
    { id: 'todos', rotulo: 'Todos', total: TODOS.length },
    { id: 'texturas', rotulo: 'Texturas', total: this.conta((i) => i.categoria === 'texturas') },
    { id: 'tintas', rotulo: 'Tintas e complementos', total: this.conta((i) => i.categoria === 'tintas') },
    { id: 'premium', rotulo: 'Linha Premium Canue', total: this.conta((i) => i.categoria === 'premium') },
  ];
  subchips = [
    { id: 'premium', rotulo: 'Todas as cores', total: this.conta((i) => i.categoria === 'premium') },
    { id: 'fosco', rotulo: 'Fosco e Aveludado', total: this.conta((i) => i.linha === 'fosco') },
    { id: 'metalico', rotulo: 'Metálico Perolizado', total: this.conta((i) => i.linha === 'metalico') },
  ];

  mostraLinhas = computed(() => ['premium', 'fosco', 'metalico'].includes(this.filtro()));
  chipAtivo = (id: string) => (id === 'premium' ? this.mostraLinhas() : this.filtro() === id);

  itens = computed(() => {
    const f = this.filtro();
    if (f === 'todos') return TODOS;
    if (f === 'fosco' || f === 'metalico') return TODOS.filter((i) => i.linha === f);
    return TODOS.filter((i) => i.categoria === f);
  });
}
