var photoOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
var autoAdvanceZack = setInterval(nextPic, 6000);
var position = 1;
var img = document.getElementById("img");

function nextPic(){  
  $("#imgDiv").fadeOut(0, 'linear').hide();
  position++;
  img.src = "images/IMG_0" + position + ".jpg";  
  if(position == 10){
    position = 1;
    img.src = "images/IMG_0" + position + ".jpg";
  }  
  $("#imgDiv").fadeIn(600, 'linear');      
  clearInterval(autoAdvanceZack);
  autoAdvanceZack = setInterval(nextPic, 6000);
}

function prevPic(){
  $("#imgDiv").fadeOut(0, 'linear').hide();
  position--;
  img.src = "/images/IMG_0" + position + ".jpg";  
  if(position == 0){
    position = 9;
    img.src = "/images/IMG_0" + position + ".jpg";
  }
  $("#imgDiv").fadeIn(600, 'linear');  
  clearInterval(autoAdvanceZack);
  autoAdvanceZack = setInterval(nextPic, 6000);
}

function updatePic(){
  $("#imgDiv").fadeOut(0, 'linear').hide();
  position = 1;
  img.src = "/images/IMG_0" + position + ".jpg";  
  $("#imgDiv").fadeIn(600, 'linear');  
  clearInterval(autoAdvanceZack);
  autoAdvanceZack = setInterval(nextPic, 6000);  
}

$("#next").click(function(){
  nextPic();
})

$("#previous").click(function(){
  prevPic();
})

$("#update").click(function(){
  updatePic();
})