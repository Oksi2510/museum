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

  const openBtn = document.querySelector(".tickets__button");
  const paymentSection = document.querySelector(".payment");
  const closeBtn = document.querySelector(".payment__close");

  openBtn.addEventListener("click", function () {
    paymentSection.classList.toggle("payment--open");
  });
  closeBtn.addEventListener("click", function () {
    paymentSection.classList.toggle("payment--open");
  })



  const dataInput = document.getElementById('data');
  const timeInput = document.getElementById('time');
  const typeInput = document.getElementById('type');
  const basicInput = document.getElementById('basic');
  const seniorInput = document.getElementById('senior');
  const basicInputPayment = document.getElementById('basicPayment');
  const seniorInputPayment = document.getElementById('seniorPayment');
  const dataValue = document.querySelector(".payment__data-date")
  const timeValue = document.querySelector(".payment__data-time")
  const typeValue = document.querySelector(".payment__data-type")
  const countBasic = document.querySelector('.payment__tiket-count-basic span');
  const countSenior = document.querySelector('.payment__tiket-count-senior span');
  const costBasic = document.querySelector('.payment__tiket-cost-basic span');
  const costSenior = document.querySelector('.payment__tiket-cost-senior span');
  const totalPrice = document.querySelector('.payment__total-price span');
  const tiketsTotal = document.querySelector('.tickets__form-cost');




  let ticketsTotalPrice = document.querySelector('.tickets__form-total span');

  document.querySelectorAll('.tickets__count-box').forEach(countBlock => {
    const minusBtn = countBlock.querySelector('.tickets__btn-minus');
    const plusBtn = countBlock.querySelector('.tickets__btn-plus');
    const input = countBlock.querySelector('input[type="number"]');

    minusBtn.addEventListener('click', () => {
      if (+input.value > +input.min) input.stepDown();
      countPrise();
    });

    plusBtn.addEventListener('click', () => {
      if (+input.value < +input.max) input.stepUp();
      countPrise();
    });
    function countPrise() {
      const priceBasic = Number(basicInput.value) * 20;
      const priceSenior = Number(seniorInput.value) * 10;

      ticketsTotalPrice.textContent = priceBasic + priceSenior;
    }

  });



  openBtn.addEventListener('click', () => {
    const basicValue = basicInput.value;
    const seniorValue = seniorInput.value;
    // Потом записать обратно в поля
    basicInputPayment.value = basicValue;
    seniorInputPayment.value = seniorValue;
    countBasic.textContent = basicInputPayment.value;
    countSenior.textContent = seniorInputPayment.value;
    costBasic.textContent = basicInputPayment.value * 20
    costSenior.textContent = seniorInputPayment.value * 10
    totalPrice.textContent = Number(costSenior.textContent) + Number(costBasic.textContent)
  });




  dataInput.addEventListener('input', () => {
    dataValue.textContent = dataInput.value;
  });
  timeInput.addEventListener('input', () => {
    timeValue.textContent = timeInput.value;
  });
  typeInput.addEventListener('input', () => {
    typeValue.textContent = typeInput.value;
  });

  document.querySelectorAll('.payment__count').forEach(countBlock => {
    const minusBtn = countBlock.querySelector('.payment__count-minus');
    const plusBtn = countBlock.querySelector('.payment__count-plus');
    const input = countBlock.querySelector('input[type="number"]');

    minusBtn.addEventListener('click', () => {
      if (+input.value > +input.min) input.stepDown();
      updateValue();
    });

    plusBtn.addEventListener('click', () => {
      if (+input.value < +input.max) input.stepUp();
      updateValue();
    });

  });

  function updateValue() {
    countBasic.textContent = basicInputPayment.value;
    countSenior.textContent = seniorInputPayment.value;
    costBasic.textContent = basicInputPayment.value * 20
    costSenior.textContent = seniorInputPayment.value * 10
    totalPrice.textContent = Number(costSenior.textContent) + Number(costBasic.textContent)
  }







});





