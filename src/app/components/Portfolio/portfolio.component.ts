import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true, imports: [CommonModule, RouterLink],
  template: `
    <section id="portfolio" class="port-sec">
      <div class="noise"></div>
      <div class="port-glow pg1"></div>
      <div class="port-glow pg2"></div>

      <div class="container">
        <!-- Header -->
        <div class="port-top" data-aos="fade-up">
          <div>
            <div class="eyebrow">Our Work</div>
            <h2 class="sec-h2">Case Studies & <em>Portfolio</em></h2>
          </div>
          <p class="sec-lead" style="max-width:380px">
            Real projects, real results. Here's how we've helped businesses transform
            through technology.
          </p>
        </div>

        <!-- Featured case study -->
        <div class="port-featured" data-aos="fade-up" data-aos-delay="60">
          <div class="pf-left">
            <div class="pf-tag">
              <i class="bi bi-star-fill"></i> Featured Project
            </div>
            <div class="pf-num">01</div>
            <h3 class="pf-title">Vyapar Ledger — Jewellery Shop Management Platform</h3>
            <p class="pf-desc">
              A full-featured SaaS platform built from scratch for India's jewellery trade.
              Vyapar Ledger handles gold/silver ledgers, GST billing, live rate tracking,
              customer management and cloud sync — all in one elegant Android + Web app.
            </p>

            <div class="pf-results">
              <div class="pfr-item" *ngFor="let r of featuredResults">
                <div class="pfri-val">{{ r.val }}</div>
                <div class="pfri-lbl">{{ r.lbl }}</div>
              </div>
            </div>

            <div class="pf-stack">
              <span *ngFor="let t of featuredStack">{{ t }}</span>
            </div>

            <div class="pf-ctas">
              <a href="https://www.vyaparledger.com" target="_blank" class="btn-gold">
                Visit Live Product <i class="bi bi-arrow-up-right"></i>
              </a>
              <a href="https://www.vyaparledger.com/download" target="_blank" class="btn-outline">
                <i class="bi bi-download"></i> Free Download
              </a>
            </div>
          </div>

          <div class="pf-right">
            <div class="pf-mockup">
              <div class="pfm-glow"></div>
              <!-- Browser frame -->
              <div class="pfm-browser">
                <div class="pfmb-bar">
                  <div class="pfmb-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <div class="pfmb-url">
                    <i class="bi bi-lock-fill"></i> vyaparledger.com
                  </div>
                </div>
                <div class="pfmb-screen">
                  <div class="pfms-header">
                    <div class="pfms-brand">
                      <div class="pfms-dot"></div>
                      <span>Vyapar Ledger</span>
                    </div>
                    <div class="pfms-live"><i class="bi bi-circle-fill"></i> Live</div>
                  </div>
                  <div class="pfms-stat-row">
                    <div class="pfms-stat" *ngFor="let s of mockStats">
                      <div class="pfmss-val" [style.color]="s.color">{{ s.val }}</div>
                      <div class="pfmss-lbl">{{ s.lbl }}</div>
                    </div>
                  </div>
                  <div class="pfms-chart">
                    <div class="pfmc-bar" *ngFor="let b of chartBars"
                         [style.height]="b.h" [style.background]="b.c" [class.hi]="b.hi"></div>
                  </div>
                  <div class="pfms-rows">
                    <div class="pfms-row" *ngFor="let r of mockRows">
                      <span class="pfmsr-dot" [style.background]="r.c"></span>
                      <span class="pfmsr-lbl">{{ r.l }}</span>
                      <span class="pfmsr-val">{{ r.v }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Float badges -->
              <div class="pfm-badge b1">
                <i class="bi bi-shield-fill-check"></i>
                <div><b>GST Ready</b><small>Auto invoicing</small></div>
              </div>
              <div class="pfm-badge b2">
                <i class="bi bi-cloud-check-fill"></i>
                <div><b>Cloud Sync</b><small>Always backed up</small></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Case studies grid -->
        <div class="cases-grid">
          <div class="case-card" *ngFor="let c of cases; let i=index"
               data-aos="fade-up" [attr.data-aos-delay]="i*90">
            <div class="cc-top">
              <div class="cc-icon" [style.background]="c.iconBg">
                <i [class]="c.icon" [style.color]="c.iconColor"></i>
              </div>
              <div class="cc-num">{{ (i+1).toString().padStart(2,'0') }}</div>
            </div>
            <div class="cc-category">{{ c.category }}</div>
            <h4 class="cc-title">{{ c.title }}</h4>
            <p class="cc-challenge"><strong>Challenge:</strong> {{ c.challenge }}</p>
            <p class="cc-solution"><strong>Solution:</strong> {{ c.solution }}</p>
            <div class="cc-results">
              <div class="ccr-item" *ngFor="let r of c.results">
                <i class="bi bi-check-circle-fill"></i>
                <span>{{ r }}</span>
              </div>
            </div>
            <div class="cc-stack">
              <span *ngFor="let t of c.stack">{{ t }}</span>
            </div>
            <div class="cc-bar"></div>
          </div>
        </div>

        <!-- CTA strip -->
        <div class="port-cta" data-aos="fade-up">
          <div class="pc-left">
            <div class="pc-icon"><i class="bi bi-briefcase-fill"></i></div>
            <div>
              <div class="pc-title">Have a project in mind?</div>
              <div class="pc-desc">Let's discuss how we can build something exceptional for your business.</div>
            </div>
          </div>
          <a routerLink="/contact" class="btn-gold">
            Start Your Project <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .port-sec { padding:140px 0;background:var(--obsidian);position:relative;overflow:hidden; }
    .port-glow { position:absolute;border-radius:50%;pointer-events:none;filter:blur(110px); }
    .pg1 { width:500px;height:500px;background:rgba(201,151,74,.055);top:-100px;left:-100px; }
    .pg2 { width:400px;height:400px;background:rgba(240,103,74,.04);bottom:-100px;right:-100px; }

    .port-top {
      display:flex;align-items:flex-end;justify-content:space-between;gap:32px;margin-bottom:60px;
    }
    @media(max-width:767px){ .port-top{flex-direction:column;align-items:flex-start} }

    /* ── Featured ── */
    .port-featured {
      display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;
      background:linear-gradient(160deg,var(--obsidian-l),var(--obsidian-m));
      border:1px solid rgba(201,151,74,.16);border-radius:26px;padding:52px;
      position:relative;overflow:hidden;margin-bottom:36px;
      &::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(201,151,74,.5),transparent)}
    }
    @media(max-width:1099px){ .port-featured{grid-template-columns:1fr;gap:40px;padding:36px} }

    .pf-tag {
      display:inline-flex;align-items:center;gap:6px;
      background:var(--gold-dim);border:1px solid var(--gold-ring);
      border-radius:50px;padding:5px 15px;margin-bottom:12px;
      font-family:var(--f-mono);font-size:.62rem;font-weight:500;color:var(--gold);letter-spacing:.1em;
      i{font-size:.66rem}
    }
    .pf-num {
      font-family:var(--f-mono);font-size:4.5rem;font-weight:500;
      color:rgba(201,151,74,.07);line-height:1;margin-bottom:-10px;
    }
    .pf-title { font-family:var(--f-head);font-weight:800;font-size:1.6rem;color:var(--ghost);margin-bottom:16px;line-height:1.15; }
    .pf-desc  { font-size:.88rem;font-weight:300;color:var(--ghost-d);line-height:1.85;margin-bottom:28px; }

    .pf-results { display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:22px; }
    .pfri-val { font-family:var(--f-head);font-weight:800;font-size:1.5rem;color:var(--ghost);line-height:1;margin-bottom:3px; }
    .pfri-lbl { font-family:var(--f-mono);font-size:.62rem;color:var(--ghost-d);text-transform:uppercase;letter-spacing:.08em; }

    .pf-stack { display:flex;flex-wrap:wrap;gap:7px;margin-bottom:28px;
      span{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:5px;padding:4px 12px;font-family:var(--f-mono);font-size:.66rem;color:var(--ghost-d)} }
    .pf-ctas { display:flex;gap:12px;flex-wrap:wrap; }

    /* Mockup */
    .pf-right { position:relative;padding:20px 40px 60px; }
    @media(max-width:1099px){ .pf-right{padding:0 0 40px} }
    .pf-mockup { position:relative; }
    .pfm-glow {
      position:absolute;inset:-30px;border-radius:50%;
      background:radial-gradient(ellipse,rgba(240,103,74,.1) 0%,transparent 65%);
      pointer-events:none;
    }
    .pfm-browser {
      background:var(--obsidian-m);border:1px solid rgba(201,151,74,.2);
      border-radius:16px;overflow:hidden;
      box-shadow:0 32px 80px rgba(0,0,0,.55);position:relative;z-index:2;
    }
    .pfmb-bar {
      display:flex;align-items:center;gap:12px;
      padding:11px 16px;background:var(--obsidian-l);border-bottom:1px solid rgba(255,255,255,.06);
    }
    .pfmb-dots { display:flex;gap:5px;
      span{width:9px;height:9px;border-radius:50%;background:rgba(255,255,255,.12);
        &:nth-child(1){background:#FF5F57}&:nth-child(2){background:#FFBD2E}&:nth-child(3){background:#28C840}}
    }
    .pfmb-url {
      flex:1;background:rgba(255,255,255,.05);border-radius:5px;padding:4px 12px;
      font-family:var(--f-mono);font-size:.65rem;color:var(--ghost-d);
      display:flex;align-items:center;gap:6px;
      i{color:rgba(201,151,74,.5);font-size:.6rem}
    }
    .pfmb-screen { padding:16px; }
    .pfms-header { display:flex;align-items:center;justify-content:space-between;margin-bottom:14px; }
    .pfms-brand { display:flex;align-items:center;gap:8px;font-family:var(--f-head);font-weight:700;font-size:.78rem;color:var(--ghost); }
    .pfms-dot { width:8px;height:8px;border-radius:50%;background:var(--gold);box-shadow:0 0 8px rgba(201,151,74,.5); }
    .pfms-live {
      display:flex;align-items:center;gap:5px;
      font-family:var(--f-mono);font-size:.6rem;color:#2ECC71;
      i{font-size:.5rem;animation:blink 1.8s ease-in-out infinite}
    }
    .pfms-stat-row { display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px; }
    .pfmss-val { font-family:var(--f-head);font-weight:800;font-size:1.1rem;line-height:1;margin-bottom:2px; }
    .pfmss-lbl { font-family:var(--f-mono);font-size:.56rem;color:var(--ghost-d);text-transform:uppercase;letter-spacing:.07em; }
    .pfms-chart { display:flex;align-items:flex-end;gap:4px;height:52px;margin-bottom:12px;
      background:rgba(255,255,255,.02);border-radius:8px;padding:8px;
    }
    .pfmc-bar { flex:1;border-radius:3px 3px 0 0;background:rgba(201,151,74,.2);transition:all .3s;
      &.hi{background:linear-gradient(180deg,var(--gold-l),var(--gold))}
    }
    .pfms-rows { display:flex;flex-direction:column;gap:6px; }
    .pfms-row { display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.025);border-radius:7px;padding:7px 10px; }
    .pfmsr-dot { width:6px;height:6px;border-radius:50%;flex-shrink:0; }
    .pfmsr-lbl { font-family:var(--f-mono);font-size:.58rem;color:var(--ghost-d);flex:1; }
    .pfmsr-val { font-family:var(--f-head);font-weight:700;font-size:.62rem;color:var(--ghost); }

    /* Float badges */
    .pfm-badge {
      position:absolute;z-index:3;
      display:flex;align-items:center;gap:9px;
      background:rgba(12,10,8,.92);backdrop-filter:blur(16px);
      border-radius:11px;padding:11px 15px;
      box-shadow:0 8px 28px rgba(0,0,0,.4);
      b{display:block;font-family:var(--f-head);font-weight:700;font-size:.8rem;color:var(--ghost)}
      small{font-size:.62rem;color:var(--ghost-d)}
      i{font-size:.95rem}
    }
    .b1 { bottom:-14px;right:20px;border:1px solid rgba(201,151,74,.2);animation:floatSlow 4.5s ease-in-out infinite; i{color:var(--gold)} }
    .b2 { bottom:-14px;left:20px;border:1px solid rgba(46,204,113,.18);animation:floatSlow 4.5s ease-in-out infinite 2s; i{color:#2ECC71} }
    @media(max-width:767px){ .pfm-badge{display:none} }

    /* ── Cases grid ── */
    .cases-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:36px; }
    @media(max-width:991px){ .cases-grid{grid-template-columns:repeat(2,1fr)} }
    @media(max-width:575px){ .cases-grid{grid-template-columns:1fr} }

    .case-card {
      background:var(--obsidian-m);border:1px solid rgba(255,255,255,.07);
      border-radius:18px;padding:28px;position:relative;overflow:hidden;
      transition:all .32s cubic-bezier(.4,0,.2,1);
      &:hover{border-color:rgba(201,151,74,.22);transform:translateY(-6px);box-shadow:0 24px 56px rgba(0,0,0,.4);.cc-bar{transform:scaleX(1)}}
    }
    .cc-top { display:flex;align-items:center;justify-content:space-between;margin-bottom:14px; }
    .cc-icon {
      width:44px;height:44px;border-radius:11px;
      display:flex;align-items:center;justify-content:center;flex-shrink:0;
      i{font-size:1.2rem}
    }
    .cc-num { font-family:var(--f-mono);font-size:.64rem;color:rgba(201,151,74,.25); }
    .cc-category {
      font-family:var(--f-mono);font-size:.62rem;text-transform:uppercase;letter-spacing:.14em;
      color:var(--gold);margin-bottom:8px;
    }
    .cc-title { font-family:var(--f-head);font-weight:800;font-size:.96rem;color:var(--ghost);margin-bottom:12px;line-height:1.3; }
    .cc-challenge,.cc-solution {
      font-size:.78rem;color:var(--ghost-d);line-height:1.68;margin-bottom:8px;
      strong{color:var(--ghost-m);font-weight:600}
    }
    .cc-results { display:flex;flex-direction:column;gap:6px;margin:14px 0; }
    .ccr-item { display:flex;align-items:center;gap:7px;font-size:.76rem;color:var(--ghost-m);
      i{color:var(--gold);font-size:.72rem;flex-shrink:0}
    }
    .cc-stack { display:flex;flex-wrap:wrap;gap:5px;margin-top:14px;
      span{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:4px;padding:3px 9px;font-family:var(--f-mono);font-size:.6rem;color:var(--ghost-d)}
    }
    .cc-bar {
      position:absolute;bottom:0;left:0;right:0;height:2px;
      background:linear-gradient(90deg,var(--gold-l),var(--coral));
      transform:scaleX(0);transform-origin:left;transition:transform .4s cubic-bezier(.4,0,.2,1);
    }

    /* CTA strip */
    .port-cta {
      display:flex;align-items:center;justify-content:space-between;gap:24px;
      background:linear-gradient(135deg,var(--obsidian-l),var(--obsidian-m));
      border:1px solid rgba(201,151,74,.16);border-radius:18px;padding:30px 36px;
      &::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(201,151,74,.35),transparent)}
      position:relative;overflow:hidden;
    }
    @media(max-width:767px){ .port-cta{flex-direction:column;align-items:flex-start;padding:24px} }
    .pc-left { display:flex;align-items:center;gap:16px; }
    .pc-icon {
      width:52px;height:52px;flex-shrink:0;border-radius:13px;
      background:var(--gold-dim);border:1px solid var(--gold-ring);
      display:flex;align-items:center;justify-content:center;
      i{color:var(--gold);font-size:1.3rem}
      animation:goldGlow 4s ease-in-out infinite;
    }
    .pc-title { font-family:var(--f-head);font-weight:800;font-size:1.05rem;color:var(--ghost);margin-bottom:4px; }
    .pc-desc  { font-size:.82rem;color:var(--ghost-d); }
  `]
})
export class PortfolioComponent {
  featuredResults = [
    { val: '50+', lbl: 'Jewellery Shops' },
    { val: '1K+', lbl: 'Invoices Generated' },
    { val: '4.9★', lbl: 'App Rating' },
  ];
  featuredStack = ['.NET 8', 'Angular 17', 'Android (Kotlin)', 'SQL Server', 'Azure', 'REST API', 'GST API'];
  mockStats = [
    { val: '₹2.84L', lbl: "Today's Sales", color: '#EDE9E1' },
    { val: '142',    lbl: 'Active Customers', color: '#C9974A' },
    { val: '7',      lbl: 'Pending Orders', color: '#F0674A' },
  ];
  chartBars = [
    { h: '45%', c: 'rgba(201,151,74,.2)', hi: false },
    { h: '62%', c: 'rgba(201,151,74,.2)', hi: false },
    { h: '48%', c: 'rgba(201,151,74,.2)', hi: false },
    { h: '78%', c: 'rgba(201,151,74,.2)', hi: false },
    { h: '55%', c: 'rgba(201,151,74,.2)', hi: false },
    { h: '100%', c: '',                   hi: true  },
  ];
  mockRows = [
    { c: '#C9974A', l: 'Gold Rate (22K)', v: '₹6,420/g' },
    { c: '#2ECC71', l: 'Pending Orders',  v: '7 items'  },
    { c: '#F0674A', l: 'Active Customers',v: '142'      },
  ];

