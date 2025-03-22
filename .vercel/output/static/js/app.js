document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(
    "[data-collapse-toggle='navbar-default']"
  );
  const menu = document.querySelector("#navbar-menu");
  const title = document.querySelector("#title");
  const sun = document.querySelector("#sun");
  const moon = document.querySelector("#moon");
  const hamburger = document.querySelector("#hamburger");
  const logo = document.querySelector("#logo");

  toggleButton.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });

  toggleButton.addEventListener("click", function () {
    title.classList.toggle("hidden");
  });

  toggleButton.addEventListener("click", function () {
    logo.classList.toggle("absolute");
  });

  toggleButton.addEventListener("click", function () {
    sun.classList.toggle("absolute");
    sun.classList.toggle("py-2");
  });

  toggleButton.addEventListener("click", function () {
    moon.classList.toggle("absolute");
    moon.classList.toggle("py-2");
  });

  toggleButton.addEventListener("click", function () {
    hamburger.classList.toggle("items-start");
    hamburger.classList.toggle("py-4");
  });
});
