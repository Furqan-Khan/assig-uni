const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  autoHeight: 0,
  autoplay: {
    delay: 10000
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});
const newsSwiper = new Swiper(".news-swiper", {
  loop: 1,
  autoHeight: 1,
  slidesPerView: 1,
  spaceBetween: 10,
  autoHeight: 0,
  autoplay: {
    delay: 5000
  },
  navigation: {
      nextEl: '.news-swiper-button-next',
      prevEl: '.news-swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  }
});