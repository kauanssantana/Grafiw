import { Component } from '@angular/core';
import { COMPANY } from '../../data/company';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-testimonials',
  imports: [Reveal],
  template: `
    <section id="depoimentos" class="bg-brand-blue text-white">
      <div class="section-pad">
        <div appReveal class="mb-14 text-center">
          <p class="font-heading text-xs uppercase tracking-[0.3em] text-white/70">Testemunhos dos clientes</p>
          <h2 class="mt-3 font-heading text-4xl uppercase md:text-5xl">O que dizem sobre nós</h2>
          <p class="mt-4 text-white/80">★ {{ c.rating }} no Google · {{ c.reviews }} avaliações</p>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          @for (r of reviews; track r.name; let i = $index) {
            <figure [appReveal]="(i % 2) * 0.1" class="bg-white p-8 text-ink shadow-lg">
              <p class="font-heading text-5xl leading-none text-brand-orange">“</p>
              <blockquote class="mt-2 leading-relaxed text-gray-700">{{ r.text }}</blockquote>
              <figcaption class="mt-5 font-heading uppercase tracking-wider text-brand-navy">{{ r.name }}</figcaption>
            </figure>
          }
        </div>
        <div class="mt-12 text-center">
          <a href="https://www.google.com/search?q=Grafiw+Tintas+e+Texturas+Itaquera" target="_blank" rel="noopener noreferrer"
            class="btn border border-white text-white hover:bg-white hover:text-brand-blue">Ver avaliações no Google</a>
        </div>
      </div>
    </section>
  `,
})
export class Testimonials {
  c = COMPANY;
  reviews = [
    { name: 'Luiz Alves', text: 'Gama de cores e textura vasta, atendimento ótimo e bons preços!' },
    { name: 'Fabio Pilker', text: 'Cara bom no atendimento, te ajuda a resolver suas dúvidas sobre o produto.' },
    { name: 'Eduardo Machado', text: 'Gente boa, me atendeu perfeitamente, pontual com as entregas. Material top!' },
    { name: 'Cliente empreendedora', text: 'Compramos o grafiato na Grafiw, aplicamos, ficou linda, adorei a qualidade do produto.' },
  ];
}
