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