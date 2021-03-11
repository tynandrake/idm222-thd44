const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.nav-menu');
const activeMenu = document.querySelector('body');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("open");
    navBar.classList.toggle("open");
    activeMenu.classList.toggle("open");
});

const checkpoint = 300;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".fwh").style.opacity = opacity;
});


