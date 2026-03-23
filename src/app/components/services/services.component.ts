import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true, imports:[CommonModule],
  template: `
    <section id="services" class="svc-sec">
      <div class="noise"></div>
      <div class="container">

        <div class="svc-header" data-aos="fade-up">
          <div>
            <div class="eyebrow">What We Do</div>
            <h2 class="sec-h2">Our <em>Services</em></h2>
          </div>
          <p class="sec-lead" style="max-width:360px">
            Empowering your business with robust technology, tailored software and reliable support.
          </p>
        </div>

        <!-- Spotlight -->
        <div class="spotlight" data-aos="fade-up" data-aos-delay="80">
          <div class="sp-left">
            <div class="sp-num">{{ (cur+1).toString().padStart(2,'0') }}</div>
            <div class="sp-ico" [class.wa-ico]="svcs[cur].isWa">
              <i [class]="svcs[cur].icon"></i>
            </div>
            <div class="sp-new-badge" *ngIf="svcs[cur].isNew">
              <i class="bi bi-stars"></i> New Service
            </div>
            <h3 class="sp-h">{{ svcs[cur].title }}</h3>
            <p class="sp-p">{{ svcs[cur].desc }}</p>
            <ul class="sp-pts">
              <li *ngFor="let p of svcs[cur].pts">
                <span class="sp-check"><i class="bi bi-check-lg"></i></span>{{ p }}
              </li>
            </ul>
            <a href="#contact" class="btn-gold mt-4 d-inline-flex">
              Get a Quote <i class="bi bi-arrow-right"></i>
            </a>
          </div>
          <div class="sp-visual" [class.wa-visual]="svcs[cur].isWa">
            <i [class]="svcs[cur].icon + ' sp-big'"></i>
            <div class="sp-ring sr1"></div>
            <div class="sp-ring sr2"></div>
          </div>
        </div>

        <!-- Service grid -->
        <div class="svc-grid">
          <div class="svc-card"
               *ngFor="let s of svcs; let i=index"
               [class.active]="i===cur"
               [class.wa-card]="s.isWa"
               (click)="cur=i"
               data-aos="fade-up"
               [attr.data-aos-delay]="(i%3)*70">
            <div class="sc-top">
              <div class="sc-ico" [class.wa-ico-sm]="s.isWa"><i [class]="s.icon"></i></div>
              <div class="sc-meta">
                <span class="sc-num">{{ (i+1).toString().padStart(2,'0') }}</span>
                <span class="sc-new-chip" *ngIf="s.isNew">
                  <i class="bi bi-stars"></i> New
                </span>
              </div>
            </div>
            <div class="sc-h">{{ s.title }}</div>
            <p class="sc-p">{{ s.short }}</p>
            <div class="sc-cta">Explore <i class="bi bi-arrow-right"></i></div>
            <div class="sc-bar"></div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .svc-sec { padding:120px 0; background:var(--obsidian-s); position:relative; }

    .svc-header {
      display:flex; align-items:flex-end; justify-content:space-between;
      gap:32px; margin-bottom:52px;
    }
    @media(max-width:767px){ .svc-header{flex-direction:column;align-items:flex-start} }

    /* ── Spotlight ── */
    .spotlight {
      display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center;
      background:linear-gradient(135deg,var(--obsidian-l),var(--obsidian-m));
      border:1px solid rgba(212,168,83,.15); border-radius:24px; padding:48px;
      margin-bottom:48px; position:relative; overflow:hidden;
      &::before {
        content:''; position:absolute; top:0; left:0; right:0; height:1px;
        background:linear-gradient(90deg,transparent,rgba(212,168,83,.4),transparent);
      }
    }
    @media(max-width:767px){ .spotlight{grid-template-columns:1fr;padding:28px} }

    .sp-num {
      font-family:'DM Mono',monospace; font-size:4rem; font-weight:500;
      color:rgba(212,168,83,.08); line-height:1; margin-bottom:4px;
    }
    .sp-ico {
      width:54px; height:54px; background:var(--gold-dim); border:1px solid var(--gold-ring);
      border-radius:14px; display:flex; align-items:center; justify-content:center;
      margin-bottom:12px; animation:goldGlow 4s ease-in-out infinite;
      i { color:var(--gold); font-size:1.5rem; }
    }
    .sp-ico.wa-ico {
      background:rgba(37,211,102,.1); border-color:rgba(37,211,102,.28);
      animation:none;
      i { color:#25D366; }
    }
    .sp-new-badge {
      display:inline-flex; align-items:center; gap:5px;
      background:rgba(37,211,102,.1); border:1px solid rgba(37,211,102,.25);
      border-radius:50px; padding:4px 13px; margin-bottom:12px;
      font-family:'DM Mono',monospace; font-size:.66rem; color:#25D366;
      i { font-size:.7rem; }
    }
    .sp-h { font-family:'Syne',sans-serif; font-size:1.7rem; font-weight:700; color:var(--ghost); margin-bottom:10px; }
    .sp-p { font-size:.9rem; font-weight:300; color:var(--ghost-d); line-height:1.8; margin-bottom:18px; }
    .sp-pts {
      list-style:none; padding:0; display:flex; flex-direction:column; gap:9px;
      li { display:flex; align-items:center; gap:10px; font-size:.86rem; color:var(--ghost-m); }
    }
    .sp-check {
      width:22px; height:22px; flex-shrink:0;
      background:var(--gold-dim); border:1px solid var(--gold-ring);
      border-radius:6px; display:flex; align-items:center; justify-content:center;
      i { color:var(--gold); font-size:.72rem; }
    }
    .sp-visual {
      position:relative; display:flex; align-items:center; justify-content:center;
      height:240px; border-radius:18px;
      background:rgba(255,255,255,.02); border:1px solid rgba(255,255,255,.05); overflow:hidden;
    }
    .sp-visual.wa-visual {
      background:rgba(37,211,102,.04); border-color:rgba(37,211,102,.12);
    }
    .sp-big {
      font-size:5.5rem; color:var(--gold); opacity:.3;
      animation:floatSlow 4s ease-in-out infinite;
    }
    .sp-visual.wa-visual .sp-big { color:#25D366; opacity:.4; }
    .sp-ring {
      position:absolute; border-radius:50%;
      border:1px solid rgba(212,168,83,.1);
      top:50%; left:50%; transform:translate(-50%,-50%);
    }
    .sr1 { width:180px; height:180px; animation:rotateSlow 20s linear infinite; }
    .sr2 { width:120px; height:120px; animation:rotateSlow 14s linear infinite reverse; border-style:dashed; }
    .sp-visual.wa-visual .sp-ring { border-color:rgba(37,211,102,.12); }

    /* ── Service grid ── */
    .svc-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
    @media(max-width:991px){ .svc-grid{grid-template-columns:repeat(2,1fr)} }
    @media(max-width:575px){ .svc-grid{grid-template-columns:1fr} }

    .svc-card {
      background:var(--obsidian-m); border:1px solid rgba(255,255,255,.07);
      border-radius:16px; padding:24px; cursor:pointer;
      position:relative; overflow:hidden;
      transition:all .3s cubic-bezier(.4,0,.2,1);
      &:hover {
        border-color:rgba(212,168,83,.2); transform:translateY(-4px);
        box-shadow:0 20px 48px rgba(0,0,0,.3);
      }
      &.active {
        border-color:rgba(212,168,83,.35);
        background:linear-gradient(135deg,var(--obsidian-l),var(--obsidian-m));
        .sc-bar { transform:scaleX(1); }
        .sc-ico { background:var(--gold-dim); border-color:var(--gold-ring); i{color:var(--gold)} }
      }
    }

    /* WhatsApp card */
    .svc-card.wa-card {
      border-color:rgba(37,211,102,.14);
      &:hover { border-color:rgba(37,211,102,.32); }
      &.active {
        border-color:rgba(37,211,102,.38);
        background:linear-gradient(135deg,rgba(37,211,102,.06),var(--obsidian-m));
        .sc-bar { background:linear-gradient(90deg,#25D366,#128C7E); transform:scaleX(1); }
        .sc-ico.wa-ico-sm { background:rgba(37,211,102,.14) !important; border-color:rgba(37,211,102,.3) !important; i{color:#25D366 !important} }
      }
    }

    .sc-top { display:flex; align-items:flex-start; justify-content:space-between; margin-bottom:14px; }
    .sc-ico {
      width:42px; height:42px;
      background:rgba(244,107,74,.08); border:1px solid rgba(244,107,74,.15);
      border-radius:10px; display:flex; align-items:center; justify-content:center;
      transition:all .28s;
      i { color:var(--coral); font-size:1.2rem; }
    }
    .sc-ico.wa-ico-sm {
      background:rgba(37,211,102,.1) !important; border-color:rgba(37,211,102,.22) !important;
      i { color:#25D366 !important; }
    }
    .sc-meta { display:flex; flex-direction:column; align-items:flex-end; gap:4px; }
    .sc-num { font-family:'DM Mono',monospace; font-size:.64rem; color:rgba(212,168,83,.3); }
    .sc-new-chip {
      display:inline-flex; align-items:center; gap:3px;
      background:rgba(37,211,102,.1); border:1px solid rgba(37,211,102,.22);
      border-radius:50px; padding:2px 8px;
      font-family:'DM Mono',monospace; font-size:.58rem; color:#25D366;
      i { font-size:.6rem; }
    }
    .sc-h { font-family:'Syne',sans-serif; font-weight:700; font-size:.9rem; color:var(--ghost); margin-bottom:7px; }
    .sc-p { font-size:.78rem; color:var(--ghost-d); line-height:1.6; margin-bottom:16px; }
    .sc-cta {
      display:flex; align-items:center; gap:5px;
      font-family:'DM Mono',monospace; font-size:.7rem; color:rgba(212,168,83,.4);
      transition:all .22s;
      .svc-card:hover & { color:var(--gold); gap:9px; }
    }
    .sc-bar {
      position:absolute; bottom:0; left:0; right:0; height:2px;
      background:linear-gradient(90deg,var(--gold),var(--coral));
      transform:scaleX(0); transform-origin:left;
      transition:transform .4s cubic-bezier(.4,0,.2,1);
      .svc-card:hover & { transform:scaleX(1); }
    }
  `]
})
export class ServicesComponent {
  cur = 0;

