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
// getting image on click
function generateCat(){
    var image = document.createElement("img");
    var div = document.getElementById("flex-cat-gen");
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}

//Challenge #03 Rock, Paper, Scissors
/// learning Functional Programming
  // referring the object

function rpsGame(yourChoice){
    console.log(yourChoice.src);
var HumanChoice, BotChoice;
//HumanChoice = yourChoice.id;
BotChoice=numberToChoice(randTorpsInt());
console.log(BotChoice);
/*var results;

//var message;
//function finalMessage(results);  //will return an object
//rpsFrontEnd(yourChoice.id,BotChoice.id,message);
*/
}
 
 
 
 function randTorpsInt(){
     return Math.floor(Math.random()*3);
 }
 function numberToChoice(number){
    return ["rock","paper","scissors"][number];
 }
 function decideWinner(yourChoice,CompChoice){
     var rpsDatabase ={
         "rock": {"scissors":0.5,"paper":0,"rock":0.5},
         "paper":{"paper":0.5 , "rock":0 , "scissors":1},
         "scissors":{"scissors":0.5 , "paper":1 , "rock":0}

     
     
 }