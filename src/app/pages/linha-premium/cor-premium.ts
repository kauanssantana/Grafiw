import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { COMPANY, waLink } from '../../data/company';
import { LINHAS_PREMIUM, linhaPorSlug } from '../../data/linha-premium';

@Component({
  selector: 'app-cor-premium',
  imports: [RouterLink],
  template: `
    @if (dados(); as d) {
      @let l = d.l;
      @let c = d.c;
        <section class="relative isolate overflow-hidden bg-brand-navy text-white">
          <img [src]="c.img" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
          <div class="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <nav aria-label="Você está em" class="text-xs uppercase tracking-widest text-white/70">
              <a routerLink="/" class="hover:text-white">Início</a> / Linha Premium /
              <a [routerLink]="'/linha-premium/' + l.slug" class="hover:text-white">{{ l.nome }}</a> / <span class="text-white">{{ c.nome }}</span>
            </nav>
            <p class="eyebrow mt-6">{{ l.nome }} · {{ l.embalagem }}</p>
            <h1 class="mt-2 font-heading text-5xl uppercase md:text-6xl">{{ titulo() }}</h1>
          </div>
        </section>

        <section class="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:py-20 lg:grid-cols-[1fr_340px]">
          <div>
            <div class="flex flex-wrap gap-4">
              @for (g of c.galeria; track g) {
                <img [src]="g" [alt]="titulo()" class="h-56 w-auto" loading="lazy" />
              }
            </div>

            @for (t of l.intro; track $index) {
              <p class="mt-8 leading-relaxed text-gray-700" [class]="$first ? 'text-lg' : 'mt-4'">{{ t }}</p>
            }

            <dl class="mt-10 grid gap-4 sm:grid-cols-2">
              @for (f of l.fatos; track f.rotulo) {
                <div class="border-l-4 border-brand-orange bg-grey-light p-5">
                  <dt class="text-xs font-bold uppercase tracking-widest text-brand-blue">{{ f.rotulo }}</dt>
                  <dd class="mt-1 text-brand-navy">{{ f.valor }}</dd>
                </div>
              }
            </dl>

            <section class="mt-12">
              <h2 class="font-heading text-2xl uppercase text-brand-navy">Principais características</h2>
              <div class="mt-2 h-0.5 w-12 bg-brand-orange"></div>
              <ul class="mt-4 grid gap-3 sm:grid-cols-2">
                @for (i of l.caracteristicas; track i) {
                  <li class="flex gap-3 text-gray-700"><span class="text-brand-orange" aria-hidden="true">✓</span>{{ i }}</li>
                }
              </ul>
            </section>

            @for (s of l.secoes; track s.titulo) {
              <section class="mt-12">
                <h2 class="font-heading text-2xl uppercase text-brand-navy">{{ s.titulo }}</h2>
                <div class="mt-2 h-0.5 w-12 bg-brand-orange"></div>
                @for (t of s.texto ?? []; track $index) {
                  <p class="mt-4 leading-relaxed text-gray-700">{{ t }}</p>
                }
                @if (s.passos) {
                  <ol class="mt-4 space-y-4">
                    @for (st of s.passos; track $index) {
                      @let q = split(st);
                      <li class="flex gap-4">
                        <span class="flex h-8 w-8 shrink-0 items-center justify-center bg-brand-navy font-heading text-white">{{ $index + 1 }}</span>
                        <span class="pt-1 leading-relaxed text-gray-700">@if (q.tail) { <strong class="text-brand-navy">{{ q.head }}:</strong> {{ q.tail }} } @else { {{ st }} }</span>
                      </li>
                    }
                  </ol>
                }
              </section>
            }
          </div>

          <aside class="lg:sticky lg:top-28 lg:self-start">
            <div class="relative isolate overflow-hidden bg-brand-navy p-8 text-white">
              <img src="/images/produtos/ajuda-fundo.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
              <h2 class="font-heading text-2xl uppercase">Gostou desta cor?</h2>
              <p class="mt-3 text-sm leading-relaxed text-white/85">Peça seu orçamento. Nosso atendimento consultivo tira suas dúvidas sobre a aplicação.</p>
              <a [href]="wa()" target="_blank" rel="noopener noreferrer" class="btn btn-orange mt-6 w-full">Orçamento no WhatsApp</a>
              <a [href]="co.phoneHref" class="mt-4 block text-center text-sm text-white/80 hover:text-white">ou ligue {{ co.phone }}</a>
            </div>
            @if (c.preco) {
              <p class="mt-4 text-xs leading-relaxed text-gray-500">Preço de referência: <strong class="text-brand-navy">{{ c.preco }}</strong>. Valores sujeitos a alteração: confirme no WhatsApp.</p>
            }
            <p class="mt-4 text-xs leading-relaxed text-gray-500">As fotos são ilustrativas: o resultado varia com a superfície, a aplicação e a tela do seu aparelho.</p>
          </aside>
        </section>

        <section class="bg-grey-light">
          <div class="section-pad">
            <h2 class="section-title text-center">Outras cores da linha</h2>
            <div class="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
              @for (o of outras(); track o.slug) {
                <a [routerLink]="'/linha-premium/' + l.slug + '/' + o.slug" class="group block bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <img [src]="o.img" [alt]="l.nome + ' cor ' + o.nome" class="aspect-square w-full object-cover" loading="lazy" />
                  <p class="px-3 py-3 text-center font-heading text-sm uppercase tracking-wider text-brand-navy group-hover:text-brand-orange">Cor {{ o.nome }}</p>
                </a>
              }
            </div>
            <div class="mt-10 flex flex-wrap justify-center gap-4">
              <a [routerLink]="'/linha-premium/' + l.slug" class="btn btn-navy">Ver toda a linha {{ l.nome }}</a>
              <a routerLink="/produtos" class="btn btn-outline">Todos os produtos</a>
            </div>
          </div>
        </section>
    } @else {
      <section class="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
        <p class="eyebrow">Cor não encontrada</p>
        <h1 class="section-title mt-4">Não achamos essa cor</h1>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          @for (x of todas; track x.slug) {
            <a [routerLink]="'/linha-premium/' + x.slug" class="btn btn-outline py-3">{{ x.nome }}</a>
          }
        </div>
      </section>
    }
  `,
})
export class CorPremiumPage {
  co = COMPANY;
  private title = inject(Title);
  private route = inject(ActivatedRoute);
  private slugLinha = toSignal(this.route.paramMap.pipe(map((m) => m.get('slug'))));
  private slugCor = toSignal(this.route.paramMap.pipe(map((m) => m.get('cor'))));

  todas = LINHAS_PREMIUM;
  linha = computed(() => linhaPorSlug(this.slugLinha()));
  cor = computed(() => this.linha()?.cores.find((c) => c.slug === this.slugCor()));
  dados = computed(() => { const l = this.linha(); const c = this.cor(); return l && c ? { l, c } : null; });
  outras = computed(() => this.linha()?.cores.filter((c) => c.slug !== this.slugCor()) ?? []);
  titulo = computed(() => {
    const l = this.linha(); const c = this.cor();
    if (!l || !c) return '';
    return l.slug === 'canue-metalico' ? `Canue Metálico ${c.nome}` : `Canue ${c.nome}`;
  });
  wa = () => waLink(`Olá! Gostaria de um orçamento: ${this.titulo()} (${this.linha()?.nome}).`);

  constructor() {
    effect(() => {
      const t = this.titulo();
      this.title.setTitle(t ? `${t} | Grafiw Tintas e Texturas` : 'Cor não encontrada | Grafiw');
    });
  }

  split(i: string) {
    const k = i.indexOf(': ');
    return k > 0 && k < 60 ? { head: i.slice(0, k), tail: i.slice(k + 2) } : { head: '', tail: '' };
  }
}
