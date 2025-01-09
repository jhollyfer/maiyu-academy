lucide.createIcons();

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const home = document.getElementById("home");

  const onChangeHeaderBackground = function () {
    const bounds = home.getBoundingClientRect();

    if (bounds.top <= -10) header.classList.add("bg-[#003399]");
    else header.classList.remove("bg-[#003399]");
  };

  window.addEventListener("scroll", onChangeHeaderBackground);
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

  Reveal([...document.querySelectorAll(".hero-card")]);
  Reveal([...document.querySelectorAll(".methodology")]);
});

/**
 *
 * @param {Element[]} elements
 */

function Reveal(elements) {
  for (let index = 0; index < elements.length; index++) {
    sr.reveal(elements[index], {
      delay: (index + 1) * 350,
    });
  }
}
