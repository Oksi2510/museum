document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");
  const wb = document.querySelector(".welcome__box");
  burger.addEventListener("click", function () {
    nav.classList.toggle("header__nav--open");
    burger.classList.toggle("header__burger--open");
    wb.classList.toggle("welcome__box--none");
  });
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
  const slides = document.querySelectorAll(".welcome__slider-item");
  let currentIndex = 0;
  const prevBtn = document.querySelector(".welcome__slider-arrow--prev");
  const nextBtn = document.querySelector(".welcome__slider-arrow--next");
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  const sliderDot = document.querySelectorAll('.welcome__slider-dot')
  const sliderCount = document.querySelector(".welcome__slider-num")
  function sliderNum(index) {
    const newCount = (index + 1).toString().padStart(2, "0");
    sliderCount.firstChild.nodeValue = newCount;
  }
  function activeSlide(index) {
    slides.forEach(slide => {
      slide.classList.add('welcome__slider-item--none')
    })
    slides[index].classList.remove('welcome__slider-item--none')
    sliderDot.forEach(dot => {
      dot.classList.remove('welcome__slider-dot--active')
    })
    sliderDot[index].classList.add('welcome__slider-dot--active')
    sliderNum(index)
  }
  activeSlide(0)
  sliderDot.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      activeSlide(index)
      currentIndex = index
    })
  })
  function nextSlide() {
    currentIndex++
    if (
      currentIndex >= slides.length) {
      currentIndex = 0
    }
    activeSlide(currentIndex)
  }
  function prevSlide() {
    currentIndex--
    if (currentIndex < 0) {
      currentIndex = slides.length - 1
    }
    activeSlide(currentIndex)
  }
});





