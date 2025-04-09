(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const k="modulepreload",I=function(t){return"/"+t},b={},y=function(s,e,r){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),n=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(e.map(l=>{if(l=I(l),l in b)return;b[l]=!0;const d=l.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${p}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":k,d||(c.as="script"),c.crossOrigin="",c.href=l,n&&c.setAttribute("nonce",n),document.head.appendChild(c),d)return new Promise((h,f)=>{c.addEventListener("load",h),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=a,window.dispatchEvent(n),!n.defaultPrevented)throw a}return i.then(a=>{for(const n of a||[])n.status==="rejected"&&o(n.reason);return s().catch(o)})};function v(t){t.innerHTML=`
     <section class="hero">
    <h1>PSYCHIC READINGS, <br> ASTOUNDINGLY <br> <span class="highlight">ACCURATE</span></h1>
    <p>Are you at crossroads and want to know what each path holds so you can make a wise decision that's in alignment with your goals?</p>
  </section>
    <section class="psychic-reading">
    <h2>I WILL TAKE YOU TO PLACES YOU HAVE NEVER BEEN</h2>
    <div class="psychic-content">
      <div class="psychic-text scroll-animate">
        <p>Are you at crossroads and want to know what each path holds, so you can make a wise decision that's in alignment with your goals? Sometimes we are too emotionally attached to give ourselves objective advice. It is good to get a professional to clarify with accurate insight into what the future may hold.</p>
        
        <p>I was born with psychic ability and I am proud to have been successfully providing psychic readings for both local and international clients for over 34 years. I have experience with helping people from all walks of life to overcome many obstacles in their lives and pride myself on being helpful, understanding, supportive and honest.</p>
        
        <p>Focussing on positive information that will help you choose your optimal life path. Whether it's work, business, relationships or family I am able to guide you in the right direction. I've had business clients who book with me whenever they're getting ready to hire someone important to their company. That's one of my specialities actually... sort of a psychic human resources person.</p>
        
        <p>I've had business clients book me when there are multiple choices of investment opportunities and they want to look into each of them to ensure the correct choice is made.</p>
      </div>
      <div class="psychic-image">
        <img src="images/image.png" alt="Professional Psychic Reader" class="profile-pic">
      </div>
    </div>
  </section>
   <section class="pricing-section">
      <h2 class="section-title">PSYCHIC SERVICES</h2>
      <div class="pricing-grid">
        <!-- Pricing Card 1 -->
        <div class="pricing-card scroll-animate">
          <div class="card-header">
            <h3>10 Minute Reading</h3>
            <div class="crystal-icon">💎</div>
          </div>
          <div class="card-price">$45.80<span>/session</span></div>
          <ul class="card-features">
          </ul>
          <button class="card-button">Book Now</button>
        </div>

        <!-- Pricing Card 2 (Featured) -->
        <div class="pricing-card featured scroll-animate">
          <div class="card-badge">Most Popular</div>
          <div class="card-header">
            <h3>20 Minute Reading</h3>
            <div class="crystal-icon">🔮</div>
          </div>
          <div class="card-price">$91.60<span>/session</span></div>
          <ul class="card-features">
            
          </ul>
          <button class="card-button">Book Now</button>
        </div>

        <!-- Pricing Card 3 -->
        <div class="pricing-card scroll-animate">
          <div class="card-header">
            <h3>30 Minute Reading</h3>
            <div class="crystal-icon">✨</div>
          </div>
          <div class="card-price">$137.40<span>/session</span></div>
          <ul class="card-features">
          </ul>
          <button class="card-button">Book Now</button>
        </div>


        <!-- Pricing Card 4 -->
        <div class="pricing-card scroll-animate">
          <div class="card-header">
            <h3>40 Minute Reading</h3>
            <div class="crystal-icon">🃏 </div>
          </div>
          <div class="card-price">$183.20<span>/session</span></div>
          <ul class="card-features">
          </ul>
          <button class="card-button">Book Now</button>
        </div>


        <!-- Pricing Card 5 -->
        <div class="pricing-card scroll-animate">
          <div class="card-header">
            <h3>60 Minute Reading</h3>
            <div class="crystal-icon">🌙</div>
          </div>
          <div class="card-price">$275.00<span>/session</span></div>
          <ul class="card-features">
          </ul>
          <button class="card-button">Book Now</button>
        </div>
      </div>

       <div class="booking-notice scroll-animate">
    <div class="booking-content">
      <div class="booking-icon">📱</div>
      <div class="booking-text">
        <h3>Ready for Your Reading?</h3>
        <p>Text me at <a href="sms:+64221998724" class="phone-link">(022) 1998724</a> to book your session or ask any questions.</p>
      </div>
    </div>
  </div>
    </section>
    `}function O(t){t.innerHTML=`
      <section class="readings-section">
        <h2>ALL YOU NEED TO KNOW</h2>
        <div class="reading-options">
        <p>
You can choose readings via telephone, face to face. There are set time options for readings and it is also possible to book a reading that at the end is charged by the minute. I offer a business consultancy service based on many years of personal experience and the added advantage of the psychic insight. For bookings follow the Link
       </p>
</div>
      </section>
    `}function S(t){t.innerHTML=`
      <section class="about-section">
        <h2>ABOUT DEBORAH</h2>
        <div class="about-content">
          <!-- Add about content here -->
        </div>
      </section>
    `}const N=Object.freeze(Object.defineProperty({__proto__:null,renderAboutPage:S},Symbol.toStringTag,{value:"Module"}));function R(t){t.innerHTML=`
      <section class="reviews-section">
        <h2>CLIENT TESTIMONIALS</h2>
        <div class="reviews-container">
          <!-- Add reviews here -->
        </div>
      </section>
    `}function C(t){t.innerHTML=`
    <section class="contact-section">
      <h2>CONTACT DEBORAH</h2>
      <div class="contact-content">
        <div class="contact-info">
          <h3>Get in Touch</h3>
          <p>Email: <a href="mailto:deborahspsychicreadings@gmail.com">:deborahspsychicreadings@gmail.com</a></p>
          <p>Phone: <a href="tel:+64221998724">+64221998724</a></p>
        </div>
        <form class="contact-form" id="contactForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject">
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  `;const s=t.querySelector("#contactForm");s==null||s.addEventListener("submit",e=>{e.preventDefault(),alert("This is a demo, no message was sent.")})}const M=Object.freeze(Object.defineProperty({__proto__:null,renderContactPage:C},Symbol.toStringTag,{value:"Module"}));function H(t){t.innerHTML=`
      <section class="terms-section">
        <h2>TERMS & CONDITIONS</h2>
        <div class="terms-content">
          <!-- Add terms content here -->
        </div>
      </section>
    `}function D(t,s){const e=document.createElement("nav");e.className="main-nav";const r=t.querySelector(".logo");if(r){r.innerHTML="";const n=document.createElement("img");n.src="images/logo.png",n.alt="Deborah's Psychic Readings Logo",n.className="logo-img",n.style.cursor="pointer",n.addEventListener("click",()=>{w("/",s,v)}),r.appendChild(n)}const i=[{title:"HOME",path:"/",action:v},{title:"PSYCHIC READINGS",path:"/readings",action:O},{title:"ABOUT",path:"/about",action:S},{title:"REVIEWS",path:"/reviews",action:R},{title:"CONTACT ME",path:"/contact",action:C},{title:"TERMS",path:"/terms",action:H}],o=document.createElement("ul");o.className="menu-list",i.forEach(n=>{const l=document.createElement("li"),d=document.createElement("a");d.href=n.path,d.addEventListener("click",f=>{f.preventDefault(),w(n.path,s,n.action),e.classList.remove("active")});const p=document.createElement("span");p.className="menu-item-text",p.textContent=n.title;const c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.setAttribute("class","menu-star"),c.setAttribute("width","9"),c.setAttribute("height","9"),c.setAttribute("viewBox","0 0 9 9");const h=document.createElementNS("http://www.w3.org/2000/svg","path");h.setAttribute("d","M0 4.5A4.456 4.456 0 0 0 4.5 0 4.456 4.456 0 0 0 9 4.5 4.456 4.456 0 0 0 4.5 9 4.456 4.456 0 0 0 0 4.5Z"),h.setAttribute("stroke-linecap","square"),h.setAttribute("stroke-linejoin","bevel"),h.setAttribute("stroke-miterlimit","10"),c.appendChild(h),p.appendChild(c),d.appendChild(p),l.appendChild(d),o.appendChild(l)}),e.appendChild(o),t.appendChild(e);const a=document.createElement("button");a.className="menu-toggle",a.innerHTML="☰",a.setAttribute("aria-label","Toggle navigation menu"),t.appendChild(a),a.addEventListener("click",n=>{n.stopPropagation(),e.classList.toggle("active")}),document.addEventListener("click",n=>{t.contains(n.target)||e.classList.remove("active")}),window.addEventListener("scroll",()=>{e.classList.remove("active")}),o.querySelectorAll("a").forEach(n=>{n.addEventListener("click",()=>{e.classList.remove("active")})})}function w(t,s,e){window.history.pushState({},"",t),_(t),s.innerHTML="",e(s),window.scrollTo(0,0)}function _(t){const s=document.getElementById("dynamic-canonical");if(!s)return;const e="https://deborahspsychicreadings.co.nz",r={"/":`${e}/`,"/readings":`${e}/readings`,"/about":`${e}/about`,"/reviews":`${e}/reviews`,"/contact":`${e}/contact`,"/terms":`${e}/terms`};s.href=r[t]||`${e}/`}const T=document.querySelector("#app"),u=document.createElement("main"),B=new URL(window.location.href);let g="/";const E=B.searchParams.get("p");E&&(g="/"+decodeURIComponent(E),window.history.replaceState({},"",g));g!=="/"&&window.dispatchEvent(new CustomEvent("routechange",{detail:{path:g}}));const P=document.createElement("div");P.innerHTML=`
  <div class="background-circle circle1"></div>
  <div class="background-circle circle2"></div>
`;document.body.prepend(P);const m=document.createElement("header");m.innerHTML=`
  <div class="logo">
    <span>DEBORAH'S <br> PSYCHIC READINGS</span>
  </div>
`;T.appendChild(m);T.appendChild(u);let L=0;window.addEventListener("scroll",()=>{const t=window.pageYOffset;t>50?(m.classList.add("scrolled"),t>L?m.classList.add("hidden"):m.classList.remove("hidden"),L=t):m.classList.remove("scrolled","hidden")});function A(){const t=document.querySelectorAll(".scroll-animate"),s=(i,o=0)=>i.getBoundingClientRect().top<=(window.innerHeight||document.documentElement.clientHeight)-o,e=()=>{t.forEach((i,o)=>{s(i,100)&&(i.style.transitionDelay=`${o*.1}s`,i.classList.add("visible"))})};let r;window.addEventListener("scroll",()=>{clearTimeout(r),r=setTimeout(e,50)}),e()}D(m,u);v(u);const $=new MutationObserver(()=>{document.querySelector(".pricing-section")&&A()});$.observe(u,{childList:!0,subtree:!0});function q(){document.addEventListener("click",t=>{if(t.target.closest(".card-button")){const e=document.querySelector(".booking-notice");e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),e.classList.add("highlight-pulse"),setTimeout(()=>e.classList.remove("highlight-pulse"),2e3))}})}window.addEventListener("routechange",t=>{const s=t.detail.path.toLowerCase();switch(u.innerHTML="",s){case"/contact":y(async()=>{const{renderContactPage:e}=await Promise.resolve().then(()=>M);return{renderContactPage:e}},void 0).then(({renderContactPage:e})=>e(u)),document.title="Deborah's Psychic Readings - Contact";break;case"/about":y(async()=>{const{renderAboutPage:e}=await Promise.resolve().then(()=>N);return{renderAboutPage:e}},void 0).then(({renderAboutPage:e})=>e(u)),document.title="Deborah's Psychic Readings - About";break;default:v(u),document.title="Deborah's Psychic Readings";break}});document.addEventListener("DOMContentLoaded",()=>{A(),q()});
