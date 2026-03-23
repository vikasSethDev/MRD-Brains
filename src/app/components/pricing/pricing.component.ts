import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true, imports:[CommonModule],
  template: `
    <section id="pricing" class="pricing-sec">
      <div class="noise"></div>
      <div class="container">
        <div class="text-center mb-5" data-aos="fade-up">
          <div class="eyebrow">Investment</div>
          <h2 class="sec-h2">Transparent <em>Pricing</em></h2>
          <p class="sec-lead mx-auto">No hidden fees — flexible plans crafted for startups through to enterprises.</p>
        </div>
        <div class="p-grid">
          <div class="p-card" *ngFor="let p of plans; let i=index"
               [class.featured]="p.featured"
               data-aos="fade-up" [attr.data-aos-delay]="i*90">
            <div class="pc-pop" *ngIf="p.featured">
              <i class="bi bi-stars"></i> Most Popular
            </div>
            <div class="pc-header">
              <div class="pc-tier">{{ p.tier }}</div>
              <div class="pc-price">
                <sup>₹</sup>{{ p.price }}<sub>/project</sub>
              </div>
            </div>
            <div class="pc-rule"></div>
            <ul class="pc-feats">
              <li *ngFor="let f of p.feats" [class.off]="!f.on">
                <span class="pf-ico" [class.on]="f.on"><i [class]="f.on ? 'bi bi-check-lg' : 'bi bi-x-lg'"></i></span>
                {{ f.text }}
              </li>
            </ul>
            <a href="#contact"
               [class]="p.featured ? 'btn-gold w-100 justify-content-center' : 'btn-outline w-100 justify-content-center'">
              {{ p.cta }}
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .pricing-sec {
      padding:120px 0; background:var(--obsidian);
      position:relative; overflow:hidden;
    }
    .p-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
    @media(max-width:991px){.p-grid{grid-template-columns:1fr}}

    .p-card {
      background:var(--obsidian-m); border:1px solid rgba(255,255,255,.08);
      border-radius:22px; padding:36px; position:relative;
      transition:all .3s cubic-bezier(.4,0,.2,1);
      &:not(.featured):hover { border-color:rgba(212,168,83,.2); transform:translateY(-5px); box-shadow:0 24px 60px rgba(0,0,0,.4); }
    }
    .p-card.featured {
      background:linear-gradient(160deg,var(--obsidian-l),var(--obsidian-m));
      border-color:rgba(212,168,83,.3);
      box-shadow: var(--sh-gold), 0 32px 80px rgba(0,0,0,.5);
      transform:scale(1.03);
      &::before {
        content:''; position:absolute; top:0; left:0; right:0; height:1px;
        background:linear-gradient(90deg,transparent,var(--gold),transparent);
      }
    }
    @media(max-width:991px){.p-card.featured{transform:none}}

    .pc-pop {
      position:absolute; top:-14px; left:50%; transform:translateX(-50%);
      background:var(--gold); color:var(--obsidian);
      font-family:'Syne',sans-serif; font-weight:800; font-size:.68rem;
      letter-spacing:.07em; text-transform:uppercase;
      padding:5px 18px; border-radius:50px; white-space:nowrap;
      box-shadow:0 4px 16px rgba(212,168,83,.35);
      i { margin-right:4px; }
    }
    .pc-header { margin-bottom:24px; }
    .pc-tier {
      font-family:'DM Mono',monospace; font-size:.72rem; font-weight:500;
      text-transform:uppercase; letter-spacing:.14em; color:var(--ghost-d); margin-bottom:12px;
    }
    .p-card.featured .pc-tier { color:var(--gold); }
    .pc-price {
      font-family:'Syne',sans-serif; font-size:3rem; font-weight:800;
      color:var(--ghost); line-height:1;
      sup { font-size:1.4rem; vertical-align:top; margin-top:7px; display:inline-block; }
      sub { font-size:.76rem; color:var(--ghost-d); font-weight:400; vertical-align:bottom; }
    }
    .p-card.featured .pc-price { color:var(--ghost); }
    .pc-rule { height:1px; background:rgba(255,255,255,.07); margin-bottom:22px; }
    .pc-feats {
      list-style:none; padding:0; margin-bottom:28px;
      display:flex; flex-direction:column; gap:11px;
      li { display:flex; align-items:center; gap:10px; font-size:.84rem; color:var(--ghost-m); }
      li.off { color:var(--ghost-d); }
    }
    .pf-ico {
      width:22px; height:22px; flex-shrink:0; border-radius:6px;
      display:flex; align-items:center; justify-content:center;
      background:rgba(255,255,255,.05); i{font-size:.72rem;color:var(--ghost-d)}
      &.on { background:var(--gold-dim); border:1px solid var(--gold-ring); i{color:var(--gold)} }
    }
  `]
})
export class PricingComponent {
  plans=[
    {tier:'Starter',price:'9,999',featured:false,cta:'Get Started',feats:[
      {on:true,text:'Single web application'},{on:true,text:'Up to 20 hours support'},
      {on:true,text:'Basic hosting included'},{on:false,text:'Advanced security setup'},
      {on:false,text:'Dedicated account manager'},
    ]},
    {tier:'Professional',price:'24,999',featured:true,cta:'Choose This Plan',feats:[
      {on:true,text:'Multi-module application'},{on:true,text:'Up to 80 hours support'},
      {on:true,text:'Hosting & security updates'},{on:true,text:'Free cloud consultation'},
      {on:true,text:'Dedicated account manager'},
    ]},
    {tier:'Enterprise',price:'59,999',featured:false,cta:'Contact Us',feats:[
      {on:true,text:'Full-scale custom solutions'},{on:true,text:'Unlimited support hours'},
      {on:true,text:'Priority cloud & hosting'},{on:true,text:'Complete cybersecurity'},
      {on:true,text:'24/7 dedicated support'},
    ]},
  ];
}
