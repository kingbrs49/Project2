/* eslint-disable prettier/prettier */
$(document).ready(function () {
  $(".sidenav").sidenav();


  $("#file-upload").change(async function (e) {
  
    
    // data.append('upload_preset', 'test');

    console.log(e.target.files[0]);
    const imgData ={
        img: e.target.files[0].name
    }



    $.ajax({
        method: 'POST',
        url: '/api/file',
        data: imgData,
    }).then(function(resData){
        console.log(resData);
    });
    // data.append('upload_preset', 'test');
    // const res = await fetch("https://api.cloudinary.com/v1_1/integrated-information-consultants-llc", {
    //     method: 'POST',
    //     body: data,
    // });
    // const file = await res.json();

    // console.log("file test: ", file)
  });
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



  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true
  });

  // $(document).ready(function () {
  //     $('.carousel').carousel();
  // });
});