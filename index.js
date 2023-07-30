
var x = document.querySelectorAll(".drum");

for (var i = 0; i < x.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        this.style.color = "white"; // this access the curent object 
        // var audio = new Audio("sounds/crash.mp3");
        // audio.play(); 
    });
}
