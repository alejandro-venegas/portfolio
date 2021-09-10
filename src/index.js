import "./styles/main.scss";
import "./app/init";

let options = {
  root: document.querySelector("body"),
  rootMargin: "0px",
  threshold: 1,
};
const faceSVG = document.querySelector("#svg-face");
let observer = new IntersectionObserver((entries, observer) => {
  if (entries[0].isIntersecting) {
    faceSVG.classList.add("animate");
  }
}, options);

observer.observe(faceSVG);
