import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { COMPANY, HORARIOS } from '../../data/company';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-location',
  imports: [Reveal],
  template: `
    <section id="localizacao" class="bg-grey-light">
      <div class="section-pad grid gap-12 lg:grid-cols-2">
        <div appReveal>
          <p class="eyebrow">Fábrica e loja</p>
          <h2 class="section-title mt-3">Visite a <span class="text-brand-blue">Grafiw</span></h2>

          <h3 class="mt-8 font-heading uppercase tracking-widest text-brand-navy">Endereço</h3>
          <p class="mt-2 leading-relaxed text-gray-700">
            @for (l of c.addressLines; track l) { {{ l }}<br /> }
          </p>
          <a [href]="route" target="_blank" rel="noopener noreferrer" class="btn btn-navy mt-5">Traçar rota</a>

          <h3 class="mt-10 font-heading uppercase tracking-widest text-brand-navy">Horário de funcionamento</h3>
          <ul class="mt-2 max-w-sm divide-y divide-gray-200 text-gray-700">
            @for (h of horarios; track h.dia) {
              <li class="flex justify-between py-2"><span>{{ h.dia }}</span><span>{{ h.horas }}</span></li>
            }
          </ul>
          <p class="mt-6 text-sm text-gray-600">Tel. {{ c.phone }} · WhatsApp {{ c.whatsappLabel }}</p>
        </div>

        <div appReveal="0.2" class="min-h-96 overflow-hidden shadow-lg">
          <iframe title="Mapa da Grafiw Tintas e Texturas" [src]="map" class="h-full min-h-96 w-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  `,
})
export class LocationSection {
  c = COMPANY;
  horarios = HORARIOS;
  route = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(COMPANY.mapQuery)}`;
  map = inject(DomSanitizer).bypassSecurityTrustResourceUrl(
    `https://www.google.com/maps?q=${encodeURIComponent(COMPANY.mapQuery)}&output=embed`,
  );
}
