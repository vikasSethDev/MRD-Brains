import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="nav" [class.pinned]="pinned">
      <div class="container">
        <div class="nav-row">
          <a class="brand" (click)="go('hero')">
            <div class="brand-mark">
              <img src="assets/logo.png" alt="MrD Brains">
            </div>
            <div class="brand-text">
              <span class="b-name">MrD Brains</span>
              <span class="b-tag">Technology</span>
            </div>
          </a>

          <ul class="links">
            <li *ngFor="let l of links">
              <a (click)="go(l.id)" [class.active]="cur===l.id">
                <span>{{ l.label }}</span>
              </a>
            </li>
          </ul>

          <a class="btn-gold nav-cta d-none d-lg-inline-flex" (click)="go('contact')">
            Let's Talk <i class="bi bi-arrow-up-right"></i>
          </a>

          <button class="burger" [class.open]="open" (click)="toggle()" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>

    <div class="drawer" [class.open]="open">
      <div class="dr-top">
        <img src="assets/logo.png" alt="" class="dr-logo">
        <button (click)="open=false" class="dr-close"><i class="bi bi-x-lg"></i></button>
      </div>
      <nav class="dr-links">
        <a *ngFor="let l of links" (click)="go(l.id)">
          <span>{{ l.label }}</span>
          <i class="bi bi-arrow-up-right"></i>
        </a>
      </nav>
      <a class="btn-gold mt-auto" style="justify-content:center" (click)="go('contact')">
        Start a Project
      </a>
    </div>
    <div class="veil" [class.on]="open" (click)="open=false"></div>
  `,
  styles: [`
    .nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 900;
      padding: 20px 0;
      transition: all .4s cubic-bezier(.4,0,.2,1);
    }
    .nav.pinned {
      padding: 12px 0;
      background: rgba(12,10,8,.88);
      backdrop-filter: blur(24px) saturate(1.8);
      border-bottom: 1px solid rgba(212,168,83,.12);
    }
    .nav-row { display:flex; align-items:center; gap:20px; }

    .brand {
      display:flex; align-items:center; gap:11px;
      cursor:pointer; flex-shrink:0; text-decoration:none;
    }
    .brand-mark {
      width:40px; height:40px; border-radius:10px;
      background: linear-gradient(135deg,rgba(212,168,83,.15),rgba(212,168,83,.05));
      border: 1px solid rgba(212,168,83,.25);
      display:flex; align-items:center; justify-content:center;
      overflow:hidden;
      img { width:34px; height:34px; object-fit:contain; }
    }
    .b-name { display:block; font-family:'Syne',sans-serif; font-weight:700; font-size:.9rem; color:#F0EDE7; line-height:1.1; }
    .b-tag  { display:block; font-family:'DM Mono',monospace; font-size:.58rem; color:rgba(212,168,83,.7); letter-spacing:.12em; text-transform:uppercase; }

    .links {
      display:flex; gap:0; list-style:none; padding:0; margin:0 auto;
      a {
        display:block; padding:9px 15px; border-radius:6px;
        font-family:'Syne',sans-serif; font-weight:600; font-size:.82rem;
        color:rgba(240,237,231,.55); letter-spacing:.02em;
        cursor:pointer; transition:all .22s ease; position:relative;
        span { position:relative; z-index:1; }
        &::after {
          content:''; position:absolute; bottom:4px; left:15px; right:15px;
          height:1px; background:var(--gold);
          transform:scaleX(0); transform-origin:left;
          transition:transform .22s ease;
        }
        &:hover { color:#F0EDE7; }
        &:hover::after { transform:scaleX(1); }
        &.active { color:var(--gold); }
        &.active::after { transform:scaleX(1); }
      }
    }

    .nav-cta { font-size:.78rem; padding:11px 22px; }

    .burger {
      display:none; flex-direction:column; gap:5px;
      background:none; border:1px solid rgba(212,168,83,.2);
      border-radius:7px; cursor:pointer; padding:8px 9px; margin-left:auto;
      span {
        display:block; width:18px; height:1.5px;
        background:rgba(240,237,231,.8); border-radius:2px; transition:all .28s;
      }
      &.open span:nth-child(1){ transform:rotate(45deg) translate(4.5px,4.5px); }
      &.open span:nth-child(2){ opacity:0; }
      &.open span:nth-child(3){ transform:rotate(-45deg) translate(4.5px,-4.5px); }
    }

    .drawer {
      position:fixed; top:0; right:0; bottom:0; width:300px;
      background:var(--obsidian-m); border-left:1px solid rgba(212,168,83,.12);
      padding:28px; z-index:901; display:flex; flex-direction:column; gap:4px;
      transform:translateX(100%); transition:transform .36s cubic-bezier(.4,0,.2,1);
      &.open { transform:none; }
    }
    .dr-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:28px; }
    .dr-logo { height:36px; object-fit:contain; border-radius:8px; }
    .dr-close { background:none; border:1px solid rgba(255,255,255,.1); border-radius:7px; cursor:pointer; color:rgba(240,237,231,.5); padding:6px 8px; font-size:.88rem; transition:all .2s; &:hover{color:#fff;border-color:rgba(255,255,255,.3)} }
    .dr-links { display:flex; flex-direction:column; gap:2px;
      a {
        display:flex; align-items:center; justify-content:space-between;
        padding:13px 16px; border-radius:8px; cursor:pointer;
        font-family:'Syne',sans-serif; font-weight:600; font-size:.92rem;
        color:rgba(240,237,231,.65); border:1px solid transparent;
        transition:all .2s;
        i { font-size:.8rem; opacity:0; transform:translateX(-4px); transition:all .2s; }
        &:hover { color:var(--gold); border-color:rgba(212,168,83,.15); background:rgba(212,168,83,.05); i{opacity:1;transform:none} }
      }
    }

    .veil { position:fixed; inset:0; background:rgba(0,0,0,.6); z-index:899; opacity:0; visibility:hidden; transition:all .3s; pointer-events:none; &.on{opacity:1;visibility:visible;pointer-events:auto} }

    @media(max-width:991px) {
      .burger { display:flex; }
      .links  { display:none !important; }
    }
  `]
})
export class NavbarComponent {
  pinned=false; open=false; cur='hero';
  links=[
    {id:'hero',label:'Home'},{id:'about',label:'About'},
    {id:'product',label:'Products'},{id:'services',label:'Services'},
    {id:'team',label:'Team'},{id:'contact',label:'Contact'},
  ];
  constructor(@Inject(PLATFORM_ID) private pid:object){}
  @HostListener('window:scroll') onScroll(){
    if(!isPlatformBrowser(this.pid))return;
    this.pinned=window.scrollY>60;
    for(let i=this.links.length-1;i>=0;i--){
      const el=document.getElementById(this.links[i].id);
      if(el&&el.getBoundingClientRect().top<=90){this.cur=this.links[i].id;break;}
    }
  }
  go(id:string){
    if(!isPlatformBrowser(this.pid))return;
    this.open=false; document.body.style.overflow='';
    const el=document.getElementById(id);
    if(el) window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-72,behavior:'smooth'});
  }
  toggle(){
    this.open=!this.open;
    if(isPlatformBrowser(this.pid)) document.body.style.overflow=this.open?'hidden':'';
  }
}
