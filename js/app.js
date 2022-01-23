"use strict";
var userName =prompt("Please enter your name");
var userGender = prompt("What's your gender?");
var userAge = prompt("What's your age?");
if (userAge <=0) {
    alert("wrong age.")
}
var welcomingMessage=confirm("do you want to skip the welcoming messages?")
if ( welcomingMessage) {
    console.log("user skipped the welcoming message");
}
else {        
    if (userGender.toLocaleLowerCase() === "male") {
        alert("Welcome Mr "+ userName);
    } else if (userGender.toLocaleLowerCase() === "female") 
    {
    alert("Welcome Ms "+ userName);       
    } else { alert("welcome ");
    } 
}
let myArray = [];
let userAnswer1 = prompt("Are you A fiend's fan?");
let userAnswer2 = prompt("do you like spring?");
let userAnswer3 = prompt("do you like winter?");
//function to push user's answers to the array.
function theUserAnswers(array, answer1) {
    if (answer1 != "yes" && answer1 != "no") {
        array.push("invalid");
    } else {
        array.push(answer1);
    }
}
theUserAnswers(myArray, userAnswer1);
theUserAnswers(myArray, userAnswer2);
theUserAnswers(myArray, userAnswer3);
//function to print user's answers.
function theUserAnswersPrinter(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
theUserAnswersPrinter(myArray);