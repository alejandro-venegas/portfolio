let options = {
  root: document.querySelector("body"),
  rootMargin: "0px",
  threshold: 0.5,
};
const animateArray = document.querySelectorAll("[animate]");
let observer = new IntersectionObserver((entries, observer) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    } else {
    }
  }
}, options);

for (const element of animateArray) {
  observer.observe(element);
}
