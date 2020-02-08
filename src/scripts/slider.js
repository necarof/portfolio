var swiper = new Swiper('.reviews__slider .swiper-container', {
  slidesPerView: 2,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev'
  },
  breakpoints: {
    320: {
      //slidesPerView: 1,
    }
  }
});

//form 

var btn = contacts__form.querySelector(".form__btn");
var text = contacts__form.querySelector("[type=text]");
var email = contacts__form.querySelector("[type=email]");

btn.addEventListener("click", function(evt) {
  if (!text.value || !email.value) {
    evt.preventDefault();
  }
});