lucide.createIcons();

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const home = document.getElementById("home");

  const changeBackground = function () {
    const bounds = home.getBoundingClientRect();
    console.log(bounds);

    if (bounds.top <= -10) header.classList.add("bg-[#003399]");
    else header.classList.remove("bg-[#003399]");
  };

  window.addEventListener("scroll", changeBackground);

  // changeBackground();
});

const bar_progress = document.getElementById("bar-progress");
const loading = document.getElementById("loading");

let progress = 0;

const simulateProgress = setInterval(function () {
  progress += 1;

  if (progress <= 100) bar_progress.style.width = `${progress}%`;

  if (progress === 100) {
    progress = 0;
  }
}, 50);

window.addEventListener("load", function () {
  setTimeout(() => {
    clearInterval(simulateProgress);
    loading.classList.add("hidden");
  }, 2000);
});
