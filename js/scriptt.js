//For Navbar Scroll
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() >700);
});

//For counter
$('.counter').counterUp({
    delay: 10,
    time: 2000
});