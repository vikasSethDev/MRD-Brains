import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeroComponent }         from '../components/hero/hero.component';
import { StatsComponent }        from '../components/stats/stats.component';
import { ServicesComponent }     from '../components/services/services.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { PricingComponent }      from '../components/pricing/pricing.component';
import { ContactComponent }      from '../components/contact/contact.component';
import { MumbaiStripComponent } from '../components/mumbaiStrip/mumbai-strip.component';

declare const AOS: any;

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent, MumbaiStripComponent, StatsComponent,
    ServicesComponent, TestimonialsComponent, PricingComponent,
    ContactComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-mumbai-strip></app-mumbai-strip>
    <app-stats></app-stats>
    <app-services></app-services>
    <app-testimonials></app-testimonials>
    <app-pricing></app-pricing>
    <app-contact></app-contact>
  `,
})
export class HomePageComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private pid: object) {}
  ngOnInit() {
    if (isPlatformBrowser(this.pid)) {
      window.scrollTo(0, 0);
      if (typeof AOS !== 'undefined') AOS.refresh();
    }
  }
}