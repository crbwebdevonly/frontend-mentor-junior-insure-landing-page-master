const menuClose = document.getElementById("menu-close");
menuClose.addEventListener("click", () => {
     mobileMenu.classList.add("hide");
     menuClose.classList.add("hide");
     menuOpen.classList.remove("hide");
});
const menuOpen = document.getElementById("menu-open");
menuOpen.addEventListener("click", () => {
     mobileMenu.classList.remove("hide");
     menuClose.classList.remove("hide");
     menuOpen.classList.add("hide");
});
const mobileMenu = document.getElementById("mobile-menu-modal");

initilise();
//initialise
function initilise() {
     if (window.innerWidth < 600) {
          menuClose.classList.add("hide");
          menuOpen.classList.remove("hide");
          mobileMenu.classList.add("hide");
     } else if (window.innerWidth > 600) {
          menuClose.classList.add("hide");
          menuOpen.classList.add("hide");
          mobileMenu.classList.add("hide");
     }
}

window.addEventListener("resize", () => {
     console.log(window.innerWidth);
     initilise();
});
