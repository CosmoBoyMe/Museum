const burgerMenuBtn = document.querySelector(".header__nav-btn");
const navList = document.querySelector(".header__nav-list");
const navItem = document.querySelectorAll(".header__nav-item");

const closeBurgerMenu = () => {
  burgerMenuBtn.classList.toggle("header__nav-btn--active");
  navList.classList.toggle("header__nav-list--active");
};

burgerMenuBtn.addEventListener("click", (event) => {
  closeBurgerMenu();
});

navItem.forEach((item) => {
  item.addEventListener("click", (event) => {
    closeBurgerMenu();
  });
});

console.log(1);
