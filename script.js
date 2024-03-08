const menuItems = document.querySelector("#menu-items");
const btn = document.querySelector("#menu-btn");

btn.addEventListener("click", () => {
  menuItems.classList.toggle("active");
});

// section 5
const cards = document.querySelector("#cards");
const upBtn = document.querySelector("#up");
const downBtn = document.querySelector("#down");

upBtn.addEventListener("click", () => {
  cards.scrollTop -= 210;
  cards.style.scrollBehavior = "smooth";
});
downBtn.addEventListener("click", () => {
  cards.scrollTop += 210;
  cards.style.scrollBehavior = "smooth";
});
