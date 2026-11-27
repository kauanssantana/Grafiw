import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { POSTS } from '../../data/blog';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-blog-preview',
  imports: [RouterLink, Reveal],
  template: `
    <section id="blog" class="section-pad">
      <div appReveal class="mb-14 text-center">
        <p class="eyebrow">Blog</p>
        <h2 class="section-title mt-3">Novidades e dicas</h2>
      </div>
      <div class="grid gap-8 md:grid-cols-3">
        @for (p of posts; track p.slug; let i = $index) {
          <article [appReveal]="i * 0.1" class="group flex flex-col bg-white shadow-sm transition hover:shadow-xl">
            <a [routerLink]="'/blog/' + p.slug" class="block aspect-[16/10] overflow-hidden">
              <img [src]="p.img" [alt]="p.titulo" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
            </a>
            <div class="flex flex-1 flex-col p-6">
              <h3 class="font-heading text-xl leading-snug text-brand-navy">{{ p.titulo }}</h3>
              <p class="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{{ p.resumo }}</p>
              <a [routerLink]="'/blog/' + p.slug" class="mt-5 text-xs font-bold uppercase tracking-widest text-brand-orange hover:text-brand-navy">Leia mais →</a>
            </div>
            <p class="border-t border-gray-100 px-6 py-3 text-xs text-gray-400">{{ p.dataTexto }}</p>
          </article>
        }
      </div>
    </section>
  `,
})
export class BlogPreview {
  posts = POSTS.slice(0, 3);
}
