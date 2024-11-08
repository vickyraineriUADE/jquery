$(document).ready(() => {
    $("#ocultar").click(() => {
        $("#imagen").hide();
        $("#titulo").text("¡No tenemos ninguna imagen!");
    });

    $("#mostrar").click(() => {
        $("#imagen").show();
        $("#titulo").text("¡Mirá la siguiente imagen!");
    })
});
