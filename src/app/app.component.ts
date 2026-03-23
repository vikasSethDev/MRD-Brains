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
import { PortfolioComponent } from './components/Portfolio/portfolio.component';

declare const AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    NavbarComponent, HeroComponent, AboutComponent,
    StatsComponent, VyaparLedgerComponent, ServicesComponent,
    PortfolioComponent, TestimonialsComponent, PricingComponent,
    TeamComponent, ContactComponent, FooterComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-stats></app-stats>
      <app-vyapar-ledger></app-vyapar-ledger>
      <app-services></app-services>
      <app-portfolio></app-portfolio>
      <app-testimonials></app-testimonials>
      <app-pricing></app-pricing>
      <app-team></app-team>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>

    <!-- Floating WhatsApp Button -->
    <div class="wa-float">
      <div class="wa-tooltip" *ngIf="showTooltip">
        <div class="wat-close" (click)="showTooltip=false">×</div>
        <div class="wat-text">👋 Hi! How can we help you?</div>
        <div class="wat-sub">Chat with us on WhatsApp</div>
        <div class="wat-arrow"></div>
      </div>
      <div class="wa-panel" *ngIf="waOpen">
        <div class="wap-header">
          <div class="wap-avatar">
            <img src="assets/logo.png" alt="MrD Brains">
            <span class="wap-status"></span>
          </div>
          <div class="wap-info">
            <div class="wap-name">MrD Brains Technology</div>
            <div class="wap-online"><span></span> Typically replies in minutes</div>
          </div>
          <button class="wap-close-btn" (click)="waOpen=false">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <div class="wap-body">
          <div class="wap-bubble">
            👋 Hello! Thanks for visiting MrD Brains Technology.<br><br>
            How can we help you today? We'd love to discuss your project!
          </div>
          <div class="wap-time">MrD Brains Team</div>
        </div>
        <div class="wap-quick">
          <button *ngFor="let q of quickReplies" (click)="sendWA(q.msg)">{{ q.label }}</button>
        </div>
        <a class="wap-cta" [href]="waLink" target="_blank" rel="noopener">
          <i class="bi bi-whatsapp"></i>
          Start Chat on WhatsApp
          <i class="bi bi-arrow-up-right"></i>
        </a>
      </div>
      <button class="wa-fab" (click)="toggleWA()" [class.open]="waOpen" aria-label="Chat on WhatsApp">
        <i class="bi bi-whatsapp wa-icon-wa"></i>
        <i class="bi bi-x-lg wa-icon-x"></i>
        <div class="wa-ripple"></div>
        <div class="wa-ripple r2"></div>
        <span class="wa-badge" *ngIf="!waOpen && showBadge">1</span>
      </button>
    </div>

    <!-- Scroll to top -->
    <button id="scrollTop" [class.show]="showTop" (click)="toTop()" aria-label="Back to top">
      <i class="bi bi-arrow-up"></i>
    </button>
  `,
  styles: [`
    #scrollTop {
      position:fixed;bottom:30px;right:30px;width:44px;height:44px;
      background:linear-gradient(135deg,var(--gold-l),var(--gold));
      color:var(--obsidian);border:none;border-radius:50%;
      display:flex;align-items:center;justify-content:center;
      cursor:pointer;z-index:9998;font-size:.9rem;font-weight:800;
      opacity:0;visibility:hidden;transition:all .35s cubic-bezier(.4,0,.2,1);
      box-shadow:0 4px 20px rgba(201,151,74,.2);
      &.show{opacity:1;visibility:visible}
      &:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(201,151,74,.45)}
    }

    /* WhatsApp Float Container */
    .wa-float {
      position:fixed;bottom:88px;right:24px;z-index:9999;
      display:flex;flex-direction:column;align-items:flex-end;gap:12px;
    }

    /* Tooltip */
    .wa-tooltip {
      background:#fff;border-radius:14px;padding:14px 36px 14px 16px;
      box-shadow:0 8px 40px rgba(0,0,0,.16);max-width:210px;position:relative;
      animation:revealUp .4s cubic-bezier(.16,1,.3,1);
    }
    .wat-close {
      position:absolute;top:8px;right:11px;
      font-size:1.1rem;color:#aaa;cursor:pointer;line-height:1;
      &:hover{color:#333}
    }
    .wat-text { font-family:'Syne',sans-serif;font-weight:700;font-size:.82rem;color:#1a1a1a;margin-bottom:3px; }
    .wat-sub  { font-size:.72rem;color:#888; }
    .wat-arrow {
      position:absolute;bottom:-8px;right:28px;width:0;height:0;
      border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff;
    }

    /* Panel */
    .wa-panel {
      width:310px;background:#fff;border-radius:18px;
      box-shadow:0 16px 60px rgba(0,0,0,.2);overflow:hidden;
      animation:revealUp .38s cubic-bezier(.16,1,.3,1);
    }
    .wap-header {
      display:flex;align-items:center;gap:11px;
      background:linear-gradient(135deg,#25D366,#128C7E);padding:16px 18px;
    }
    .wap-avatar {
      width:44px;height:44px;border-radius:50%;flex-shrink:0;position:relative;
      background:#fff;display:flex;align-items:center;justify-content:center;
      img{width:38px;height:38px;object-fit:contain;border-radius:50%}
    }
    .wap-status {
      position:absolute;bottom:1px;right:1px;width:11px;height:11px;
      background:#4ade80;border:2px solid #128C7E;border-radius:50%;
    }
    .wap-info { flex:1; }
    .wap-name { font-family:'Syne',sans-serif;font-weight:700;font-size:.86rem;color:#fff; }
    .wap-online {
      display:flex;align-items:center;gap:5px;font-size:.68rem;color:rgba(255,255,255,.8);margin-top:2px;
      span{width:5px;height:5px;border-radius:50%;background:#4ade80;animation:blink 1.8s ease-in-out infinite}
    }
    .wap-close-btn {
      background:none;border:none;cursor:pointer;color:rgba(255,255,255,.7);
      font-size:.8rem;padding:4px;transition:color .2s;&:hover{color:#fff}
    }
    .wap-body {
      padding:16px;background:#ECE5DD;
    }
    .wap-bubble {
      background:#fff;border-radius:0 12px 12px 12px;padding:12px 14px;
      font-size:.8rem;color:#333;line-height:1.65;
      box-shadow:0 1px 3px rgba(0,0,0,.07);display:inline-block;max-width:92%;
    }
    .wap-time { font-size:.64rem;color:#999;margin-top:5px;padding-left:4px; }
    .wap-quick {
      display:flex;flex-wrap:wrap;gap:6px;padding:11px 14px;border-top:1px solid #f0f0f0;
      button {
        background:none;border:1px solid #25D366;border-radius:50px;padding:5px 12px;
        font-size:.72rem;color:#25D366;cursor:pointer;transition:all .2s;
        font-family:'DM Sans',sans-serif;
        &:hover{background:#25D366;color:#fff}
      }
    }
    .wap-cta {
      display:flex;align-items:center;justify-content:center;gap:8px;
      background:#25D366;color:#fff !important;padding:14px;
      font-family:'Syne',sans-serif;font-weight:700;font-size:.8rem;
      transition:background .22s;text-decoration:none;
      i{font-size:.88rem}
      &:hover{background:#22c55e}
    }

    /* FAB button */
    .wa-fab {
      width:58px;height:58px;border-radius:50%;
      background:linear-gradient(135deg,#25D366,#128C7E);
      border:none;cursor:pointer;position:relative;
      display:flex;align-items:center;justify-content:center;
      box-shadow:0 6px 28px rgba(37,211,102,.45);
      transition:all .3s cubic-bezier(.4,0,.2,1);
      &:hover{transform:scale(1.1);box-shadow:0 10px 36px rgba(37,211,102,.6)}
      &.open{background:linear-gradient(135deg,#4b5563,#1f2937);box-shadow:0 6px 24px rgba(0,0,0,.3)}
    }
    .wa-icon-wa,.wa-icon-x {
      position:absolute;font-size:1.5rem;color:#fff;transition:all .28s cubic-bezier(.4,0,.2,1);
    }
    .wa-icon-x { font-size:.95rem;opacity:0;transform:rotate(-90deg); }
    .wa-fab.open .wa-icon-wa { opacity:0;transform:rotate(90deg); }
    .wa-fab.open .wa-icon-x  { opacity:1;transform:rotate(0deg); }
    .wa-ripple {
      position:absolute;inset:-7px;border-radius:50%;
      border:2px solid rgba(37,211,102,.35);
      animation:pulseRing 2.6s ease-out infinite;pointer-events:none;
    }
    .r2 { animation-delay:1.3s; }
    .wa-fab.open .wa-ripple { display:none; }
    .wa-badge {
      position:absolute;top:-2px;right:-2px;
      width:18px;height:18px;border-radius:50%;
      background:#ef4444;color:#fff;border:2px solid #fff;
      font-size:.6rem;font-weight:800;
      display:flex;align-items:center;justify-content:center;
    }

    @media(max-width:480px){
      .wa-float{bottom:80px;right:14px}
      .wa-panel{width:calc(100vw - 28px)}
      .wa-fab{width:52px;height:52px}
    }
  `]
})
export class AppComponent implements OnInit {
  showTop = false;
  waOpen = false;
  showBadge = true;
  showTooltip = false;

  readonly waNumber = '919372401266';
  readonly waDefaultMsg = "Hello MrD Brains Technology! I visited your website and I'm interested in discussing a project.";
  get waLink() { return `https://wa.me/${this.waNumber}?text=${encodeURIComponent(this.waDefaultMsg)}`; }

  quickReplies = [
    { label: '💻 Software Project', msg: "Hi! I need a custom software solution." },
    { label: '🤖 WhatsApp Bot',     msg: "Hi! I'm interested in WhatsApp automation." },
    { label: '☁️ IT Infrastructure', msg: "Hi! I need help with IT infrastructure." },
    { label: '💰 Get a Quote',      msg: "Hi! I'd like to get a project quote." },
  ];

  constructor(@Inject(PLATFORM_ID) private pid: object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.pid)) {
      if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 780, once: true, offset: 50, easing: 'ease-out-cubic' });
      }
      // Show tooltip after 5 seconds
      setTimeout(() => { if (!this.waOpen) this.showTooltip = true; }, 5000);
      // Auto-hide tooltip after 10 seconds
      setTimeout(() => { this.showTooltip = false; }, 15000);
    }
  }

  @HostListener('window:scroll') onScroll() {
    if (isPlatformBrowser(this.pid)) this.showTop = window.scrollY > 450;
  }

  toTop() {
    if (isPlatformBrowser(this.pid)) window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleWA() {
    this.waOpen = !this.waOpen;
    if (this.waOpen) { this.showBadge = false; this.showTooltip = false; }
  }

  sendWA(msg: string) {
    window.open(`https://wa.me/${this.waNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  }
}