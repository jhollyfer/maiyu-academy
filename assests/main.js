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
