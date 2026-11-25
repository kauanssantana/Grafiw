import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { COMPANY, FORM_ENVIO, HORARIOS, waLink } from '../../data/company';

type Status = 'ok' | 'whatsapp' | 'erro' | null;

@Component({
  selector: 'app-contato',
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <section class="relative isolate overflow-hidden bg-brand-navy text-white">
      <img src="/images/banner-catalogo.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
      <div class="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p class="eyebrow">Fale com a gente</p>
        <h1 class="mt-3 font-heading text-5xl uppercase md:text-6xl">Contato</h1>
        <p class="mt-4 max-w-xl text-lg text-white/85">Entre em contato agora mesmo: escolha um dos nossos canais de atendimento.</p>
      </div>
    </section>

    <section class="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:py-20 lg:grid-cols-2">
      <form [formGroup]="form" (ngSubmit)="enviar()" novalidate class="bg-white p-8 shadow-lg">
        <h2 class="font-heading text-2xl uppercase text-brand-blue">Entre em contato</h2>

        <div class="mt-6 space-y-5">
          <div>
            <label for="nome" class="campo-label">Seu nome</label>
            <input id="nome" formControlName="nome" type="text" autocomplete="name" placeholder="Digite aqui seu nome" class="campo" [attr.aria-invalid]="erro('nome')" />
            @if (erro('nome')) { <p class="campo-erro">Informe seu nome.</p> }
          </div>

          <div>
            <label for="email" class="campo-label">Endereço de e-mail</label>
            <input id="email" formControlName="email" type="email" autocomplete="email" placeholder="Digite seu melhor endereço de e-mail" class="campo" [attr.aria-invalid]="erro('email')" />
            @if (erro('email')) { <p class="campo-erro">Informe um e-mail válido.</p> }
          </div>

          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label for="telefone" class="campo-label">Telefone fixo/DDD</label>
              <input id="telefone" formControlName="telefone" type="tel" autocomplete="tel" placeholder="Informe seu telefone fixo" class="campo" [attr.aria-invalid]="erro('telefone')" />
              @if (erro('telefone')) { <p class="campo-erro">Use só números, espaços, ( ) + e -.</p> }
            </div>
            <div>
              <label for="whatsapp" class="campo-label">WhatsApp</label>
              <input id="whatsapp" formControlName="whatsapp" type="tel" placeholder="Informe seu WhatsApp" class="campo" [attr.aria-invalid]="erro('whatsapp')" />
              @if (erro('whatsapp')) { <p class="campo-erro">Use só números, espaços, ( ) + e -.</p> }
            </div>
          </div>

          <div>
            <label for="assunto" class="campo-label">Assunto</label>
            <input id="assunto" formControlName="assunto" type="text" placeholder="Sobre o que deseja informações?" class="campo" />
          </div>

          <div>
            <label for="mensagem" class="campo-label">Mensagem</label>
            <textarea id="mensagem" formControlName="mensagem" rows="5" placeholder="Detalhe aqui sua mensagem" class="campo" [attr.aria-invalid]="erro('mensagem')"></textarea>
            @if (erro('mensagem')) { <p class="campo-erro">Escreva uma mensagem com pelo menos 10 caracteres.</p> }
          </div>

          <!-- Campo-isca contra robôs: pessoas não veem nem preenchem. -->
          <div class="absolute -left-[9999px]" aria-hidden="true">
            <label for="website">Não preencha este campo</label>
            <input id="website" formControlName="website" type="text" tabindex="-1" autocomplete="off" />
          </div>

          <div>
            <label class="flex cursor-pointer items-start gap-3 text-sm text-gray-600">
              <input type="checkbox" formControlName="aceite" class="mt-1 h-4 w-4 accent-brand-blue" />
              <span>Li e concordo com a <a routerLink="/politica-de-privacidade" target="_blank" class="font-bold text-brand-blue underline">Política de Privacidade</a> e autorizo o uso dos meus dados para responder à minha mensagem.</span>
            </label>
            @if (erro('aceite')) { <p class="campo-erro">Marque a caixa para poder enviar.</p> }
          </div>
        </div>

        <button type="submit" [disabled]="enviando()" class="btn btn-orange mt-6 w-full disabled:cursor-wait disabled:opacity-60">
          {{ enviando() ? 'Enviando…' : usaEmail ? 'Enviar' : 'Enviar pelo WhatsApp' }}
        </button>

        <div aria-live="polite" class="mt-4 text-sm">
          @switch (status()) {
            @case ('ok') { <p class="border-l-4 border-green-600 bg-green-50 p-4 text-green-800">Mensagem enviada! Entraremos em contato em breve.</p> }
            @case ('whatsapp') { <p class="border-l-4 border-green-600 bg-green-50 p-4 text-green-800">Abrimos o WhatsApp com a sua mensagem pronta. É só tocar em enviar.</p> }
            @case ('erro') {
              <p class="border-l-4 border-red-600 bg-red-50 p-4 text-red-800">Não foi possível enviar agora. Tente de novo ou
                <a [href]="wa()" target="_blank" rel="noopener noreferrer" class="font-bold underline">fale com a gente pelo WhatsApp</a>.</p>
            }
          }
        </div>
      </form>

      <div>
        <h2 class="font-heading text-2xl uppercase text-brand-blue">Contato</h2>
        <p class="mt-3 text-gray-600">Escolha um dos nossos canais de atendimento.</p>

        <ul class="mt-6 space-y-4 text-gray-700">
          <li class="flex gap-3"><span class="font-bold text-brand-orange" aria-hidden="true">●</span><span><strong class="text-brand-navy">Endereço:</strong> {{ c.addressLines.join(', ') }}</span></li>
          <li class="flex gap-3"><span class="font-bold text-brand-orange" aria-hidden="true">●</span>
            <span><strong class="text-brand-navy">Telefone:</strong>&ngsp;<a [href]="c.phoneHref" class="hover:text-brand-blue">{{ c.phone }}</a><br />
              <strong class="text-brand-navy">WhatsApp:</strong>&ngsp;<a [href]="wa()" target="_blank" rel="noopener noreferrer" class="hover:text-brand-blue">{{ c.whatsappLabel }}</a></span></li>
          <li class="flex gap-3"><span class="font-bold text-brand-orange" aria-hidden="true">●</span><span><strong class="text-brand-navy">E-mail:</strong>&ngsp;<a [href]="'mailto:' + c.email" class="hover:text-brand-blue">{{ c.email }}</a></span></li>
        </ul>

        <h3 class="mt-10 font-heading text-xl uppercase text-brand-blue">Horário de funcionamento</h3>
        <ul class="mt-3 max-w-sm divide-y divide-gray-200 text-gray-700">
          @for (h of horarios; track h.dia) {
            <li class="flex justify-between py-2"><span>{{ h.dia }}</span><span>{{ h.horas }}</span></li>
          }
        </ul>

        <a [href]="wa()" target="_blank" rel="noopener noreferrer" class="btn btn-navy mt-8">Chamar no WhatsApp</a>
      </div>
    </section>

    <section aria-label="Mapa">
      <iframe title="Mapa da Grafiw Tintas e Texturas" [src]="map" class="h-96 w-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  `,
})
export class Contato {
  c = COMPANY;
  horarios = HORARIOS;
  usaEmail = !!FORM_ENVIO.endpoint;
  map = inject(DomSanitizer).bypassSecurityTrustResourceUrl(
    `https://www.google.com/maps?q=${encodeURIComponent(COMPANY.mapQuery)}&output=embed`,
  );