  cases = [
    {
      icon: 'bi bi-building',
      iconBg: 'rgba(201,151,74,.1)', iconColor: '#C9974A',
      category: 'Desktop Application · .NET',
      title: 'Custom HR & Payroll Management System',
      challenge: 'A Mumbai-based engineering firm was managing payroll and attendance across 80+ employees using Excel sheets, causing errors and delays every month.',
      solution: 'Built a full .NET WPF desktop application with role-based access, biometric attendance integration, automated payslip generation and GST-compliant reporting.',
      results: ['Reduced payroll processing time by 85%', 'Zero calculation errors since go-live', 'Automated compliance reports saved 12 hrs/month'],
      stack: ['.NET 8', 'WPF', 'SQL Server', 'Crystal Reports', 'MVVM'],
    },
    {
      icon: 'bi bi-whatsapp',
      iconBg: 'rgba(37,211,102,.1)', iconColor: '#25D366',
      category: 'WhatsApp Automation · AI',
      title: 'WhatsApp Order & Payment Reminder Bot',
      challenge: 'An e-commerce business was losing 30% of repeat orders due to no follow-up system — customers forgot about abandoned carts and unpaid invoices.',
      solution: 'Deployed a WhatsApp Business API automation system with AI-powered chatbot handling order confirmations, payment reminders, and post-purchase support 24/7.',
      results: ['28% increase in repeat purchases', '₹1.2L recovered from abandoned carts/month', '90% reduction in manual follow-up calls'],
      stack: ['WhatsApp API', 'OpenAI GPT-4', 'Node.js', 'Webhook', 'MongoDB'],
    },
    {
      icon: 'bi bi-mortarboard-fill',
      iconBg: 'rgba(240,103,74,.1)', iconColor: '#F0674A',
      category: 'Web Application · LMS',
      title: 'Online Learning Management System for Trendify Digital',
      challenge: 'Trendify Digital\'s students had no centralised platform to access courses — content was scattered across WhatsApp groups, PDFs and emails, making learning inconsistent and hard to track.',
      solution: 'Built a full-featured LMS web platform where students can register, browse courses, stream video lessons, track progress, take quizzes and download certificates — all from one clean interface.',
      results: ['All students now access courses from anywhere, anytime', 'Course completion tracking reduced instructor admin by 60%', 'Clean, mobile-friendly UI adopted immediately with zero training needed'],
      stack: ['Angular 17', 'ASP.NET Core', 'SQL Server', 'Azure Blob', 'REST API'],
    },
  ];

  smooth(e: Event) {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}