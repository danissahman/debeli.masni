$(document).ready(function () {
    function isValidEmail(email) {
        return email.indexOf("@") > 0 && email.indexOf(".") > 0;
    }
    $("#btn-pošalji").on("click", function () {
        var ime = $("#ime").val().trim();
        var email = $("#email").val().trim();
        var tekst = $("#tekst").val().trim();

        $("#poruka-greska").hide();
        $("#poruka-uspjeh").hide();
        $("#ime, #email, #tekst").removeClass("is-invalid");

        if (ime === "") {
            $("#poruka-greska").text("Greška: Ime je obavezno!").show();
            $("#ime").addClass("is-invalid").css("border-color", "#dc3545");
            return;
        }
        if (email === "") {
            $("#poruka-greska").text("Greška: Email je obavezan!").show();
            $("#email").addClass("is-invalid").css("border-color", "#dc3545");
            return;
        }
        if (!isValidEmail(email)) {
            $("#poruka-greska").text("Greška: Email adresa nije ispravna!").show();
            $("#email").addClass("is-invalid").css("border-color", "#dc3545");
            return;
        }
        if (tekst === "") {
            $("#poruka-greska").text("Greška: Poruka ne može biti prazna!").show();
            $("#tekst").addClass("is-invalid").css("border-color", "#dc3545");
            return;
        }
        $("#ime, #email, #tekst").css("border-color", "#198754");

        $("#poruka-uspjeh").text("Poruka je uspješno poslana! Hvala, " + ime + "!").show();

        $("#ime, #email, #tekst").val("").css("border-color", "");
    });
    $("#btn-tema-tamna").on("click", function () {
        $("main section").css({
            "background-color": "#2b2b2b",
            "color": "#f0f0f0",
            "transition": "background-color 0.4s ease, color 0.4s ease"
        });
        $(".form-label").css("color", "#f0f0f0");
        $(".form-control").css({
            "background-color": "#3a3a3a",
            "color": "#f0f0f0",
            "border-color": "#555"
        });
    });
    $("#btn-tema-svijetla").on("click", function () {
        $("main section").css({
            "background-color": "#ffffff",
            "color": "#222222",
            "transition": "background-color 0.4s ease, color 0.4s ease"
        });
        $(".form-label").css("color", "#222222");
        $(".form-control").css({
            "background-color": "#ffffff",
            "color": "#212529",
            "border-color": "#ced4da"
        });
    });
    $(".form-control").on("focus", function () {
        $(this).css("box-shadow", "0 0 0 3px rgba(33,150,83,0.25)");
    }).on("blur", function () {
        $(this).css("box-shadow", "");
    });
});
