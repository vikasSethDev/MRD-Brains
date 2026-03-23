import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavbarComponent }       from './components/navbar/navbar.component';
import { HeroComponent }         from './components/hero/hero.component';
import { AboutComponent }        from './components/about/about.component';
import { StatsComponent }        from './components/stats/stats.component';
import { VyaparLedgerComponent } from './components/vyapar-ledger/vyapar-ledger.component';
import { ServicesComponent }     from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PricingComponent }      from './components/pricing/pricing.component';
import { TeamComponent }         from './components/team/team.component';
import { ContactComponent }      from './components/contact/contact.component';
import { FooterComponent }       from './components/footer/footer.component';
import { FormsModule }           from '@angular/forms';

declare const AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    NavbarComponent, HeroComponent, AboutComponent,
    StatsComponent, VyaparLedgerComponent, ServicesComponent,
    TestimonialsComponent, PricingComponent, TeamComponent,
    ContactComponent, FooterComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-stats></app-stats>
      <app-vyapar-ledger></app-vyapar-ledger>
      <app-services></app-services>
      <app-testimonials></app-testimonials>
      <app-pricing></app-pricing>
      <app-team></app-team>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>

    <!-- Scroll to top -->
    <button id="scrollTop" [class.show]="showTop" (click)="toTop()" aria-label="Back to top">
      <i class="bi bi-arrow-up"></i>
    </button>
  `,
  styles: [`
    #scrollTop {
      position:fixed;bottom:30px;right:30px;
      width:44px;height:44px;
      background:linear-gradient(135deg,var(--gold-l),var(--gold));
      color:var(--obsidian);border:none;border-radius:50%;
      display:flex;align-items:center;justify-content:center;
      cursor:pointer;z-index:9999;font-size:.9rem;font-weight:800;
      opacity:0;visibility:hidden;transition:all .35s cubic-bezier(.4,0,.2,1);
      box-shadow:0 4px 20px rgba(201,151,74,.2);
      &.show{opacity:1;visibility:visible}
      &:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(201,151,74,.45)}
    }
  `]
})
export class AppComponent implements OnInit {
  showTop = false;
  constructor(@Inject(PLATFORM_ID) private pid: object) {}
  ngOnInit() {
    if (isPlatformBrowser(this.pid) && typeof AOS !== 'undefined') {
      AOS.init({ duration: 780, once: true, offset: 50, easing: 'ease-out-cubic' });
    }
  }
  @HostListener('window:scroll') onScroll() {
    if (isPlatformBrowser(this.pid)) this.showTop = window.scrollY > 450;
  }
  toTop() {
    if (isPlatformBrowser(this.pid)) window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}