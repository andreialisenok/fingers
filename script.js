const burger = document.querySelector('.burger');
const navigation = document.querySelector('.nav');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const modalClose = document.querySelectorAll('.modal .close');
const btnOpenModal = document.querySelectorAll('.btnOpenModal');
const btnOpenContent = document.querySelectorAll('.btnOpenContent');
const modalDesc = document.querySelector('.modal-desc');
const modalForm = document.querySelector('.modal-form');

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
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
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
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
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
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

new Accordion('.accordion-container', {
  openOnInit: [0],
  collapse: true,
});
if (document.querySelector('[data-fancybox="gallery"]')) {
  Fancybox.bind('[data-fancybox="gallery"]', {});
}
modalDesc.addEventListener('click', (e) => {
  e.stopPropagation();
});
modalForm.addEventListener('click', (e) => {
  e.stopPropagation();
});
modal.addEventListener('click', () => {
  modal.classList.remove('active');
  modalForm.classList.remove('active');
  modalDesc.classList.remove('active');
});
btnOpenContent.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.add('active');
    modalDesc.classList.add('active');
  });
});
btnOpenModal.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.add('active');
    modalForm.classList.add('active');
  });
});

modalClose.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.remove('active');
    modalForm.classList.remove('active');
    modalDesc.classList.remove('active');
  });
});
