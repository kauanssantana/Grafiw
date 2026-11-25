import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { POSTS } from '../../data/blog';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-blog',
  imports: [RouterLink, Reveal],
  template: `
    <section class="relative isolate overflow-hidden bg-brand-navy text-white">
      <img src="/images/banner-catalogo.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
      <div class="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <nav aria-label="Você está em" class="text-xs uppercase tracking-widest text-white/70">
          <a routerLink="/" class="hover:text-white">Início</a> / <span class="text-white">Blog</span>
        </nav>
        <h1 class="mt-4 font-heading text-5xl uppercase md:text-6xl">Blog</h1>
        <p class="mt-4 max-w-xl text-lg text-white/85">Novidades e dicas de pintura, texturas e decoração.</p>
      </div>
    </section>

    <section class="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:py-20 lg:grid-cols-[1fr_320px]">
      <div class="grid content-start gap-8 sm:grid-cols-2">
        @for (p of posts; track p.slug; let i = $index) {
          <article [appReveal]="(i % 2) * 0.1" class="group flex flex-col bg-white shadow-sm transition hover:shadow-xl">
            <a [routerLink]="'/blog/' + p.slug" class="relative block aspect-[16/10] overflow-hidden">
              <img [src]="p.img" [alt]="p.titulo" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              <span class="absolute right-3 top-3 bg-brand-orange px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">{{ p.categoria }}</span>
            </a>
            <div class="flex flex-1 flex-col p-6">
              <h2 class="font-heading text-xl leading-snug text-brand-navy"><a [routerLink]="'/blog/' + p.slug" class="hover:text-brand-blue">{{ p.titulo }}</a></h2>
              <p class="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{{ p.resumo }}</p>
              <a [routerLink]="'/blog/' + p.slug" class="mt-5 text-xs font-bold uppercase tracking-widest text-brand-orange hover:text-brand-navy">Leia mais →</a>
            </div>
            <p class="border-t border-gray-100 px-6 py-3 text-xs text-gray-400"><time [attr.datetime]="p.data">{{ p.dataTexto }}</time></p>
          </article>
        }
      </div>

      <aside class="lg:sticky lg:top-28 lg:self-start">
        <div class="bg-white p-6 shadow-sm">
          <h2 class="font-heading text-xl uppercase text-brand-navy">Posts recentes</h2>
          <div class="mt-2 h-0.5 w-12 bg-brand-orange"></div>
          <ul class="mt-5 space-y-5">
            @for (p of posts; track p.slug) {
              <li>
                <a [routerLink]="'/blog/' + p.slug" class="font-bold leading-snug text-brand-navy hover:text-brand-blue">{{ p.titulo }}</a>
                <p class="mt-1 text-xs text-gray-400">{{ p.dataTexto }}</p>
              </li>
            }
          </ul>
        </div>
      </aside>
    </section>
  `,
})
export class Blog {
  posts = POSTS;
}
