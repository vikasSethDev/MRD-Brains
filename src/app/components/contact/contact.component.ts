import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true, imports:[CommonModule,FormsModule],
  template: `
    <section id="contact" class="contact-sec">
      <div class="noise"></div>
      <div class="c-glow"></div>
      <div class="container">
        <div class="text-center mb-5" data-aos="fade-up">
          <div class="eyebrow">Get In Touch</div>
          <h2 class="sec-h2">Let's Build Something <em>Together</em></h2>
        </div>
        <div class="c-layout">
          <!-- Info panel -->
          <div class="c-info" data-aos="fade-right" data-aos-duration="800">
            <div class="ci-logo">
              <div class="ci-logo-mark">
                <img src="assets/logo.png" alt="MrD Brains Technology">
              </div>
              <div>
                <div class="ci-name">MrD Brains Technology</div>
                <div class="ci-tag">Premium Software Studio</div>
              </div>
            </div>
            <p class="ci-desc">We'd love to hear about your vision. Our team responds within 24 hours.</p>
            <div class="ci-rows">
              <div class="ci-row" *ngFor="let i of infos">
                <div class="cir-ico"><i [class]="i.icon"></i></div>
                <div>
                  <div class="cir-lbl">{{ i.label }}</div>
                  <div class="cir-val">{{ i.value }}</div>
                </div>
              </div>
            </div>
            <div class="ci-socials">
              <a href="https://www.linkedin.com/company/mrd-brains" target="_blank"><i class="bi bi-linkedin"></i></a>
              <a href="https://github.com/MrDBrains" target="_blank"><i class="bi bi-github"></i></a>
              <a href="#" (click)="$event.preventDefault()"><i class="bi bi-twitter-x"></i></a>
              <a href="#" (click)="$event.preventDefault()"><i class="bi bi-instagram"></i></a>
            </div>
          </div>

          <!-- Form -->
          <div data-aos="fade-left" data-aos-delay="120">
            <div class="c-form-card" *ngIf="!sent">
              <div class="cfc-head">
                <h3>Send Us a Message</h3>
                <div class="cfc-line"></div>
              </div>
              <form (ngSubmit)="submit()" #f="ngForm">
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label>Your Name</label>
                    <input type="text" name="name" [(ngModel)]="form.name" required placeholder="Vishal Seth">
                  </div>
                  <div class="col-sm-6">
                    <label>Email Address</label>
                    <input type="email" name="email" [(ngModel)]="form.email" required placeholder="you@company.com">
                  </div>
                  <div class="col-12">
                    <label>Subject</label>
                    <input type="text" name="subject" [(ngModel)]="form.subject" required placeholder="Project inquiry…">
                  </div>
                  <div class="col-12">
                    <label>Service Required</label>
                    <select name="service" [(ngModel)]="form.service">
                      <option value="">— Select a service —</option>
                      <option *ngFor="let s of services">{{ s }}</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <label>Your Vision</label>
                    <textarea name="message" [(ngModel)]="form.message" required rows="5" placeholder="Tell us about your project…"></textarea>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn-gold w-100 justify-content-center" style="border:none" [disabled]="sending">
                      <span *ngIf="!sending">Send Message <i class="bi bi-arrow-right"></i></span>
                      <span *ngIf="sending"><i class="bi bi-hourglass-split"></i> Sending…</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="sent-card" *ngIf="sent" data-aos="zoom-in">
              <div class="sent-icon"><i class="bi bi-check-lg"></i></div>
              <h4>Message Sent!</h4>
              <p>Thank you for reaching out. We'll reply within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-sec {
      padding:120px 0; background:var(--obsidian-m);
      position:relative; overflow:hidden;
    }
    .c-glow {
      position:absolute; bottom:-100px; right:-100px;
      width:500px; height:500px;
      background:radial-gradient(circle,rgba(212,168,83,.06) 0%,transparent 65%);
      pointer-events:none;
    }
    .c-layout { display:grid; grid-template-columns:1fr 1.6fr; gap:36px; align-items:start; }
    @media(max-width:991px){.c-layout{grid-template-columns:1fr}}

    /* Info panel */
    .c-info {
      background:var(--obsidian-l); border:1px solid rgba(212,168,83,.15);
      border-radius:22px; padding:32px; position:relative; overflow:hidden;
      &::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(212,168,83,.4),transparent)}
    }
    .ci-logo { display:flex; align-items:center; gap:13px; margin-bottom:18px; }
    .ci-logo-mark {
      width:52px; height:52px; flex-shrink:0;
      background:linear-gradient(135deg,rgba(212,168,83,.15),rgba(212,168,83,.05));
      border:1px solid rgba(212,168,83,.25); border-radius:13px;
      display:flex; align-items:center; justify-content:center;
      img{width:40px;height:40px;object-fit:contain}
    }
    .ci-name { font-family:'Syne',sans-serif; font-weight:700; font-size:.9rem; color:var(--ghost); }
    .ci-tag  { font-family:'DM Mono',monospace; font-size:.62rem; color:var(--gold); letter-spacing:.08em; margin-top:2px; }
    .ci-desc { font-size:.85rem; font-weight:300; color:var(--ghost-d); line-height:1.8; margin-bottom:26px; }
    .ci-rows { display:flex; flex-direction:column; gap:14px; margin-bottom:26px; }
    .ci-row  { display:flex; gap:12px; align-items:flex-start; }
    .cir-ico {
      width:36px; height:36px; flex-shrink:0;
      background:var(--gold-dim); border:1px solid var(--gold-ring);
      border-radius:9px; display:flex; align-items:center; justify-content:center;
      i{color:var(--gold);font-size:.86rem}
    }
    .cir-lbl { font-family:'DM Mono',monospace; font-size:.62rem; color:var(--ghost-d); text-transform:uppercase; letter-spacing:.1em; }
    .cir-val { font-size:.82rem; color:var(--ghost-m); margin-top:2px; }
    .ci-socials { display:flex; gap:7px;
      a { width:36px; height:36px; background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.1); border-radius:9px; display:flex; align-items:center; justify-content:center; color:var(--ghost-d); transition:all .2s; i{font-size:.88rem} &:hover{background:var(--gold);color:var(--obsidian);border-color:var(--gold)} }
    }

    /* Form card */
    .c-form-card {
      background:var(--obsidian-l); border:1px solid rgba(255,255,255,.08);
      border-radius:22px; padding:36px; position:relative; overflow:hidden;
      &::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(212,168,83,.25),transparent)}
    }
    .cfc-head { margin-bottom:28px;
      h3{font-family:'Syne',sans-serif;font-weight:700;font-size:1.2rem;color:var(--ghost);margin-bottom:10px}
      .cfc-line{height:1px;background:linear-gradient(90deg,var(--gold),transparent);width:60px}
    }
    label { display:block; font-family:'DM Mono',monospace; font-size:.64rem; font-weight:500; text-transform:uppercase; letter-spacing:.1em; color:var(--ghost-d); margin-bottom:7px; }
    input, select, textarea {
      width:100%; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.1);
      border-radius:10px; padding:11px 15px; color:var(--ghost);
      font-family:'DM Sans',sans-serif; font-size:.88rem; transition:all .22s; outline:none; resize:vertical;
      &::placeholder{color:rgba(240,237,231,.2)}
      &:focus{border-color:rgba(212,168,83,.4);background:rgba(212,168,83,.04);box-shadow:0 0 0 3px rgba(212,168,83,.08)}
    }
    select { appearance:none; cursor:pointer; }
    select option { background:var(--obsidian-m); color:var(--ghost); }

    /* Sent */
    .sent-card {
      background:var(--obsidian-l); border:1px solid rgba(212,168,83,.2);
      border-radius:22px; padding:64px 36px; text-align:center;
      h4{font-family:'Syne',sans-serif;font-size:1.5rem;color:var(--ghost);margin:16px 0 8px}
      p{font-size:.9rem;color:var(--ghost-d)}
    }
    .sent-icon {
      width:60px; height:60px; margin:0 auto;
      background:var(--gold-dim); border:1px solid var(--gold-ring);
      border-radius:50%; display:flex; align-items:center; justify-content:center;
      i{color:var(--gold);font-size:1.4rem}
      animation:goldGlow 3s ease-in-out infinite;
    }
  `]
})
export class ContactComponent {
  form={name:'',email:'',subject:'',service:'',message:''};
  sending=false; sent=false;
  infos=[
    {icon:'bi bi-geo-alt-fill',label:'Studio Address',value:'03, Jawahar Nagar, Khar East, Mumbai 400051'},
    {icon:'bi bi-telephone-fill',label:'Phone',value:'+91 937-240-1266'},
    {icon:'bi bi-envelope-fill',label:'Email',value:'mrdbrainstech&#64;hotmail.com'},
  ];
  services=['Desktop App Development','Web App Development','IT Infrastructure','Cybersecurity','Hosting Services','Digital Marketing'];
  async submit(){
    this.sending=true;
    try{
      const r=await fetch('https://formspree.io/f/mqalewod',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(this.form)});
      if(r.ok)this.sent=true;
    }catch{}
    this.sending=false;
  }
}
