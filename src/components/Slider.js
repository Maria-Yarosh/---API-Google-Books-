import Swiper, { Pagination, Autoplay } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Pagination, Autoplay],
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

export default swiper