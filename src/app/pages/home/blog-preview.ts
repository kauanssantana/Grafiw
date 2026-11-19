import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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
              <img [src]="p.img" [alt]="p.title" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
            </a>
            <div class="flex flex-1 flex-col p-6">
              <h3 class="font-heading text-xl leading-snug text-brand-navy">{{ p.title }}</h3>
              <p class="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{{ p.excerpt }}</p>
              <a [routerLink]="'/blog/' + p.slug" class="mt-5 text-xs font-bold uppercase tracking-widest text-brand-orange hover:text-brand-navy">Leia mais →</a>
            </div>
            <p class="border-t border-gray-100 px-6 py-3 text-xs text-gray-400">{{ p.date }}</p>
          </article>
        }
      </div>
    </section>
  `,
})
export class BlogPreview {
  posts = [
    { slug: 'diferenca-entre-textura-e-grafiato', img: '/images/blog-texturas.jpg', date: '18 de março de 2023',
      title: 'Qual é a diferença entre textura e grafiato?',
      excerpt: 'Ambos são texturas, mas o grafiato, por causa das ranhuras, só pode ser aplicado com desempenadeira, e não com rolo.' },
    { slug: '7-dicas-para-pintar-as-paredes', img: '/images/blog-sala-listras.jpg', date: '13 de julho de 2022',
      title: 'Confira 7 dicas para pintar as paredes da casa sem erros',
      excerpt: 'Quer mudar o visual da casa? Que tal trocar a cor das paredes? Dá para economizar fazendo você mesmo.' },
    { slug: 'dicas-de-pintura-e-combinacoes-de-cores', img: '/images/blog-sofa-laranja.jpg', date: '11 de julho de 2022',
      title: 'Dicas de pintura e combinações de cores',
      excerpt: 'Devo pintar a casa toda com a mesma cor? Esclarecemos as principais dúvidas sobre cores e ambientes.' },
  ];
}
