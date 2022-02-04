var trainSpeed = 100;
var trainSpeedReset = 100;
var trainPosition = 0;
var animation;

var startButton = document.getElementById("startButton");
startButton.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

var loadPage = document.getElementById("loadPage");
loadPage.addEventListener("click", loadPage);

function speedUp() {
    if (trainSpeed > 10) {

        trainSpeed -= 10;

    }


    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {

        trainPosition += 10;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);

    }

}

function checkPosition(currentPosition) {

    if (currentPosition > 380) {

        alert("Crash!");
        console.log("Crash!");
        clearInterval(animation);
        
        document.getElementById("train").style.left = "0px";

    }

}

function stopTrain() {

        clearInterval(animation);
        alert("Whew! That was close!");
        console.log("Whew! That was close!");
        
        document.getElementById("train").style.left = currentPosition;

}