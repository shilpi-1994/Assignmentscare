

var colors = generateRandomColor(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");

for(var i = 0; i < squares.length; i++){
    //add initial colors to the square
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
    //grab color of clicked square and compare to pickedcolor

    var clickedColor = this.style.backgroundColor;

    if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        changeColors(clickedColor);
    } else{
        this.style.backgroundColor = "white";
        messageDisplay.textContent = "Try again";
    }
});
}

function changeColors(color){

    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickRandomColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr = [];

    for(var i = 0; i< num; i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
     var r = Math.floor(Math.random() * 256);
     var g = Math.floor(Math.random() * 256);
     var b = Math.floor(Math.random() * 256);

     return "rgb(" + r + ", " + g + ", " + b +")";
    }


