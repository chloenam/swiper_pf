const menu = ["", "", "", ""];
const swiper = new Swiper("#wrap", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 150,
  mousewheel: true,
  grabCursor: true,

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

//DOM Cashing
const bg = document.querySelectorAll(".bg li");
const prev = document.querySelector(".swiper-button-prev");
const next = document.querySelector(".swiper-button-next");
const navi = document.querySelectorAll(".swiper-pagination span");

prev.addEventListener("click", activation);
next.addEventListener("click", activation);
window.addEventListener("mousewheel", activation);

swiper.on("slideChangeTransitionEnd", activation);

for (let el of navi) {
  el.addEventListener("click", (e) => {
    const isOn = e.currentTarget.classList.contains(
      "swiper-pagination-bullet-active"
    );

    if (isOn) return;
    swiper.on("slideChangeTransitionEnd", activation);
  });
}

function activation() {
  let item = document.querySelector(".swiper-slide-active");
  let i = item.getAttribute("data-swiper-slide-index");

  for (let el of bg) {
    el.classList.remove("on");
  }

  bg[i].classList.add("on");
}
