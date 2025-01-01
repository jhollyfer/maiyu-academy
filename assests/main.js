lucide.createIcons();

function populateGallery() {
  const MAX_GALLERY = 47;
  const gallery = document.getElementById("horizontal-gallery");

  const GALLERY_ITEMS = Array.from({ length: MAX_GALLERY }).map((_, index) => {
    const name = index + 1;
    const src = "/gallery/".concat(name).concat(".jpeg");
    const alt = "Imagem ".concat(name);
    return {
      name,
      src,
      alt,
    };
  });

  for (let item of GALLERY_ITEMS) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    li.className = "w-48 h-32 bg-gray-300 flex-shrink-0";
    img.src = item.src;
    img.alt = item.alt;
    img.className = "w-full h-full object-cover";
    li.appendChild(img);
    gallery.appendChild(li);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const home = document.getElementById("home");

  const onChangeHeaderBackground = function () {
    const bounds = home.getBoundingClientRect();
    console.log(bounds);

    if (bounds.top <= -10) header.classList.add("bg-[#003399]");
    else header.classList.remove("bg-[#003399]");
  };

  window.addEventListener("scroll", onChangeHeaderBackground);

  populateGallery();
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
