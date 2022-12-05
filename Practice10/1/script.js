const load = document.getElementById("loader");
const line = document.getElementById("line");
let width = 0;

load.style.width = "300px";

const loader = () => {
  if (width === 300) clearInterval(1);
  width++;
  line.style.width = `${width}px`
};

setInterval(loader, 30);