(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(o){const n=document.createElement("nav");n.className="main-nav";const s=o.querySelector(".logo");s.innerHTML="";const r=document.createElement("img");r.src="/images/logo.png",r.alt="Deborah's Psychic Readings",r.className="logo-img",s.appendChild(r);const e=[{title:"HOME",url:"#"},{title:"PSYCHIC READINGS",url:"#"},{title:"ABOUT",url:"#"},{title:"REVIEWS",url:"#"},{title:"CONTACT ME",url:"#"},{title:"CART",url:"#"},{title:"TERMS",url:"#"}],t=document.createElement("ul");t.className="menu-list",e.forEach(i=>{const d=document.createElement("li"),l=document.createElement("a");l.href=i.url;const a=document.createElement("span");a.className="menu-item-text",a.innerHTML=`
      ${i.title}
      <svg class="menu-star" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9">
        <path d="M0 4.5A4.456 4.456 0 0 0 4.5 0 4.456 4.456 0 0 0 9 4.5 4.456 4.456 0 0 0 4.5 9 4.456 4.456 0 0 0 0 4.5Z" 
              stroke-linecap="square" stroke-linejoin="bevel" stroke-miterlimit="10"/>
      </svg>
    `,l.appendChild(a),d.appendChild(l),t.appendChild(d)}),n.appendChild(t),o.appendChild(n)}function g(o){let n=0;const s=r=>{n=r,o.innerHTML=`count is ${n}`};o.addEventListener("click",()=>s(n+1)),s(0)}const m=document.querySelector("#app"),p=document.createElement("div");p.innerHTML=`
  <div class="background-circle circle1"></div>
  <div class="background-circle circle2"></div>
`;document.body.prepend(p);const c=document.createElement("header");c.innerHTML=`
  <div class="logo">
    <span>DEBORAH’S <br> PSYCHIC READINGS</span>
  </div>
`;m.appendChild(c);let u=0;window.addEventListener("scroll",()=>{const o=window.pageYOffset;o>50?(c.classList.add("scrolled"),o>u?c.classList.add("hidden"):c.classList.remove("hidden"),u=o):c.classList.remove("scrolled","hidden")});f(c);const h=document.createElement("main");h.innerHTML=`
  <section class="hero">
    <h1>PSYCHIC READINGS, <br> ASTOUNDINGLY <br> <span class="highlight">RELATABLE</span></h1>
    <p>Are you at crossroads and want to know what each path holds so you can make a wise decision that’s in alignment with your goals?</p>
  </section>
`;m.appendChild(h);g(document.querySelector("#counter"));
