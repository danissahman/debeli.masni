var mecevi = [
    { domacin: "Lakers", gost: "Pacers", rezultat: "128 - 117" },
    { domacin: "Celtics", gost: "Mavericks", rezultat: "120 - 100" },
    { domacin: "Nets", gost: "Pistons", rezultat: "107 - 105" }
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
        var op = parseFloat($(this).css("opacity"));
        $(this).css("opacity", op === 1 ? 0.5 : 1);
    });
    $("#btn-opacity").on("click", function () {
        var $img = $("#sport-img");
        var op = parseFloat($img.css("opacity"));
        $img.css({ "opacity": op === 1 ? 0.4 : 1, "transition": "opacity 0.4s ease" });
    });
    $("#btn-bw").on("click", function () {
        var $img = $("#sport-img");
        var filter = $img.css("filter");
        if (filter && filter.indexOf("grayscale") !== -1) {
            $img.css("filter", "none");
        } else {
            $img.css({ "filter": "grayscale(100%)", "transition": "filter 0.4s ease" });
        }
    });
    $("#btn-tbl-dark").on("click", function () {
        $("#tabela").removeClass("table-striped").addClass("table-dark");
        $("#tabela thead").removeClass("table-warning").addClass("table-secondary");
    });
    $("#btn-tbl-reset").on("click", function () {
        $("#tabela").removeClass("table-dark table-striped");
        $("#tabela thead").removeClass("table-secondary").addClass("table-warning");
    });
});
