const presentationElem = document.getElementById("presentation-section");
const logoSVG = document.querySelector("logo-component svg");
const header = document.querySelector("body header");
const emptySpacer = document.querySelector(".empty-spacer");
const logoObserverOptions = {
  root: document.querySelector("body"),
  rootMargin: "0px",
  threshold: 0.25,
};
const logoObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    logoSVG.style.width = "100px";
    emptySpacer.style.maxHeight = "calc(var(--screenHeight) - 112.933px)";
    header.setAttribute("style", "height: auto;");
  }
}, logoObserverOptions);
logoObserver.observe(presentationElem);
const options50 = {
  root: document.querySelector("body"),
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
