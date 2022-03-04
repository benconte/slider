const swiper = new Swiper(".mangaflix-slider__slider", {
    // Optional parameters
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination"
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    slidesOffsetAfter: -50,
    //breakpoints
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      800: {
        slidesPerView: 4,
        slidesPerGroup: 4
      },
      // when window width is >= 480px
      1100: {
        slidesPerView: 6,
        slidesPerGroup: 6
      },
      // when window width is >= 640px
      1400: {
        slidesPerView: 7,
        slidesPerGroup: 7
      }
    }
  });
  