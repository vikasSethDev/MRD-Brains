import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero">
      <!-- Premium layered bg -->
      <div class="noise"></div>
      <div class="hero-grid"></div>
      <div class="blob blob1"></div>
      <div class="blob blob2"></div>
      <div class="blob blob3"></div>
      <!-- Scan line animation -->
      <div class="scan-line"></div>

      <div class="container" style="position:relative;z-index:2">
        <div class="hero-inner">
          <!-- Left -->
          <div class="hero-left">
            <div class="eyebrow animate-in" style="animation-delay:.1s">
              Mumbai's Finest Software Studio
            </div>

            <h1 class="hero-h1">
              <span class="h1-line animate-in" style="animation-delay:.2s">We Craft</span>
              <span class="h1-em animate-in" style="animation-delay:.32s">
                <em>{{ typed }}</em><span class="caret"></span>
              </span>
              <span class="h1-line h1-dim animate-in" style="animation-delay:.44s">Software</span>
            </h1>

            <p class="hero-sub animate-in" style="animation-delay:.56s">
              Custom .NET, Angular &amp; React solutions — from enterprise desktop tools to cloud-native platforms.
              <strong>Khar East, Mumbai.</strong>
            </p>

            <!-- WhatsApp + AI tagline -->
            <div class="hero-wa-tag animate-in" style="animation-delay:.64s">
              <div class="wa-tag-icon"><i class="bi bi-whatsapp"></i></div>
              <span>Now empowering businesses with <strong>WhatsApp Automation</strong> &amp; <strong>AI-driven solutions.</strong></span>
            </div>

            <!-- Feature highlights -->
            <div class="hero-highlights animate-in" style="animation-delay:.72s">
              <div class="hh-item" *ngFor="let h of highlights">
                <i [class]="h.icon"></i>
                <span>{{ h.text }}</span>
              </div>
            </div>

            <div class="hero-ctas animate-in" style="animation-delay:.8s">
              <a href="#contact" class="btn-gold" (click)="smooth($event,'contact')">
                Start a Project <i class="bi bi-arrow-right"></i>
              </a>
              <a href="#services" class="btn-outline" (click)="smooth($event,'services')">
                Explore Services
              </a>
            </div>

            <div class="hero-trust animate-in" style="animation-delay:.9s">
              <div class="trust-avatars">
                <div class="ta" style="background:linear-gradient(135deg,#D4A853,#F46B4A)">T</div>
                <div class="ta" style="background:linear-gradient(135deg,#F46B4A,#D4A853)">V</div>
                <div class="ta" style="background:linear-gradient(135deg,#D4A853,#c08d3f)">M</div>
              </div>
              <div class="trust-text">
                <div class="trust-stars">
                  <i class="bi bi-star-fill" *ngFor="let s of [1,2,3,4,5]"></i>
                </div>
                <span>Trusted by <strong>5+ businesses</strong> in Mumbai</span>
              </div>
            </div>
          </div>

          <!-- Right visual -->
          <div class="hero-visual animate-in d-none d-lg-block" style="animation-delay:.3s">
            <!-- Rotating ring -->
            <div class="ring ring-outer"></div>
            <div class="ring ring-inner"></div>

            <!-- Central logo pod -->
            <div class="logo-pod">
              <div class="logo-pod-inner">
                <img src="assets/logo.png" alt="MrD Brains Technology" class="pod-logo">
              </div>
              <div class="pod-pulse"></div>
              <div class="pod-pulse p2"></div>
            </div>

            <!-- Floating stat cards -->
            <div class="stat-card sc1">
              <div class="sc-icon"><i class="bi bi-folder2-open"></i></div>
              <div><div class="sc-val">15+</div><div class="sc-lbl">Projects</div></div>
            </div>
            <div class="stat-card sc2">
              <div class="sc-icon"><i class="bi bi-people"></i></div>
              <div><div class="sc-val">5+</div><div class="sc-lbl">Happy Clients</div></div>
            </div>
            <div class="stat-card sc3">
              <div class="sc-icon"><i class="bi bi-award"></i></div>
              <div><div class="sc-val">3+</div><div class="sc-lbl">Years</div></div>
            </div>

            <!-- WhatsApp + AI chip -->
            <div class="wa-chip">
              <i class="bi bi-whatsapp"></i>
              <span>WhatsApp &amp; AI</span>
              <span class="wa-dot"></span>
            </div>

            <!-- Tech orbit chips -->
            <div class="orbit-chip oc1">
              <i class="bi bi-microsoft"></i> .NET
            </div>
            <div class="orbit-chip oc2">
              <i class="bi bi-code-slash"></i> Angular
            </div>
            <div class="orbit-chip oc3">
              <i class="bi bi-cloud"></i> Azure
            </div>
            <div class="orbit-chip oc4">
              <i class="bi bi-app"></i> React
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom stats strip -->
      <div class="hero-strip">
        <div class="strip-line"></div>
        <div class="container">
          <div class="strip-row">
            <div class="strip-item" *ngFor="let s of stats; let i=index" [style.animation-delay]="(i*0.1)+'s'">
              <span class="strip-val">{{ s.v }}</span>
              <span class="strip-lbl">{{ s.l }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height:100vh; background:var(--obsidian);
      display:flex; flex-direction:column; justify-content:center;
      padding-top:88px; overflow:hidden; position:relative;
    }

    /* Layered background */
    .hero-grid {
      position:absolute; inset:0; pointer-events:none;
      background-image:
        linear-gradient(rgba(212,168,83,.04) 1px, transparent 1px),
        linear-gradient(90deg,rgba(212,168,83,.04) 1px, transparent 1px);
      background-size:60px 60px;
    }
    .blob {
      position:absolute; border-radius:50%; pointer-events:none; filter:blur(120px);
      animation:blobMorph 12s ease-in-out infinite;
    }
    .blob1 { width:600px;height:600px;background:rgba(212,168,83,.06);top:-200px;right:-100px;animation-delay:0s; }
    .blob2 { width:400px;height:400px;background:rgba(244,107,74,.05);bottom:-100px;left:-100px;animation-delay:4s; }
    .blob3 { width:280px;height:280px;background:rgba(212,168,83,.04);top:40%;left:35%;animation-delay:8s; }
    .scan-line {
      position:absolute; left:0; right:0; height:1px;
      background:linear-gradient(90deg,transparent,rgba(212,168,83,.25),transparent);
      animation:scanLine 8s linear infinite; pointer-events:none; z-index:1;
    }

    /* Entrance animations */
    .animate-in {
      opacity:0; animation:revealUp .7s cubic-bezier(.16,1,.3,1) forwards;
    }

    /* Layout */
    .hero-inner {
      display:grid; grid-template-columns:1fr 1fr;
      gap:64px; align-items:center; padding:60px 0 24px; position:relative; z-index:2;
    }
    @media(max-width:991px){.hero-inner{grid-template-columns:1fr;gap:48px}}

    /* Heading */
    .hero-h1 {
      display:flex; flex-direction:column;
      font-family:'Syne',sans-serif;
      font-size:clamp(3rem,5.8vw,5rem);
      font-weight:800; line-height:1.02; letter-spacing:-.03em;
      margin:14px 0 22px;
    }
    .h1-line { color:var(--ghost); }
    .h1-em {
      em {
        font-family:'Cormorant Garamond',serif;
        font-style:italic; font-weight:300;
        color:var(--gold); font-size:1.1em; letter-spacing:-.01em;
      }
    }
    .h1-dim { color:rgba(240,237,231,.14); }
    .caret {
      display:inline-block; width:3px; height:.85em;
      background:var(--coral); vertical-align:middle; margin-left:3px;
      animation:revealFade .7s step-end infinite;
    }

    .hero-sub {
      font-size:1rem; font-weight:300; color:var(--ghost-d);
      max-width:460px; line-height:1.82; margin-bottom:20px;
      strong { color:var(--ghost); font-weight:500; }
    }

    /* WhatsApp + AI tagline */
    .hero-wa-tag {
      display:flex; align-items:flex-start; gap:12px;
      background:linear-gradient(135deg,rgba(37,211,102,.08),rgba(37,211,102,.04));
      border:1px solid rgba(37,211,102,.2);
      border-radius:12px; padding:12px 16px;
      margin-bottom:16px; max-width:480px;
      .wa-tag-icon {
        width:32px; height:32px; flex-shrink:0;
        background:rgba(37,211,102,.14); border-radius:8px;
        display:flex; align-items:center; justify-content:center;
        i { color:#25D366; font-size:1rem; }
      }
      span {
        font-size:.84rem; color:var(--ghost-d); line-height:1.6;
        strong { color:var(--ghost); font-weight:600; }
      }
    }

    /* Feature highlights grid */
    .hero-highlights {
      display:grid; grid-template-columns:1fr 1fr;
      gap:8px; margin-bottom:28px; max-width:480px;
    }
    @media(max-width:480px){ .hero-highlights{grid-template-columns:1fr} }
    .hh-item {
      display:flex; align-items:center; gap:8px;
      background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.07);
      border-radius:8px; padding:9px 12px;
      font-size:.76rem; color:var(--ghost-d); transition:all .22s;
      i { font-size:.82rem; color:var(--gold); flex-shrink:0; }
      &:hover { border-color:rgba(212,168,83,.2); color:var(--ghost); background:rgba(212,168,83,.05); }
    }

    .hero-ctas { display:flex; gap:12px; flex-wrap:wrap; margin-bottom:36px; }

    /* Trust row */
    .hero-trust { display:flex; align-items:center; gap:14px; }
    .trust-avatars { display:flex; }
    .ta {
      width:32px; height:32px; border-radius:50%;
      border:2px solid var(--obsidian);
      display:flex; align-items:center; justify-content:center;
      font-family:'Syne',sans-serif; font-weight:700; font-size:.78rem; color:#fff;
      margin-left:-8px;
      &:first-child { margin-left:0; }
    }
    .trust-stars { i{color:var(--gold);font-size:.72rem;margin-right:1px} margin-bottom:2px; }
    .trust-text { font-size:.78rem; color:var(--ghost-d); strong{color:var(--ghost);font-weight:600} }

    /* Visual: rings + logo pod */
    .hero-visual { position:relative; height:480px; }
    .ring {
      position:absolute; border-radius:50%;
      top:50%; left:50%; transform:translate(-50%,-50%);
      border:1px solid rgba(212,168,83,.15);
    }
    .ring-outer {
      width:380px; height:380px;
      animation:rotateSlow 30s linear infinite;
      border-style:dashed;
      &::before { content:''; position:absolute; width:8px; height:8px; background:var(--gold); border-radius:50%; top:-4px; left:50%; transform:translateX(-50%); box-shadow:0 0 10px var(--gold); }
    }
    .ring-inner {
      width:250px; height:250px;
      animation:rotateSlow 20s linear infinite reverse;
      border-color:rgba(244,107,74,.12);
      &::before { content:''; position:absolute; width:6px; height:6px; background:var(--coral); border-radius:50%; bottom:-3px; right:-3px; box-shadow:0 0 8px var(--coral); }
    }
    .logo-pod {
      position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
      z-index:3; display:flex; align-items:center; justify-content:center;
    }
    .logo-pod-inner {
      width:130px; height:130px;
      background:#fff;
      border:2px solid rgba(212,168,83,.35); border-radius:28px;
      box-shadow:0 0 0 6px rgba(212,168,83,.08);
      display:flex; align-items:center; justify-content:center;
      animation:goldGlow 4s ease-in-out infinite;
      img { width:96px; height:96px; object-fit:contain; }
    }
    .pod-pulse {
      position:absolute; width:130px; height:130px; border-radius:28px;
      border:1px solid rgba(212,168,83,.4);
      animation:pulseRing 3s ease-out infinite;
    }
    .p2 { animation-delay:1.5s; }

    /* Floating stat cards */
    .stat-card {
      position:absolute; z-index:4;
      display:flex; align-items:center; gap:10px;
      background:rgba(19,17,9,.9);
      border:1px solid rgba(212,168,83,.2);
      border-radius:12px; padding:13px 18px;
      backdrop-filter:blur(20px);
      animation:floatSlow 5s ease-in-out infinite;
    }
    .sc-icon { width:36px; height:36px; background:var(--gold-dim); border-radius:9px; display:flex; align-items:center; justify-content:center; i{color:var(--gold);font-size:1.1rem} flex-shrink:0; }
    .sc-val { font-family:'Syne',sans-serif; font-weight:800; font-size:1.1rem; color:var(--ghost); line-height:1; }
    .sc-lbl { font-size:.66rem; color:var(--ghost-d); font-family:'DM Mono',monospace; text-transform:uppercase; letter-spacing:.08em; }
    .sc1 { top:60px; left:10px; animation-delay:0s; }
    .sc2 { top:60px; right:10px; animation-delay:1.2s; }
    .sc3 { bottom:110px; left:30px; animation-delay:2.4s; }

    /* WhatsApp chip on visual */
    .wa-chip {
      position:absolute; z-index:4;
      bottom:50px; right:10px;
      display:flex; align-items:center; gap:7px;
      background:rgba(37,211,102,.1); border:1px solid rgba(37,211,102,.25);
      border-radius:50px; padding:8px 14px;
      font-family:'DM Mono',monospace; font-size:.72rem; color:#25D366;
      animation:floatSlow 5s ease-in-out infinite 3s;
      i { font-size:.9rem; }
      .wa-dot { width:6px; height:6px; background:#25D366; border-radius:50%; animation:blink 1.5s infinite; }
    }
    @keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}

    /* Orbit chips */
    .orbit-chip {
      position:absolute; z-index:4;
      display:flex; align-items:center; gap:6px;
      background:rgba(19,17,9,.85);
      border:1px solid rgba(255,255,255,.08);
      border-radius:50px; padding:7px 14px;
      font-family:'DM Mono',monospace; font-size:.72rem; font-weight:500;
      color:var(--ghost-d); backdrop-filter:blur(12px);
      i { color:var(--coral); }
    }
    .oc1 { bottom:200px; right:20px; animation:floatSlow 6s ease-in-out infinite .5s; }
    .oc2 { bottom:150px; right:60px; animation:floatSlow 6s ease-in-out infinite 1.5s; }
    .oc3 { bottom:90px; right:10px; animation:floatSlow 6s ease-in-out infinite 2.5s; }
    .oc4 { bottom:40px; right:80px; animation:floatSlow 6s ease-in-out infinite 3.5s; }
    @media(max-width:1199px){ .orbit-chip,.sc3,.wa-chip{display:none} }

    /* Stats strip */
    .hero-strip {
      position:relative; z-index:2;
      background:rgba(255,255,255,.02);
      border-top:1px solid rgba(212,168,83,.1);
      padding:32px 0; margin-top:48px;
    }
    .strip-line {
      position:absolute; top:0; left:0; right:0; height:1px;
      background:linear-gradient(90deg,transparent,var(--gold) 30%,var(--coral) 70%,transparent);
    }
    .strip-row { display:grid; grid-template-columns:repeat(5,1fr); }
    @media(max-width:767px){.strip-row{grid-template-columns:repeat(3,1fr)}}
    .strip-item {
      display:flex; flex-direction:column; align-items:center; gap:3px;
      padding:8px 10px; border-right:1px solid rgba(255,255,255,.05);
      &:last-child{border-right:none}
      opacity:0; animation:counterUp .6s cubic-bezier(.16,1,.3,1) .9s forwards;
    }
    .strip-val { font-family:'Syne',sans-serif; font-size:2.1rem; font-weight:800; color:var(--ghost); line-height:1; background:linear-gradient(135deg,#fff,rgba(255,255,255,.7));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }
    .strip-lbl { font-family:'DM Mono',monospace; font-size:.64rem; color:var(--ghost-d); text-transform:uppercase; letter-spacing:.1em; }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  words=['Powerful','Elegant','Scalable','Intelligent','Future-Ready'];
  wi=0; ci=0; del=false; typed='';
  private t: any;

  highlights = [
    { icon:'bi bi-whatsapp',       text:'WhatsApp Automation' },
    { icon:'bi bi-robot',          text:'AI Chatbot Integration' },
    { icon:'bi bi-bell-fill',      text:'Order & Payment Reminders' },
    { icon:'bi bi-graph-up-arrow', text:'Smart Business Insights' },
  ];

  stats=[{v:'15+',l:'Projects'},{v:'5+',l:'Clients'},{v:'3+',l:'Years'},{v:'200+',l:'Hrs Support'},{v:'5',l:'Team'}];

  ngOnInit(){this.type();}
  ngOnDestroy(){clearTimeout(this.t);}
  type(){
    const w=this.words[this.wi];
    this.typed=this.del?w.substring(0,--this.ci):w.substring(0,++this.ci);
    if(!this.del&&this.ci===w.length){this.t=setTimeout(()=>{this.del=true;this.type();},2200);return;}
    if(this.del&&this.ci===0){this.del=false;this.wi=(this.wi+1)%this.words.length;}
    this.t=setTimeout(()=>this.type(),this.del?52:92);
  }
  smooth(e:Event,id:string){e.preventDefault();document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});}
  constructor(@Inject(PLATFORM_ID) private pid:object){}
}