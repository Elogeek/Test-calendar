// when a user clicks on a day of the month (calendar), then that same day is displayed (h by h)
$(".date").click(function () {

    $(".date").each(function (index) {
        //all boxes are clickable
        // console.log(index + "=> " + $(this).text("coucou"));

        // display hours by hours (8 => 16)


        //next month display
        $(document).ready(function() {
            $("#btnNext").click(function () {
                $(this).next();
            })
        });

        //previous month display
        $(document).ready(function() {
            $("#btnPrev").click(function () {
                $(this).prev();
            });
        });

    })

});


