const nav = document.getElementById("nav");

let isOpen = false;
let position = -300;
let cnt = 1;
nav.style.left = `${position}px`;

const closeNav = () => {
  nav.style.left = `${position -= 3}px`;
  if (position <= -100) {
    clearInterval(cnt);
    cnt++;
    isOpen = false;
    return;
  }
}

const openNav = () => {
  nav.style.left = `${position += 3}px`;
  if (position >= 0) {
    isOpen = true;
    clearInterval(cnt);
    cnt++;
    return;
  }
}

const useNav = () => {
  isOpen ? setInterval(closeNav, 1) : setInterval(openNav, 1);
}