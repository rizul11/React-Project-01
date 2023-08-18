$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        stagePadding: 48,
        items:1,
        loop:true,
        margin:30,
        responsive:{
            600:{
                stagePadding: 0,
                items:3
            }
        }
    });
  });