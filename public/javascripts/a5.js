//a5.js | zack bowker | 301199878 | june 3

//global variables
var catsCaughtZack = 0;
var speedZack = 5000;
var catMovesZack;
var boundaryWidthZack = 462;
var boundaryHeightZack = 430;
var canvasDivZack = document.getElementById("game");
var counterZack = document.getElementById("counter");
counterZack.innerHTML = catsCaughtZack;


//creating canvas
var canvasZack = document.createElement("canvas");
var ctx = canvasZack.getContext("2d");
canvasZack.width = 512;
canvasZack.height = 480;
canvasZack.id = "canvas";
canvasDivZack.appendChild(canvasZack);

//background image
var bgReadyZack = false;
var bgImageZack = new Image();
bgImageZack.src = "/images/bg.jpg";
bgImageZack.onload = function () {
  bgReadyZack = true;
};

//cat image
var heroReadyZack = false;
var heroImageZack = new Image();
heroImageZack.src = "/images/rsz_1face.png";
heroImageZack.onload = function () {
  heroReadyZack = true;  
};
 
//game object
var heroZack  = {  
  x: canvasZack.width / 2, 
  y: canvasZack.height / 2
};

//reset game
var reset = function () {
  heroZack.x = 32 + (Math.random() * boundaryWidthZack - 50)
  heroZack.y = 32 + (Math.random() * boundaryHeightZack - 50)  
  if(heroZack.x < 0 || heroZack.x > boundaryWidthZack || heroZack.y < 0 || heroZack.y > boundaryHeightZack)
  {
    heroZack.x = 32 + (Math.random() * boundaryWidthZack - 50)
    heroZack.y = 32 + (Math.random() * boundaryHeightZack- 50)   
  }
};

//draw everything
var render = function () {
  if(bgReadyZack){
    ctx.drawImage(bgImageZack, 0, 0)
  }

  if(heroReadyZack){
    ctx.drawImage(heroImageZack, heroZack.x, heroZack.y)
  }  
};

var update = function(modifier){ 
     
};

//main game loop
var main = function () {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000); 
  render();

  then = now;

  requestAnimationFrame(main);
}

//update score and increase speed
canvasZack.addEventListener("mousedown", clicked, false);
function clicked(e){
  e.preventDefault();

  var boundary = e.target.getBoundingClientRect();
  var x = e.clientX - boundary.left;
  var y = e.clientY - boundary.top;

  if(x > heroZack.x && x < heroZack.x + 50 && y > heroZack.y && y < heroZack.y + 50){    
    catsCaughtZack++;    
    counterZack.innerHTML = catsCaughtZack;
    reset();

    if(speedZack - 500 >= 500){
      clearInterval(catMovesZack);
      speedZack -= 500;
      catMovesZack = setInterval(function (){
        reset();
      }, speedZack);
    }    
  }
}

//reset score
function resetScore(){
  catsCaughtZack = 0;
  counterZack.innerHTML = catsCaughtZack;
}

function startCat(){
  catMovesZack = setInterval(reset, speedZack);
}

//reset speed
function stopCat(){
  clearInterval(catMovesZack);
}

function resetSpeed(){
  stopCat();
  speedZack = 5000;
  startCat();
}

//cat moves
function catMove(){
 catMovesZack = setInterval(reset, speedZack);
}

//to make sure loop works fine
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame; 

//set then
var then = Date.now();

reset();
main();
catMove();