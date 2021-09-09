const nav = document.querySelector("nav");
const spacer = document.querySelector(".empty-spacer");

// Set window height programatically as
// 100vh doesn't work well on iOS Safari
// and iOS Google Chrome
const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--screenHeight", `${window.innerHeight}px`);
  spacer.setAttribute(
    "style",
    `height: calc(var(--screenHeight) - ${nav.clientHeight}px - 10px)`
  );
};
window.addEventListener("resize", appHeight);
appHeight();

// Used to fix parallax on iOS browsers
if (getOS() === "iOS") {
  const parallaxWrappers = document.querySelectorAll(".parallax .wrapper");
  parallaxWrappers.forEach((value) => {
    value.setAttribute("style", "position: -webkit-sticky");
  });
}

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
