const burger = document.querySelector('.burger');
const navigation = document.querySelector('.nav');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navigation.classList.toggle('active');
  body.classList.toggle('no-scroll');
});
const hero = new Swiper('.hero .swiper', {
  loop: true,
  slidesPerView: 1,
});
const reviews = new Swiper('.reviews .swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
const offers = new Swiper('.offers .swiper', {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});
const stage = new Swiper('.stage .swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
  },
});
const tariffs = new Swiper('.tariffs .swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1280: {
      spaceBetween: 32,
      slidesPerView: 3,
    },
  },
});

new Accordion('.accordion-container', {
  openOnInit: [0],
  collapse: true,
});

Fancybox.bind('[data-fancybox="gallery"]', {});
