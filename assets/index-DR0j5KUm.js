(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function p(e){e.innerHTML=`
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
    `}function w(e){e.innerHTML=`
      <section class="readings-section">
        <h2>ALL YOU NEED TO KNOW</h2>
        <div class="reading-options">
        <p>
You can choose readings via telephone, face to face. There are set time options for readings and it is also possible to book a reading that at the end is charged by the minute. I offer a business consultancy service based on many years of personal experience and the added advantage of the psychic insight. For bookings follow the Link
       </p>
</div>
      </section>
    `}function E(e){e.innerHTML=`
      <section class="about-section">
        <h2>ABOUT DEBORAH</h2>
        <div class="about-content">
          <!-- Add about content here -->
        </div>
      </section>
    `}function L(e){e.innerHTML=`
      <section class="reviews-section">
        <h2>CLIENT TESTIMONIALS</h2>
        <div class="reviews-container">
          <!-- Add reviews here -->
        </div>
      </section>
    `}function T(e){e.innerHTML=`
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
  `;const s=e.querySelector("#contactForm");s==null||s.addEventListener("submit",n=>{n.preventDefault(),alert("This is a demo, no message was sent.")})}function A(e){e.innerHTML=`
      <section class="terms-section">
        <h2>TERMS & CONDITIONS</h2>
        <div class="terms-content">
          <!-- Add terms content here -->
        </div>
      </section>
    `}function S(e,s){const n=document.createElement("nav");n.className="main-nav";const a=e.querySelector(".logo");if(a){a.innerHTML="";const o=document.createElement("img");o.src="images/logo.png",o.alt="Deborah's Psychic Readings Logo",o.className="logo-img",o.style.cursor="pointer",o.addEventListener("click",()=>{s.innerHTML="",p(s),window.scrollTo(0,0)}),a.appendChild(o)}const t=[{title:"HOME",action:p},{title:"PSYCHIC READINGS",action:w},{title:"ABOUT",action:E},{title:"REVIEWS",action:L},{title:"CONTACT ME",action:T},{title:"TERMS",action:A}],i=document.createElement("ul");i.className="menu-list",t.forEach(o=>{const m=document.createElement("li"),d=document.createElement("a");d.href="#",d.addEventListener("click",y=>{y.preventDefault(),s.innerHTML="",o.action(s),window.scrollTo(0,0)});const u=document.createElement("span");u.className="menu-item-text",u.textContent=o.title;const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("class","menu-star"),r.setAttribute("width","9"),r.setAttribute("height","9"),r.setAttribute("viewBox","0 0 9 9");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","M0 4.5A4.456 4.456 0 0 0 4.5 0 4.456 4.456 0 0 0 9 4.5 4.456 4.456 0 0 0 4.5 9 4.456 4.456 0 0 0 0 4.5Z"),l.setAttribute("stroke-linecap","square"),l.setAttribute("stroke-linejoin","bevel"),l.setAttribute("stroke-miterlimit","10"),r.appendChild(l),u.appendChild(r),d.appendChild(u),m.appendChild(d),i.appendChild(m)}),n.appendChild(i),e.appendChild(n)}const g=document.querySelector("#app"),f=document.createElement("div");f.innerHTML=`
  <div class="background-circle circle1"></div>
  <div class="background-circle circle2"></div>
`;document.body.prepend(f);const c=document.createElement("header");c.innerHTML=`
  <div class="logo">
    <span>DEBORAH'S <br> PSYCHIC READINGS</span>
  </div>
`;g.appendChild(c);let v=0;window.addEventListener("scroll",()=>{const e=window.pageYOffset;e>50?(c.classList.add("scrolled"),e>v?c.classList.add("hidden"):c.classList.remove("hidden"),v=e):c.classList.remove("scrolled","hidden")});function b(){const e=document.querySelectorAll(".scroll-animate"),s=(t,i=0)=>t.getBoundingClientRect().top<=(window.innerHeight||document.documentElement.clientHeight)-i,n=()=>{e.forEach((t,i)=>{s(t,100)&&(t.style.transitionDelay=`${i*.1}s`,t.classList.add("visible"))})};let a;window.addEventListener("scroll",()=>{clearTimeout(a),a=setTimeout(n,50)}),n()}const h=document.createElement("main");g.appendChild(h);S(c,h);p(h);const C=new MutationObserver(()=>{document.querySelector(".pricing-section")&&b()});function k(){document.addEventListener("click",e=>{if(e.target.closest(".card-button")){const n=document.querySelector(".booking-notice");n&&(n.scrollIntoView({behavior:"smooth",block:"center"}),n.classList.add("highlight-pulse"),setTimeout(()=>{n.classList.remove("highlight-pulse")},2e3))}})}C.observe(h,{childList:!0,subtree:!0});document.addEventListener("DOMContentLoaded",()=>{b(),k()});
