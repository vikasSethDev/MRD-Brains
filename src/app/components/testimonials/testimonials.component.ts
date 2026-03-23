import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true, imports: [CommonModule],
  template: `
    <section class="testi-sec">
      <div class="noise"></div>
      <div class="testi-glow"></div>
      <div class="container">
        <div class="testi-top" data-aos="fade-up">
          <div>
            <div class="eyebrow">Social Proof</div>
            <h2 class="sec-h2">What Our <em>Clients</em> Say</h2>
          </div>
          <div class="testi-rating-hero">
            <div class="trh-stars">
              <i class="bi bi-star-fill" *ngFor="let s of [1,2,3,4,5]"></i>
            </div>
            <div class="trh-score">5.0 / 5.0</div>
            <div class="trh-label">Average client satisfaction rating</div>
          </div>
        </div>

        <!-- Featured testimonial -->
        <div class="testi-featured" data-aos="fade-up" data-aos-delay="60">
          <div class="tf-quote">"</div>
          <blockquote class="tf-text">
            MrD Brains Technology didn't just deliver software — they delivered confidence.
            From the initial consultation to go-live, every milestone was hit on time, every
            promise was kept. The .NET system they built for us has eliminated 3 hours of
            manual work per day. Genuinely exceptional team.
          </blockquote>
          <div class="tf-author">
            <div class="tf-av">D</div>
            <div>
              <div class="tf-name">Deepak Chaubey</div>
              <div class="tf-company">Director · Techvision Engineering, Mumbai</div>
            </div>
            <div class="tf-stars">
              <i class="bi bi-star-fill" *ngFor="let s of [1,2,3,4,5]"></i>
            </div>
          </div>
        </div>

        <!-- Grid testimonials -->
        <div class="testi-grid">
          <div class="testi-card" *ngFor="let t of list; let i=index"
               data-aos="fade-up" [attr.data-aos-delay]="i*90">
            <div class="tc-header">
              <div class="tch-stars"><i class="bi bi-star-fill" *ngFor="let s of [1,2,3,4,5]"></i></div>
              <div class="tch-q">❝</div>
            </div>
            <p class="tc-text">{{ t.text }}</p>
            <div class="tc-project" *ngIf="t.project">
              <i class="bi bi-folder-fill"></i> {{ t.project }}
            </div>
            <div class="tc-divider"></div>
            <div class="tc-author">
              <div class="tca-av" [style.background]="t.color">{{ t.init }}</div>
              <div class="tca-info">
                <div class="tca-name">{{ t.name }}</div>
                <div class="tca-role">{{ t.role }} · {{ t.company }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testi-sec { padding:140px 0;background:var(--obsidian-m);position:relative;overflow:hidden; }
    .testi-glow {
      position:absolute;top:0;left:50%;transform:translateX(-50%);width:800px;height:360px;
      background:radial-gradient(ellipse,rgba(201,151,74,.05) 0%,transparent 70%);pointer-events:none;
    }
    .testi-top {
      display:flex;align-items:flex-end;justify-content:space-between;gap:32px;margin-bottom:48px;
    }
    @media(max-width:767px){ .testi-top{flex-direction:column;align-items:flex-start;gap:20px} }
    .testi-rating-hero { text-align:right; }
    .trh-stars { i{color:var(--gold);font-size:1.1rem;margin-right:2px} margin-bottom:4px; }
    .trh-score { font-family:var(--f-head);font-weight:800;font-size:2.2rem;color:var(--ghost);line-height:1; }
    .trh-label { font-family:var(--f-mono);font-size:.64rem;color:var(--ghost-d);letter-spacing:.08em;margin-top:4px; }

    /* Featured */
    .testi-featured {
      background:linear-gradient(160deg,var(--obsidian-l),var(--obsidian-m));
      border:1px solid rgba(201,151,74,.16);border-radius:22px;padding:44px;
      position:relative;overflow:hidden;margin-bottom:28px;
      &::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(201,151,74,.45),transparent)}
    }
    .tf-quote { font-family:var(--f-display);font-size:6rem;color:rgba(201,151,74,.12);line-height:.6;margin-bottom:-20px;user-select:none; }
    .tf-text {
      font-family:var(--f-display);font-style:italic;font-weight:300;
      font-size:clamp(1.1rem,2.2vw,1.4rem);color:var(--ghost-m);line-height:1.78;
      margin-bottom:28px;max-width:750px;
    }
    .tf-author { display:flex;align-items:center;gap:14px; }
    .tf-av {
      width:48px;height:48px;border-radius:14px;flex-shrink:0;
      background:linear-gradient(135deg,var(--gold-l),var(--coral));
      display:flex;align-items:center;justify-content:center;
      font-family:var(--f-head);font-weight:800;color:var(--obsidian);font-size:1.1rem;
    }
    .tf-name { font-family:var(--f-head);font-weight:700;font-size:.9rem;color:var(--ghost); }
    .tf-company { font-size:.76rem;color:var(--ghost-d);margin-top:2px; }
    .tf-stars { margin-left:auto;flex-shrink:0; i{color:var(--gold);font-size:.78rem;margin-right:1px} }

    /* Grid */
    .testi-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:16px; }
    @media(max-width:991px){ .testi-grid{grid-template-columns:1fr 1fr} }
    @media(max-width:575px){ .testi-grid{grid-template-columns:1fr} }

    .testi-card {
      background:var(--obsidian-l);border:1px solid rgba(255,255,255,.07);
      border-radius:18px;padding:28px;position:relative;overflow:hidden;
      transition:all .32s cubic-bezier(.4,0,.2,1);
      &::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(201,151,74,.25),transparent);transform:scaleX(0);transform-origin:left;transition:transform .4s}
      &:hover{border-color:rgba(201,151,74,.18);transform:translateY(-5px);box-shadow:0 22px 56px rgba(0,0,0,.42);&::before{transform:scaleX(1)}}
    }
    .tc-header { display:flex;align-items:center;justify-content:space-between;margin-bottom:16px; }
    .tch-stars { i{color:var(--gold);font-size:.7rem;margin-right:1px} }
    .tch-q { font-size:2rem;color:rgba(201,151,74,.3);line-height:1; }
    .tc-text { font-family:var(--f-display);font-style:italic;font-weight:300;font-size:1rem;color:var(--ghost-m);line-height:1.8;margin-bottom:16px; }
    .tc-project {
      display:inline-flex;align-items:center;gap:6px;
      background:var(--gold-dim);border:1px solid var(--gold-ring);
      border-radius:5px;padding:4px 11px;margin-bottom:16px;
      font-family:var(--f-mono);font-size:.64rem;color:var(--gold);letter-spacing:.07em;
      i{font-size:.68rem}
    }
    .tc-divider { height:1px;background:rgba(255,255,255,.06);margin-bottom:16px; }
    .tc-author { display:flex;align-items:center;gap:11px; }
    .tca-av {
      width:38px;height:38px;flex-shrink:0;border-radius:10px;
      display:flex;align-items:center;justify-content:center;
      font-family:var(--f-head);font-weight:800;color:var(--obsidian);font-size:.92rem;
    }
    .tca-name { font-family:var(--f-head);font-weight:700;font-size:.84rem;color:var(--ghost); }
    .tca-role { font-family:var(--f-mono);font-size:.62rem;color:var(--ghost-d);margin-top:2px;letter-spacing:.04em; }
  `]
})
export class TestimonialsComponent {
  list = [
    {
      init:'D', color:'linear-gradient(135deg,#C9974A,#E85D3A)',
      name:'Devesh Vishwakarma', role:'CEO', company:'Trendify Digital',
      project:'Angular + .NET Web Platform',
      text:'We needed a scalable web partner who actually understood our business. MrD Brains delivered exactly that — proactive, technically masterful, and genuinely invested in our success from day one.',
    },
    {
      init:'M', color:'linear-gradient(135deg,#E85D3A,#C9974A)',
      name:'Mangesh Prajapati', role:'Operations Head', company:'Techvision Engineering',
      project:'ERP System Development',
      text:'Highly responsive, technically brilliant. The ERP system they built has transformed our operations — what used to take hours now takes minutes. The ROI was visible within the first month.',
    },
    {
      init:'S', color:'linear-gradient(135deg,#C9974A,#8B5E2A)',
      name:'Sneha Rathi', role:'Founder', company:'ArtisanMart Mumbai',
      project:'E-Commerce & WhatsApp Bot',
      text:'The WhatsApp automation bot they built for our store has completely changed how we communicate with customers. Order confirmations, reminders, support — all running automatically now.',
    },
  ];
}