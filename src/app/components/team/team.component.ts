import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true, imports:[CommonModule],
  template: `
    <section id="team" class="team-sec">
      <div class="noise"></div>
      <div class="container">
        <div class="text-center mb-5" data-aos="fade-up">
          <div class="eyebrow">The People</div>
          <h2 class="sec-h2">Meet the <em>Team</em></h2>
          <p class="sec-lead mx-auto">The talent driving innovation and delivering success at MrD Brains Technology.</p>
        </div>
        <div class="team-grid">
          <div class="team-card" *ngFor="let m of team; let i=index"
               data-aos="fade-up" [attr.data-aos-delay]="i*110">
            <div class="tc-bg"></div>
            <div class="tc-inner">
              <div class="tc-av-wrap">
                <div class="tc-av">{{ m.init }}</div>
                <div class="tc-av-ring"></div>
              </div>
              <div class="tc-links">
                <a *ngFor="let s of m.socials" href="#" (click)="$event.preventDefault()" class="tc-link">
                  <i [class]="s"></i>
                </a>
              </div>
            </div>
            <div class="tc-body">
              <div class="tc-role">{{ m.role }}</div>
              <div class="tc-name">{{ m.name }}</div>
              <p class="tc-bio">{{ m.bio }}</p>
            </div>
            <div class="tc-bottom-rule"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .team-sec { padding:120px 0; background:var(--obsidian-s); position:relative; overflow:hidden; }
    .team-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
    @media(max-width:767px){.team-grid{grid-template-columns:1fr}}

    .team-card {
      background:var(--obsidian-l); border:1px solid rgba(255,255,255,.08);
      border-radius:22px; overflow:hidden; position:relative;
      transition:all .36s cubic-bezier(.4,0,.2,1);
      &:hover {
        border-color:rgba(212,168,83,.25); transform:translateY(-6px);
        box-shadow:0 28px 70px rgba(0,0,0,.5);
        .tc-bg{opacity:1} .tc-av-ring{animation:pulseRing 2s ease-out infinite}
        .tc-links{opacity:1;transform:translateY(0)}
        .tc-bottom-rule{transform:scaleX(1)}
      }
    }
    .tc-bg {
      position:absolute; inset:0; opacity:0; transition:opacity .4s;
      background:radial-gradient(ellipse at top, rgba(212,168,83,.06) 0%, transparent 60%);
    }
    .tc-inner {
      display:flex; align-items:flex-end; justify-content:space-between;
      padding:36px 28px 24px; border-bottom:1px solid rgba(255,255,255,.06);
    }
    .tc-av-wrap { position:relative; }
    .tc-av {
      width:80px; height:80px; border-radius:20px;
      background:linear-gradient(135deg,var(--gold),var(--coral));
      display:flex; align-items:center; justify-content:center;
      font-family:'Syne',sans-serif; font-weight:800; color:var(--obsidian); font-size:2.1rem;
      box-shadow:0 8px 24px rgba(212,168,83,.25); position:relative; z-index:1;
    }
    .tc-av-ring {
      position:absolute; inset:-6px; border-radius:26px;
      border:1px solid rgba(212,168,83,.3);
    }
    .tc-links {
      display:flex; flex-direction:column; gap:6px;
      opacity:0; transform:translateY(6px); transition:all .3s ease;
    }
    .tc-link {
      width:32px; height:32px;
      background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.1);
      border-radius:8px; display:flex; align-items:center; justify-content:center;
      color:var(--ghost-d); transition:all .2s;
      i{font-size:.82rem}
      &:hover{background:var(--gold);color:var(--obsidian);border-color:var(--gold)}
    }
    .tc-body { padding:22px 28px 20px; }
    .tc-role {
      font-family:'DM Mono',monospace; font-size:.66rem; font-weight:500;
      text-transform:uppercase; letter-spacing:.12em; color:var(--gold); margin-bottom:5px;
    }
    .tc-name { font-family:'Syne',sans-serif; font-weight:800; font-size:1.05rem; color:var(--ghost); margin-bottom:10px; }
    .tc-bio  { font-size:.82rem; font-weight:300; color:var(--ghost-d); line-height:1.72; margin:0; }
    .tc-bottom-rule {
      height:2px; background:linear-gradient(90deg,var(--gold),var(--coral));
      transform:scaleX(0); transform-origin:left; transition:transform .4s cubic-bezier(.4,0,.2,1);
    }
  `]
})
export class TeamComponent {
  team=[
    {init:'V',name:'Vishal Seth',role:'Founder & CEO',bio:'Visionary leader driving MrD Brains with deep expertise in IT strategy, business development and client relationships.',socials:['bi bi-linkedin','bi bi-twitter-x']},
    {init:'A',name:'Adarsh Dubey',role:'Co-Founder & CTO',bio:'Technical architect behind our stack, specialising in .NET, Azure cloud infrastructure and full-stack development.',socials:['bi bi-linkedin','bi bi-github']},
    {init:'D',name:'Development Team',role:'Software Engineers',bio:'A talented group of developers, designers and IT professionals delivering innovative, scalable solutions every day.',socials:['bi bi-linkedin','bi bi-github']},
  ];
}
