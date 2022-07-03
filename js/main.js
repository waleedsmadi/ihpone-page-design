"use strict";

// select elements
const mainImage = document.querySelector("#main-image");
const icons = Array.from(document.querySelectorAll(".icons img"));
const headerElement = document.querySelector("header");

// function to change main image
function phones(phone){
    mainImage.src = phone;
}


// to change header's background color
// when click on bottom icons 
function colors(color){
    headerElement.style.background = color;
} 


// add events to bottom icons
icons.forEach(icon => {
    icon.addEventListener("click", function(){
        phones(this.src);
    });
});


