
var drum = document.querySelectorAll(".drum"); // => Get drum

// for (let i = 0; i < drumActive.length; i++) {
//     drumActive[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }

for (var i = 0; i < drum.length; i++) {
    let x = document.querySelectorAll('.text')[i];
    let y = x.innerHTML;
    console.log(y);

    document.querySelectorAll(".drum")[i].addEventListener("click", () => {
        var toggle = y;
        setSound(toggle);
        buttonActive(toggle);
    });
} // => get all button

document.addEventListener("keydown", (e) => {
    setSound(e.key);
    buttonActive(e.key);
    // console.log(e) // => Check params
});

function setSound(key) {
    switch (key) { // Specify the drum using swith
        case "w":
            var w = new Audio("sounds/tom-1.mp3")
            w.play();
            console.log(key);
            break;
        case "a":
            var a = new Audio("sounds/tom-2.mp3")
            a.play();
            console.log(key);
            break;
        case "s":
            var s = new Audio("sounds/tom-3.mp3")
            s.play();
            console.log(key);
            break;
        case "d":
            var d = new Audio("sounds/tom-4.mp3")
            d.play();
            console.log(key);
            break;
        case "j":
            var j = new Audio("sounds/snare.mp3")
            j.play();
            console.log(key);
            break;
        case "k":
            var k = new Audio("sounds/crash.mp3")
            k.play();
            console.log(key);
            break;
        case "l":
            var l = new Audio("sounds/kick-bass.mp3")
            l.play();
            console.log(key);
            break;

        default:
    }
}

function buttonActive(currentKey) {

    var buttonPress = document.querySelector('.' + currentKey);
    buttonPress.classList.add('pressed');

    // console.log(currentKey + ' pressed'); // Check params

    setTimeout(() => {
        buttonPress.classList.remove('pressed');
    }, 100);
}