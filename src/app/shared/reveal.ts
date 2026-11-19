import { Directive, ElementRef, OnDestroy, OnInit, PLATFORM_ID, inject, input, numberAttribute } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/** Faz o elemento surgir suavemente ao entrar na tela. Uso: <div appReveal="0.2"> (atraso em segundos, opcional) */
@Directive({ selector: '[appReveal]', host: { class: 'reveal' } })
export class Reveal implements OnInit, OnDestroy {
  delay = input(0, { alias: 'appReveal', transform: (v: unknown) => numberAttribute(v, 0) });
  private el = inject<ElementRef<HTMLElement>>(ElementRef);
  private browser = isPlatformBrowser(inject(PLATFORM_ID));
  private io?: IntersectionObserver;

  ngOnInit() {
    if (!this.browser) return;
    const node = this.el.nativeElement;
    node.style.transitionDelay = `${this.delay()}s`;
    this.io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { node.classList.add('is-visible'); this.io?.disconnect(); }
    }, { threshold: 0.12 });
    this.io.observe(node);
  }
  ngOnDestroy() { this.io?.disconnect(); }
}
