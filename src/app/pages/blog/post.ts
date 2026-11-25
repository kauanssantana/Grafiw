import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { waLink } from '../../data/company';
import { POSTS, postPorSlug } from '../../data/blog';

@Component({
  selector: 'app-post',
  imports: [RouterLink],
  template: `
    @if (post(); as p) {
      <section class="relative isolate overflow-hidden bg-brand-navy text-white">
        <img src="/images/banner-catalogo.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
        <div class="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <nav aria-label="Você está em" class="text-xs uppercase tracking-widest text-white/70">
            <a routerLink="/" class="hover:text-white">Início</a> / <a routerLink="/blog" class="hover:text-white">Blog</a>
          </nav>
          <p class="eyebrow mt-6">{{ p.categoria }} · <time [attr.datetime]="p.data">{{ p.dataTexto }}</time></p>
          <h1 class="mt-3 font-heading text-4xl uppercase leading-tight md:text-5xl">{{ p.titulo }}</h1>
        </div>
      </section>

      <article class="mx-auto max-w-4xl px-6 py-14 md:py-20">
        <img [src]="p.img" [alt]="p.titulo" class="mb-10 max-h-96 w-full object-cover" />
        @for (b of p.blocos; track $index) {
          @switch (b.t) {
            @case ('p') { <p class="mt-5 text-lg leading-relaxed text-gray-700">{{ b.texto }}</p> }
            @case ('h2') {
              <h2 class="mt-12 font-heading text-3xl uppercase text-brand-navy">{{ b.texto }}</h2>
              <div class="mt-2 h-0.5 w-12 bg-brand-orange"></div>
            }
            @case ('h3') { <h3 class="mt-9 font-heading text-xl uppercase text-brand-blue">{{ b.texto }}</h3> }
            @case ('ul') {
              <ul class="mt-4 space-y-2">
                @for (i of b.itens ?? []; track $index) {
                  <li class="flex gap-3 text-lg leading-relaxed text-gray-700"><span class="text-brand-orange" aria-hidden="true">✓</span><span>{{ i }}</span></li>
                }
              </ul>
            }
            @case ('ol') {
              <ol class="mt-6 space-y-5">
                @for (i of b.itens ?? []; track $index) {
                  <li class="flex gap-4">
                    <span class="flex h-9 w-9 shrink-0 items-center justify-center bg-brand-navy font-heading text-lg text-white">{{ $index + 1 }}</span>
                    <span class="pt-1 text-lg leading-relaxed text-gray-700">{{ i }}</span>
                  </li>
                }
              </ol>
            }
            @case ('img') {
              <img [src]="b.src" [alt]="b.alt ?? ''" [style.max-width.px]="b.larg" class="mx-auto my-8 h-auto w-full" loading="lazy" />
            }
          }
        }
        <div class="mt-10 flex flex-wrap gap-4">
          <a [href]="wa(p.titulo)" target="_blank" rel="noopener noreferrer" class="btn btn-orange">Falar no WhatsApp</a>
          <a routerLink="/blog" class="btn btn-outline">Voltar ao blog</a>
        </div>
      </article>

      <section class="bg-grey-light">
        <div class="section-pad">
          <h2 class="section-title text-center">Mais do blog</h2>
          <div class="mt-10 grid gap-6 md:grid-cols-2">
            @for (o of outros(); track o.slug) {
              <a [routerLink]="'/blog/' + o.slug" class="group flex bg-white shadow-sm transition hover:shadow-xl">
                <img [src]="o.img" [alt]="o.titulo" class="h-auto w-36 shrink-0 object-cover" loading="lazy" />
                <div class="p-5">
                  <h3 class="font-heading text-lg leading-snug text-brand-navy group-hover:text-brand-blue">{{ o.titulo }}</h3>
                  <p class="mt-2 text-xs text-gray-400">{{ o.dataTexto }}</p>
                </div>
              </a>
            }
          </div>
        </div>
      </section>
    } @else {
      <section class="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
        <p class="eyebrow">Post não encontrado</p>
        <h1 class="section-title mt-4">Não achamos esse post</h1>
        <a routerLink="/blog" class="btn btn-navy mt-8">Ver todos os posts</a>
      </section>
    }
  `,
})
export class PostPage {
  private title = inject(Title);
  private slug = toSignal(inject(ActivatedRoute).paramMap.pipe(map((m) => m.get('slug'))));
  post = computed(() => postPorSlug(this.slug()));
  outros = computed(() => POSTS.filter((x) => x.slug !== this.slug()));
  wa = (t: string) => waLink(`Olá! Li o post “${t}” no site e gostaria de tirar uma dúvida.`);

  constructor() {
    effect(() => {
      const p = this.post();
      this.title.setTitle(p ? `${p.titulo} | Blog Grafiw` : 'Post não encontrado | Grafiw');
    });
  }
}
