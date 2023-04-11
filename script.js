
let letterBox;
let firstload;

if (getSessionStorage("firstload") == undefined) {
    setSessionStorage("firstload",true);
}

firstload = getSessionStorage("firstload");

window.onload = function () {
    //if (firstload) {
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

        setSessionStorage("firstload", false);
        setSessionStorage("letterBox", letterBox);
    //}

}

function resetPosition(event) {
    if (window.innerWidth > 769) {
        event.target.style.top = null;
        event.target.classList.replace("introAnimation", "hoverAnimation");
    }
    else {
        switch(event.target.id) {
            case "D"||"S":
                event.target.style.left = null;
                break;
            
            case "I"||"C":
                event.target.style.left = null;
                break;
        }
        event.target.classList.replace("introAnimation", "hoverAnimation");
    }
}

function setSessionStorage(key, value) {
    value = JSON.stringify(value);
    sessionStorage.setItem(key, value);
}

function getSessionStorage(key) {
    object_json = sessionStorage.getItem(key);
    return JSON.parse(object_json);
}

/* lazy loading images */

document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll("img.lazy");    
    var lazyloadThrottleTimeout;
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    
      
      lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
      }, 20);
    }
    
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  });