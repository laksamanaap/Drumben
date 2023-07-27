
var x = document.querySelectorAll(".drum"); // querySelectorAll contains array 

for (var i = 0; i < x.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("Clicked!")
    });
}
