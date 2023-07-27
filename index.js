

let x = document.querySelectorAll(".drum");

for (let index = 0; index < x.length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {
        alert("U click me!")
    });
}

