//footer.js//
document.addEventListener("DOMContentLoaded", function () {
  const toggleContainers = document.querySelectorAll(".col-1");

  toggleContainers.forEach((container) => {
    const button = container.querySelector(".toggle-btn");
    const links = container.querySelector(".links");

    button.addEventListener("click", function () {
      if (links.classList.contains("active")) {
        links.classList.remove("active"); // Hide links smoothly
        button.style.backgroundImage = 'url("../images/icons/plus_icon.svg")';
        console.log("hide");
      } else {
        links.classList.add("active"); // Show links smoothly
        button.style.backgroundImage = 'url("../images/icons/cross_icon.svg")';
        console.log("show");
      }
    });

  });
}); 