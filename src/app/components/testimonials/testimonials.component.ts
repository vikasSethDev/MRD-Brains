import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true, imports:[CommonModule],
  template: `
    <section class="testi-sec">
      <div class="testi-glow"></div>
      <div class="container">
        <div class="text-center mb-5" data-aos="fade-up">
          <div class="eyebrow">Client Stories</div>
          <h2 class="sec-h2">What Our <em>Clients</em> Say</h2>
        </div>
        <div class="testi-grid">
          <div class="testi-card" *ngFor="let t of list; let i=index"
               data-aos="fade-up" [attr.data-aos-delay]="i*100">
            <div class="tc-top">
              <div class="tc-q">❝</div>
              <div class="tc-stars"><i class="bi bi-star-fill" *ngFor="let s of [1,2,3,4,5]"></i></div>
            </div>
            <p class="tc-text">{{ t.text }}</p>
            <div class="tc-rule"></div>
            <div class="tc-author">
              <div class="tc-av">{{ t.init }}</div>
              <div>
                <div class="tc-name">{{ t.name }}</div>
                <div class="tc-co">{{ t.company }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testi-sec {
      padding:120px 0; background:var(--obsidian-m);
      position:relative; overflow:hidden;
    }
    .testi-glow {
      position:absolute; top:0; left:50%; transform:translateX(-50%);
      width:700px; height:300px;
      background:radial-gradient(ellipse,rgba(212,168,83,.05) 0%,transparent 70%);
      pointer-events:none;
    }
    .testi-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
    @media(max-width:991px){.testi-grid{grid-template-columns:1fr 1fr}}
    @media(max-width:575px){.testi-grid{grid-template-columns:1fr}}

    .testi-card {
      background:var(--obsidian-l); border:1px solid rgba(255,255,255,.08);
      border-radius:20px; padding:32px; position:relative; overflow:hidden;
      transition:all .32s cubic-bezier(.4,0,.2,1);
      &::before {
        content:''; position:absolute; top:0; left:0; right:0; height:1px;
        background:linear-gradient(90deg,transparent,rgba(212,168,83,.3),transparent);
        transform:scaleX(0); transform-origin:left; transition:transform .4s ease;
      }
      &:hover { border-color:rgba(212,168,83,.2); transform:translateY(-6px); box-shadow:0 24px 60px rgba(0,0,0,.4); &::before{transform:scaleX(1)} }
    }
    .tc-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:18px; }
    .tc-q { font-size:2.5rem; color:var(--gold); opacity:.4; line-height:1; }
    .tc-stars { i{color:var(--gold);font-size:.72rem;margin-left:1px} }
    .tc-text { font-family:'Cormorant Garamond',serif; font-size:1.05rem; font-weight:300; font-style:italic; color:var(--ghost-m); line-height:1.82; margin-bottom:22px; }
    .tc-rule { height:1px; background:rgba(255,255,255,.06); margin-bottom:20px; }
    .tc-author { display:flex; align-items:center; gap:12px; }
    .tc-av {
      width:40px; height:40px; flex-shrink:0; border-radius:50%;
      background:linear-gradient(135deg,var(--gold),var(--coral));
      display:flex; align-items:center; justify-content:center;
      font-family:'Syne',sans-serif; font-weight:800; color:var(--obsidian); font-size:.95rem;
    }
    .tc-name { font-family:'Syne',sans-serif; font-weight:700; font-size:.86rem; color:var(--ghost); }
    .tc-co { font-family:'DM Mono',monospace; font-size:.66rem; color:var(--ghost-d); margin-top:2px; }
  `]
})
export class TestimonialsComponent {
  list=[
    {init:'D',name:'Deepak Chaubey',company:'Techvision Engineering',text:'MrD Brains Technology delivered an efficient, tailored appraisal system. Their professionalism and technical excellence exceeded every expectation.'},
    {init:'D',name:'Devesh Vishwakarma',company:'Trendify Digital',text:'We needed a robust software partner — MrD Brains delivered with proactive support, scalable architecture, and a genuine commitment to quality.'},
    {init:'M',name:'Mangesh Prajapati',company:'Techvision Engineering',text:'Highly responsive and technically masterful. Their custom solutions have driven real, measurable business results from day one.'},
  ];
}
