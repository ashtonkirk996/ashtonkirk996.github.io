import "./style.css";
import { setupMenu } from "./menu";
import { renderHomePage } from "./home";

const app = document.querySelector<HTMLDivElement>("#app")!;

// Create background container
const backgroundContainer = document.createElement("div");
backgroundContainer.innerHTML = `
  <div class="background-circle circle1"></div>
  <div class="background-circle circle2"></div>
`;
document.body.prepend(backgroundContainer);

// Create header
const header = document.createElement("header");
header.innerHTML = `
  <div class="logo">
    <span>DEBORAH'S <br> PSYCHIC READINGS</span>
  </div>
`;
app.appendChild(header);

// Add scroll handler for header effect
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 50) {
    header.classList.add("scrolled");
    if (currentScroll > lastScroll) {
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
    }
    lastScroll = currentScroll;
  } else {
    header.classList.remove("scrolled", "hidden");
  }
});

// ANIMATION FUNCTIONS (ONLY ADDITION)
function resetAnimations() {
  document.querySelectorAll('.scroll-animate').forEach(el => {
    el.classList.remove('visible');
  });
  initScrollAnimation();
}

function initScrollAnimation() {
  const scrollElements = document.querySelectorAll<HTMLElement>('.scroll-animate');
  
  const elementInView = (el: HTMLElement, offset = 0): boolean => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el, index) => {
      if (elementInView(el, 100)) {
        el.style.transitionDelay = `${index * 0.1}s`;
        el.classList.add('visible');
      }
    });
  };

  // Initialize with debounce
  let isScrolling: ReturnType<typeof setTimeout>;
  window.addEventListener('scroll', () => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(handleScrollAnimation, 50);
  });

  // Initial check
  handleScrollAnimation();
}

// Create main content area
const mainContent = document.createElement("main");
app.appendChild(mainContent);

// Setup menu with navigation
setupMenu(header, mainContent);

// Render home page by default
renderHomePage(mainContent);

// SIMPLE SOLUTION: Watch for content changes and re-run animations
const observer = new MutationObserver(() => {
  if (document.querySelector('.pricing-section')) {
    initScrollAnimation();
  }
});

function setupBookNowButtons() {
  document.addEventListener('click', (e) => {
    const button = (e.target as HTMLElement).closest('.card-button');
    if (button) {
      const bookingNotice = document.querySelector('.booking-notice');
      if (bookingNotice) {
        bookingNotice.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
        
        // Optional: Add a visual pulse effect when scrolling to it
        bookingNotice.classList.add('highlight-pulse');
        setTimeout(() => {
          bookingNotice.classList.remove('highlight-pulse');
        }, 2000);
      }
    }
  });
}


observer.observe(mainContent, {
  childList: true,
  subtree: true
});

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimation();
  setupBookNowButtons();
});
