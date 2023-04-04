
function navStart() {
    letterBox = getElementsByClassName("letterBox");
    if (screen.width > 769) {
        letterBox[0].style.animationName = "intro_mobile_left";
        letterBox[0].style.animationName = "intro_mobile_right";
        letterBox[0].style.animationName = "intro_mobile_right";
        letterBox[0].style.animationName = "intro_mobile_left";
    }
    else {

        for (i=0; i<letterBox.length; i++) {
            letterBox[i].style.animationName = "intro_desktop";
            letterBox[i].style.animationPlayState = "running";
        }
    }
}

