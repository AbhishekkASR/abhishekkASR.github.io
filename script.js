// ------------------ THEME TOGGLE ------------------
const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);

  if (themeToggle) {
    themeToggle.innerText = theme === "dark" ? "🌙" : "☀";
  }

  localStorage.setItem("theme", theme);
}

// Load theme on refresh
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

// Toggle theme on click
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  });
}

// ------------------ PAGE FADE ANIMATION ------------------
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
