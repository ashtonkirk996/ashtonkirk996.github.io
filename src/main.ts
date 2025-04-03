import "./style.css";
import { setupMenu } from "./menu";
import { renderHomePage } from "./home";

const app = document.querySelector<HTMLDivElement>("#app")!;
const mainContent = document.createElement("main");

// Handle GitHub Pages Redirects
const currentUrl = new URL(window.location.href);
let redirectedPath = "";

// Check if we were redirected from 404.html (path is in the query string)
if (currentUrl.search) {
  redirectedPath = currentUrl.search.slice(1); // Remove the '?'
  // Ensure path starts with '/'
  if (!redirectedPath.startsWith("/")) {
    redirectedPath = `/${redirectedPath}`;
  }
}

if (redirectedPath) {
  // Clean up the URL
  window.history.replaceState({}, "", redirectedPath);
  
  // Trigger navigation
  window.dispatchEvent(new CustomEvent("routechange", { 
    detail: { path: redirectedPath } 
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

// "Book Now" button behavior
function setupBookNowButtons() {
  document.addEventListener('click', (e) => {
    const button = (e.target as HTMLElement).closest('.card-button');
    if (button) {
      const bookingNotice = document.querySelector('.booking-notice');
      if (bookingNotice) {
        bookingNotice.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Optional: Add a visual pulse effect when scrolling to it
        bookingNotice.classList.add('highlight-pulse');
        setTimeout(() => bookingNotice.classList.remove('highlight-pulse'), 2000);
      }
    }
  });
}

// Handle route changes
window.addEventListener("routechange", (e) => {
  const path = (e as CustomEvent).detail.path;
  
  // Update document title
  document.title = `Deborah's Psychic Readings - ${path.slice(1) || "Home"}`;

  // Clear main content and load the correct page
  mainContent.innerHTML = "";

  if (path === "/contact") {
    import("./contact").then(({ renderContactPage }) => renderContactPage(mainContent));
  } else if (path === "/about") {
    import("./about").then(({ renderAboutPage }) => renderAboutPage(mainContent));
  } else {
    renderHomePage(mainContent);
  }
});

// Run animations & setup interactions on page load
document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimation();
  setupBookNowButtons();
});
