// ===== Dark Mode =====
const toggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
}

toggle.addEventListener("click", () => {
  const theme = document.documentElement.getAttribute("data-theme");
  const newTheme = theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// ===== Mobile Nav =====
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.style.display =
    navMenu.style.display === "flex" ? "none" : "flex";
});

// ===== Skill Animation =====
const progressBars = document.querySelectorAll(".progress");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.width = entry.target.dataset.width;
    }
  });
});

progressBars.forEach(bar => observer.observe(bar));

// ===== Projects Modal =====
const projects = {
  task: {
    title: "Task Manager App",
    description: "Manage tasks using localStorage.",
    tech: "HTML, CSS, JavaScript"
  },
  weather: {
    title: "Weather App",
    description: "Fetches real-time weather from API.",
    tech: "JavaScript, Fetch API"
  },
  dashboard: {
    title: "Data Dashboard",
    description: "Interactive data UI built with pure JS.",
    tech: "JavaScript, DOM Manipulation"
  }
};

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalTech = document.getElementById("modal-tech");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const data = projects[card.dataset.project];
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.description;
    modalTech.textContent = data.tech;
    modal.style.display = "flex";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modal.style.display = "none";
});

// ===== Form Validation =====
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const error = document.getElementById("form-error");

  if(!email.includes("@")){
    error.textContent = "Please enter a valid email.";
  } else {
    error.textContent = "Message sent successfully!";
  }
});