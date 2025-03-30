// main.ts
import './style.css';
import { setupMenu } from './menu';
import { setupCounter } from './counter';

// Initialize app structure
const app = document.querySelector<HTMLDivElement>('#app')!;

// Create background container
const backgroundContainer = document.createElement('div');
backgroundContainer.innerHTML = `
  <div class="background-circle circle1"></div>
  <div class="background-circle circle2"></div>
`;
document.body.prepend(backgroundContainer);

// Create header
const header = document.createElement('header');
header.innerHTML = `
  <div class="logo">
    <span>DEBORAH’S <br> PSYCHIC READINGS</span>
  </div>
`;
app.appendChild(header);

// Add scroll handler for header effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 50) {
    header.classList.add('scrolled');
    if (currentScroll > lastScroll) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
    lastScroll = currentScroll;
  } else {
    header.classList.remove('scrolled', 'hidden');
  }
});

// Setup menu
setupMenu(header);

// Add content
const mainContent = document.createElement('main');
mainContent.innerHTML = `
  <section class="hero">
    <h1>PSYCHIC READINGS, <br> ASTOUNDINGLY <br> <span class="highlight">RELATABLE</span></h1>
    <p>Are you at crossroads and want to know what each path holds so you can make a wise decision that’s in alignment with your goals?</p>
  </section>
`;
app.appendChild(mainContent);

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);