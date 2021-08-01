const menu = ["About", "Brand", "News", "Source"];
const swiper = new Swiper("#wrap", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 150,
  mousewheel: true,
  grabCursor: true,
  speed: 800,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    renderBullet: function (index, className) {
      return `<span class='${className}'>${menu[index]}</span>`;
    },
    clickable: true,
  },
});
