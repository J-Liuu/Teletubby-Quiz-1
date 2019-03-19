

$("#go").click(function() {
var nani = $("#nani").val();
var sui = $("#sui").val();
console.log(nani);
console.log(sui);

if (nani === "Energetic" && sui <= 10) {
    $("#img").attr("src","https://medias.spotern.com/spots/w640/86553-1532336916.jpg");
    $("h4").text("You are Laa-Laa!");
}

});