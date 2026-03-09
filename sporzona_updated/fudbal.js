var mecevi = [
    { domacin: "Arsenal", gost: "Chelsea", rezultat: "2 - 1" },
    { domacin: "Leeds", gost: "Man City", rezultat: "0 - 1" },
    { domacin: "Wolves", gost: "Aston Villa", rezultat: "2 - 0" }
];
function prikaziRezultate() {
    var $kontejner = $("#rezultati");

    for (var i = 0; i < mecevi.length; i++) {
        var mec = mecevi[i];
        var $kartica = $("<div>").addClass("rezultat-kartica");
        $kartica.html(
            "<span>" + mec.domacin + "</span>" +
            "<span class='rezultat'>" + mec.rezultat + "</span>" +
            "<span>" + mec.gost + "</span>"
        );
        $kontejner.append($kartica);
    }
}
$(document).ready(function () {

    prikaziRezultate();
    $("#sport-img").on("click", function () {
        var trenutna = $(this).css("opacity");
        $(this).css("opacity", trenutna === "0.5" ? "1" : "0.5");
    });
    $("#btn-opacity").on("click", function () {
        var $img = $("#sport-img");
        var op = parseFloat($img.css("opacity"));
        $img.css("opacity", op === 1 ? 0.4 : 1);
    });
    $("#btn-sepia").on("click", function () {
        var $img = $("#sport-img");
        var trenutni = $img.css("filter");
        if (trenutni && trenutni.indexOf("sepia") !== -1) {
            $img.css("filter", "none");
        } else {
            $img.css("filter", "sepia(100%)");
        }
    });
    $("#btn-tbl-dark").on("click", function () {
        $("#tabela").removeClass("table-striped")
                    .addClass("table-dark");
        $("#tabela thead").removeClass("table-success").addClass("table-secondary");
    });
    $("#btn-tbl-reset").on("click", function () {
        $("#tabela").removeClass("table-dark table-striped");
        $("#tabela thead").removeClass("table-secondary").addClass("table-success");
    });
});
