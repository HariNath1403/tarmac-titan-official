// 1. Slider
const workRows = document.querySelectorAll(".work__row");
const workBtnUp = document.querySelector(".work__command--up");
const workBtnDown = document.querySelector(".work__command--down");

let curSlide = 1;
let location;
let minSlide = 1;
let maxSlide = 4;

const goToSlide = function (slides, val) {
  console.log(curSlide * 125 * val);
  slides.forEach(
    (slide) => (slide.style.transform = `translateY(${curSlide * 125 * val}%)`)
  );
};

workBtnDown.style.display = "none";

workBtnUp.addEventListener("click", function () {
  if (curSlide < maxSlide) {
    location = curSlide * -125;
    workRows.forEach((row) => {
      row.style.transform = `translateY(${location}%)`;
    });
    workBtnUp.style.display = "block";
    workBtnDown.style.display = "block";
  } else {
    location = curSlide * -125;
    workRows.forEach((row) => {
      row.style.transform = `translateY(${location}%)`;
    });
    workBtnUp.style.display = "none";
    workBtnDown.style.display = "block";
  }
  curSlide++;
});

workBtnDown.addEventListener("click", function () {
  curSlide--;
  location += 125;
  workRows.forEach((row) => {
    row.style.transform = `translateY(${location}%)`;
  });
  workBtnUp.style.display = "block";
  if (curSlide === 1) {
    workBtnDown.style.display = "none";
  }
});

// 2. Sticky Whatsapp Icon

const sectionHomepage = document.getElementById("homepage");
const whatsappEl = document.getElementById("whatsapp").querySelector("a");
const whatsappIconEl = whatsappEl.querySelector(".whatsapp__placeholder--icon");

const initialYCoords = sectionHomepage.getBoundingClientRect().top + 300;

window.addEventListener("scroll", function () {
  if (window.scrollY > initialYCoords) {
    whatsappEl.classList.add("whatsapp--active");
  } else {
    whatsappEl.classList.remove("whatsapp--active");
  }
});

// 3. Reveal Sections

const revealSections = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.15,
});
const allSections = document.querySelectorAll(".section");

const mediaQuery = window.matchMedia("(max-width: 768px)");

if (!mediaQuery.matches) {
  allSections.forEach((section) => {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
  });
}

// Hamburger Menu

const modalWindowExit = document.querySelector(".mobile__navigation--exit");
const hamburgerMenu = document.querySelector(".mobile__menu--link");
const modalWindowPage = document.querySelector(".mobile__navigation");
const modalWindowLinks = document.querySelectorAll(".mobile__navigation--link");
const htmlEl = document.documentElement;
let fadeAnimation = true;

hamburgerMenu.addEventListener("click", () => {
  modalWindowPage.style.transform = "translateX(0%)";
  htmlEl.style.overflowY = "hidden";
  fadeAnimation = false;
});

const closeModalWindow = function () {
  htmlEl.style.overflowY = "auto";
  modalWindowPage.style.transform = "translateX(-100%)";
  console.log(fadeAnimation);
};

modalWindowExit.addEventListener("click", () => {
  closeModalWindow();
});

modalWindowLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeModalWindow();
  });
});
