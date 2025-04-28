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
  

 // Get logo container and replace text with both logo versions
const logoDiv = header.querySelector('.logo');
if (logoDiv) {
  logoDiv.innerHTML = ''; // Clear existing text content
  
  // Create container for both logos
  const logoContainer = document.createElement('div');
  logoContainer.className = 'logo-container';
  
  // White logo (default)
  const logoWhite = document.createElement('img');
  logoWhite.src = 'images/logo_white.png';
  logoWhite.alt = 'Deborah\'s Psychic Readings Logo';
  logoWhite.className = 'logo-img logo-white';
  
  // Black logo (hidden initially)
  const logoBlack = document.createElement('img');
  logoBlack.src = 'images/logo_black.png';
  logoBlack.alt = 'Deborah\'s Psychic Readings Logo';
  logoBlack.className = 'logo-img logo-black';
  
  // Make logo clickable to return home
  logoContainer.style.cursor = 'pointer';
  logoContainer.addEventListener('click', () => {
    handleNavigation('/', mainContent, renderHomePage);
  });
  
  logoContainer.appendChild(logoWhite);
  logoContainer.appendChild(logoBlack);
  logoDiv.appendChild(logoContainer);
}

  // Menu items array with paths
  const menuItems: MenuItem[] = [
    { title: 'HOME', path: '/', action: renderHomePage },
    { title: 'PSYCHIC READINGS', path: 'readings-section', action: renderReadingsPage },
    { title: 'ABOUT', path: 'about-section', action: renderAboutPage },
    { title: 'REVIEWS', path: 'reviews-section', action: renderReviewsPage },
    { title: 'CONTACT ME', path: 'contact-section', action: renderContactPage },
    { title: 'TERMS', path: 'contact-section', action: renderTermsPage }
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

// Function to update visibility of the menu toggle
function updateMenuToggleVisibility() {
  // Media query for max-width of 768px (mobile)
  if (window.matchMedia('(max-width: 768px)').matches) {
    menuToggle.style.display = "block";  // Show on mobile
  } else {
    menuToggle.style.display = "none";   // Hide on desktop
  }
}

// Initial check when the page loads
updateMenuToggleVisibility();

// Update visibility whenever the window is resized
window.addEventListener('resize', updateMenuToggleVisibility);


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


  const section = document.getElementById(path);
  if (section) {
    section.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  
}
}


// function updateCanonicalUrl(path: string) {
//   const canonicalLink = document.getElementById('dynamic-canonical') as HTMLLinkElement;
//   if (!canonicalLink) return;
  
//   const baseUrl = 'https://deborahspsychicreadings.co.nz';
//   const canonicalMap: Record<string, string> = {
//     '/': `${baseUrl}/`,
//     '/readings': `${baseUrl}/readings`,
//     '/about': `${baseUrl}/about`,
//     '/reviews': `${baseUrl}/reviews`,
//     '/contact': `${baseUrl}/contact`,
//     '/terms': `${baseUrl}/terms`
//   };
  
//   canonicalLink.href = canonicalMap[path] || `${baseUrl}/`;
// }

