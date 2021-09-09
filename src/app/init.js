const nav = document.querySelector("nav");
const spacer = document.querySelector(".empty-spacer");

// Used to fix parallax on iOS browsers
if (getOS() === "iOS") {
  spacer.setAttribute(
    "style",
    `height: calc(100vh - ${nav.clientHeight}px - 10px)`
  );
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
