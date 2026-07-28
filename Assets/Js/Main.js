// MangoLina Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

  console.log("MangoLina website loaded!");

  // Smooth scrolling for page links
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const section = document.querySelector(
        this.getAttribute("href")
      );

      if (section) {
        section.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

});
