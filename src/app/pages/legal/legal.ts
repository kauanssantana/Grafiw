import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { DOCS_LEGAIS } from '../../data/legal';

@Component({
  selector: 'app-legal',
  imports: [RouterLink],
  template: `
    @if (doc(); as d) {
      <section class="relative isolate overflow-hidden bg-brand-navy text-white">
        <img src="/images/banner-catalogo.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
        <div class="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <nav aria-label="Você está em" class="text-xs uppercase tracking-widest text-white/70">
            <a routerLink="/" class="hover:text-white">Início</a> / <span class="text-white">{{ d.titulo }}</span>
          </nav>
          <h1 class="mt-4 font-heading text-4xl uppercase md:text-5xl">{{ d.titulo }}</h1>
          <p class="mt-3 text-white/85">{{ d.resumo }}</p>
          <p class="mt-2 text-xs uppercase tracking-widest text-white/60">Última atualização: {{ d.atualizado }}</p>
        </div>
      </section>

      <article class="mx-auto max-w-4xl px-6 py-14 md:py-20">
        @for (s of d.secoes; track s.titulo; let n = $index) {
          <section [class]="n ? 'mt-10' : ''">
            <h2 class="font-heading text-2xl uppercase text-brand-navy">{{ n + 1 }}. {{ s.titulo }}</h2>
            <div class="mt-2 h-0.5 w-12 bg-brand-orange"></div>
            @for (t of s.paragrafos ?? []; track $index) {
              <p class="mt-4 leading-relaxed text-gray-700">{{ t }}</p>
            }
            @if (s.itens) {
              <ul class="mt-4 space-y-2">
                @for (i of s.itens; track $index) {
                  <li class="flex gap-3 leading-relaxed text-gray-700"><span class="text-brand-orange" aria-hidden="true">•</span><span>{{ i }}</span></li>
                }
              </ul>
            }
          </section>
        }

        <div class="mt-14 flex flex-wrap gap-4 border-t border-gray-200 pt-8">
          @for (o of outros(); track o.slug) {
            <a [routerLink]="'/' + o.slug" class="btn btn-outline">{{ o.titulo }}</a>
          }
          <a routerLink="/contato" class="btn btn-navy">Fale com a gente</a>
        </div>
      </article>
    }
  `,
})
export class Legal {
  private slug = toSignal(inject(ActivatedRoute).data.pipe(map((d) => d['doc'] as string)));
  doc = () => DOCS_LEGAIS.find((d) => d.slug === this.slug());
  outros = () => DOCS_LEGAIS.filter((d) => d.slug !== this.slug());
}
