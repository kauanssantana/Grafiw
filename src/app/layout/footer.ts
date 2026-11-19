import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY, NAV } from '../data/company';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="bg-grey-light">
      <div class="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <img src="/images/logo.png" alt="Grafiw Tintas e Texturas" width="272" height="80" class="h-14 w-auto" />
          <p class="mt-5 max-w-xs text-sm leading-relaxed text-gray-600">
            Fabricante de tintas, texturas e revestimentos em São Paulo desde {{ c.founded }}. Qualidade total para pequenas e grandes obras.
          </p>
        </div>
        <div>
          <h4 class="font-heading text-sm uppercase tracking-widest text-brand-navy">Navegação</h4>
          <ul class="mt-5 space-y-2 text-sm text-gray-700">
            <li><a routerLink="/" class="hover:text-brand-blue">Início</a></li>
            @for (item of nav; track item.label) {
              <li><a [routerLink]="item.link ?? item.children![0].link" class="hover:text-brand-blue">{{ item.label }}</a></li>
            }
          </ul>
        </div>
        <div>
          <h4 class="font-heading text-sm uppercase tracking-widest text-brand-navy">Fale conosco</h4>
          <ul class="mt-5 space-y-2 text-sm text-gray-700">
            <li>WhatsApp {{ c.whatsappLabel }}</li>
            <li>Tel. {{ c.phone }}</li>
            <li>{{ c.email }}</li>
            <li class="pt-2">{{ c.addressLines.join(' · ') }}</li>
          </ul>
        </div>
      </div>
      <div class="bg-brand-navy text-xs text-white">
        <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 md:flex-row">
          <p>© {{ year }} {{ c.name }}. Todos os direitos reservados.</p>
          <div class="flex gap-5">
            <a routerLink="/politica-de-privacidade" class="hover:text-brand-orange">Política de privacidade</a>
            <a routerLink="/termos-e-condicoes" class="hover:text-brand-orange">Termos e condições</a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class Footer {
  c = COMPANY;
  nav = NAV;
  year = new Date().getFullYear();
}
