var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop:true,
  navigation: {
    nextEl: '.arrow'
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    }
  },

});

var menuButton = document.querySelector('.menu-button-wrap');
var menuButton1 = document.querySelector('.menu-button');
var menu = document.querySelector('.header-inner');
  menuButton.addEventListener('click',function(){
    menuButton1.classList.toggle('menu-button-active');
    menu.classList.toggle('header-active');
  })