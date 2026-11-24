import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY, NAV, waLink } from '../data/company';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="bg-grey-light">
      <div class="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/images/logo.png" alt="Grafiw Tintas e Texturas" width="272" height="80" class="h-14 w-auto" />
          <p class="mt-5 max-w-xs text-sm leading-relaxed text-gray-600">
            Fabricante de tintas, texturas e revestimentos em São Paulo desde {{ c.founded }}. Qualidade total para pequenas e grandes obras.
          </p>
          <div class="mt-5 flex flex-wrap gap-2">
            @for (s of c.social; track s.name) {
              <a [href]="s.url" target="_blank" rel="noopener noreferrer"
                class="border border-brand-navy px-3 py-1.5 text-xs uppercase tracking-wider text-brand-navy transition-colors hover:bg-brand-navy hover:text-white">{{ s.name }}</a>
            }
          </div>
        </div>

        <div>
          <h4 class="font-heading text-sm uppercase tracking-widest text-brand-navy"><a routerLink="/produtos" class="hover:text-brand-blue">Produtos</a></h4>
          <ul class="mt-5 space-y-2 text-sm text-gray-700">
            @for (item of produtos; track item.link) {
              <li><a [routerLink]="item.link" class="hover:text-brand-blue">{{ item.label }}</a></li>
            }
            <li><a routerLink="/produtos" [queryParams]="{ filtro: 'premium' }" class="hover:text-brand-blue">Linha Premium Canue</a></li>
            <li class="pt-1"><a routerLink="/produtos" class="font-bold text-brand-blue hover:text-brand-orange">Ver todos os produtos →</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-heading text-sm uppercase tracking-widest text-brand-navy">Navegação</h4>
          <ul class="mt-5 space-y-2 text-sm text-gray-700">
            <li><a routerLink="/" class="hover:text-brand-blue">Início</a></li>
            @for (item of outros; track item.label) {
              <li><a [routerLink]="item.link ?? item.children![0].link" [queryParams]="item.query" class="hover:text-brand-blue">{{ item.label }}</a></li>
            }
          </ul>
        </div>

        <div>
          <h4 class="font-heading text-sm uppercase tracking-widest text-brand-navy">Fale conosco</h4>
          <ul class="mt-5 space-y-2 text-sm text-gray-700">
            <li><a [href]="wa" target="_blank" rel="noopener noreferrer" class="hover:text-brand-blue">WhatsApp {{ c.whatsappLabel }}</a></li>
            <li><a [href]="c.phoneHref" class="hover:text-brand-blue">Tel. {{ c.phone }}</a></li>
            <li><a [href]="'mailto:' + c.email" class="hover:text-brand-blue">{{ c.email }}</a></li>
            <li class="pt-2 leading-relaxed">{{ c.addressLines.join(' · ') }}</li>
          </ul>
        </div>
      </div>

      <div class="bg-brand-navy text-xs text-white">
        <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 md:flex-row">
          <p>© {{ year }} {{ c.name }}. Todos os direitos reservados.</p>
          <div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a routerLink="/politica-de-privacidade" class="hover:text-brand-orange">Política de privacidade</a>
            <a routerLink="/termos-e-condicoes" class="hover:text-brand-orange">Termos e condições</a>
            <a href="https://portfoliokauan.netlify.app" target="_blank" rel="noopener noreferrer" class="hover:text-brand-orange">Desenvolvido por Kauan · Portfólio</a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class Footer {
  c = COMPANY;
  wa = waLink();
  produtos = NAV[0].children!;
  outros = NAV.slice(1);
  year = new Date().getFullYear();
}
