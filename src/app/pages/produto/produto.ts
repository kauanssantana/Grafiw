import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { COMPANY, waLink } from '../../data/company';
import { PRODUTOS, Video, produtoPorSlug } from '../../data/produtos';

@Component({
  selector: 'app-produto',
  imports: [RouterLink],
  template: `
    @if (produto(); as p) {
      <section class="relative isolate overflow-hidden bg-brand-navy text-white">
        <div class="absolute inset-0 -z-10 opacity-30" style="background-size: 180px" [style.background-image]="'url(' + p.imagens[0].src + ')'"></div>
        <div class="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <nav aria-label="Você está em" class="text-xs uppercase tracking-widest text-white/70">
            <a routerLink="/" class="hover:text-white">Início</a> / Produtos / <span class="text-white">{{ p.nome }}</span>
          </nav>
          <h1 class="mt-4 font-heading text-5xl uppercase md:text-6xl">{{ p.nome }}</h1>
        </div>
      </section>

      <section class="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:py-20 lg:grid-cols-[1fr_340px]">
        <div>
          @for (t of p.intro; track $index) {
            <p class="leading-relaxed text-gray-700" [class]="$first ? 'text-lg' : 'mt-4'">{{ t }}</p>
          }

          <dl class="mt-10 grid gap-4 sm:grid-cols-2">
            @for (f of p.fatos; track f.rotulo) {
              <div class="border-l-4 border-brand-orange bg-grey-light p-5">
                <dt class="text-xs font-bold uppercase tracking-widest text-brand-blue">{{ f.rotulo }}</dt>
                <dd class="mt-1 text-brand-navy">{{ f.valor }}</dd>
              </div>
            }
          </dl>

          <div class="mt-10 flex flex-wrap gap-4">
            @for (im of p.imagens; track im.src) {
              <figure>
                <img [src]="im.src" [alt]="im.alt" class="h-44 w-auto" loading="lazy" />
                @if (im.legenda) { <figcaption class="mt-2 text-xs font-bold text-brand-blue">{{ im.legenda }}</figcaption> }
              </figure>
            }
          </div>

          @for (s of p.secoes; track s.titulo) {
            <section class="mt-12">
              <h2 class="font-heading text-2xl uppercase text-brand-navy">{{ s.titulo }}</h2>
              <div class="mt-2 h-0.5 w-12 bg-brand-orange"></div>
              @for (t of s.texto ?? []; track $index) {
                <p class="mt-4 leading-relaxed text-gray-700">{{ t }}</p>
              }
              @if (s.itens) {
                <ul class="mt-4 space-y-3">
                  @for (i of s.itens; track $index) {
                    @let q = split(i);
                    <li class="flex gap-3 text-gray-700">
                      <span class="mt-0.5 text-brand-orange" aria-hidden="true">✓</span>
                      <span>@if (q.tail) { <strong class="text-brand-navy">{{ q.head }}:</strong> {{ q.tail }} } @else { {{ i }} }</span>
                    </li>
                  }
                </ul>
              }
              @if (s.passos) {
                <ol class="mt-4 space-y-4">
                  @for (st of s.passos; track $index) {
                    <li class="flex gap-4">
                      <span class="flex h-8 w-8 shrink-0 items-center justify-center bg-brand-navy font-heading text-white">{{ $index + 1 }}</span>
                      <span class="pt-1 leading-relaxed text-gray-700">{{ st }}</span>
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
            <p class="mt-3 text-sm leading-relaxed text-white/85">Nosso atendimento consultivo tira suas dúvidas sobre o produto e passa o seu orçamento.</p>
            <a [href]="wa(p.nome)" target="_blank" rel="noopener noreferrer" class="btn btn-orange mt-6 w-full">Orçamento no WhatsApp</a>
            <a [href]="c.phoneHref" class="mt-4 block text-center text-sm text-white/80 hover:text-white">ou ligue {{ c.phone }}</a>
          </div>
          @if (p.preco) {
            <p class="mt-4 text-xs leading-relaxed text-gray-500">Preço de referência: <strong class="text-brand-navy">{{ p.preco }}</strong>. Valores sujeitos a alteração: confirme no WhatsApp.</p>
          }
        </aside>
      </section>

      @if (p.video; as v) {
        <section class="bg-brand-blue text-white">
          <div class="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div>
              <h2 class="font-heading text-3xl uppercase">Vai aplicar você mesmo?</h2>
              <p class="mt-3 text-white/85">Assista ao tutorial e veja o passo a passo.</p>
            </div>
            <div>
              @if (embed(); as src) {
                <iframe [src]="src" [title]="v.titulo" class="aspect-video w-full" loading="lazy" allowfullscreen
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                <a [href]="watch(v.id!)" target="_blank" rel="noopener noreferrer" class="mt-3 inline-block text-sm text-white/80 underline hover:text-white">Assistir no YouTube</a>
              } @else {
                <a [href]="youtube(v)" target="_blank" rel="noopener noreferrer"
                  class="group flex aspect-video flex-col items-center justify-center gap-4 bg-brand-navy p-6 text-center transition hover:bg-black">
                  <span class="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff0033] text-2xl transition group-hover:scale-110" aria-hidden="true">▶</span>
                  <span class="font-heading text-xl uppercase">{{ v.titulo }}</span>
                  <span class="text-sm text-white/70">{{ v.canal }} · Assistir no YouTube</span>
                </a>
              }
              @if (v.nota) { <p class="mt-3 text-sm font-bold">{{ v.nota }}</p> }
            </div>
          </div>
        </section>
      }

      <section class="bg-grey-light">
        <div class="section-pad">
          <h2 class="section-title text-center">Veja também</h2>
          <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            @for (o of outros(); track o.slug) {
              <a [routerLink]="'/produtos/' + o.slug" class="group block bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img [src]="o.imagens[0].src" [alt]="o.nome" class="aspect-[4/3] w-full object-cover" loading="lazy" />
                <div class="p-4">
                  <h3 class="font-heading uppercase tracking-wide text-brand-navy group-hover:text-brand-orange">{{ o.nome }}</h3>
                  <p class="mt-1 text-xs leading-relaxed text-gray-600">{{ o.resumo }}</p>
                </div>
              </a>
            }
          </div>
        </div>
      </section>
    } @else {
      <section class="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
        <p class="eyebrow">Produto não encontrado</p>
        <h1 class="section-title mt-4">Não achamos esse produto</h1>
        <p class="mt-4 text-gray-600">Veja a lista de produtos abaixo ou fale com a gente no WhatsApp.</p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          @for (o of todos; track o.slug) {
            <a [routerLink]="'/produtos/' + o.slug" class="btn btn-outline py-3">{{ o.nome }}</a>
          }
        </div>
      </section>
    }
  `,
})
export class ProdutoPage {
  c = COMPANY;
  todos = PRODUTOS;
  wa = (nome: string) => waLink(`Olá! Gostaria de um orçamento: ${nome}.`);

  private sanitizer = inject(DomSanitizer);
  private title = inject(Title);
  private slug = toSignal(inject(ActivatedRoute).paramMap.pipe(map((m) => m.get('slug'))));

  produto = computed(() => produtoPorSlug(this.slug()));
  outros = computed(() => PRODUTOS.filter((x) => x.slug !== this.slug()).slice(0, 4));
  embed = computed(() => {
    const id = this.produto()?.video?.id;
    return id ? this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${id}`) : null;
  });

  constructor() {
    effect(() => {
      const p = this.produto();
      this.title.setTitle(p ? `${p.nome} | Grafiw Tintas e Texturas` : 'Produto não encontrado | Grafiw');
    });
  }

  watch(id: string) { return `https://www.youtube.com/watch?v=${id}`; }
  youtube(v: Video) { return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${v.titulo} ${v.canal}`)}`; }

  /** "Título: texto" vira negrito + texto. Itens sem ":" ficam como estão. */
  split(i: string) {
    const k = i.indexOf(': ');
    return k > 0 && k < 60 ? { head: i.slice(0, k), tail: i.slice(k + 2) } : { head: '', tail: '' };
  }
}
