import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true, imports:[CommonModule],
  template: `
    <footer class="footer">
      <div class="ft-rule"></div>
      <div class="noise"></div>
      <div class="ft-glow"></div>
      <div class="container">
        <div class="ft-grid">
          <!-- Brand -->
          <div class="ft-brand">
            <div class="ft-logo">
              <div class="ft-logo-mark">
                <img src="assets/logo.png" alt="MrD Brains Technology">
              </div>
              <div>
                <div class="ftl-name">MrD Brains</div>
                <div class="ftl-tag">Technology</div>
              </div>
            </div>
            <p class="ft-desc">Mumbai-based premium software studio delivering custom .NET, Angular & React solutions, IT infrastructure and digital marketing.</p>
            <div class="ft-socials">
              <a href="https://www.linkedin.com/company/mrd-brains" target="_blank"><i class="bi bi-linkedin"></i></a>
              <a href="https://github.com/MrDBrains" target="_blank"><i class="bi bi-github"></i></a>
              <a href="#" (click)="$event.preventDefault()"><i class="bi bi-twitter-x"></i></a>
              <a href="#" (click)="$event.preventDefault()"><i class="bi bi-instagram"></i></a>
            </div>
          </div>

          <div class="ft-col">
            <h5>Navigation</h5>
            <ul>
              <li *ngFor="let l of nav"><a (click)="go(l.id)">{{ l.label }}</a></li>
            </ul>
          </div>

          <div class="ft-col">
            <h5>Services</h5>
            <ul>
              <li *ngFor="let s of svcs"><a (click)="go('services')">{{ s }}</a></li>
            </ul>
          </div>

          <div class="ft-col">
            <h5>Contact</h5>
            <div class="ft-contact">
              <div><i class="bi bi-geo-alt-fill"></i><span>03, Jawahar Nagar, Khar East, Mumbai 400051</span></div>
              <div><i class="bi bi-telephone-fill"></i><span>+91 937-240-1266</span></div>
              <div><i class="bi bi-envelope-fill"></i><span>mrdbrainstech&#64;hotmail.com</span></div>
            </div>
            <div class="ft-stack">
              <span *ngFor="let b of stack">{{ b }}</span>
            </div>
          </div>
        </div>

        <!-- Bottom -->
        <div class="ft-bottom">
          <p>© 2025 <strong>MrD Brains Technology</strong>. All Rights Reserved.</p>
          <div class="ft-bottom-right">
            <span>Designed & Built in Mumbai</span>
            <i class="bi bi-heart-fill" style="color:var(--coral);font-size:.8rem"></i>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer { background:var(--obsidian); padding-top:80px; position:relative; overflow:hidden; }
    .ft-rule { height:1px; background:linear-gradient(90deg,transparent,var(--gold) 30%,var(--coral) 70%,transparent); }
    .ft-glow { position:absolute; top:0; left:50%; transform:translateX(-50%); width:600px; height:200px; background:radial-gradient(ellipse,rgba(212,168,83,.05) 0%,transparent 70%); pointer-events:none; }
    .ft-grid { display:grid; grid-template-columns:2fr 1fr 1fr 1.4fr; gap:40px; padding:60px 0 40px; }
    @media(max-width:991px){.ft-grid{grid-template-columns:1fr 1fr}}
    @media(max-width:575px){.ft-grid{grid-template-columns:1fr}}

    .ft-logo { display:flex; align-items:center; gap:11px; margin-bottom:14px; }
    .ft-logo-mark {
      width:42px; height:42px;
      background:linear-gradient(135deg,rgba(212,168,83,.15),rgba(212,168,83,.05));
      border:1px solid rgba(212,168,83,.25); border-radius:10px;
      display:flex; align-items:center; justify-content:center;
      img{width:34px;height:34px;object-fit:contain}
    }
    .ftl-name { font-family:'Syne',sans-serif; font-weight:800; font-size:.88rem; color:var(--ghost); }
    .ftl-tag  { font-family:'DM Mono',monospace; font-size:.58rem; color:rgba(212,168,83,.6); letter-spacing:.1em; }
    .ft-desc  { font-size:.82rem; font-weight:300; color:var(--ghost-d); line-height:1.8; max-width:260px; margin-bottom:20px; }
    .ft-socials { display:flex; gap:7px;
      a { width:34px; height:34px; background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.09); border-radius:8px; display:flex; align-items:center; justify-content:center; color:var(--ghost-d); transition:all .2s; i{font-size:.82rem} &:hover{background:var(--gold);color:var(--obsidian);border-color:var(--gold)} }
    }

    .ft-col {
      h5 { font-family:'DM Mono',monospace; font-size:.68rem; font-weight:500; text-transform:uppercase; letter-spacing:.16em; color:var(--gold); margin-bottom:18px; }
      ul { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:9px;
        li a { font-size:.82rem; font-weight:300; color:var(--ghost-d); cursor:pointer; transition:all .2s; display:inline-block; &:hover{color:var(--gold);padding-left:6px} }
      }
    }

    .ft-contact { display:flex; flex-direction:column; gap:10px; margin-bottom:16px;
      div { display:flex; gap:9px; align-items:flex-start; i{color:var(--gold);font-size:.78rem;margin-top:3px;flex-shrink:0} span{font-size:.8rem;font-weight:300;color:var(--ghost-d);line-height:1.5} }
    }
    .ft-stack { display:flex; flex-wrap:wrap; gap:6px;
      span { background:var(--gold-dim); border:1px solid var(--gold-ring); border-radius:5px; padding:3px 10px; font-family:'DM Mono',monospace; font-size:.64rem; color:var(--gold); }
    }

    .ft-bottom {
      border-top:1px solid rgba(255,255,255,.06); padding:20px 0;
      display:flex; align-items:center; justify-content:space-between;
      p { color:var(--ghost-d); font-size:.78rem; strong{color:var(--ghost);font-weight:600} }
    }
    .ft-bottom-right { display:flex; align-items:center; gap:8px; font-family:'DM Mono',monospace; font-size:.66rem; color:var(--ghost-d); }
    @media(max-width:575px){.ft-bottom{flex-direction:column;gap:12px;text-align:center}}
  `]
})
export class FooterComponent {
  nav=[{id:'hero',label:'Home'},{id:'about',label:'About'},{id:'product',label:'Products'},{id:'services',label:'Services'},{id:'team',label:'Team'},{id:'contact',label:'Contact'}];
  svcs=['Desktop Development','Web App Development','IT Infrastructure','Cybersecurity','Digital Marketing'];
  stack=['.NET','Angular','React','Azure','MongoDB'];
  go(id:string){const el=document.getElementById(id);if(el)window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-70,behavior:'smooth'});}
}
