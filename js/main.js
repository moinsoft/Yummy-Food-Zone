$(document).ready(function () {

  // Slick Slider Active In Banner

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed:3000,
    dots: true,
    pauseOnDotsHover:true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  });


  // Smooth Scroll And Current Class Active

  $('#nav').onePageNav({
    currentClass: 'current'
  });



});


$(window).on('scroll', function () {

  // Sticky Navbar Active

  if ($(this).scrollTop() > 25) {
    $('.header').addClass('sticky');
  } else {
    $('.header').removeClass('sticky');
  }


});