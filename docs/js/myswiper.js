/* ***************Start home-slider*************** */
document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".home-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
    swiper.on('slideChangeTransitionStart', function () {
      var currentSlide = swiper.slides[swiper.activeIndex];
      var contents = currentSlide.querySelectorAll('.content h3, .content p, .content a');
      contents.forEach(function(content) {
        content.style.animation = 'none';
      });
    });
  
    swiper.on('slideChangeTransitionEnd', function () {
      var currentSlide = swiper.slides[swiper.activeIndex];
      var contents = currentSlide.querySelectorAll('.content h3, .content p, .content a');
      contents.forEach(function(content) {
        content.offsetHeight; // Trigger reflow
        content.style.animation = '';
      });
    });
  });
/* ***************End home-slider*************** */

/* ***************Start partner-slider*************** */  
var swiper = new Swiper(".partner-slider", {
  effect: "coverflow",
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 10,
  grabCursor: true,
  centeredSlides: true,

  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  breakpoints: {
    "0": {
      slidesPerView: 1,
      effect: "slide",
    },
    "768": {
      slidesPerView: 2,
      effect: "slide",
    },
    "1020": {
      slidesPerView: 2.5,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  },
});
/* ***************End partner-slider*************** */  
  
/* ***************Start smeloan-slider*************** */  
    var swiper = new Swiper(".smeloan-slider", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      grabCursor: true,
      centeredSlides: true,
      autoplay: true,
      // autoplay: {
      //   delay: 10000,
      //   disableOnInteraction: false,
      // },
      breakpoints: {
        "0": {
          slidesPerView: 1,
          autoplay:{
              delay:7000,
              disableOnInteraction:false,
          },
        },
        "768": {
          slidesPerView: 2,
          autoplay:{
            delay:7000,
            disableOnInteraction:false,
          },
        },
        "1025": {
          slidesPerView: 3, 
          autoplay:false,       
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      },
    });
/* ***************End smeloan-slider*************** */  

/* ***************Start ploan-slider*************** */  
    var swiper = new Swiper(".ploan-slider", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      grabCursor: true,
      centeredSlides: true,
      autoplay: true,
      // autoplay: {
      //   delay: 7000,
      //   disableOnInteraction: false,
      // }, 
      breakpoints: {
        "0": {
          slidesPerView: 1,
          autoplay:{
              delay:7000,
              disableOnInteraction:false,
          },
        },
        "768": {
          slidesPerView: 2,
          autoplay:{
            delay:7000,
            disableOnInteraction:false,
          },
        },
        "1020": {
          slidesPerView: 3,
          autoplay: false,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      },
    });
/* ***************End ploan-slider*************** */  

/* ***************Start team-slider*************** */  
    var swiper = new Swiper(".team-slider", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      grabCursor: true,
      centeredSlides: true,
      autoplay: true,
      // autoplay: {
      //   delay: 7000,
      //   disableOnInteraction: false,
      // }, 
      breakpoints: {
        "0": {
          slidesPerView: 1,
          autoplay:{
              delay:7000,
              disableOnInteraction:false,
          },
        },
        "768": {
          slidesPerView: 2,
          autoplay:{
            delay:7000,
            disableOnInteraction:false,
          },
        },
        "1020": {
          slidesPerView: 3,
          autoplay: false,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
/* ***************End team-slider*************** */  