// src/menu.ts
import { renderHomePage } from "./home";
import { renderReadingsPage } from "./readings";
import { renderAboutPage } from "./about";
import { renderReviewsPage } from "./reviews";
import { renderContactPage } from "./contact";
import { renderTermsPage } from "./terms";

type MenuItem = {
  title: string;
  action: (container: HTMLElement) => void;
};

export function setupMenu(header: HTMLElement, mainContent: HTMLElement) {
  // Create nav element
  const nav = document.createElement('nav');
  nav.className = 'main-nav';

  // Get logo container and replace text with image
  const logoDiv = header.querySelector('.logo');
  if (logoDiv) {
    logoDiv.innerHTML = ''; // Clear existing text content
    
    const logoImg = document.createElement('img');
    logoImg.src = 'images/logo.png'; // Path to your logo image
    logoImg.alt = 'Deborah\'s Psychic Readings Logo';
    logoImg.className = 'logo-img';
    
    // Make logo clickable to return home
    logoImg.style.cursor = 'pointer';
    logoImg.addEventListener('click', () => {
      mainContent.innerHTML = '';
      renderHomePage(mainContent);
      window.scrollTo(0, 0);
    });
    
    logoDiv.appendChild(logoImg);
  }

  // Menu items array
  const menuItems: MenuItem[] = [
    { title: 'HOME', action: renderHomePage },
    { title: 'PSYCHIC READINGS', action: renderReadingsPage },
    { title: 'ABOUT', action: renderAboutPage },
    { title: 'REVIEWS', action: renderReviewsPage },
    { title: 'CONTACT ME', action: renderContactPage },
    { title: 'TERMS', action: renderTermsPage }
  ];

  // Create menu list
  const ul = document.createElement('ul');
  ul.className = 'menu-list';

  // Add menu items
  menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    
    a.addEventListener('click', (e) => {
      e.preventDefault();
      mainContent.innerHTML = '';
      item.action(mainContent);
      window.scrollTo(0, 0);
    });

    const span = document.createElement('span');
    span.className = 'menu-item-text';
    span.textContent = item.title;
    
    // Add star SVG
    const starSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    starSvg.setAttribute('class', 'menu-star');
    starSvg.setAttribute('width', '9');
    starSvg.setAttribute('height', '9');
    starSvg.setAttribute('viewBox', '0 0 9 9');
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M0 4.5A4.456 4.456 0 0 0 4.5 0 4.456 4.456 0 0 0 9 4.5 4.456 4.456 0 0 0 4.5 9 4.456 4.456 0 0 0 0 4.5Z');
    path.setAttribute('stroke-linecap', 'square');
    path.setAttribute('stroke-linejoin', 'bevel');
    path.setAttribute('stroke-miterlimit', '10');
    
    starSvg.appendChild(path);
    span.appendChild(starSvg);
    a.appendChild(span);
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  header.appendChild(nav);
}