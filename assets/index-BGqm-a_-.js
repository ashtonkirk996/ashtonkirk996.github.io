(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const N="modulepreload",M=function(e){return"/"+e},E={},y=function(s,t,c){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.allSettled(t.map(o=>{if(o=M(o),o in E)return;E[o]=!0;const d=o.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${m}`))return;const r=document.createElement("link");if(r.rel=d?"stylesheet":N,d||(r.as="script"),r.crossOrigin="",r.href=o,l&&r.setAttribute("nonce",l),document.head.appendChild(r),d)return new Promise((g,b)=>{r.addEventListener("load",g),r.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${o}`)))})}))}function a(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return n.then(i=>{for(const l of i||[])l.status==="rejected"&&a(l.reason);return s().catch(a)})};function v(e){e.innerHTML=`
    `}function _(e){e.innerHTML=`
      <section class="readings-section">
        <h2>ALL YOU NEED TO KNOW</h2>
        <div class="reading-options">
        <p>
You can choose readings via telephone, face to face. There are set time options for readings and it is also possible to book a reading that at the end is charged by the minute. I offer a business consultancy service based on many years of personal experience and the added advantage of the psychic insight. For bookings follow the Link
       </p>
</div>
      </section>
    `}function S(e){e.innerHTML=`
      <section class="about-section">
        <h2>ABOUT DEBORAH</h2>
        <div class="about-content">
          <!-- Add about content here -->
        </div>
      </section>
    `}const B=Object.freeze(Object.defineProperty({__proto__:null,renderAboutPage:S},Symbol.toStringTag,{value:"Module"}));function I(e){e.innerHTML=`
      <section class="reviews-section">
        <h2>CLIENT TESTIMONIALS</h2>
        <div class="reviews-container">
          <!-- Add reviews here -->
        </div>
      </section>
    `}function k(e){e.innerHTML=`
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
  `;const s=e.querySelector("#contactForm");s==null||s.addEventListener("submit",t=>{t.preventDefault(),alert("This is a demo, no message was sent.")})}const R=Object.freeze(Object.defineProperty({__proto__:null,renderContactPage:k},Symbol.toStringTag,{value:"Module"}));function H(e){e.innerHTML=`
      <section class="terms-section">
        <h2>TERMS & CONDITIONS</h2>
        <div class="terms-content">
          <!-- Add terms content here -->
        </div>
      </section>
    `}function D(e,s){const t=document.createElement("nav");t.className="main-nav";const c=e.querySelector(".logo");if(c){c.innerHTML="";const o=document.createElement("div");o.className="logo-container";const d=document.createElement("img");d.src="images/logo_white.png",d.alt="Deborah's Psychic Readings Logo",d.className="logo-img logo-white";const m=document.createElement("img");m.src="images/logo_black.png",m.alt="Deborah's Psychic Readings Logo",m.className="logo-img logo-black",o.style.cursor="pointer",o.addEventListener("click",()=>{O("/")}),o.appendChild(d),o.appendChild(m),c.appendChild(o)}const n=[{title:"HOME",path:"/",action:v},{title:"PSYCHIC READINGS",path:"readings-section",action:_},{title:"ABOUT",path:"about-section",action:S},{title:"REVIEWS",path:"reviews-section",action:I},{title:"CONTACT ME",path:"contact-section",action:k},{title:"TERMS",path:"contact-section",action:H}],a=document.createElement("ul");a.className="menu-list",n.forEach(o=>{const d=document.createElement("li"),m=document.createElement("a");m.href=o.path,m.addEventListener("click",P=>{P.preventDefault(),O(o.path,s,o.action),t.classList.remove("active")});const r=document.createElement("span");r.className="menu-item-text",r.textContent=o.title;const g=document.createElementNS("http://www.w3.org/2000/svg","svg");g.setAttribute("class","menu-star"),g.setAttribute("width","9"),g.setAttribute("height","9"),g.setAttribute("viewBox","0 0 9 9");const b=document.createElementNS("http://www.w3.org/2000/svg","path");b.setAttribute("d","M0 4.5A4.456 4.456 0 0 0 4.5 0 4.456 4.456 0 0 0 9 4.5 4.456 4.456 0 0 0 4.5 9 4.456 4.456 0 0 0 0 4.5Z"),b.setAttribute("stroke-linecap","square"),b.setAttribute("stroke-linejoin","bevel"),b.setAttribute("stroke-miterlimit","10"),g.appendChild(b),r.appendChild(g),m.appendChild(r),d.appendChild(m),a.appendChild(d)}),t.appendChild(a),e.appendChild(t);const i=document.createElement("button");i.className="menu-toggle",i.innerHTML="☰",i.setAttribute("aria-label","Toggle navigation menu"),e.appendChild(i);function l(){window.matchMedia("(max-width: 768px)").matches?i.style.display="block":i.style.display="none"}l(),window.addEventListener("resize",l),i.addEventListener("click",o=>{o.stopPropagation(),t.classList.toggle("active")}),document.addEventListener("click",o=>{e.contains(o.target)||t.classList.remove("active")}),window.addEventListener("scroll",()=>{t.classList.remove("active")}),a.querySelectorAll("a").forEach(o=>{o.addEventListener("click",()=>{t.classList.remove("active")})})}function O(e,s,t){const c=document.getElementById(e);c&&c.scrollIntoView({behavior:"smooth",block:"start"})}const f=document.querySelector("#app"),u=document.createElement("main"),q=new URL(window.location.href);let h="/";const L=q.searchParams.get("p");L&&(h="/"+decodeURIComponent(L),window.history.replaceState({},"",h));h!=="/"&&window.dispatchEvent(new CustomEvent("routechange",{detail:{path:h}}));const C=document.createElement("div");C.innerHTML=`
  <div class="background-circle circle1"></div>
  <div class="background-circle circle2"></div>
`;document.body.prepend(C);const p=document.createElement("header");p.innerHTML=`
  <div class="logo">
    <span>DEBORAH'S <br> PSYCHIC READINGS</span>
  </div>
`;f.appendChild(p);f.appendChild(u);const w=document.createElement("div");w.className="cta-image";w.innerHTML=`
  <div class="cta-image-container">
   <button class="book-now-btn">BOOK NOW</button>
    <img src="/images/header.png" alt="cta image" class="cta-image-image">
   
  </div>
  <img src="/images/cta.png" alt="cta image" class="cta-image-image">
    <div class="cta-image-container">
   <button class="book-now-btn2">BOOK NOW</button>
    <img src="/images/cta2.png" alt="cta image" class="cta-image-image">
   
  </div>
  <img src="/images/overview.png" alt="cta image" class="cta-image-image">


  <div id="readings-section" class="cta-image-container">

  <img src="/images/pricing.png" alt="cta image" class="cta-image-image">
 
  <div class="button-row">
    <button class="book-now-btn3">BOOK NOW</button>
    <button class="book-now-btn3">BOOK NOW</button>
    <button class="book-now-btn3">BOOK NOW</button>
  </div>

    <div class="button-row2">
    <button class="book-now-btn3">BOOK NOW</button>
    <button class="book-now-btn3">BOOK NOW</button>
  </div>
</div>


    <div id="reviews-section" class="cta-image-container">
   <button class="book-now-btn4">BOOK NOW</button>
   
 <img src="/images/testimonials.png" alt="cta image" class="cta-image-image">

  </div>
 
    <div id="about-section" class="cta-image-container">
   <button class="book-now-btn5">BOOK NOW</button>

  <img src="/images/about.png" alt="cta image" class="cta-image-image">
  </div>
     <div id="contact-section" class="cta-image-container">
  <img src="/images/contact.png" alt="cta image" class="cta-image-image">
  </div>
  <img src="/images/rights.png" alt="cta image" class="cta-image-image">

`;f.insertBefore(w,u);let T=0;window.addEventListener("scroll",()=>{const e=window.pageYOffset;e>50?(p.classList.add("scrolled"),e>T?p.classList.add("hidden"):p.classList.remove("hidden"),T=e):p.classList.remove("scrolled","hidden")});function A(){const e=document.querySelectorAll(".scroll-animate"),s=(n,a=0)=>n.getBoundingClientRect().top<=(window.innerHeight||document.documentElement.clientHeight)-a,t=()=>{e.forEach((n,a)=>{s(n,100)&&(n.style.transitionDelay=`${a*.1}s`,n.classList.add("visible"))})};let c;window.addEventListener("scroll",()=>{clearTimeout(c),c=setTimeout(t,50)}),t()}D(p,u);v(u);const W=new MutationObserver(()=>{document.querySelector(".pricing-section")&&A()});W.observe(u,{childList:!0,subtree:!0});function K(){document.addEventListener("click",e=>{if(e.target.closest(".book-now-btn, .book-now-btn2, .book-now-btn3, .book-now-btn4, .book-now-btn5")){const t=document.getElementById("contact-section");t&&t.scrollIntoView({behavior:"smooth",block:"start"})}})}window.addEventListener("routechange",e=>{const s=e.detail.path.toLowerCase();switch(u.innerHTML="",s){case"/contact":y(async()=>{const{renderContactPage:t}=await Promise.resolve().then(()=>R);return{renderContactPage:t}},void 0).then(({renderContactPage:t})=>t(u)),document.title="Deborah's Psychic Readings - Contact";break;case"/about":y(async()=>{const{renderAboutPage:t}=await Promise.resolve().then(()=>B);return{renderAboutPage:t}},void 0).then(({renderAboutPage:t})=>t(u)),document.title="Deborah's Psychic Readings - About";break;default:v(u),document.title="Deborah's Psychic Readings";break}});document.addEventListener("DOMContentLoaded",()=>{A(),K()});
