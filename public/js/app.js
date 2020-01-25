/* eslint-disable indent */
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

    var listId = 0;

    // CREATES NEW ROW IN THE TABLE
    var newRow = $("<tr>");
    listId++;
    newRow.attr("class", "list-" + listId);
    var reminderTd = $("<td>").text(reminder);
    var dateTd = $("<td>").text(date);
    var timeTd = $("<td>").text(time);
    var checkbox = $("<td>").append("<form action='#'> <p> <label class='strike'> <input class='filled-in' type='checkbox'/> <span class='black-text'>Done</span></label></p> </form>");
    var deleteBtn = $("<button class='remove'> Delete </button>");
    var buttonTd = $("<td>").append(deleteBtn)
    newRow.append(reminderTd, dateTd, timeTd, checkbox, buttonTd);
    $("tbody").append(newRow);

    // $(".remove").on("click", function () {
    //     newRow.remove(".list" + listId);
    //     console.log("hksahfk")
    // });
});



// IF CHECKBOX IS CHECKED - CROSS OUT REMINDER ROW


//Modal Code
$(document).ready(function () {
    $('.modal').modal();
});
$(document).ready(function () {
    $('.sidenav').sidenav();
});
