(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function h(e){e.innerHTML=`
     <section class="hero">
    <h1>PSYCHIC READINGS, <br> ASTOUNDINGLY <br> <span class="highlight">RELATABLE</span></h1>
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
    `}function y(e){e.innerHTML=`
      <section class="readings-section">
        <h2>PSYCHIC READING SERVICES</h2>
        <div class="reading-options">
          <!-- Add your reading options here -->
        </div>
      </section>
    `}function w(e){e.innerHTML=`
      <section class="about-section">
        <h2>ABOUT DEBORAH</h2>
        <div class="about-content">
          <!-- Add about content here -->
        </div>
      </section>
    `}function E(e){e.innerHTML=`
      <section class="reviews-section">
        <h2>CLIENT TESTIMONIALS</h2>
        <div class="reviews-container">
          <!-- Add reviews here -->
        </div>
      </section>
    `}function A(e){e.innerHTML=`
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
  `;const o=e.querySelector("#contactForm");o==null||o.addEventListener("submit",n=>{n.preventDefault(),alert("This is a demo, no message was sent.")})}function L(e){e.innerHTML=`
      <section class="terms-section">
        <h2>TERMS & CONDITIONS</h2>
        <div class="terms-content">
          <!-- Add terms content here -->
        </div>
      </section>
    `}function T(e,o){const n=document.createElement("nav");n.className="main-nav";const c=e.querySelector(".logo");if(c){c.innerHTML="";const s=document.createElement("img");s.src="images/logo.png",s.alt="Deborah's Psychic Readings Logo",s.className="logo-img",s.style.cursor="pointer",s.addEventListener("click",()=>{o.innerHTML="",h(o),window.scrollTo(0,0)}),c.appendChild(s)}const t=[{title:"HOME",action:h},{title:"PSYCHIC READINGS",action:y},{title:"ABOUT",action:w},{title:"REVIEWS",action:E},{title:"CONTACT ME",action:A},{title:"TERMS",action:L}],i=document.createElement("ul");i.className="menu-list",t.forEach(s=>{const p=document.createElement("li"),d=document.createElement("a");d.href="#",d.addEventListener("click",b=>{b.preventDefault(),o.innerHTML="",s.action(o),window.scrollTo(0,0)});const u=document.createElement("span");u.className="menu-item-text",u.textContent=s.title;const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("class","menu-star"),r.setAttribute("width","9"),r.setAttribute("height","9"),r.setAttribute("viewBox","0 0 9 9");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","M0 4.5A4.456 4.456 0 0 0 4.5 0 4.456 4.456 0 0 0 9 4.5 4.456 4.456 0 0 0 4.5 9 4.456 4.456 0 0 0 0 4.5Z"),l.setAttribute("stroke-linecap","square"),l.setAttribute("stroke-linejoin","bevel"),l.setAttribute("stroke-miterlimit","10"),r.appendChild(l),u.appendChild(r),d.appendChild(u),p.appendChild(d),i.appendChild(p)}),n.appendChild(i),e.appendChild(n)}const f=document.querySelector("#app"),v=document.createElement("div");v.innerHTML=`
  <div class="background-circle circle1"></div>
  <div class="background-circle circle2"></div>
`;document.body.prepend(v);const a=document.createElement("header");a.innerHTML=`
  <div class="logo">
    <span>DEBORAH'S <br> PSYCHIC READINGS</span>
  </div>
`;f.appendChild(a);let g=0;window.addEventListener("scroll",()=>{const e=window.pageYOffset;e>50?(a.classList.add("scrolled"),e>g?a.classList.add("hidden"):a.classList.remove("hidden"),g=e):a.classList.remove("scrolled","hidden")});const m=document.createElement("main");f.appendChild(m);T(a,m);h(m);
