

$("#go").click(function() {
var nani = $("#nani").val();
var sui = $("#sui").val();
console.log(nani);
console.log(sui);

if (nani === "Energetic" && sui <= 10) {
    $(".img").attr("src","https://media.tenor.com/images/9f2cf583d6da6b0a03304e313af128a0/tenor.gif");
    $(".img").css("width", "400px");
    $("h4").text("You are Laa-Laa!");
} else if (nani === "Energetic" && sui >=10) {
    $(".img").attr("src","https://media1.tenor.com/images/0e1d5ca358273d0d04e54eb6bc399103/tenor.gif?itemid=11245880");
    $("h4").text("You are Po!");
    $(".img").css("width","400px");
} else if (nani === "Calm" && sui <= 10) { 
    $(".img").attr("src","https://media.tenor.com/images/9b51b16504ba4ffc09453974ed2cd014/tenor.gif");
    $("h4").text("You are Dipsy!");
    $(".img").css("width","400px");    
} else if (nani === "Calm" && sui >=10) {
    $(".img").attr("src","https://media1.tenor.com/images/b27ad89745072af85ec01ff0517cf9ea/tenor.gif?itemid=7317532");
    $("h4").text("You are Tinky-Winky!");
    $(".img").css("width","400px");
} else if (nani === "" && sui === "") {
    $("h4").text("YOU FOUND NOO-NOO's EASTER EGG!");
    $(".img").attr("src","https://thumbs.gfycat.com/DependentFaithfulAidi-max-1mb.gif");
    $(".img").css("width","500px");
} else {
    $("h4").text("Sorry! Try answering the questions above!");
    $(".img").attr("src","https://thumbs.gfycat.com/JubilantWellmadeElver-max-1mb.gif");
    $(".img").css("width","500px");
}
});