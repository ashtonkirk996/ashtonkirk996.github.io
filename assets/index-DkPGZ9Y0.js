(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function p(r){const n=document.createElement("nav"),l=[{title:"HOME",url:"#"},{title:"PSYCHIC READINGS",url:"#"},{title:"ABOUT",url:"#"},{title:"REVIEWS",url:"#"},{title:"CONTACT ME",url:"#"},{title:"CART",url:"#"},{title:"TERMS",url:"#"}],s=document.createElement("ul");s.className="menu-list",l.forEach(e=>{const t=document.createElement("li"),o=document.createElement("a");o.href=e.url;const c=document.createElement("span");c.className="menu-item-text",c.innerHTML=`
        ${e.title}
        <svg class="menu-star" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9">
          <path d="M0 4.5A4.456 4.456 0 0 0 4.5 0 4.456 4.456 0 0 0 9 4.5 4.456 4.456 0 0 0 4.5 9 4.456 4.456 0 0 0 0 4.5Z" 
                stroke-linecap="square" stroke-linejoin="bevel" stroke-miterlimit="10"/>
        </svg>
      `,o.appendChild(c),t.appendChild(o),s.appendChild(t)}),n.appendChild(s),r.appendChild(n)}function m(r){let n=0;const l=s=>{n=s,r.innerHTML=`count is ${n}`};r.addEventListener("click",()=>l(n+1)),l(0)}const d=document.querySelector("#app"),i=document.createElement("header");i.innerHTML=`
  <div class="logo">
    <span>DEBORAH’S <br> PSYCHIC READINGS</span>
  </div>
`;d.appendChild(i);let a=0;window.addEventListener("scroll",()=>{const r=window.pageYOffset;r>50?(i.classList.add("scrolled"),r>a?i.classList.add("hidden"):i.classList.remove("hidden"),a=r):i.classList.remove("scrolled","hidden")});p(i);const u=document.createElement("main");u.innerHTML=`
  <section class="hero">
    <h1>PSYCHIC READINGS, <br> ASTOUNDINGLY <br> <span class="highlight">RELATABLE</span></h1>
    <p>Are you at crossroads and want to know what each path holds so you can make a wise decision that’s in alignment with your goals?</p>
  </section>
  <div class="card">
    <button id="counter" type="button"></button>
  </div>
`;d.appendChild(u);m(document.querySelector("#counter"));
