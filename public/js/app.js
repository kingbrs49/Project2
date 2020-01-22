$(document).ready(function () {
    $(".sidenav").sidenav();
});

$(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true
});

document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".timepicker");
    var instances = M.Timepicker.init(elems, options);
});

// $(document).ready(function () {
//     $('.carousel').carousel();
// });
