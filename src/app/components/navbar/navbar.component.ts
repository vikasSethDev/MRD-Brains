import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Top ticker bar -->
    <div class="ticker-bar" [class.hidden]="pinned">
      <div class="ticker-track">
        <span class="ticker-inner" *ngFor="let _ of [1,2]">
          <span class="ti" *ngFor="let t of tickers">
            <i [class]="t.icon"></i> {{ t.text }}
            <span class="ti-sep">·</span>
          </span>
        </span>
      </div>
    </div>

    <nav class="nav" [class.pinned]="pinned">
      <div class="nav-shimmer"></div>
      <div class="container">
        <div class="nav-row">

          <!-- Brand -->
          <a class="brand" (click)="go('hero')">
            <div class="brand-mark">
              <img src="assets/logo.png" alt="MrD Brains">
              <div class="brand-mark-ring"></div>
            </div>
            <div class="brand-text">
              <span class="b-name">MrD Brains</span>
              <span class="b-tag">Technology · Est. 2022</span>
            </div>
          </a>

          <ul class="links">
            <li *ngFor="let l of links">
              <a (click)="go(l.id)" [class.active]="cur===l.id">
                <span class="lbl">{{ l.label }}</span>
                <span class="dot" *ngIf="l.badge">
                  <i class="bi bi-stars"></i>
                </span>
              </a>
            </li>
          </ul>

          <div class="nav-actions">
            <div class="nav-status d-none d-xl-flex">
              <span class="ns-dot"></span>
              <span>Available for projects</span>
            </div>
            <a class="btn-gold nav-cta d-none d-lg-inline-flex" (click)="go('contact')">
              Let's Talk <i class="bi bi-arrow-up-right"></i>
            </a>
            <button class="burger" [class.open]="open" (click)="toggle()" aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile drawer -->
    <div class="drawer" [class.open]="open">
      <div class="dr-top">
        <div class="dr-brand">
          <img src="assets/logo.png" alt="" class="dr-logo">
          <div>
            <div class="dr-name">MrD Brains Technology</div>
            <div class="dr-tag">Premium Software Studio</div>
          </div>
        </div>
        <button (click)="open=false" class="dr-close"><i class="bi bi-x-lg"></i></button>
      </div>
      <div class="dr-status">
        <span class="ns-dot"></span>
        <span>Available for new projects — Mumbai</span>
      </div>
      <nav class="dr-links">
        <a *ngFor="let l of links" (click)="go(l.id)">
          <div class="dla-left">
            <span>{{ l.label }}</span>
            <small *ngIf="l.sub">{{ l.sub }}</small>
          </div>
          <i class="bi bi-arrow-up-right"></i>
        </a>
      </nav>
      <div class="dr-footer">
        <a class="btn-gold" style="justify-content:center" (click)="go('contact')">
          Start a Project <i class="bi bi-arrow-right"></i>
        </a>
        <div class="dr-contact">
          <span><i class="bi bi-telephone-fill"></i> +91 937-240-1266</span>
          <span><i class="bi bi-geo-alt-fill"></i> Khar East, Mumbai</span>
        </div>
      </div>
    </div>
    <div class="veil" [class.on]="open" (click)="open=false"></div>
  `,
  styles: [`
    /* ── Ticker ── */
    .ticker-bar {
      height: 34px; background: linear-gradient(90deg,var(--obsidian-l),var(--obsidian-m));
      border-bottom: 1px solid rgba(201,151,74,.1);
      display: flex; align-items: center; overflow: hidden;
      position: fixed; top: 0; left: 0; right: 0; z-index: 901;
      transition: height .4s ease, opacity .4s ease;
      &.hidden { height: 0; opacity: 0; }
    }
    .ticker-track { display: flex; white-space: nowrap; animation: ticker 40s linear infinite; }
    .ticker-inner { display: flex; align-items: center; }
    .ti {
      display: inline-flex; align-items: center; gap: 6px; padding: 0 20px;
      font-family: var(--f-mono); font-size: .6rem; font-weight: 500;
      color: rgba(201,151,74,.7); letter-spacing: .08em; text-transform: uppercase;
      i { font-size: .65rem; color: var(--gold); }
    }
    .ti-sep { color: rgba(201,151,74,.3); margin-left: 20px; }

    /* ── Nav ── */
    .nav {
      position: fixed; top: 34px; left: 0; right: 0; z-index: 900;
      padding: 22px 0; transition: all .42s cubic-bezier(.4,0,.2,1);
      overflow: hidden;
    }
    .nav-shimmer {
      position: absolute; inset: 0; pointer-events: none;
      background: linear-gradient(180deg, rgba(8,7,6,.6) 0%, transparent 100%);
    }
    .nav.pinned {
      top: 0; padding: 14px 0;
      background: rgba(8,7,6,.92);
      backdrop-filter: blur(28px) saturate(1.9);
      border-bottom: 1px solid rgba(201,151,74,.1);
      box-shadow: 0 4px 32px rgba(0,0,0,.4);
    }
    .nav-row { display: flex; align-items: center; gap: 16px; }

    .brand {
      display: flex; align-items: center; gap: 12px;
      cursor: pointer; flex-shrink: 0;
    }
    .brand-mark {
      width: 42px; height: 42px; border-radius: 11px;
      background: linear-gradient(135deg,rgba(201,151,74,.15),rgba(201,151,74,.04));
      border: 1px solid rgba(201,151,74,.22);
      display: flex; align-items: center; justify-content: center;
      overflow: visible; position: relative;
      img { width: 36px; height: 36px; object-fit: contain; border-radius: 8px; }
    }
    .brand-mark-ring {
      position: absolute; inset: -4px; border-radius: 15px;
      border: 1px solid rgba(201,151,74,.15); pointer-events: none;
    }
    .b-name { display: block; font-family: var(--f-head); font-weight: 800; font-size: .9rem; color: var(--ghost); line-height: 1.1; }
    .b-tag  { display: block; font-family: var(--f-mono); font-size: .55rem; color: rgba(201,151,74,.55); letter-spacing: .16em; text-transform: uppercase; margin-top: 2px; }

    .links {
      display: flex; gap: 0; list-style: none; padding: 0; margin: 0 auto;
      a {
        display: flex; align-items: center; gap: 5px;
        padding: 9px 14px; border-radius: 6px;
        font-family: var(--f-head); font-weight: 600; font-size: .8rem;
        color: rgba(237,233,225,.45); letter-spacing: .015em;
        cursor: pointer; transition: all .22s ease; position: relative;
        .lbl { position: relative; z-index: 1; }
        .dot { display: flex; align-items: center; i { color: var(--gold); font-size: .6rem; } }
        &::after {
          content: ''; position: absolute; bottom: 5px; left: 14px; right: 14px;
          height: 1px; background: linear-gradient(90deg, var(--gold), var(--coral));
          transform: scaleX(0); transform-origin: left; transition: transform .24s ease;
        }
        &:hover { color: var(--ghost); }
        &:hover::after { transform: scaleX(1); }
        &.active { color: var(--gold); }
        &.active::after { transform: scaleX(1); }
      }
    }

    .nav-actions { display: flex; align-items: center; gap: 14px; }
    .nav-status {
      display: flex; align-items: center; gap: 7px;
      font-family: var(--f-mono); font-size: .6rem; color: var(--ghost-d);
      letter-spacing: .08em; text-transform: uppercase; white-space: nowrap;
    }
    .ns-dot {
      width: 7px; height: 7px; border-radius: 50%;
      background: #2ECC71; flex-shrink: 0;
      box-shadow: 0 0 0 3px rgba(46,204,113,.2);
      animation: blink 2.4s ease-in-out infinite;
    }
    .nav-cta { font-size: .74rem; padding: 11px 24px; }

    .burger {
      display: none; flex-direction: column; gap: 5px;
      background: none; border: 1px solid rgba(201,151,74,.2);
      border-radius: 7px; cursor: pointer; padding: 9px 10px; margin-left: 4px;
      span {
        display: block; width: 18px; height: 1.5px;
        background: rgba(237,233,225,.75); border-radius: 2px; transition: all .3s;
      }
      &.open span:nth-child(1){ transform: rotate(45deg) translate(4.5px,4.5px); }
      &.open span:nth-child(2){ opacity: 0; transform: scaleX(0); }
      &.open span:nth-child(3){ transform: rotate(-45deg) translate(4.5px,-4.5px); }
    }

    /* ── Drawer ── */
    .drawer {
      position: fixed; top: 0; right: 0; bottom: 0; width: 320px;
      background: var(--obsidian-m); border-left: 1px solid rgba(201,151,74,.1);
      padding: 28px 24px; z-index: 902;
      display: flex; flex-direction: column; gap: 6px;
      transform: translateX(100%); transition: transform .38s cubic-bezier(.4,0,.2,1);
      &.open { transform: none; box-shadow: -32px 0 80px rgba(0,0,0,.6); }
    }
    .dr-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
    .dr-brand { display: flex; align-items: center; gap: 10px; }
    .dr-logo { height: 38px; width: 38px; object-fit: contain; border-radius: 9px; background: var(--gold-dim); padding: 3px; }
    .dr-name { font-family: var(--f-head); font-weight: 700; font-size: .85rem; color: var(--ghost); }
    .dr-tag  { font-family: var(--f-mono); font-size: .56rem; color: rgba(201,151,74,.5); letter-spacing: .1em; text-transform: uppercase; margin-top: 2px; }
    .dr-close { background: none; border: 1px solid rgba(255,255,255,.08); border-radius: 7px; cursor: pointer; color: rgba(237,233,225,.4); padding: 7px 9px; font-size: .86rem; transition: all .2s; &:hover{color:var(--ghost);border-color:rgba(255,255,255,.2)} }
    .dr-status {
      display: flex; align-items: center; gap: 8px;
      background: rgba(46,204,113,.06); border: 1px solid rgba(46,204,113,.15);
      border-radius: 8px; padding: 9px 14px; margin-bottom: 10px;
      font-family: var(--f-mono); font-size: .62rem; color: rgba(46,204,113,.8); letter-spacing: .07em;
    }
    .dr-links { display: flex; flex-direction: column; gap: 2px; flex: 1;
      a {
        display: flex; align-items: center; justify-content: space-between;
        padding: 13px 16px; border-radius: 8px; cursor: pointer;
        font-family: var(--f-head); font-weight: 600; font-size: .9rem;
        color: rgba(237,233,225,.55); border: 1px solid transparent;
        transition: all .22s;
        .dla-left { display: flex; flex-direction: column; gap: 2px; }
        small { font-family: var(--f-mono); font-size: .56rem; color: var(--ghost-d); letter-spacing: .08em; text-transform: uppercase; }
        i { font-size: .78rem; opacity: 0; transform: translate(-4px,2px); transition: all .22s; }
        &:hover { color: var(--gold); border-color: rgba(201,151,74,.12); background: rgba(201,151,74,.05); i{opacity:1;transform:none} }
      }
    }
    .dr-footer { border-top: 1px solid rgba(255,255,255,.06); padding-top: 20px; display: flex; flex-direction: column; gap: 14px; }
    .dr-contact {
      display: flex; flex-direction: column; gap: 7px;
      span { display: flex; align-items: center; gap: 8px; font-family: var(--f-mono); font-size: .62rem; color: var(--ghost-d); letter-spacing: .06em; i { color: var(--gold); font-size: .7rem; } }
    }

    .veil { position: fixed; inset: 0; background: rgba(0,0,0,.7); z-index: 899; opacity: 0; visibility: hidden; transition: all .35s; pointer-events: none; backdrop-filter: blur(4px); &.on{opacity:1;visibility:visible;pointer-events:auto} }

    @media(max-width:1099px) {
      .links { display: none !important; }
      .burger { display: flex; }
    }
    @media(max-width:767px) { .ticker-bar { display: none; } .nav { top: 0; } }
  `]
})
export class NavbarComponent {
  pinned = false; open = false; cur = 'hero';
  tickers = [
    { icon: 'bi bi-geo-alt-fill', text: 'Mumbai, Maharashtra — Khar East' },
    { icon: 'bi bi-check-circle-fill', text: 'ISO-grade Delivery Standards' },
    { icon: 'bi bi-whatsapp', text: 'WhatsApp Automation & AI Solutions Now Available' },
    { icon: 'bi bi-telephone-fill', text: '+91 937-240-1266' },
    { icon: 'bi bi-stars', text: 'New: Vyapar Ledger — Free Download' },
  ];
  links = [
    { id: 'hero',    label: 'Home',      sub: 'Welcome', badge: false },
    { id: 'about',   label: 'About',     sub: 'Our story', badge: false },
    { id: 'product', label: 'Products',  sub: 'Vyapar Ledger', badge: false },
    { id: 'services',label: 'Services',  sub: 'What we do', badge: false },
    { id: 'team',    label: 'Team',      sub: 'The people', badge: false },
    { id: 'contact', label: 'Contact',   sub: 'Get in touch', badge: false },
  ];
  constructor(@Inject(PLATFORM_ID) private pid: object) {}
  @HostListener('window:scroll') onScroll() {
    if (!isPlatformBrowser(this.pid)) return;
    this.pinned = window.scrollY > 60;
    for (let i = this.links.length - 1; i >= 0; i--) {
      const el = document.getElementById(this.links[i].id);
      if (el && el.getBoundingClientRect().top <= 100) { this.cur = this.links[i].id; break; }
    }
  }
  go(id: string) {
    if (!isPlatformBrowser(this.pid)) return;
    this.open = false; document.body.style.overflow = '';
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  }
  toggle() {
    this.open = !this.open;
    if (isPlatformBrowser(this.pid)) document.body.style.overflow = this.open ? 'hidden' : '';
  }
}