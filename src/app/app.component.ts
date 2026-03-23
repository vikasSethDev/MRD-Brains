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

declare const AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, NavbarComponent, HeroComponent, AboutComponent,
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
    <button id="scrollTop" [class.show]="showTop" (click)="toTop()" aria-label="Back to top">
      <i class="bi bi-arrow-up"></i>
    </button>
  `,
  styles: [`
    #scrollTop {
      position:fixed; bottom:28px; right:28px;
      width:42px; height:42px; background:var(--gold);
      color:var(--obsidian); border:none; border-radius:50%;
      display:flex; align-items:center; justify-content:center;
      cursor:pointer; z-index:9999; font-size:.9rem; font-weight:700;
      opacity:0; visibility:hidden; transition:all .3s ease;
      &.show{opacity:1;visibility:visible}
      &:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(212,168,83,.4)}
    }
  `]
})
export class AppComponent implements OnInit {
  showTop=false;
  constructor(@Inject(PLATFORM_ID) private pid:object){}
  ngOnInit(){
    if(isPlatformBrowser(this.pid)&&typeof AOS!=='undefined')
      AOS.init({duration:750,once:true,offset:60,easing:'ease-out-cubic'});
  }
  @HostListener('window:scroll') onScroll(){
    if(isPlatformBrowser(this.pid)) this.showTop=window.scrollY>400;
  }
  toTop(){if(isPlatformBrowser(this.pid))window.scrollTo({top:0,behavior:'smooth'});}
}
