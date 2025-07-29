document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");
  const wb = document.querySelector(".welcome__box");

  // Открытие/закрытие меню по клику на бургер
  burger.addEventListener("click", function () {
    nav.classList.toggle("header__nav--open");
    burger.classList.toggle("header__burger--open");
    wb.classList.toggle("welcome__box--none");
  });

  // Закрытие меню по клику на ссылку в навигации
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("header__nav--open");
      burger.classList.remove("header__burger--open");
      wb.classList.remove("welcome__box--none")
    }
    document.addEventListener("click", function (e) {
      const isClickInsideNav = nav.contains(e.target);
      const isClickOnBurger = burger.contains(e.target);

      if (!isClickInsideNav && !isClickOnBurger) {
        nav.classList.remove("header__nav--open");
        burger.classList.remove("header__burger--open");
        wb.classList.remove("welcome__box--none");
      }
    });
  });
});