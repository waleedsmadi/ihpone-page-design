"use strict";

// select elements
const mainImage = document.querySelector("#main-image");
const icons = Array.from(document.querySelectorAll(".icons img"));


// function to change main image
function phones(phone){
    mainImage.src = phone;
}


// add events to bottom icons
icons.forEach(icon => {
    icon.addEventListener("click", function(){
        phones(this.src);
    });
});