  private fb = inject(FormBuilder).nonNullable;
  private soNumeros = Validators.pattern(/^[\d\s()+-]*$/);
  form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]],
    telefone: ['', this.soNumeros],
    whatsapp: ['', this.soNumeros],
    assunto: [''],
    mensagem: ['', [Validators.required, Validators.minLength(10)]],
    website: [''], // isca anti-robô
    aceite: [false, Validators.requiredTrue],
  });

  enviando = signal(false);
  status = signal<Status>(null);

  wa = () => waLink();
  erro = (campo: 'nome' | 'email' | 'telefone' | 'whatsapp' | 'mensagem' | 'aceite') => {
    const f = this.form.controls[campo];
    return f.invalid && (f.touched || f.dirty);
  };

  async enviar() {
    this.form.markAllAsTouched();
    if (this.form.invalid || this.enviando()) return;
    const v = this.form.getRawValue();

    // Robôs preenchem o campo-isca: fingimos sucesso e não enviamos nada.
    if (v.website) { this.status.set('ok'); return; }

    const assunto = v.assunto.trim() || 'Contato pelo site';

    // Sem serviço de formulário configurado: abre o WhatsApp com a mensagem pronta.
    if (!FORM_ENVIO.endpoint) {
      const texto = [
        `Olá! Meu nome é ${v.nome}.`,
        `Assunto: ${assunto}`,
        `Mensagem: ${v.mensagem}`,
        `Contato: ${v.email}${v.telefone ? ` · Tel. ${v.telefone}` : ''}${v.whatsapp ? ` · WhatsApp ${v.whatsapp}` : ''}`,
      ].join('\n');
      window.open(waLink(texto), '_blank', 'noopener');
      this.status.set('whatsapp');
      return;
    }

    // Com serviço configurado (Formspree, Web3Forms...): envia os dados por e-mail.
    this.enviando.set(true);
    this.status.set(null);
    try {
      const resposta = await fetch(FORM_ENVIO.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...FORM_ENVIO.extras,
          subject: `Contato pelo site: ${assunto}`,
          nome: v.nome, email: v.email, telefone: v.telefone, whatsapp: v.whatsapp, assunto, mensagem: v.mensagem,
        }),
      });
      if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);
      this.status.set('ok');
      this.form.reset();
    } catch {
      this.status.set('erro');
    } finally {
      this.enviando.set(false);
    }
  }
}
