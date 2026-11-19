import { Component } from '@angular/core';
import { COMPANY, waLink } from '../../data/company';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-about',
  imports: [Reveal],
  template: `
    <section id="sobre" class="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div class="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr_1fr]">
        <div appReveal="0.1" class="aspect-[3/4] overflow-hidden">
          <img src="/images/aplicacao-textura.jpg" alt="Aplicação de textura em parede com rolo" class="h-full w-full object-cover" loading="lazy" />
        </div>

        <div appReveal="0.3" class="text-center">
          <p class="eyebrow">Fabricação própria</p>
          <h2 class="section-title mt-3">A Grafiw</h2>
          <p class="mt-6 leading-relaxed text-gray-600">
            Criada em {{ c.founded }}, a Grafiw fabrica tintas, texturas e revestimentos com uma equipe dedicada e foco em qualidade total.
            Do grafiato à linha premium Canue, ajudamos você a escolher o acabamento ideal para a sua obra.
          </p>
          <p class="mt-4 leading-relaxed text-gray-600">
            Entregamos em toda São Paulo e Grande São Paulo. Para outras cidades e estados, enviamos por correios ou transportadora. Consulte o frete.
          </p>
          <a [href]="wa" target="_blank" rel="noopener noreferrer" class="btn btn-navy mt-8">Fale com um consultor</a>
          <div class="mt-10 border-t border-gray-200 pt-6">
            <p class="font-heading text-xl uppercase text-brand-navy">Tradição e qualidade</p>
            <p class="text-xs uppercase tracking-[0.3em] text-gray-500">desde {{ c.founded }}</p>
          </div>
        </div>

        <div appReveal="0.5" class="aspect-[3/4] overflow-hidden lg:mt-24">
          <img src="/images/canue-verde.jpg" alt="Lata de revestimento premium Canue em ambiente decorado" class="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  `,
})
export class About {
  c = COMPANY;
  wa = waLink('Olá! Gostaria de falar com um consultor da Grafiw.');
}
