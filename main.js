$(document).ready(function(){
    $('.slider').bxSlider({
        mode:'fade', 
        auto: true ,
        pause: 5000,
        speed: 3000,
        slideMargin: 5,
        pager: false,
        controls: false});
  });


  $(function () {
    $(window).on("scroll", function () {
    const sliderHeight = $(".color-change").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
        $(".scrolldown span").addClass("ColorScroll");
        $(".scrolldown").addClass("ColorScroll");
  
    } else {
        $(".scrolldown span").removeClass("ColorScroll");
        $(".scrolldown").removeClass("ColorScroll")
    }
    });
    });
  
 
  $(function () {
    $(window).on("scroll", function () {
    const sliderHeight = $(".fade").height();
    if (sliderHeight - 600 < $(this).scrollTop()) {
        $(".scrolldown span").addClass("FadeScroll");
        $(".scrolldown").addClass("FadeScroll");
  
    } else {
        $(".scrolldown span").removeClass("FadeScroll");
        $(".scrolldown").removeClass("FadeScroll")
    }
    });
    });

  $('a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); 
	var pos = $(elmHash).offset().top;	
	$('body,html').animate({scrollTop: pos}, 1500); 
	return false;
});



