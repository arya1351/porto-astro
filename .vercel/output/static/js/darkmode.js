const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
// theme vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
// icon toogling
const icontoggle = () => {
  sunIcon.classList.toggle("display-none");
  moonIcon.classList.toggle("display-none");
};

// initial Theme Check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    sunIcon.classList.remove("display-none");
    moonIcon.classList.add("display-none");
    return;
  } else sunIcon.classList.add("display-none");
  moonIcon.classList.remove("display-none"); // Sembunyikan ikon matahari
};

// manual theme switch
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    icontoggle();
    return;
  }

  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  icontoggle();
};

// Switch Function
sunIcon.addEventListener("click", () => {
  themeSwitch();
});

moonIcon.addEventListener("click", () => {
  themeSwitch();
});

themeCheck();
