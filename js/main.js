const menu = ["About", "Brand", "News", "Source"];
const swiper = new Swiper("#wrap", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 150,
  mousewheel: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    renderBullet: function (index, className) {
      return `<span class='${className}'>${menu[index]}</span>`;
    },
    clickable: true,
  },

  effect: "fade",
});

swiper.on("slideChangeTransitionStart", function () {
  anime({
    targets: ".swiper-slide-active .downUp",
    translateY: [50, 0],
    delay: anime.stagger(120, { start: 200 }),
    opacity: [0, 1],
    easing: "easeInOutQuart",
  });

  anime({
    targets: ".swiper-slide-active .upDown",
    translateY: [50, 0],
    translateX: ["-50%", "-50%"],
    delay: anime.stagger(120, { start: 200 }),
    opacity: [0, 1],
    easing: "easeInOutQuart",
  });

  anime({
    targets: ".swiper-slide-active .leftR",
    translateX: [-50, 0],
    delay: 700,
    opacity: [0, 1],
    easing: "easeInOutQuart",
  });

  anime({
    targets: ".swiper-slide-active .rightL",
    translateX: [50, 0],
    delay: 700,
    opacity: [0, 1],
    easing: "easeInOutQuart",
  });

  anime({
    targets: ".swiper-slide-active .picM",
    scale: [1.2, 1],
    delay: 800,
    opacity: [0, 1],
    easing: "easeInOutQuart",
  });

  anime({
    targets: ".swiper-slide-active.news .picD img ",
    translateY: [50, 0],
    delay: 0,
    opacity: [0, 1],
    easing: "easeInOutQuart",
  });

  anime({
    targets: ".swiper-slide-active .picT",
    translateY: [50, 0],
    delay: 1000,
    opacity: [0, 1],
    easing: "easeInOutQuart",
  });
});

//load effect
anime({
  targets: ".swiper-slide-active .downUp",
  translateY: [50, 0],
  delay: anime.stagger(120, { start: 200 }),
  opacity: [0, 1],
  easing: "easeInOutQuart",
});

anime({
  targets: ".swiper-slide-active .leftR",
  translateX: [-50, 0],
  delay: 700,
  opacity: [0, 1],
  easing: "easeInOutQuart",
});

anime({
  targets: ".swiper-slide-active .rightL",
  translateX: [50, 0],
  delay: 700,
  opacity: [0, 1],
  easing: "easeInOutQuart",
});

anime({
  targets: ".swiper-slide-active .picM",
  scale: [1.2, 1],
  delay: 800,
  opacity: [0, 1],
  easing: "easeInOutQuart",
});

anime({
  targets: ".swiper-slide-active .picT",
  translateY: [50, 0],
  delay: 1000,
  opacity: [0, 1],
  easing: "easeInOutQuart",
});
