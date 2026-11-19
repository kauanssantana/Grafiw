import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV, waLink } from '../data/company';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  host: { class: 'sticky top-0 z-50 block bg-white shadow-sm' },
  template: `
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
      <a routerLink="/" aria-label="Grafiw Tintas e Texturas - início">
        <img src="/images/logo.png" alt="Grafiw Tintas e Texturas" width="272" height="80" class="h-14 w-auto" />
      </a>

      <nav class="hidden items-center gap-7 lg:flex" aria-label="Principal">
        @for (item of nav; track item.label) {
          <div class="group relative">
            @if (item.children) {
              <button type="button" class="nav-link">{{ item.label }} <span aria-hidden="true">▾</span></button>
              <ul class="invisible absolute left-0 top-full min-w-64 border-t-2 border-brand-orange bg-white py-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                @for (child of item.children; track child.link) {
                  <li><a [routerLink]="child.link" class="block px-5 py-2.5 text-sm hover:bg-grey-light hover:text-brand-blue">{{ child.label }}</a></li>
                }
              </ul>
            } @else {
              <a [routerLink]="item.link" class="nav-link">{{ item.label }}</a>
            }
          </div>
        }
      </nav>

      <a [href]="wa" target="_blank" rel="noopener noreferrer" class="btn btn-orange hidden py-3 lg:inline-flex">Orçamento</a>

      <button type="button" class="p-2 lg:hidden" aria-label="Abrir menu" [attr.aria-expanded]="open()" (click)="open.set(!open())">
        <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          @if (open()) { <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /> }
          @else { <path stroke-linecap="round" stroke-linejoin="round" d="M3 6h18M3 12h18M3 18h18" /> }
        </svg>
      </button>
    </div>

    @if (open()) {
      <nav class="max-h-[80vh] overflow-y-auto border-t border-gray-100 bg-white px-6 py-4 lg:hidden" aria-label="Mobile">
        @for (item of nav; track item.label) {
          @if (item.children) {
            <p class="mt-3 font-heading text-sm uppercase tracking-widest text-brand-blue">{{ item.label }}</p>
            @for (child of item.children; track child.link) {
              <a [routerLink]="child.link" (click)="open.set(false)" class="block py-2 pl-3 text-sm text-gray-700">{{ child.label }}</a>
            }
          } @else {
            <a [routerLink]="item.link" (click)="open.set(false)" class="mt-3 block font-heading text-sm uppercase tracking-widest">{{ item.label }}</a>
          }
        }
        <a [href]="wa" target="_blank" rel="noopener noreferrer" class="btn btn-orange mt-6 w-full">Orçamento no WhatsApp</a>
      </nav>
    }
  `,
})
export class Header {
  nav = NAV;
  wa = waLink();
  open = signal(false);
}
