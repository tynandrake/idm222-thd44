const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("open");
    navBar.classList.toggle("open");
});


