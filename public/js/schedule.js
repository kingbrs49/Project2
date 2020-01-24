$(document).ready(function () {
    console.log("firsttest")
    var instances;
    $(document).on('click', '.ui-state-default', function () {
        var date = $(this).text();
        $('#scheduleDate').text(date);


        $(this).attr('data-target', '#modal1');
        var elems = document.querySelectorAll('.modal')[0];
        instances = M.Modal.init(elems);
        instances.open();
        console.log(this);

    });

    $(document).on('click', '#addtoschedule', function () {

        var scheduleinputEL = $('#scheduleinput');

        var scheduleinput = scheduleinputEL.val();
        console.log(scheduleinput);

        $.ajax({ method: 'POST', body: { scheduleinput }, url: 'api/addtoschedule' });

        instances.close();

    });



});




