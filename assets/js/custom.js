$(document).ready(function(){

// Start Humber Main Menu Icon Js
$('.all-p-humber').click(function(){
	$(this).toggleClass('open');
});
//==== End Humber Main Menu Icon Js

//==== Start Mobile menu js 
$('.mobile-menu-icon').click(function(){
  $('.mobile_main_menu_content ul').slideToggle();
});
//==== End Mobile menu js 
$('.close-menu').click(function(){
    $('.mobile_main_menu_content ul').slideToggle();
    $('.all-p-humber').toggleClass('open');
});

$('.close-cart').click(function(){
    $('.open-cart-menu').slideToggle();
    // $('.mobile_main_menu_content ul').slideToggle();
});
$('.add-cart').click(function(){
    $('.open-cart-menu').slideToggle();
})
// nase_main_area  carousel area
$('.toffe_content_area').owlCarousel({
  items:2,
  loop:true,
  nav:false,
  dots:true,
  autoplay:true,
  margin: 40,
  responsive: {
    0:{
        items: 1,
        dots: true,
    },
    600:{
        items: 2,
    },
    1000:{
        items: 2,
    },
}
});

// nase_main_area  carousel area
$('.shop_header_left_slider').owlCarousel({
    items:1,
    loop:true,
    nav:false,
    dots:true,
    autoplay:false,
});


// Show Details Js

$('.sinlge-product-kaufen button.one').click(function(){
    // $('.more-product-details.one').slideToggle();
});

$('.sinlge-product-kaufen button.two').click(function(){
    // $('.more-product-details.two').slideToggle();
});

$('.sinlge-product-kaufen button.three').click(function(){
    // $('.more-product-details.three').slideToggle();
});




});




$(window).scroll(function(){
  var scrollValue = $(this).scrollTop();

  if(scrollValue>200){
    $('.header_main_area').addClass('fixedHeader');
}else{
    $('.header_main_area').removeClass('fixedHeader');
}


});

