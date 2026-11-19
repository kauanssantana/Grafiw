import { Component } from '@angular/core';
import { Hero } from './hero';
import { About } from './about';
import { Products } from './products';
import { Premium } from './premium';
import { Testimonials } from './testimonials';
import { BlogPreview } from './blog-preview';
import { LocationSection } from './location';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Products, Premium, Testimonials, BlogPreview, LocationSection],
  template: `
    <app-hero />
    <app-about />
    <app-products />
    <app-premium />
    <app-testimonials />
    <app-blog-preview />
    <app-location />
  `,
})
export class Home {}
