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

// Create main content area
const mainContent = document.createElement("main");
app.appendChild(mainContent);

// Setup menu with navigation
setupMenu(header, mainContent);

// Render home page by default
renderHomePage(mainContent);