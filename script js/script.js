const navMenu = document.getElementById("menu-");
const closeBtn = document.getElementById("close-btn");
const showBtn = document.getElementById("show-btn");

// ========================== Show Menu ==========================
if (showBtn) {
  showBtn.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// ========================== Close Menu ==========================
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
// ========================== Hide The Nav in Selection ==========================
const navLink = document.querySelectorAll(".nav_link");
const linkAction = () => {
  const navMenu = document.getElementById("menu-");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
// ========================== Add Shadow To The Nav Bar ==========================
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
// ========================== Scroll Up ==========================
const scrollUp = () => {
  const scrollBtn = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollBtn.classList.add("show_scroll")
    : scrollBtn.classList.remove("show_scroll");
};
window.addEventListener("scroll", scrollUp);
// ========================== Scroll Reveal Animation ==========================

const rev = scrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 300,
});

rev.reveal(`.home_data`);
rev.reveal(`.home_dish`, { delay: 500, distance: '100px', origin: 'bottom' });
rev.reveal('.home_burger', { delay: 1200, distance: '100px', duration: '1500' });
