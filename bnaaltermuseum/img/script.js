'use strict'

let i = 0;
const imgArr = [
    "img/001.jpeg",
    "img/002.jpeg",
    "img/003.jpeg",
    "img/004.jpeg",
    "img/005.jpeg",
    "img/006.jpeg",
    "img/007.jpeg",
    "img/008.jpeg"
]

window.setInterval(function () {
    const about = document.querySelector('#about');
    about.style.backgroundImage = `url(${imgArr[i]})`;
    if (i == imgArr.length -1) {
        i = 0;
    } else {
        i++;
    }
}, 4000);
