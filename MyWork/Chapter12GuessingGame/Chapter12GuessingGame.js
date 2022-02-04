var secret = Math.floor(Math.random() * 10) + 1;

//Event Listener 
var startButton = document.getElementById("startButton");
startButton.onclick = myGuess;

//Prompt Guess Function
function myGuess() {
    var answer = prompt("Guess a number between 1 - 10.");
    answer = Number(answer);
    checkAnswer(answer);
}

//Check Answer Function
function checkAnswer(guess) {
    if(guess === secret) {
        alert("Correct! Your guess " + guess + " is right.");
        document.getElementById("output").innerHTML = "Congratulations! You Won!";
    } else if(guess < secret) {
        alert("Incorrect Answer! Your guess is too low!");
        myGuess();
    } else if(guess > secret) {
        alert("Incorrect Answer! Your guess is too high!");
        myGuess();
    } else {
        alert("Invalid Input!");
        myGuess();
    }
}