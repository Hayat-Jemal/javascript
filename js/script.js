console.log("Hi everyone")

let el=document.querySelector("button")
el.addEventListener("click", function () {
    el.innerHTML = "changed";
})

console.log("hi")

document.write("I have comments in my JavaScript code!") 
// document.write("You can't see this!");

console.log("this is Hayat");
console.log("my favorite food is Tibs");
console.log("testby")

// arithmetic operators
let answer = 0;

answer += 5;
answer += 5;
answer -= 2;
answer *= 2;
answer /= 4;

const myAlertValue = alert("hi, I am a pop up.(alert)");
const myConfirmValue = confirm("Are you sure?(confirm)");
const myPromptValue = prompt("What is your name?(prompt)");

console.log("myAlertValue", myAlertValue);
console.log("myConfirmValue", myConfirmValue);
console.log("myPromptValue", myPromptValue);
