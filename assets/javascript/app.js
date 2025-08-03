const menuBtnEl = document.querySelector("nav button");
const navEl = document.querySelector("nav")
let isNavOpen = false;

if (menuBtnEl) {
    menuBtnEl.addEventListener('click', () => {
        navEl.classList.toggle("open")
    })
} 