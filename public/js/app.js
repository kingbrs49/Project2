$(document).ready(function () {
    $('.sidenav').sidenav();
});



$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});
autoplay();
function autoplay() {
    $('.carousel.carousel-slider').carousel('next');
    setTimeout(autoplay, 8000);
}


