// quand on clique sur un jour du mois , alors c'est le jour qui s'affiche ( h par h)
$(".date").click(function () {

    $(".date").each(function (index) {
        // cool toutes les cases sont cliquables
        console.log(index + "=> " + $(this).text("coucou"));

        //affichage du mois suivant
        $(document).ready(function() {
            $("#btnNext").click(function () {
                $(this).next();
            })
        });

        //affichage du mois précédent
        $(document).ready(function() {
            $("#btnPrev").click(function () {
                $(this).prev();
            });
        });

    })

});