  svcs = [
    {
      icon:'bi bi-window', isWa:false, isNew:false,
      title:'Desktop App Development',
      short:'Powerful .NET desktop solutions for your workflow.',
      desc:'We build robust, reliable desktop applications tailored to your exact business processes — ERP, CRM, HRM and beyond.',
      pts:['.NET WPF & WinForms','ERP, CRM & HRM systems','Offline-capable apps','Legacy modernisation'],
    },
    {
      icon:'bi bi-globe2', isWa:false, isNew:false,
      title:'Web App Development',
      short:'Angular, React & .NET Core SPAs and APIs.',
      desc:'Modern web applications with Angular or React frontends and high-performance ASP.NET Core backends.',
      pts:['Angular & React SPAs','ASP.NET Core REST APIs','Progressive Web Apps','E-commerce & portals'],
    },
    {
      icon:'bi bi-hdd-network', isWa:false, isNew:false,
      title:'IT Infrastructure',
      short:'Cloud, networking & server management.',
      desc:'End-to-end design, deployment and maintenance of infrastructure that keeps your business online.',
      pts:['Network design & setup','Azure cloud migration','Server management','Disaster recovery'],
    },
    
    {
      icon:'bi bi-server', isWa:false, isNew:false,
      title:'Hosting Services',
      short:'Reliable managed hosting — 99.9% uptime.',
      desc:'Managed, optimised hosting keeping your applications fast, accessible and protected.',
      pts:['Managed web hosting','Database hosting','SSL & CDN setup','99.9% uptime SLA'],
    },
    {
      icon:'bi bi-megaphone', isWa:false, isNew:false,
      title:'Digital Marketing',
      short:'SEO, social media & paid ads that deliver ROI.',
      desc:'Data-driven SEO, social media strategy, Google/Meta campaigns and clear analytics reporting.',
      pts:['SEO & content strategy','Social media management','Google & Meta ads','Analytics & reporting'],
    },
    {
      icon:'bi bi-whatsapp', isWa:true, isNew:true,
      title:'WhatsApp Automation & AI Solutions',
      short:'Automate customer communication with WhatsApp APIs & AI.',
      desc:'Automate customer communication and enhance engagement using WhatsApp Business APIs and AI-powered tools — from bulk messaging to intelligent chatbots.',
      pts:[
        'Bulk WhatsApp messaging (Transactional & Promotional)',
        'Automated reminders (payments, orders, appointments)',
        'AI Chatbots for 24/7 customer support',
        'Campaign automation & analytics',
        'CRM / ERP system integration',
      ],
    },
  ];
}