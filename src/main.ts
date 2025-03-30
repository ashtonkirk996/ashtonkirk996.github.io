// main.ts
import "./style.css";
import { setupMenu } from "./menu";
import { setupCounter } from "./counter";

// Initialize app structure
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

// Setup menu
setupMenu(header);

// Add content
const mainContent = document.createElement("main");

// Add Hero Section
mainContent.innerHTML = `
  <section class="hero">
    <h1>PSYCHIC READINGS, <br> ASTOUNDINGLY <br> <span class="highlight">RELATABLE</span></h1>
    <p>Are you at crossroads and want to know what each path holds so you can make a wise decision that's in alignment with your goals?</p>
  </section>
`;

// Add the enhanced Psychic Reading Section
mainContent.innerHTML += `
  <section class="psychic-reading">
    <h2>I WILL TAKE YOU TO PLACES YOU HAVE NEVER BEEN</h2>
    <div class="psychic-content">
      <div class="psychic-text scroll-animate">
        <p>Are you at crossroads and want to know what each path holds, so you can make a wise decision that's in alignment with your goals? Sometimes we are too emotionally attached to give ourselves objective advice. It is good to get a professional to clarify with accurate insight into what the future may hold.</p>
        
        <p>I was born with psychic ability and I am proud to have been successfully providing psychic readings for both local and international clients for over 34 years. I have experience with helping people from all walks of life to overcome many obstacles in their lives and pride myself on being helpful, understanding, supportive and honest.</p>
        
        <p>Focussing on positive information that will help you choose your optimal life path. Whether it's work, business, relationships or family I am able to guide you in the right direction. I've had business clients who book with me whenever they're getting ready to hire someone important to their company. That's one of my specialities actually... sort of a psychic human resources person.</p>
        
        <p>I've had business clients book me when there are multiple choices of investment opportunities and they want to look into each of them to ensure the correct choice is made.</p>
      </div>
      <div class="psychic-image">
        <img src="images/image.png" alt="Professional Psychic Reader" class="profile-pic">
      </div>
    </div>
  </section>
`;

app.appendChild(mainContent);

// Set up counter button if needed
setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
// Initialize scroll animation for psychic reading section
function initScrollAnimation() {
  // Wait briefly to ensure DOM is fully ready
  setTimeout(() => {
    const scrollElements = document.querySelectorAll<HTMLElement>('.scroll-animate');
    
    if (scrollElements.length === 0) {
      console.warn('No scroll-animate elements found');
      return;
    }

    const elementInView = (el: HTMLElement, offset = 100): boolean => {
      const elementTop = el.getBoundingClientRect().top;
      return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
    };
    
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el)) {
          el.classList.add('visible');
        }
      });
    };

    // Add event listener with debounce
    let isScrolling: ReturnType<typeof setTimeout>;
    window.addEventListener('scroll', () => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(handleScrollAnimation, 50);
    });

    // Initial check with small delay
    setTimeout(handleScrollAnimation, 100);
  }, 300); // 300ms delay to ensure DOM is ready
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollAnimation);