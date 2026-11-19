import { Component } from '@angular/core';
import { COMPANY, waLink } from '../data/company';

@Component({
  selector: 'app-top-bar',
  template: `
    <div class="hidden bg-brand-navy text-xs text-white md:block">
      <div class="mx-auto flex h-10 max-w-7xl items-center justify-between px-6">
        <div class="flex items-center gap-6">
          <a [href]="c.phoneHref" class="hover:text-brand-orange">Tel. {{ c.phone }}</a>
          <a [href]="wa" target="_blank" rel="noopener noreferrer" class="hover:text-brand-orange">WhatsApp {{ c.whatsappLabel }}</a>
          <a [href]="'mailto:' + c.email" class="hover:text-brand-orange">{{ c.email }}</a>
        </div>
        <div class="flex items-center gap-5">
          @for (s of c.social; track s.name) {
            <a [href]="s.url" target="_blank" rel="noopener noreferrer" class="hover:text-brand-orange">{{ s.name }}</a>
          }
        </div>
      </div>
    </div>
  `,
})
export class TopBar { c = COMPANY; wa = waLink(); }
