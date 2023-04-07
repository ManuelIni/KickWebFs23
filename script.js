
let letterBox;

window.onload = function () {
    console.log(window.innerWidth),
        letterBox = document.getElementsByClassName("letterBox");
    if (window.innerWidth > 769) {
        for (i = 0; i < letterBox.length; i++) {
            letterBox[i].style.animationName = "intro_desktop";
            letterBox[i].style.animationPlayState = "running";
            letterBox[i].addEventListener("animationend", resetPosition, false);
        }
    }
    else {
        for (i = 0; i < letterBox.length; i++) {
            letterBox[i].style.animationPlayState = "running";
            letterBox[i].addEventListener("animationend", resetPosition, false);
        }
    }
}

function resetPosition(event) {
    if (window.innerWidth > 769) {
        for (i = 0; i < letterBox.length; i++) {
            letterBox[i].style.top = null;
            letterBox[i].classList.replace("introAnimation", "hoverAnimation");

        }
    }
    else {
        for (i = 0; i < letterBox.length; i++) {
            if (i % 2 == 0) {
                letterBox[i].style.left = null;
            }
            else {
                letterBox[i].style.right = null;
            }
            letterBox[i].classList.replace("introAnimation", "hoverAnimation");
        }
    }
}

