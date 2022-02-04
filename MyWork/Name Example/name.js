var textBox1 = document.getElementById("userName");
var textBox2 = document.getElementById("userAge");
var output = document.getElementById("output");

var submit = document.getElementById("submitBtn");
submit.onclick = displayName;

function displayName(){
    var userName = textBox1.value;
    var userAge = textBox2.value;

    output.innerHTML = "Name: " + userName + "<br>Age: " + userAge + "."
}