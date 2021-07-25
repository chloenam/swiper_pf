const menu = ["Greece", "Turkey", "Roma", "France"];
const swiper = new Swiper("#wrap", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 50,
  mousewheel: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    renderBullet: function (index, className) {
      return `<span class='${className}'>${menu[index]}</span>`;
    },
    clickable: true,
  },
});
