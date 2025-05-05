import "./style.css";
import { setupMenu } from "./menu";
import { renderHomePage } from "./home";

const app = document.querySelector<HTMLDivElement>("#app")!;
const mainContent = document.createElement("main");

// Handle GitHub Pages Redirects
const currentUrl = new URL(window.location.href);
let targetPath = '/'; // Default to home

// Check for redirect parameter
const redirectParam = currentUrl.searchParams.get('p');
if (redirectParam) {
  targetPath = '/' + decodeURIComponent(redirectParam);
  // Clean up the URL in browser history
  window.history.replaceState({}, '', targetPath);
}

// Now handle the initial page load routing
if (targetPath !== '/') {
  // Trigger navigation to the correct page
  window.dispatchEvent(new CustomEvent("routechange", {
    detail: { path: targetPath }
  }));
}



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
app.appendChild(mainContent);

const ctaImage = document.createElement("div");
ctaImage.className= "cta-image";
ctaImage.innerHTML =  `
  <div class="cta-image-container">
   <button class="book-now-btn">BOOK NOW</button>
       <div class="cta-text">Are you at crossroads and want to know what<br>
        each path holds so you can make a wise<br>
         decision that’s in alignment with your goals?</div>
    <img src="/images/header.png" alt="cta image" class="cta-image-image">

   
  </div>
  <img src="/images/cta.png" alt="cta image" class="cta-image-image">
    <div class="cta-image-container">
   <button class="book-now-btn2">BOOK NOW</button>
    <img src="/images/cta2.png" alt="cta image" class="cta-image-image">
   
  </div>
  <img src="/images/overview.png" alt="cta image" class="cta-image-image">


  <div id="readings-section" class="cta-image-container">

  <img src="/images/pricing.png" alt="cta image" class="cta-image-image">
 
  <div class="button-row">
    <button class="book-now-btn3">BOOK NOW</button>
    <button class="book-now-btn3">BOOK NOW</button>
    <button class="book-now-btn3">BOOK NOW</button>
  </div>

    <div class="button-row2">
    <button class="book-now-btn3">BOOK NOW</button>
    <button class="book-now-btn3">BOOK NOW</button>
  </div>
</div>


    <div id="reviews-section" class="cta-image-container">
   <button class="book-now-btn4">BOOK NOW</button>
   
 <img src="/images/testimonials.png" alt="cta image" class="cta-image-image">

  </div>
 
    <div id="about-section" class="cta-image-container">
   <button class="book-now-btn5">BOOK NOW</button>

  <img src="/images/about.png" alt="cta image" class="cta-image-image">
  </div>
     <div id="contact-section" class="cta-image-container">
  <img src="/images/contact.png" alt="cta image" class="cta-image-image">
  </div>
  <img src="/images/rights.png" alt="cta image" class="cta-image-image">

`;
app.insertBefore(ctaImage, mainContent)

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

// Scroll animation handler
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

  // Debounce for performance
  let isScrolling: ReturnType<typeof setTimeout>;
  window.addEventListener('scroll', () => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(handleScrollAnimation, 50);
  });

  // Initial check
  handleScrollAnimation();
}

// Setup menu with navigation
setupMenu(header, mainContent);

// Render home page by default
renderHomePage(mainContent);

// Observe content changes for re-triggering animations
const observer = new MutationObserver(() => {
  if (document.querySelector('.pricing-section')) {
    initScrollAnimation();
  }
});
observer.observe(mainContent, { childList: true, subtree: true });

function setupBookNowButtons() {
  document.addEventListener('click', (e) => {
    // Handle ALL book now buttons (classes btn3, btn4, etc.)
    const button = (e.target as HTMLElement).closest(
      '.book-now-btn, .book-now-btn2, .book-now-btn3, .book-now-btn4, .book-now-btn5'
    );
    
    if (button) {
      // Check if we're already on the contact page

        // Already on contact page - just scroll
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
          
        }
      }
    });
  }

// Handle route changes
// Handle route changes
window.addEventListener("routechange", (e) => {
  const path = (e as CustomEvent).detail.path.toLowerCase();
  
  // Clear main content
  mainContent.innerHTML = "";

  // Handle routes
  switch(path) {
    case '/contact':
      import("./contact").then(({ renderContactPage }) => renderContactPage(mainContent));
      document.title = "Deborah's Psychic Readings - Contact";
      break;
    case '/about':
      import("./about").then(({ renderAboutPage }) => renderAboutPage(mainContent));
      document.title = "Deborah's Psychic Readings - About";
      break;
    default:
      renderHomePage(mainContent);
      document.title = "Deborah's Psychic Readings";
      break;
  }
});

// Run animations & setup interactions on page load
document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimation();
  setupBookNowButtons();
});
