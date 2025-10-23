// ===============================
// Smooth Scrolling for Nav Links
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===============================
// Fade-in Animation on Scroll
// ===============================
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run once on load

// ===============================
// Highlight Active Nav Link
// ===============================
const navLinks = document.querySelectorAll("#topMenu a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 80) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===============================
// Dynamic Year in Footer
// ===============================
const footer = document.querySelector("footer p");
if (footer) {
  footer.innerHTML = `Created by Eve Omondi. &copy; ${new Date().getFullYear()}`;
}

// ===============================
// Simple Form Feedback
// ===============================
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for your message! I’ll get back to you soon.");
    form.reset();
  });
}
// Scroll Progress Bar
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY; // how far user has scrolled
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + "%";
});
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  progressBar.style.width = scrollPercent + "%";

  // Color shift from aqua → purple → red
  if (scrollPercent < 33) {
    progressBar.style.background = "aqua";
  } else if (scrollPercent < 66) {
    progressBar.style.background = "purple";
  } else {
    progressBar.style.background = "red";
  }
});
let scrollTimeout;

window.addEventListener("scroll", () => {
  progressBar.style.opacity = 1;
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    progressBar.style.opacity = 0;
  }, 1000);
});
// Dark Mode Toggle with Persistence
const toggleCheckbox = document.getElementById("toggleTheme");

// On page load, check saved preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleCheckbox.checked = true;
} else if (localStorage.getItem("theme") === "light") {
  document.body.classList.remove("dark-mode");
  toggleCheckbox.checked = false;
} else {
  // If no preference saved, fall back to system preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark-mode");
    toggleCheckbox.checked = true;
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Toggle on change and save preference
toggleCheckbox.addEventListener("change", () => {
  if (toggleCheckbox.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});