// Importing default module
//import add from "./math.js";

// Importing named modules
/* import {
  calculateCircleArea,
  calculateCircleCircumference,
  calculateCircleDiameter,
  calculateCircleRadius,
  subtract,
  multiply,
  divide
} from "./math.js"; */

// Importing all modules as an object named math (alias) using the * as syntax, so we can access the modules using the math object
// import * as math from "./math.js";
//import * as math from "./math.js"; //The best practice is to use the default export and the named exports separately.
//Accessing the modules using the math object
// console.log(add(1, 2));
// console.log(math.calculateCircleArea(5));
// console.log(math.calculateCircleCircumference(5));
// console.log(math.calculateCircleDiameter(5));
// console.log(math.calculateCircleRadius(5));

// import Initial, * as math from "./math.js";
// console.log(Initial);
// console.log(math.default);
// console.log(math.add(1, 2));
// console.log(math.calculateCircleArea(5));

//import on demand
document
  .querySelector(".search-button")
  ?.addEventListener("click", async function (e) {
    e.preventDefault();
    try {
      const math = await import("./math.js");
      console.log(math.default);
      console.log(math.add(1, 2));
      console.log(math.calculateCircleArea(5));
      console.log(math.calculateCircleCircumference(5));
      console.log(math.calculateCircleDiameter(5));
    } catch (error) {
      console.error(error);
    }
  });

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
