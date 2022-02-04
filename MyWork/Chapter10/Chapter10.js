var replaceButton = document.getElementById("replaceButton");
replaceButton.addEventListener("click",replaceIt);

function replaceIt() {
    var storyDiv = document.getElementById("story");
    var adj1 = "<span class='replacement'>"+ document.getElementById("adj1").value + "</span>";
    var verbIng = "<span class='replacement'>"+ document.getElementById("verbIng").value + "</span>";
    var roomInHouse = "<span class='replacement'>"+ document.getElementById("roomInHouse").value + "</span>";
    var color = "<span class='replacement'>"+ document.getElementById("color").value + "</span>";
    var nounPlural = "<span class='replacement'>"+ document.getElementById("nounPlural").value + "</span>";
    var pastVerb = "<span class='replacement'>"+ document.getElementById("pastVerb").value + "</span>";
    var beverage = "<span class='replacement'>"+ document.getElementById("beverage").value + "</span>";
    var musicType = "<span class='replacement'>"+ document.getElementById("musicType").value + "</span>";
    var diffRoom = "<span class='replacement'>"+ document.getElementById("diffRoom").value + "</span>";
    var exclamation = "<span class='replacement'>"+ document.getElementById("exclamation").value + "</span>";
    var pastVerb2 = "<span class='replacement'>"+ document.getElementById("pastVerb2").value + "</span>";
    var adjDance = "<span class='replacement'>"+ document.getElementById("adjDance").value + "</span>";
    var animal = "<span class='replacement'>"+ document.getElementById("animal").value + "</span>";
    var city = "<span class='replacement'>"+ document.getElementById("city").value + "</span>";
    var verb = "<span class='replacement'>"+ document.getElementById("verb").value + "</span>";
    
    var theStory = "<h1>Douglas's Dance Party</h1>";
    theStory += "One " + adj1 + " day, Douglas was " + verbIng + " in his " + roomInHouse + ", reading a book about " + color + " " + nounPlural + ".<br><br>";
    theStory += "As he " + pastVerb + " his " + beverage + ", he heard " + musicType + " music playing in the " + diffRoom + ".<br><br>";
    theStory += exclamation + "! he exclaimed, as he " + pastVerb2 + " down the stairs to join the " + adjDance + " party.<br><br>";
    theStory += "Douglas danced the " + animal + " Dance, the " + city + " Shake, and took the prize for dancing the best Electric " + verb + ".<br><br>";
    
    storyDiv.innerHTML = theStory;
        
}
