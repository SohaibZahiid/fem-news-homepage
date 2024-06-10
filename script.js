const open = document.querySelector(".open-menu");
const close = document.querySelector(".close-menu");
const links = document.querySelector(".links");

open.addEventListener("click", () => {
  links.classList.add("active");
});

close.addEventListener("click", () => {
  links.classList.remove("active");
});
