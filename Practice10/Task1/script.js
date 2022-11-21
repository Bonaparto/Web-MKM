const loaderDiv = document.getElementById("loader");
const indicatorDiv = document.getElementById("indicator");
let width = 0;

loaderDiv.style.width = "200px";

const expandIndicator = () => {
  if (width === 200) clearInterval(1);
  indicatorDiv.style.width = `${++width}px`
};

setInterval(expandIndicator, 10);