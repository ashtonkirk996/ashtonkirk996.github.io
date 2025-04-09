import { renderHomePage } from "./home";
import { renderReadingsPage } from "./readings";
import { renderAboutPage } from "./about";
import { renderReviewsPage } from "./reviews";
import { renderContactPage } from "./contact";
import { renderTermsPage } from "./terms";

type MenuItem = {
  title: string;
  path: string; // Add path for each menu item
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
    logoImg.src = 'images/logo.png';
    logoImg.alt = 'Deborah\'s Psychic Readings Logo';
    logoImg.className = 'logo-img';
    
    // Make logo clickable to return home
    logoImg.style.cursor = 'pointer';
    logoImg.addEventListener('click', () => {
      handleNavigation('/', mainContent, renderHomePage);
    });
    
    logoDiv.appendChild(logoImg);
  }

  // Menu items array with paths
  const menuItems: MenuItem[] = [
    { title: 'HOME', path: '/', action: renderHomePage },
    { title: 'PSYCHIC READINGS', path: '/readings', action: renderReadingsPage },
    { title: 'ABOUT', path: '/about', action: renderAboutPage },
    { title: 'REVIEWS', path: '/reviews', action: renderReviewsPage },
    { title: 'CONTACT ME', path: '/contact', action: renderContactPage },
    { title: 'TERMS', path: '/terms', action: renderTermsPage }
  ];

  // Create menu list
  const ul = document.createElement('ul');
  ul.className = 'menu-list';

  // Add menu items
  menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.path;
    
    a.addEventListener('click', (e) => {
      e.preventDefault();
      handleNavigation(item.path, mainContent, item.action);
      // Close mobile menu when item is clicked
      nav.classList.remove('active');
    });

    const span = document.createElement('span');
    span.className = 'menu-item-text';
    span.textContent = item.title;
    
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

  // ===== MOBILE MENU TOGGLE =====
  const menuToggle = document.createElement('button');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '☰';
  menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
  header.appendChild(menuToggle);

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target as Node)) {
      nav.classList.remove('active');
    }
  });

  // Close menu when scrolling
  window.addEventListener('scroll', () => {
    nav.classList.remove('active');
  });

  // Handle navigation for mobile
  ul.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
}

function handleNavigation(path: string, container: HTMLElement, renderFunction: (container: HTMLElement) => void) {
  // Update browser URL
  window.history.pushState({}, '', path);
  
  // Update canonical URL
  updateCanonicalUrl(path);
  
  // Render content
  container.innerHTML = '';
  renderFunction(container);
  window.scrollTo(0, 0);
}

function updateCanonicalUrl(path: string) {
  const canonicalLink = document.getElementById('dynamic-canonical') as HTMLLinkElement;
  if (!canonicalLink) return;
  
  const baseUrl = 'https://deborahspsychicreadings.co.nz';
  const canonicalMap: Record<string, string> = {
    '/': `${baseUrl}/`,
    '/readings': `${baseUrl}/readings`,
    '/about': `${baseUrl}/about`,
    '/reviews': `${baseUrl}/reviews`,
    '/contact': `${baseUrl}/contact`,
    '/terms': `${baseUrl}/terms`
  };
  
  canonicalLink.href = canonicalMap[path] || `${baseUrl}/`;
}

