// menu.ts
type MenuItem = {
  title: string;
  url: string;
};

export function setupMenu(container: HTMLElement) {
  // Create nav element
  const nav = document.createElement('nav');
  nav.className = 'main-nav'; // Add class for styling
  
  // Create logo image element
  const logoDiv = container.querySelector('.logo')!;
  logoDiv.innerHTML = ''; // Clear existing text
  const logoImg = document.createElement('img');
  logoImg.src = '/images/logo.png'; // Update with your actual image path
  logoImg.alt = 'Deborah\'s Psychic Readings';
  logoImg.className = 'logo-img';
  logoDiv.appendChild(logoImg);

  const menuItems: MenuItem[] = [
    { title: 'HOME', url: '#' },
    { title: 'PSYCHIC READINGS', url: '#' },
    { title: 'ABOUT', url: '#' },
    { title: 'REVIEWS', url: '#' },
    { title: 'CONTACT ME', url: '#' },
    { title: 'CART', url: '#' },
    { title: 'TERMS', url: '#' }
  ];

  const ul = document.createElement('ul');
  ul.className = 'menu-list';

  menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.url;
    
    const span = document.createElement('span');
    span.className = 'menu-item-text';
    span.innerHTML = `
      ${item.title}
      <svg class="menu-star" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9">
        <path d="M0 4.5A4.456 4.456 0 0 0 4.5 0 4.456 4.456 0 0 0 9 4.5 4.456 4.456 0 0 0 4.5 9 4.456 4.456 0 0 0 0 4.5Z" 
              stroke-linecap="square" stroke-linejoin="bevel" stroke-miterlimit="10"/>
      </svg>
    `;
    
    a.appendChild(span);
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  container.appendChild(nav);
}