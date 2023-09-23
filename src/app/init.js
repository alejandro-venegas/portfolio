// Sets all initial configuration
const parallaxContainerElem = document.querySelector(".parallax");

const parallaxScrolling = () => {
  parallaxContainerElem.scrollTo({ top: document.documentElement.scrollTop });
  requestAnimationFrame(parallaxScrolling);
};

parallaxScrolling();
