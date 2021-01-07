//laat de checkboxen zien
function BierTabel() {
    $("#app1").css("display", "block");
    $("#app2").css("display", "none");
    $("#app3").css("display", "none");
    $("#app4").css("display", "none");
}
//laat de beercards zien
function BierCards() {
    $("#app1").css("display", "none");
    $("#app2").css("display", "block");
    $("#app3").css("display", "none");
    $("#app4").css("display", "none");
}
//laat de mysql opdracht zien
function mysql() {
  $("#app1").css("display", "none");
  $("#app2").css("display", "none");
  $("#app3").css("display", "block");
  $("#app4").css("display", "none");
}
//laat de landenapi zien
function landen() {
    $("#app1").css("display", "none");
    $("#app2").css("display", "none");
    $("#app3").css("display", "none");
    $("#app4").css("display", "block");
}