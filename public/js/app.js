/* eslint-disable prettier/prettier */
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});
autoplay();
function autoplay() {
    $('.carousel.carousel-slider').carousel('next');
    setTimeout(autoplay, 8000);
}

// TIME INPUT
$(document).ready(function () {
    $('.timepicker').timepicker();
});
// DATE INPUT
$(document).ready(function () {
    $('.datepicker').datepicker();
});

// ONCLICK TO SET THE REMINDER DATA TO TABLE
$(".submit").on("click", function () {
    var reminder = $(".reminderInfo").val().trim()
    var time = $(".timepicker").val().trim();
    var date = $(".datepicker").val().trim();

    // CLEARS VALUE ONCE BUTTON CLICKED
    $(".reminderInfo").val("");
    $(".timepicker").val("");
    $(".datepicker").val("");

    // CREATES NEW ROW IN THE TABLE
    var newRow = $("<tr>");
    newRow.attr("class", "list");
    var reminderTd = $("<td>").text(reminder);
    var dateTd = $("<td>").text(date);
    var timeTd = $("<td>").text(time);
    var checkbox = $("<td>").append("<form action='#'> <p> <label> <input type='checkbox' /><span>Done</span></label></p> </form>");

    newRow.append(reminderTd, dateTd, timeTd, checkbox);
    $("tbody").append(newRow);
    // eslint-disable-next-line prettier/prettier

});

$(document).ready(function () {
    $('.sidenav').sidenav();
});
