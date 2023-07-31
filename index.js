
var drum = document.querySelectorAll(".drum"); // => Get drum
let drumActive = document.querySelectorAll(".drum"); // => Get drum

for (let i = 0; i < drumActive.length; i++) {
    drumActive[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

for (var i = 0; i < drum.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () { // => Get all drum

        var toggle = this.innerHTML;


        switch (toggle) { // Specify the drum using swith
            case "w":
                var w = new Audio("sounds/tom-1.mp3")
                w.play();
                console.log(toggle);
                break;
            case "a":
                var a = new Audio("sounds/tom-2.mp3")
                a.play();
                console.log(toggle);
                break;
            case "s":
                var s = new Audio("sounds/tom-3.mp3")
                s.play();
                console.log(toggle);
                break;
            case "d":
                var d = new Audio("sounds/tom-4.mp3")
                d.play();
                console.log(toggle);
                break;
            case "j":
                var j = new Audio("sounds/snare.mp3")
                j.play();
                console.log(toggle);
                break;
            case "k":
                var k = new Audio("sounds/crash.mp3")
                k.play();
                console.log(toggle);
                break;
            case "l":
                var l = new Audio("sounds/kick-bass.mp3")
                l.play();
                console.log(toggle);
                break;

            default:
                break;
        }
    });
}
