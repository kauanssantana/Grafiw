import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { waLink } from '../data/company';

@Component({
  selector: 'app-em-breve',
  imports: [RouterLink],
  template: `
    <section class="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <p class="eyebrow">Em construção</p>
      <h1 class="section-title mt-4">Esta página chega em breve</h1>
      <p class="mt-4 text-gray-600">Enquanto isso, fale com a gente no WhatsApp e peça seu orçamento.</p>
      <div class="mt-8 flex flex-col gap-4 sm:flex-row">
        <a [href]="wa" target="_blank" rel="noopener noreferrer" class="btn btn-orange">Orçamento no WhatsApp</a>
        <a routerLink="/" class="btn btn-outline">Voltar ao início</a>
      </div>
    </section>
  `,
})
export class EmBreve { wa = waLink(); }
