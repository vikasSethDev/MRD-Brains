import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true, imports: [CommonModule],
  template: `
    <section class="stats-sec">
      <div class="stats-glow"></div>
      <div class="stats-grid-bg"></div>
      <div class="container" style="position:relative;z-index:2">
        <!-- Top rule -->
        <div class="stats-rule"></div>
        <div class="stats-inner">
          <div class="si-item" *ngFor="let s of stats; let i=index"
               data-aos="fade-up" [attr.data-aos-delay]="i*80">
            <div class="sii-icon"><i [class]="s.icon"></i></div>
            <div class="sii-body">
              <div class="sii-val">{{ s.val }}</div>
              <div class="sii-lbl">{{ s.label }}</div>
              <div class="sii-sub">{{ s.sub }}</div>
            </div>
          </div>
        </div>
        <div class="stats-rule"></div>
      </div>
    </section>
  `,
  styles: [`
    .stats-sec {
      padding:80px 0;background:var(--obsidian-m);
      position:relative;overflow:hidden;
    }
    .stats-glow {
      position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
      width:700px;height:250px;
      background:radial-gradient(ellipse,rgba(201,151,74,.06) 0%,transparent 70%);
      pointer-events:none;
    }
    .stats-grid-bg {
      position:absolute;inset:0;pointer-events:none;
      background-image:linear-gradient(rgba(201,151,74,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(201,151,74,.025) 1px,transparent 1px);
      background-size:50px 50px;
    }
    .stats-rule { height:1px;background:linear-gradient(90deg,transparent,rgba(201,151,74,.2),transparent);margin:0; }
    .stats-inner {
      display:grid;grid-template-columns:repeat(4,1fr);
      gap:0;padding:56px 0;
    }
    @media(max-width:767px){ .stats-inner{grid-template-columns:repeat(2,1fr)} }
    .si-item {
      display:flex;align-items:center;gap:18px;
      padding:24px 28px;border-right:1px solid rgba(255,255,255,.05);
      transition:background .3s;
      &:last-child{border-right:none}
      &:hover{background:rgba(201,151,74,.03)}
    }
    .sii-icon {
      width:56px;height:56px;flex-shrink:0;
      background:linear-gradient(135deg,var(--gold-dim),rgba(201,151,74,.04));
      border:1px solid var(--gold-ring);border-radius:15px;
      display:flex;align-items:center;justify-content:center;
      i{color:var(--gold);font-size:1.4rem}
      animation:goldGlow 5s ease-in-out infinite;
    }
    .sii-val {
      font-family:var(--f-head);font-size:2.6rem;font-weight:800;
      background:linear-gradient(135deg,var(--ghost),rgba(237,233,225,.6));
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      line-height:1;margin-bottom:4px;
    }
    .sii-lbl { font-family:var(--f-head);font-weight:700;font-size:.84rem;color:var(--ghost-m);margin-bottom:2px; }
    .sii-sub { font-family:var(--f-mono);font-size:.62rem;color:var(--ghost-d);letter-spacing:.08em;text-transform:uppercase; }
  `]
})
export class StatsComponent {
  stats = [
    { icon: 'bi bi-folder2-open',   val: '15+',   label: 'Projects Delivered',   sub: 'Across Maharashtra' },
    { icon: 'bi bi-people-fill',    val: '5+',    label: 'Happy Clients',         sub: 'B2B & Enterprise' },
    { icon: 'bi bi-calendar-check', val: '3+',    label: 'Years Excellence',      sub: 'Est. 2022, Mumbai' },
    { icon: 'bi bi-headset',        val: '200+',  label: 'Support Hours',         sub: 'Post-launch care' },
  ];
}