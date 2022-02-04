var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");
var todayTime = document.getElementById("TodaysTime");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
var d = new Date();

// call the displayDate() function
displayDate();

// call the displayTime() function
setInterval(displayTime, 1000);

function displayDate() {
    todayDate.innerHTML = d.toDateString();
}

function displayTime() {
    // use a new date() function instead of calling the variable d
    todayTime.innerHTML = new Date().toLocaleTimeString();
}

function displayActivity() {
    // find out the day of the week.
    var dayOfWeek = d.getDay();

    /* set a variable, called youShould, with a different
       string based on what day of the week it is. */
    var youShould;

    switch (dayOfWeek) {
        case 0:
            youShould = "Take it easy. You've earned it.";
            break;
        case 1:
            youShould = "Gotta do what ya gotta do!";
            break;
        case 2:
            youShould = "Take time to smell the roses!";
            break;
        case 3:
            youShould = "Don't forget to eat breakfast!";
            break;
        case 4:
            youShould = "Learn something new today!";
            break;
        case 5:
            youShould = "Make a list of things you like to do.";
            break;
        case 6:
            youShould = "Do one thing from your list of things you like to do.";
            break;
        default:
            youShould = "Hmm. Something has gone wrong.";
            break;
    }

    // output the value of youShould into the thingToDo div    
    document.getElementById("thingToDo").innerHTML = youShould;
}