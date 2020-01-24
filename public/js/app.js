/* eslint-disable prettier/prettier */
$(document).ready(function () {
    $(".sidenav").sidenav();

    var myWidget = cloudinary.createUploadWidget({
        cloudName: 'integrated-information-consultants-llc',
        uploadPreset: 'zjqc8ehn'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
        }
    }
    );


<<<<<<< HEAD
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});
autoplay();
function autoplay() {
    $('.carousel.carousel-slider').carousel('next');
    setTimeout(autoplay, 8000);
}


=======



    // $("#file-upload").change(async function (e) {


    //   // data.append('upload_preset', 'test');

    //   console.log(e.target.files[0]);
    //   const imgData ={
    //       img: e.target.files[0]
    //   };


    // $.ajax({
    //     method: 'POST',
    //     url: '/api/file',
    //     data: imgData,
    // }).then(function(resData){
    //     console.log(resData);
    // });
    // data.append('upload_preset', 'test');
    // const res = await fetch("https://api.cloudinary.com/v1_1/integrated-information-consultants-llc", {
    //     method: 'POST',
    //     body: data,
    // });
    // const file = await res.json();

    // console.log("file test: ", file)

    //     const files = e.target.files;
    //     const data = new FormData();
    //     data.append('file', files[0]);

    //     $.ajax({
    //         type: "POST",
    //         url: "https://api.cloudinary.com/v1_1/integrated-information-consultants-llc",
    //         data: data
    //     }).then(function(savedResponseData) {
    //         console.log(savedResponseData)
    //     })

    //   }

    // cloudinary.openUploadWidget({ 
    //   cloud_name: 'integrated-information-consultants-llc', 
    //   upload_preset: 'idcidr0h'
    // },
    //     function(error, result) { 
    //       console.log(error, result) 
    //     });

    $(".carousel.carousel-slider").carousel({
        fullWidth: true,
        indicators: true
  //});

document.addEventListener("DOMContentLoaded", function () {
            var elems = document.querySelectorAll(".timepicker");
            var instances = M.Timepicker.init(elems, options);
        });

        $(document).ready(function () {
            $('.carousel').carousel();
        });

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

        });
>>>>>>> 71249cb9a907e9c02020e6140dea35b159474138
