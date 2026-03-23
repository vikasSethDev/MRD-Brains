import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true, imports:[CommonModule],
  template: `
    <section id="about" class="about">
      <div class="noise"></div>
      <div class="about-accent"></div>
      <div class="container">
        <div class="row g-5 align-items-center">

          <div class="col-lg-5" data-aos="fade-right" data-aos-duration="800">
            <div class="eyebrow">About the Studio</div>
            <h2 class="sec-h2">Empowering Business Through <em>Innovation</em></h2>
            <p class="sec-lead mb-5">MrD Brains Technology is Mumbai's go-to software partner — crafting scalable, beautiful technology solutions tailored precisely to each client's ambitions.</p>

            <div class="feat-list">
              <div class="feat-item" *ngFor="let f of feats; let i=index"
                   data-aos="fade-up" [attr.data-aos-delay]="i*80">
                <div class="fi-num">{{ (i+1).toString().padStart(2,'0') }}</div>
                <div class="fi-icon"><i [class]="f.icon"></i></div>
                <div class="fi-body">
                  <div class="fi-h">{{ f.title }}</div>
                  <div class="fi-p">{{ f.desc }}</div>
                </div>
              </div>
            </div>

            <a href="#contact" class="btn-gold mt-5 d-inline-flex">Start a Project <i class="bi bi-arrow-right"></i></a>
          </div>

          <div class="col-lg-7" data-aos="fade-left" data-aos-delay="150">
            <div class="about-card-wrap">
              <!-- Main card -->
              <div class="about-main-card">
                <div class="amc-top">
                  <div class="amc-logo-wrap">
                    <img src="assets/logo.png" alt="MrD Brains Technology" class="amc-logo">
                  </div>
                  <div class="amc-info">
                    <div class="amc-name">MrD Brains Technology</div>
                    <div class="amc-loc"><i class="bi bi-geo-alt-fill"></i> Khar East, Mumbai 400051</div>
                  </div>
                  <div class="amc-badge">Est. 2022</div>
                </div>
                <div class="amc-rule"></div>
                <div class="amc-tagline">
                  <span class="amc-tq">"</span>
                  Building tomorrow's software, today.
                </div>
                <div class="tech-grid">
                  <div class="tg-cell" *ngFor="let t of tech">
                    <i [class]="t.icon"></i>
                    <span>{{ t.name }}</span>
                  </div>
                </div>
              </div>
              <!-- Float cards -->
              <div class="float-badge fb1">
                <i class="bi bi-trophy-fill"></i>
                <div><b>3+ Years</b><small>of Excellence</small></div>
              </div>
              <div class="float-badge fb2">
                <div class="rating-stars">
                  <i class="bi bi-star-fill" *ngFor="let s of [1,2,3,4,5]"></i>
                </div>
                <div><b>5.0 Rating</b><small>Client satisfaction</small></div>
              </div>
              <!-- Decorative lines -->
              <div class="deco-line dl1"></div>
              <div class="deco-line dl2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding:120px 0; background:var(--obsidian-s);
      position:relative; overflow:hidden;
    }
    .about-accent {
      position:absolute; top:0; right:0; width:50%; height:3px;
      background:linear-gradient(90deg,transparent,var(--gold),transparent);
    }

    /* Features */
    .feat-list { display:flex; flex-direction:column; gap:0; }
    .feat-item {
      display:flex; align-items:flex-start; gap:16px;
      padding:18px 0; border-bottom:1px solid rgba(255,255,255,.06);
      position:relative; cursor:default;
      transition:all .28s ease;
      &:last-child { border-bottom:none; }
      &:hover { padding-left:8px; }
      &:hover .fi-icon { background:var(--gold-dim); border-color:var(--gold-ring); i{color:var(--gold);} }
    }
    .fi-num {
      font-family:'DM Mono',monospace; font-size:.65rem; font-weight:500;
      color:rgba(212,168,83,.35); line-height:1; padding-top:4px; flex-shrink:0; width:22px;
    }
    .fi-icon {
      width:38px; height:38px; flex-shrink:0;
      background:rgba(244,107,74,.08); border:1px solid rgba(244,107,74,.15);
      border-radius:9px; display:flex; align-items:center; justify-content:center;
      transition:all .28s;
      i { color:var(--coral); font-size:.95rem; }
    }
    .fi-h { font-family:'Syne',sans-serif; font-weight:700; font-size:.88rem; color:var(--ghost); margin-bottom:3px; }
    .fi-p { font-size:.8rem; color:var(--ghost-d); line-height:1.7; }

    /* Main card */
    .about-card-wrap { position:relative; padding:20px 0 60px; }
    .about-main-card {
      background:linear-gradient(135deg,var(--obsidian-l),var(--obsidian-m));
      border:1px solid rgba(212,168,83,.18); border-radius:22px;
      padding:28px; position:relative; overflow:hidden;
      box-shadow:0 0 0 1px rgba(212,168,83,.06), 0 24px 60px rgba(0,0,0,.4);
      &::before {
        content:''; position:absolute; top:0; left:0; right:0; height:1px;
        background:linear-gradient(90deg,transparent,rgba(212,168,83,.5),transparent);
      }
    }
    .amc-top { display:flex; align-items:center; gap:13px; margin-bottom:22px; }
    .amc-logo-wrap {
      width:50px; height:50px; flex-shrink:0;
      background:linear-gradient(135deg,rgba(212,168,83,.15),rgba(212,168,83,.05));
      border:1px solid rgba(212,168,83,.25); border-radius:12px;
      display:flex; align-items:center; justify-content:center;
    }
    .amc-logo { width:40px; height:40px; object-fit:contain; }
    .amc-name { font-family:'Syne',sans-serif; font-weight:700; font-size:.9rem; color:var(--ghost); }
    .amc-loc { font-size:.72rem; color:var(--ghost-d); margin-top:3px; i{color:var(--gold);font-size:.68rem} }
    .amc-badge {
      margin-left:auto; background:var(--gold-dim); color:var(--gold);
      border:1px solid var(--gold-ring); border-radius:50px;
      padding:4px 13px; font-family:'DM Mono',monospace;
      font-size:.66rem; font-weight:500; white-space:nowrap; flex-shrink:0;
    }
    .amc-rule { height:1px; background:rgba(255,255,255,.06); margin-bottom:18px; }
    .amc-tagline {
      font-family:'Cormorant Garamond',serif; font-style:italic; font-size:1.1rem;
      color:rgba(212,168,83,.6); margin-bottom:22px; letter-spacing:.02em;
    }
    .amc-tq { font-size:2rem; line-height:.5; vertical-align:middle; margin-right:4px; }
    .tech-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; }
    .tg-cell {
      display:flex; flex-direction:column; align-items:center; gap:7px;
      background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.07);
      border-radius:10px; padding:14px 8px; cursor:default;
      transition:all .25s ease;
      i { font-size:1.4rem; color:var(--coral); }
      span { font-family:'DM Mono',monospace; font-size:.66rem; color:var(--ghost-d); text-align:center; }
      &:hover { background:var(--gold-dim); border-color:var(--gold-ring); transform:translateY(-3px); i{color:var(--gold);} }
    }

    /* Float badges */
    .float-badge {
      position:absolute; display:flex; align-items:center; gap:10px;
      background:var(--obsidian-m); border:1px solid rgba(212,168,83,.2);
      border-radius:13px; padding:13px 17px;
      box-shadow:0 8px 32px rgba(0,0,0,.4);
      b { display:block; font-family:'Syne',sans-serif; font-weight:700; font-size:.88rem; color:var(--ghost); }
      small { font-size:.68rem; color:var(--ghost-d); }
      i { font-size:1.1rem; }
    }
    .fb1 { bottom:-10px; right:20px; animation:floatSlow 5s ease-in-out infinite; i{color:var(--gold)} }
    .fb2 { bottom:-10px; left:20px; animation:floatSlow 5s ease-in-out infinite 1.8s; }
    .rating-stars { i{color:var(--gold);font-size:.72rem;margin-right:1px} margin-bottom:3px; }

    /* Deco lines */
    .deco-line { position:absolute; background:linear-gradient(var(--gold),transparent); width:1px; }
    .dl1 { height:80px; top:0; left:20px; animation:lineGrow 1s ease-out .5s both; transform-origin:top; }
    .dl2 { height:60px; top:0; right:40px; animation:lineGrow 1s ease-out .8s both; transform-origin:top; }
  `]
})
export class AboutComponent {
  feats=[
    {icon:'bi bi-bar-chart-fill',title:'Expert IT Consulting',desc:'Strategic technology guidance for business growth, process optimisation and digital transformation.'},
    {icon:'bi bi-cpu-fill',title:'Custom Software Development',desc:'Precision-crafted desktop and web applications using .NET, Angular and React.'},
    {icon:'bi bi-shield-fill-check',title:'IT Infrastructure & Security',desc:'Secure, resilient cloud and networking infrastructure protecting your business 24/7.'},
  ];
  tech=[
    {icon:'bi bi-microsoft',name:'.NET / C#'},{icon:'bi bi-code-slash',name:'Angular'},
    {icon:'bi bi-app',name:'React'},{icon:'bi bi-cloud',name:'Azure'},
    {icon:'bi bi-database',name:'SQL Server'},{icon:'bi bi-server',name:'MongoDB'},
  ];
}
