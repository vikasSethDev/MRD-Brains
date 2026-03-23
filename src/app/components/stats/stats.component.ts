import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true, imports:[CommonModule],
  template: `
    <section class="stats-sec">
      <div class="stats-glow"></div>
      <div class="container">
        <div class="stats-grid">
          <div class="s-item" *ngFor="let s of stats; let i=index"
               data-aos="fade-up" [attr.data-aos-delay]="i*80">
            <div class="si-ico"><i [class]="s.icon"></i></div>
            <div class="si-val">{{ s.val }}</div>
            <div class="si-rule"></div>
            <div class="si-lbl">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .stats-sec {
      padding:80px 0; background:var(--obsidian-m);
      position:relative; overflow:hidden;
      border-top:1px solid rgba(212,168,83,.1);
      border-bottom:1px solid rgba(212,168,83,.1);
    }
    .stats-glow {
      position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
      width:600px; height:200px;
      background:radial-gradient(ellipse,rgba(212,168,83,.06) 0%,transparent 70%);
      pointer-events:none;
    }
    .stats-grid {
      display:grid; grid-template-columns:repeat(4,1fr);
      gap:0; position:relative;
    }
    @media(max-width:767px){.stats-grid{grid-template-columns:repeat(2,1fr)}}
    .s-item {
      display:flex; flex-direction:column; align-items:center; gap:10px;
      padding:44px 28px; text-align:center;
      border-right:1px solid rgba(255,255,255,.05);
      position:relative; cursor:default;
      transition:background .3s;
      &:last-child{border-right:none}
      &:hover{background:rgba(212,168,83,.04)}
    }
    .si-ico {
      width:52px; height:52px;
      background:linear-gradient(135deg,var(--gold-dim),rgba(212,168,83,.05));
      border:1px solid var(--gold-ring); border-radius:14px;
      display:flex; align-items:center; justify-content:center;
      i{color:var(--gold);font-size:1.35rem}
      animation:goldGlow 4s ease-in-out infinite;
    }
    .si-val {
      font-family:'Syne',sans-serif; font-size:2.8rem; font-weight:800;
      background:linear-gradient(135deg,var(--ghost),rgba(240,237,231,.6));
      -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
      line-height:1;
    }
    .si-rule { width:32px; height:1px; background:var(--gold); opacity:.4; }
    .si-lbl {
      font-family:'DM Mono',monospace; font-size:.7rem;
      color:var(--ghost-d); text-transform:uppercase; letter-spacing:.12em;
    }
  `]
})
export class StatsComponent {
  stats=[
    {icon:'bi bi-folder2-open',val:'15+',label:'Projects Delivered'},
    {icon:'bi bi-people-fill',val:'5+',label:'Happy Clients'},
    {icon:'bi bi-calendar-check',val:'3+',label:'Years of Excellence'},
    {icon:'bi bi-headset',val:'200+',label:'Support Hours'},
  ];
}
