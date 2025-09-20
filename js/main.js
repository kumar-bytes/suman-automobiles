// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Language toggle
const langToggle = document.getElementById("lang-toggle");
langToggle.addEventListener("click", () => {
  document.querySelectorAll(".lang-en").forEach(el => el.classList.toggle("d-none"));
  document.querySelectorAll(".lang-ta").forEach(el => el.classList.toggle("d-none"));
});