var swiper = new Swiper("#swiper-2", {
  slidesPerView: 1.5,
  centeredSlides: true,
  speed: 1300,
  easing: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  pagination: {
    el: "#swiper-2 .swiper-custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  },
  loop: true,
  autoplay: {
    enabled: true,
    delay: 3500,
  },
  navigation: {
    nextEl: "#nav-right",
    prevEl: "#nav-left",
  },

  on: {
    slideChange: function () {
      var slides = document.querySelectorAll(".swiper-slide");
      var selectedSlideIndex = this.activeIndex;

      slides.forEach(function (slide, index) {
        var img = slide.querySelector("img");
        img.style.opacity = index === selectedSlideIndex ? 1 : 0.3;
      });
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  var slides = document.querySelectorAll(".swiper-slide");
  slides.forEach(function (slide, index) {
    slide.addEventListener("click", function () {
      swiper.slideTo(index); // Go to the clicked slide
    });
  });
});

var slides = document.querySelectorAll(".swiper-slide");
slides.forEach(function (slide) {
  slide.addEventListener("click", function () {
    // ลบคลาส .selected จากทุกรูปภาพ
    slides.forEach(function (s) {
      s.classList.remove("selected");
    });

    // เพิ่มคลาส .selected ลงในสไลด์ที่ถูกคลิก
    slide.classList.add("selected");
  });
});


var autoplayToggle = document.getElementById("autoplay-toggle");
var playIcon = document.getElementById("playIcon");
var pauseIcon = document.getElementById("pauseIcon");

autoplayToggle.addEventListener("click", function () {
  if (swiper.autoplay.running) {
    // หยุด autoplay ถ้ากำลังเล่น
    swiper.autoplay.stop();
    playIcon.style.display = "inline"; 
    pauseIcon.style.display = "none"; 
  } else {
    // เริ่ม autoplay ถ้าหยุด
    swiper.slideNext(); 
    swiper.autoplay.start();
    playIcon.style.display = "none"; 
    pauseIcon.style.display = "inline";

    
  }
});

// เริ่ม autoplay เมื่อเริ่ม Swiper
swiper.autoplay.start();
playIcon.style.display = "none"; 
pauseIcon.style.display = "inline";

if(window.innerWidth < 768){
  swiper.autoplay.stop();
  playIcon.style.display = "inline"; 
pauseIcon.style.display = "none";
}