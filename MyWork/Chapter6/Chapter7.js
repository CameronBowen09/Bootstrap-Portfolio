//document.getElementById("lefteye").style.backgroundColor = "purple"; 
//document.getElementById("righteye").style.backgroundColor = "green"; 
//document.getElementById("mouth").style.backgroundColor = "blue"; 
//document.getElementById("head").style.transform = "rotate(15deg)";
//document.getElementById("body").style.border = "2px black solid";
//document.getElementById("mouth").style.borderRadius = "5px";
//document.getElementById("righteye").style.border =  "4px yellow dotted";
//document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
//document.getElementById("body").style.color = "#FF0000";
//document.getElementById("head").style.borderTop =  "5px black solid";

var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var leftArm = document.getElementById("leftarm");
var rightArm = document.getElementById("rightarm")

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);
rightArm.addEventListener("click", moveUpDown)

function moveUpDown(e) {
  var robotPart = e.target;
  var top = 0;

  var id = setInterval(frame, 10) // draw every 10ms

  function frame() {
    robotPart.style.top = top + '%';    
    top++;
    if (top === 20){
      clearInterval(id);
    }
  }
  
}

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
  
    var id = setInterval(frame, 10) // draw every 10ms
  
    function frame() {
      robotPart.style.top = top + '%';    
      top++;
      if (top === 36){
        clearInterval(id);
      }
    }
    
  }


function moveRightLeft(e) {
  var robotPart = e.target;
  var left = 0;
  var id = setInterval(frame, 10) // draw every 10ms

  function frame() {
    robotPart.style.left = left + '%';
    left++;
    if (left === 71){
      clearInterval(id);
    }
  }
}