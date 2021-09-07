

// STICKY MENU
    $(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    if (scroll < 1) {
    $(".header-area").removeClass("sticky");
    }else{
    $(".header-area").addClass("sticky");
    }
  });
  

// SWIPER-SLIDER

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// SEARCH-BOX

const f = document.getElementById("form");
const q = document.getElementById("query");
const google = "https://www.google.com/search?q=site%3A+";
const site = "pagedart.com";

function submitted(event) {
  event.preventDefault();
  const url = google + site + "+" + q.value;
  const win = window.open(url, "_blank");
  win.focus();
}
f.addEventListener("submit", submitted);


// REGISTER-FORM

document.getElementById("click-button").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});


// OWL CAROUSEL

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})



// ANIMATION-NUMBER-COUNTER

$('#counter-block').ready(function () {

  $('.keyword').animationCounter({
    start: 0,
    end: 1000,
    step: 1,
    delay: 100
  });

  $('.build').animationCounter({
    start: 0,
    end: 2000,
    step: 1,
    delay: 40
  });

  $('.social').animationCounter({
    start: 0,
    end: 3000,
    step: 5,
    delay: 60
  });

  $('.ecommerce').animationCounter({
    start: 0,
    end: 4000,
    step: 10,
    delay: 40
  });

  $('.ranking').animationCounter({
    start: 0,
    end: 5000,
    step: 10,
    delay: 20
  });

});


// WOW.JS

    new WOW().init();







