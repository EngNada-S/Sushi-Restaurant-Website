"use strict";

/*=============== DOM ELEMENTS ===============*/
const body = document.body;
const header = document.getElementById("header");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const navClose = document.querySelector(".nav-close");
const navToggle = document.querySelector(".nav-toggle");
const sections = document.querySelectorAll(".section");
const scrollUpBtn = document.querySelector(".scroll-up");

/*=============== SHOW & CLOSE MENU ===============*/
const toggleNavList = (isOpen) => {
  navMenu?.classList.toggle("show-menu", isOpen);
  body.classList.toggle("no-scroll", isOpen);
};

navClose?.addEventListener("click", () => toggleNavList(false));
navToggle?.addEventListener("click", () =>
  toggleNavList(!navMenu.classList.contains("show-menu")),
);

/*=============== REMOVE MENU MOBILE ===============*/
navLinks?.forEach((link) => {
  link.addEventListener("click", () => toggleNavList(false));
});

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () => {
  header?.classList.toggle("scroll-header", window.scrollY > 50);
};

/*=============== SWIPER MENU ===============*/
const swiperTabs = new Swiper(".menu-tabs", {
  slidesPerView: "auto",
});

const swiperMenu = new Swiper(".menu-content", {
  loop: true,
  thumbs: {
    swiper: swiperTabs,
  },
});

/*=============== SHOW SCROLL UP ===============*/
const toggleScrollUp = () => {
  scrollUpBtn?.classList.toggle("show-scroll-up", window.scrollY >= 350);
};

scrollUpBtn?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const scrollActive = () => {
  const scrollY = window.scrollY;
  const headerHeight = header?.offsetHeight || 0;
  const viewportTop = scrollY + headerHeight;
  const viewportBottom = scrollY + window.innerHeight;

  let bestId = "";
  let bestVisible = 0;

  sections?.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const visible = Math.max(
      0,
      Math.min(viewportBottom, bottom) - Math.max(viewportTop, top),
    );

    if (visible > bestVisible) {
      bestVisible = visible;
      bestId = section.id;
    }
  });

  navLinks?.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const isActive = bestId && href.includes(`#${bestId}`);
    link.classList.toggle("active-link", isActive);
  });
};

window.addEventListener("scroll", () => {
  scrollHeader();
  scrollActive();
  toggleScrollUp();
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1500,
  delay: 300,
  easing: "cubic-bezier(0.34 , 1.56 , 0.64 , 1)",
});

// home
sr.reveal(".home-title", { origin: "top" });
sr.reveal(".home-description", { delay: 600, origin: "top" });
sr.reveal(".home-blob", { delay: 900, distance: "100px" });
sr.reveal(".home-images img", {
  delay: 1200,
  distance: 0,
  interval: 200,
  scale: 0,
});
sr.reveal(".home-data img", {
  delay: 1500,
  distance: 0,
  interval: 200,
  scale: 0,
});
sr.reveal(".home-text", { delay: 2100, distance: "120px" });

// about
sr.reveal(".about-data .section-title");
sr.reveal(".about-data .section-subtitle", { delay: 600 });
sr.reveal(".about-data .section-description", { delay: 900 });
sr.reveal(".about-data .button", { delay: 1200, distance: 0, scale: 0 });
sr.reveal(".about-blob", { delay: 1200, origin: "left" });
sr.reveal(".about-img", { delay: 1500, origin: "right" });
sr.reveal(".about-data img", {
  delay: 1800,
  distance: 0,
  interval: 200,
  scale: 0,
});
sr.reveal(".about-text", { delay: 2100 });

// menu
sr.reveal(".menu-button", { interval: 100, distance: "10px" });
sr.reveal(".menu-content", { delay: 600 });
sr.reveal(".menu-text-1", { delay: 900, origin: "top" });
sr.reveal(".menu-text-2", { delay: 1200 });

// new
sr.reveal(".new-data .section-title");
sr.reveal(".new-data .section-subtitle", { delay: 600 });
sr.reveal(".new-data .section-description", { delay: 900 });
sr.reveal(".new-blob", { delay: 900, origin: "right" });
sr.reveal(".new-blob img", {
  delay: 1200,
  distance: 0,
  interval: 200,
  scale: 0,
});
sr.reveal(".new-data img", {
  delay: 1500,
  distance: 0,
  interval: 200,
  scale: 0,
});
sr.reveal(".new-text-1", { delay: 2100 });
sr.reveal(".new-text-2", { delay: 2400 });

// contact
sr.reveal(".contact-data", { interval: 100 });
sr.reveal(".contact-newsletter");
sr.reveal(".contact-text-1", { delay: 1200, origin: "top" });
sr.reveal(".contact-text-2", { delay: 1500 });

// footer
sr.reveal(".footer-container", { distance: "20px" });
