/* 
Canvas Scripts for 
the 3 Pyramids Page Header
*/ 


//calls anonymous function to browser window
window.onload = function(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    
    drawLandscape(canvas, context);
    addPyramid(canvas, context);
   // drawText(canvas, context);
   
//button for WikiMedia search
   var button = document.getElementById("button");
    button.onclick = newSearch;
}

//creates function to draw a landscape for the canvas header
function drawLandscape(canvas, context){
    var skyColor = "#87A5CC";
    var groundColor = "#ccae87";
    context.fillStyle = skyColor;
    context.fillRect(0,0, canvas.width, canvas.height/3);
    context.fillStyle = groundColor;
    context.fillRect(0, canvas.height/3, canvas.width, canvas.height);
    
}

//creates function to draw pyramids for the canvas header
function addPyramid(canvas, context){
    var pyramid = new Image();
    pyramid.src = "pyramid-a.png";
    pyramid.onload = function() {
        //for loop to calculate randomness of pyramid object for canvas header
        for(var i = 1; i <= 20; i++){
            var scaleInc = Math.random();
            context.drawImage(pyramid, Math.floor(Math.random()*canvas.width), Math.floor(Math.random()*canvas.height), Math.floor(scaleInc*184), Math.floor(scaleInc*161));
        }
        drawText(canvas, context);
    };
}

//creates function to draw text for the canvas header
function drawText(canvas, context){
    var textColor = "#FFF";
    context.fillStyle = textColor;
    context.font = "bold italic 6em sans-serif";
    context.textAlign = "left";
    context.fillText("Great Pyramids of Giza", 150, 130);
}