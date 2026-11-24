import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { COMPANY, waLink } from '../../data/company';
import { LINHAS_PREMIUM, linhaPorSlug } from '../../data/linha-premium';

@Component({
  selector: 'app-linha-premium',
  imports: [RouterLink],
  template: `
    @if (linha(); as l) {
      <section class="relative isolate overflow-hidden bg-brand-navy text-white">
        <img src="/images/banner-catalogo.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
        <div class="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <nav aria-label="Você está em" class="text-xs uppercase tracking-widest text-white/70">
            <a routerLink="/" class="hover:text-white">Início</a> / Linha Premium / <span class="text-white">{{ l.nome }}</span>
          </nav>
          <p class="eyebrow mt-6">Linha Premium</p>
          <h1 class="mt-2 font-heading text-5xl uppercase md:text-6xl">{{ l.nome }}</h1>
          <p class="mt-4 max-w-xl text-lg text-white/85">{{ l.resumo }}</p>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <h2 class="section-title">Cores <span class="text-brand-blue">disponíveis</span></h2>
          <p class="text-sm text-gray-500">{{ l.cores.length }} cores · toque na cor para ver os detalhes</p>
        </div>
        <div class="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          @for (c of l.cores; track c.nome) {
            <a [routerLink]="'/linha-premium/' + l.slug + '/' + c.slug"
              class="group block bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <img [src]="c.img" [alt]="l.nome + ' cor ' + c.nome" class="aspect-square w-full object-cover" loading="lazy" />
              <p class="px-3 py-3 text-center font-heading text-sm uppercase tracking-wider text-brand-navy group-hover:text-brand-orange">Cor {{ c.nome }}</p>
            </a>
          }
        </div>
        <p class="mt-6 max-w-3xl text-xs leading-relaxed text-gray-500">As fotos são ilustrativas: o resultado varia com a superfície, a aplicação e a tela do seu aparelho.</p>
      </section>

      <section class="bg-grey-light">
        <div class="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:py-20 lg:grid-cols-[1fr_340px]">
          <div>
            @for (t of l.intro; track $index) {
              <p class="leading-relaxed text-gray-700" [class]="$first ? 'text-lg' : 'mt-4'">{{ t }}</p>
            }

            <dl class="mt-10 grid gap-4 sm:grid-cols-2">
              @for (f of l.fatos; track f.rotulo) {
                <div class="border-l-4 border-brand-orange bg-white p-5">
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
              <h2 class="font-heading text-2xl uppercase">Precisa de alguma ajuda?</h2>
              <p class="mt-3 text-sm leading-relaxed text-white/85">Nosso atendimento consultivo ajuda a escolher a cor e o acabamento ideais e passa o seu orçamento.</p>
              <a [href]="wa(l.nome)" target="_blank" rel="noopener noreferrer" class="btn btn-orange mt-6 w-full">Orçamento no WhatsApp</a>
              <a [href]="c.phoneHref" class="mt-4 block text-center text-sm text-white/80 hover:text-white">ou ligue {{ c.phone }}</a>
            </div>
            @if (preco(); as p) {
              <p class="mt-4 text-xs leading-relaxed text-gray-500">Preço de referência: <strong class="text-brand-navy">{{ p }}</strong>. Valores sujeitos a alteração: confirme no WhatsApp.</p>
            }
          </aside>
        </div>
      </section>

      @if (outra(); as o) {
        <section class="bg-brand-blue text-white">
          <div class="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-14 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 class="font-heading text-3xl uppercase">Conheça também o {{ o.nome }}</h2>
              <p class="mt-2 text-white/85">{{ o.resumo }}</p>
            </div>
            <div class="flex flex-col gap-4 sm:flex-row">
              <a [routerLink]="'/linha-premium/' + o.slug" class="btn btn-orange">Ver {{ o.nome }}</a>
              <a routerLink="/produtos" class="btn border border-white text-white hover:bg-white hover:text-brand-blue">Todos os produtos</a>
            </div>
          </div>
        </section>
      }
    } @else {
      <section class="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
        <p class="eyebrow">Linha não encontrada</p>
        <h1 class="section-title mt-4">Não achamos essa linha</h1>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          @for (x of todas; track x.slug) {
            <a [routerLink]="'/linha-premium/' + x.slug" class="btn btn-outline py-3">{{ x.nome }}</a>
          }
        </div>
      </section>
    }
  `,
})
export class LinhaPremiumPage {
  c = COMPANY;
  todas = LINHAS_PREMIUM;
  wa = (linha: string, cor?: string) =>
    waLink(cor ? `Olá! Tenho interesse na ${linha}, cor ${cor}.` : `Olá! Gostaria de um orçamento: ${linha}.`);

  private title = inject(Title);
  private slug = toSignal(inject(ActivatedRoute).paramMap.pipe(map((m) => m.get('slug'))));
  linha = computed(() => linhaPorSlug(this.slug()));
  outra = computed(() => linhaPorSlug(this.linha()?.outra));
  preco = computed(() => { const c = this.linha()?.cores.find((x) => x.preco); return c ? `Canue ${c.nome}: ${c.preco}` : null; });

  constructor() {
    effect(() => {
      const l = this.linha();
      this.title.setTitle(l ? `${l.nome} | Grafiw Tintas e Texturas` : 'Linha não encontrada | Grafiw');
    });
  }

  split(i: string) {
    const k = i.indexOf(': ');
    return k > 0 && k < 60 ? { head: i.slice(0, k), tail: i.slice(k + 2) } : { head: '', tail: '' };
  }
}
