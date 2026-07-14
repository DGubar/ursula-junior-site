const menuButton = document.querySelector("#menuButton");
const siteNav = document.querySelector("#siteNav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    siteNav.classList.toggle("site-nav--open");
  });
}
