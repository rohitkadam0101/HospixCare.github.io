//For Navbar Scroll
var preloader = document.getElementById("loading");
function myFunction(){
    preloader.style.display= "none";
}
preloader.display = "none"
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() >100);
});

//For counter
$(".counter").counterUp({
    delay: 10,
    time: 1000,
});

//for carousel

$('.carousel').carousel({
  interval: 4000,
})

//for loader
