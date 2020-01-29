$(document).ready(function () {

    var instances;
    $(document).on('click', '.ui-state-default', function () {

        var date = $(this).text();
        $('#scheduleDate').text(date);


        $(this).attr('data-target', '#modal1');
        var elems = document.querySelectorAll('.modal')[0];
        instances = M.Modal.init(elems);
        instances.open();
        console.log(this)

    });

    $(document).on('click', '#addtoschedule', function () {



        var scheduleinputEL = $('#scheduleinput').val();
        var scheduleObj = {
            topic: scheduleinputEL
        };
        $.ajax({
            url: "/api/schedule",
            method: "POST",
            data: scheduleObj
        }).then(function (data) {


            $(".schedule_items").html(`<p>1. ${data.topic}</p>`);
        })

        // var scheduleinput = {
        //     text: scheduleinputEL,
        //     month: $(".ui-datepicker-month").val().trim(),
        //     day: $(".ui-state-default").val()
        // };
        console.log(scheduleinputEL);
        instances.close();

    });

});

//     $(document).ready(function () {


//         console.log("test");
//         $("#schedule_item").on("click", function () {
//             console.log("add to schedule...");

//             var schedule = {
//                 "topic": $(topicName).val(),
//                 "createdAt": $(createdAt).val(),
//                 "updatedAt": $(updatedAt).val()
//             };
//         });

//         $.get("/api/schedule", function (data) {
//             if (data.length !== 0) {
//                 for (var i = 0; i < data.length; i++) {
//                     var row = $("<div>");
//                     row.addClass("schedule_itemss");

//                     row.append("<p>" + data[i].schedule.topic + "<p>");

//                     $("#schedule_items").prepend(row);
//                 };
//             };
//         })




//         $("#addtoschedule").on("click", function (event) {
//             event.preventDefault();

//             const newSchedule = {
//                 topic: $("#schedule_items").val().trim(),
//                 createdAt: $("#schedule_items").val().trim(),
//                 updatedAt: $("#schedule_items").val().trim()
//             };

//             console.log(newSchedule);

//             $.post("/api/schedule", newSchedule)

//                 .then(function (res) {
//                     console.log(res);
//                     const row = $("<div>");
//                     row.addClass("schedule_itemss");


//                     row.append("<p>" + newSchedule.topic + "<p>");

//                     $("#schedule_itemss").prepend(row);
//                 });


//             $("#schedule_items").val();

//         });







//     });


// });
