var num1 = 0;
var num2 = 0;
var oper = 0;

$(function() {
    $(".num").click(function() {
        texto = $("#pantalla").text();
        numero = $(this).attr("id");
        $("#pantalla").html(texto + numero);
    });
    $(".operador").click(function() {
        num1 = $("#pantalla").text();
        $("#pantalla").text("");
        oper = $(this).attr("id");
    });
    $("#Igual").click(function() {
        num2 = $("#pantalla").text();
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        if (oper == 1) {
            $("#pantalla").text(num1 / num2);;
        } else if (oper == 2) {
            $("#pantalla").text(num1 * num2);;
        } else if (oper == 3) {
            $("#pantalla").text(num1 - num2);;
        } else {
            $("#pantalla").text(num1 + num2);;
        }
    });
    $("#C").click(function() {
        num1 = 0;
        num2 = 0;
        oper = 0;
        $("#pantalla").text("");
    });
    $("#coma").click(function() {
        $("#pantalla").html($("#pantalla").text() + ".");
    });
});