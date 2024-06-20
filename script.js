const input = document.getElementById('word');
const output = document.getElementById('output');
output.style.fontSize = "3rem";

const display = document.getElementById('disply');

function disply(){
    output.innerHTML = input.value;
}

// colors

function blue(){
    output.style.color = "#0d6efd";
    output.innerHTML = input.value;
}

function gray(){
    output.style.color = "#808080";
    output.innerHTML = input.value;
}

function green(){
    output.style.color = "#00ff00";
    output.innerHTML = input.value;
}

function red(){
    output.style.color = "#ff0000";
    output.innerHTML = input.value;
}

function yellow(){
    output.style.color = "yellow";
    output.innerHTML = input.value;
}

function skyblue(){
    output.style.color = "#87ceeb";
    output.innerHTML = input.value;
}

function white(){
    output.style.color = "white";
    output.innerHTML = input.value;
}

function black(){
    output.style.color = "black";
    output.innerHTML = input.value;
}

const ccolor = document.getElementById('customcolor');


function apply() {
    output.style.color = ccolor.value;
    output.innerHTML = input.value;
}

// fonts

function bold(){
    output.style.fontWeight = "900";
    output.innerHTML = input.value;
}

function italic(){
    output.style.fontStyle = "italic";
    output.innerHTML = input.value;
}

function arial(){
    output.style.fontFamily = "Arial, sans-serif";
    output.innerHTML = input.value;
}

function erase(){
    output.style.fontWeight = "400";
    output.style.color = "#000000";
    output.style.fontStyle = "normal";
    output.innerHTML = " ";
}