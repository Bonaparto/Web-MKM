const nav = document.getElementById("nav");
const toggleButton = document.getElementById("toggle");

let isOpen = false;
let width = -100;
let cnt = 1;
nav.style.marginLeft = `${width}px`;

const onNavbarClose = () => {
  nav.style.marginLeft = `${width -= 3}px`;
  if (width <= -100) {
    clearInterval(cnt);
    cnt++;
    isOpen = false;
    return;
  }
}

const onNavbarOpen = () => {
  nav.style.marginLeft = `${width += 3}px`;
  if (width >= 0) {
    isOpen = true;
    clearInterval(cnt);
    cnt++;
    return;
  }
}

const toggleNavbar = () => {
  isOpen ? setInterval(onNavbarClose, 1) : setInterval(onNavbarOpen, 1);
}