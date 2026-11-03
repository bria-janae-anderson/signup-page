//console.log("Hello from script.js");

let clubName = "Kickball Club";
console.log("Welcome to " + clubName);

let meetingDay = "Wednesdays";
console.log("We meet on " + meetingDay);

// Declare or define a function
function sayHi () {
    console.log("Hi! Thanks for visiting!");
}


// Call the function

sayHi();

function sayBye () {
    console.log("Goodbye");
}

sayBye();
sayBye();

// Part 6: Make a button do something (Java Script)

let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

function showNextMeeting() {
    nextMeeting.textContent = "Our next meeting is Wednesday, November 8 at 6 PM.";
}

nextButton.addEventListener("click", showNextMeeting);
