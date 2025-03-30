(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function g(o){const n=document.createElement("nav");n.className="main-nav";const s=o.querySelector(".logo");s.innerHTML="";const i=document.createElement("img");i.src="/images/logo.png",i.alt="Deborah's Psychic Readings",i.className="logo-img",s.appendChild(i);const e=[{title:"HOME",url:"#"},{title:"PSYCHIC READINGS",url:"#"},{title:"ABOUT",url:"#"},{title:"REVIEWS",url:"#"},{title:"CONTACT ME",url:"#"},{title:"CART",url:"#"},{title:"TERMS",url:"#"}],t=document.createElement("ul");t.className="menu-list",e.forEach(r=>{const u=document.createElement("li"),l=document.createElement("a");l.href=r.url;const a=document.createElement("span");a.className="menu-item-text",a.innerHTML=`
      ${r.title}
      <svg class="menu-star" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9">
        <path d="M0 4.5A4.456 4.456 0 0 0 4.5 0 4.456 4.456 0 0 0 9 4.5 4.456 4.456 0 0 0 4.5 9 4.456 4.456 0 0 0 0 4.5Z" 
              stroke-linecap="square" stroke-linejoin="bevel" stroke-miterlimit="10"/>
      </svg>
    `,l.appendChild(a),u.appendChild(l),t.appendChild(u)}),n.appendChild(t),o.appendChild(n)}function f(o){let n=0;const s=i=>{n=i,o.innerHTML=`count is ${n}`};o.addEventListener("click",()=>s(n+1)),s(0)}const m=document.querySelector("#app"),p=document.createElement("div");p.innerHTML=`
  <div class="background-circle circle1"></div>
  <div class="background-circle circle2"></div>
`;document.body.prepend(p);const c=document.createElement("header");c.innerHTML=`
  <div class="logo">
    <span>DEBORAH'S <br> PSYCHIC READINGS</span>
  </div>
`;m.appendChild(c);let h=0;window.addEventListener("scroll",()=>{const o=window.pageYOffset;o>50?(c.classList.add("scrolled"),o>h?c.classList.add("hidden"):c.classList.remove("hidden"),h=o):c.classList.remove("scrolled","hidden")});g(c);const d=document.createElement("main");d.innerHTML=`
  <section class="hero">
    <h1>PSYCHIC READINGS, <br> ASTOUNDINGLY <br> <span class="highlight">RELATABLE</span></h1>
    <p>Are you at crossroads and want to know what each path holds so you can make a wise decision that's in alignment with your goals?</p>
  </section>
`;d.innerHTML+=`
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
`;m.appendChild(d);f(document.querySelector("#counter"));function y(){setTimeout(()=>{const o=document.querySelectorAll(".scroll-animate");if(o.length===0){console.warn("No scroll-animate elements found");return}const n=(e,t=100)=>e.getBoundingClientRect().top<=(window.innerHeight||document.documentElement.clientHeight)-t,s=()=>{o.forEach(e=>{n(e)&&e.classList.add("visible")})};let i;window.addEventListener("scroll",()=>{clearTimeout(i),i=setTimeout(s,50)}),setTimeout(s,100)},300)}document.addEventListener("DOMContentLoaded",y);
