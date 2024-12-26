lucide.createIcons();

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const home = document.getElementById("home");

  const changeBackground = function () {
    const bounds = home.getBoundingClientRect();

    if (!(bounds.top <= 0 && bounds.bottom > 0))
      header.classList.add("bg-[#1E1E1E]");
    else header.classList.remove("bg-[#1E1E1E]");
  };

  window.addEventListener("scroll", changeBackground);

  // changeBackground();
});
