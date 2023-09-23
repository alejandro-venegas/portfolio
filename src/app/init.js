// Sets all initial configuration
const os = getOS();
const parallaxContainerElem = document.querySelector(".parallax");

const parallaxScrolling = () => {
  parallaxContainerElem.scrollTo({ top: document.documentElement.scrollTop });
  requestAnimationFrame(parallaxScrolling);
};

parallaxScrolling();

const appHeight = () => {
  // Set window height programatically as
  // 100vh doesn't work well on iOS Safari
  // and iOS Google Chrome
  if (os === "iOS") {
    const doc = document.documentElement;
    doc.style.setProperty("--screenHeight", `${window.innerHeight}px`);
  }
};
window.addEventListener("resize", appHeight);
appHeight();

function getOS() {
  const userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"];
  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "Mac OS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (!os && /Linux/.test(platform)) {
    os = "Linux";
  }

  return os;
}
