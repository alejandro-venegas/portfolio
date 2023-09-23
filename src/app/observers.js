const presentationElem = document.getElementById("presentation-section");
const logoSVG = document.querySelector("logo-component svg");
const header = document.querySelector("body header");

const logoObserverOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.25,
};

const logoObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    logoSVG.style.width = "100px";
    header.setAttribute("style", "height: auto;");
  }
}, logoObserverOptions);
logoObserver.observe(presentationElem);

const options50 = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const animateArray = document.querySelectorAll("[animate]");
const observer50 = new IntersectionObserver((entries, observer) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  }
}, options50);

for (const element of animateArray) {
  observer50.observe(element);
}
