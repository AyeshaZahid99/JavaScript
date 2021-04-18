//challenge #01 Age in days

function ageInDays(){
var PersonBirthYear = prompt("What is the year you born in ... Good friend");
var ageInDayss = (2021 - PersonBirthYear)*365;
var h1 = document.createElement("h1");
var textAnswer= document.createTextNode("You are " +  ageInDayss + "days old" );
h1.setAttribute("id", "ageInDays");
h1.appendChild(textAnswer);
document.getElementById("flex-box-result").appendChild(h1);
};
function reset(){
     document.getElementById("flex-box-result").remove();
};