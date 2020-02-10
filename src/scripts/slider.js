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