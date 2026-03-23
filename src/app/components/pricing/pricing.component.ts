import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true, imports: [CommonModule],
  template: `
    <section id="pricing" class="pricing-sec">
      <div class="noise"></div>
      <div class="pricing-glow"></div>
      <div class="container">
        <div class="pricing-top" data-aos="fade-up">
          <div>
            <div class="eyebrow">Investment</div>
            <h2 class="sec-h2">Transparent <em>Pricing</em></h2>
          </div>
          <p class="sec-lead" style="max-width:380px">
            No hidden fees. Flexible plans crafted for startups through to enterprises.
            Every plan includes a free 30-minute discovery call.
          </p>
        </div>

        <!-- Pricing grid -->
        <div class="p-grid">
          <div class="p-card" *ngFor="let p of plans; let i=index"
               [class.featured]="p.featured"
               data-aos="fade-up" [attr.data-aos-delay]="i*90">

            <!-- Popular badge -->
            <div class="pc-pop" *ngIf="p.featured">
              <i class="bi bi-stars"></i> Most Popular
            </div>

            <!-- Header -->
            <div class="pc-header">
              <div class="pc-icon"><i [class]="p.icon"></i></div>
              <div class="pc-tier">{{ p.tier }}</div>
              <div class="pc-price">
                <sup>₹</sup>{{ p.price }}<sub>/project</sub>
              </div>
              <div class="pc-desc">{{ p.desc }}</div>
            </div>

            <div class="pc-rule"></div>

            <!-- Features -->
            <ul class="pc-feats">
              <li *ngFor="let f of p.feats" [class.off]="!f.on">
                <span class="pf-ico" [class.on]="f.on">
                  <i [class]="f.on ? 'bi bi-check-lg' : 'bi bi-x-lg'"></i>
                </span>
                <span>{{ f.text }}</span>
              </li>
            </ul>

            <!-- CTA -->
            <a href="#contact"
               [class]="p.featured
                 ? 'btn-gold w-100 justify-content-center pc-btn'
                 : 'btn-outline w-100 justify-content-center pc-btn'">
              {{ p.cta }}
            </a>
          </div>
        </div>

        <!-- Note strip -->
        <div class="pricing-note" data-aos="fade-up">
          <i class="bi bi-info-circle-fill"></i>
          <span>All prices are starting estimates. Final cost depends on scope and complexity.
            <a href="#contact">Contact us</a> for a detailed quote tailored to your project.
          </span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .pricing-sec {
      padding: 140px 0; background: var(--obsidian);
      position: relative; overflow: hidden;
    }
    .pricing-glow {
      position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
      width: 700px; height: 400px;
      background: radial-gradient(ellipse, rgba(201,151,74,.05) 0%, transparent 70%);
      pointer-events: none;
    }
    .pricing-top {
      display: flex; align-items: flex-end; justify-content: space-between;
      gap: 32px; margin-bottom: 56px;
    }
    @media(max-width:767px){ .pricing-top{ flex-direction: column; align-items: flex-start; gap: 16px; } }

    /* ── Grid ── */
    .p-grid {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 20px; align-items: start; margin-bottom: 28px;
    }
    @media(max-width:991px){
      .p-grid { grid-template-columns: 1fr; max-width: 480px; margin-left: auto; margin-right: auto; }
    }

    /* ── Card ── */
    .p-card {
      background: var(--obsidian-m); border: 1px solid rgba(255,255,255,.08);
      border-radius: 22px; padding: 32px 28px;
      position: relative; transition: all .32s cubic-bezier(.4,0,.2,1);
      display: flex; flex-direction: column; gap: 0;
      &:not(.featured):hover {
        border-color: rgba(201,151,74,.2);
        transform: translateY(-5px);
        box-shadow: 0 24px 60px rgba(0,0,0,.4);
      }
    }
    .p-card.featured {
      background: linear-gradient(160deg, var(--obsidian-l), var(--obsidian-m));
      border-color: rgba(201,151,74,.3);
      box-shadow: var(--sh-gold), 0 32px 80px rgba(0,0,0,.5);
      &::before {
        content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
        background: linear-gradient(90deg, transparent, var(--gold), transparent);
      }
    }
    /* On mobile, remove scale so cards stack cleanly */
    @media(min-width:992px){
      .p-card.featured { transform: scale(1.04); }
      .p-card.featured:hover { transform: scale(1.04) translateY(-4px); }
    }

    /* Popular badge */
    .pc-pop {
      position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
      background: var(--gold); color: var(--obsidian);
      font-family: var(--f-head); font-weight: 800; font-size: .66rem;
      letter-spacing: .07em; text-transform: uppercase;
      padding: 5px 18px; border-radius: 50px; white-space: nowrap;
      box-shadow: 0 4px 16px rgba(201,151,74,.35);
      i { margin-right: 4px; }
    }

    /* Header */
    .pc-header { margin-bottom: 22px; }
    .pc-icon {
      width: 46px; height: 46px; border-radius: 12px; margin-bottom: 14px;
      background: var(--gold-dim); border: 1px solid var(--gold-ring);
      display: flex; align-items: center; justify-content: center;
      i { color: var(--gold); font-size: 1.15rem; }
      .p-card.featured & { animation: goldGlow 4s ease-in-out infinite; }
    }
    .pc-tier {
      font-family: var(--f-mono); font-size: .7rem; font-weight: 500;
      text-transform: uppercase; letter-spacing: .14em;
      color: var(--ghost-d); margin-bottom: 10px;
      .p-card.featured & { color: var(--gold); }
    }
    .pc-price {
      font-family: var(--f-head); font-size: 2.8rem; font-weight: 800;
      color: var(--ghost); line-height: 1; margin-bottom: 8px;
      sup { font-size: 1.3rem; vertical-align: top; margin-top: 6px; display: inline-block; }
      sub { font-size: .74rem; color: var(--ghost-d); font-weight: 400; vertical-align: bottom; }
    }
    .pc-desc { font-size: .78rem; color: var(--ghost-d); line-height: 1.6; }

    .pc-rule { height: 1px; background: rgba(255,255,255,.07); margin-bottom: 22px; }

    /* Features list */
    .pc-feats {
      list-style: none; padding: 0; margin-bottom: 28px; flex: 1;
      display: flex; flex-direction: column; gap: 11px;
      li {
        display: flex; align-items: flex-start; gap: 10px;
        font-size: .83rem; color: var(--ghost-m); line-height: 1.5;
      }
      li.off { color: var(--ghost-d); }
    }
    .pf-ico {
      width: 21px; height: 21px; flex-shrink: 0; border-radius: 5px; margin-top: 1px;
      display: flex; align-items: center; justify-content: center;
      background: rgba(255,255,255,.04); i { font-size: .7rem; color: var(--ghost-d); }
      &.on { background: var(--gold-dim); border: 1px solid var(--gold-ring); i { color: var(--gold); } }
    }

    /* CTA button */
    .pc-btn {
      display: flex; width: 100%; justify-content: center;
      text-align: center; border: none; cursor: pointer;
      font-size: .78rem; padding: 14px;
      text-decoration: none;
    }

    /* Note */
    .pricing-note {
      display: flex; align-items: flex-start; gap: 10px;
      background: rgba(255,255,255,.025); border: 1px solid rgba(255,255,255,.07);
      border-radius: 12px; padding: 16px 20px;
      font-size: .8rem; color: var(--ghost-d); line-height: 1.7;
      i { color: var(--gold); font-size: .88rem; flex-shrink: 0; margin-top: 2px; }
      a { color: var(--gold); text-decoration: none; &:hover { text-decoration: underline; } }
    }
  `]
})
export class PricingComponent {
  plans = [
    {
      tier: 'Starter', price: '9,999', featured: false, cta: 'Get Started',
      icon: 'bi bi-rocket-takeoff',
      desc: 'Perfect for small businesses needing a single focused solution.',
      feats: [
        { on: true,  text: 'Single web or desktop application' },
        { on: true,  text: 'Up to 20 hours of support' },
        { on: true,  text: 'Basic hosting included' },
        { on: true,  text: 'Free discovery call' },
        { on: false, text: 'Advanced security setup' },
        { on: false, text: 'Dedicated account manager' },
      ],
    },
    {
      tier: 'Professional', price: '24,999', featured: true, cta: 'Choose This Plan',
      icon: 'bi bi-lightning-charge-fill',
      desc: 'Our most popular plan — ideal for growing businesses.',
      feats: [
        { on: true, text: 'Multi-module application' },
        { on: true, text: 'Up to 80 hours of support' },
        { on: true, text: 'Hosting & security updates' },
        { on: true, text: 'Free cloud consultation' },
        { on: true, text: 'Dedicated account manager' },
        { on: true, text: 'Priority response time' },
      ],
    },
    {
      tier: 'Enterprise', price: '59,999', featured: false, cta: 'Contact Us',
      icon: 'bi bi-building-fill',
      desc: 'Full-scale custom solutions for complex enterprise needs.',
      feats: [
        { on: true, text: 'Full-scale custom platform' },
        { on: true, text: 'Unlimited support hours' },
        { on: true, text: 'Priority cloud & hosting' },
        { on: true, text: 'Complete security hardening' },
        { on: true, text: '24/7 dedicated support line' },
        { on: true, text: 'SLA-backed uptime guarantee' },
      ],
    },
  ];
}