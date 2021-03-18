// quand on clique sur un jour du mois , alors c'est le jour qui s'affiche ( h par h)
$(".date").click(function () {
    $(".date").each(function (index) {
        console.log(index + "=> " + $(this).text("coucou"));

    })

});