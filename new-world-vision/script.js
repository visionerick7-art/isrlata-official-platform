
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for internal navigation links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Automatically update the footer year
  const year = document.querySelector("#current-year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
