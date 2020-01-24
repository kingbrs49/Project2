/* eslint-disable prettier/prettier */
$(document).ready(function () {
    $(".sidenav").sidenav();

    var myWidget = cloudinary.createUploadWidget({
        cloudName: 'integrated-information-consultants-llc',
        uploadPreset: 'zjqc8ehn'
    },
        (error, result) => {
            if (!error && result && result.event === "success") {
                console.log('Done! Here is the image info: ', result.info);
            }
        }
    );

    $("#upload_widget").on("click", function () {
        myWidget.open();
        console.log("Hello!")
    });

    //     $("#file-upload").change(async function (e) {


    //         // data.append('upload_preset', 'test');

    //         console.log(e.target.files[0]);
    //         const imgData = {
    //             img: e.target.files[0]
    //         };


    //         $.ajax({
    //             method: 'POST',
    //             url: '/api/file',
    //             data: imgData,
    //         }).then(function (resData) {
    //             console.log(resData);
    //         });
    //         data.append('upload_preset', 'test');
    //         const res = await fetch("https://api.cloudinary.com/v1_1/integrated-information-consultants-llc", {
    //             method: 'POST',
    //             body: data,
    //         });
    //         const file = await res.json();

    //         console.log("file test: ", file)

    //         const files = e.target.files;
    //         const data = new FormData();
    //         data.append('file', files[0]);

    //         $.ajax({
    //             type: "POST",
    //             url: "https://api.cloudinary.com/v1_1/integrated-information-consultants-llc",
    //             data: data
    //         }).then(function (savedResponseData) {
    //             console.log(savedResponseData)
    //         })

    //     }

    //     cloudinary.openUploadWidget({
    //         cloud_name: 'integrated-information-consultants-llc',
    //         upload_preset: 'idcidr0h'
    //     },
    //         function (error, result) {
    //             console.log(error, result)
    //         });
    // });

    // document.addEventListener("DOMContentLoaded", function () {
    //     var elems = document.querySelectorAll(".timepicker");
    //     var instances = M.Timepicker.init(elems, options);
    // });

});
