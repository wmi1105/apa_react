import $ from "jquery";

/* 인덱스 세팅 start */
export function setIndex() {
  /* function setSwiper1() {
    var mySwiper = new Swiper(".mbanner .swiper-container", {
      speed: 400,
      loop: true,
      centeredSlides: true,
      updateOnWindowResize: true,
      pagination: {
        el: ".mbanner .swiper-pagination",
        type: "fraction",
      },
    });
  }
  setSwiper1();

  function setSwiper2() {
    var mySwiper2 = new Swiper(".health .swiper-container", {
      speed: 400,
      loop: false,
      slidesPerView: 1.2,
      centeredSlides: false,
      spaceBetween: 10,
      updateOnWindowResize: true,
      pagination: {
        el: ".health .swiper-pagination",
        type: "bullets",
      },
    });
  }
  setSwiper2();

  function setSwiper3() {
    var mySwiper3 = new Swiper(".disease .swiper-container", {
      speed: 400,
      loop: false,
      slidesPerView: 1.7,
      centeredSlides: false,
      spaceBetween: 14,
      updateOnWindowResize: true,
    });
  }
  setSwiper3(); 

  $(document).on("click", ".weather .open", function () {
    $(".weather .shot").hide();
    $(".weather .long").fadeIn(500);
    return false;
  });

  $(document).on("click", ".weather .close", function () {
    $(".weather .shot").fadeIn(500);
    $(".weather .long").hide();
    return false;
  });*/
}

export function weatherOpen() {
  $(".weather .shot").hide();
  $(".weather .long").fadeIn(500);
}

export function weatherClose() {
  $(".weather .shot").fadeIn(500);
  $(".weather .long").hide();
}
/* 인덱스 세팅 end */
