document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navContainer = document.querySelector(".nav-container");

  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    navContainer.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!menuToggle.contains(e.target) && !navContainer.contains(e.target)) {
      menuToggle.classList.remove("active");
      navContainer.classList.remove("active");
    }
  });
});
