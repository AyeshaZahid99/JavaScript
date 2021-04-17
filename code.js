             // Hour 01   DAY#01
/*
console.log("hello world!");
//way to write comments
//alert("yoo!");

//variables
var alpha = "ayesha"
var num = "99"
console.log(alpha);


 //document.getElementById("1").innerHTML ="storage";

// var storage = prompt("What is your age?");
//alert("Hello" + "  " + storage + " " + "enjoy the party");

// numbers in JavaScript

// increment in num by 2

var num = 1.90;
num ++ ;
num ++ ;
console.log(num);
// division  // multiplication // remainder
console.log(50/2);
console.log(50*2);
console.log(50%2);
//decrement num1 by 1
var num1 = 5;
num1--;
console.log(num1);

num1+=6;
console.log(num1);

/*working with functions
After making a function it is necessary to call it.

// creating function
function fun(){
    alert("Hey there!");
}
//calling function
fun();

function task01(){
   var rep= prompt("Enter you name please");
  // concatenation practiced.
   console.log( "hello" + " " + rep );
}

task01();

// working of arguments in function.
//Make a simple function to add two numbers:

function addition(a,b){
    var result= a + b;
    console.log(result);
}
//addition(2,3);
addition("Hey","Ayesha");

// working with loops
// while loop
var pro = 0;
while (pro <= 100){
    pro+=1;
    console.log(pro);
}
//for loop 
for (let a=0; a<7; a++){
    console.log(a);
}

// working with data types

let del = 122;  // number
let del1 = "Alians are good!"; //string
let del2 = { first:"Ayesha" , last:"Zahid"}; //object
let del3 = true; //boolean
let del4 = ["apple","oranges","bananas"]; //array
let del5; //undefined variable
let del6 = null ; // null variable

// working with strings ( Common methods)
//for new line just use \n

let fruits= "apple\nbananas,pastry";
console.log(fruits.length);   //finding length of variable
console.log(fruits.indexOf("ppl"));  //calling index of particular variable
console.log(fruits.slice(1,3)); //slicing  logic (1st including , LastExcluding) 
console.log(fruits.replace("ple", "ggg")); // replacement
console.log(fruits.toUpperCase());
console.log(fruits.toLowerCase());
console.log(fruits.charAt(4));
console.log(fruits[3]); // calls partcular  index
console.log(fruits.split(""));// splits every single character
console.log(fruits.split(",")); //splits each word by commas
 
//working with arrays
let fruit= ["apple","banana","pineapple","blueberry"];
//console.log(fruit[2]);
let fruit= new Array("apple","banana","pineapple","blueberry");
console.log(fruit);
fruit[0]="pine";
console.log(fruit);
for (let i=0; i< fruit.length;  i++){
    console.log(fruit[i]);
  
}
console.log(fruit.toString());   // converting array into string
console.log(fruit.join("+"));    // using join
console.log( fruit.pop() + fruit );  // removes last item
//ALSO shift() can be used for the same purpose 
console.log(fruit.shift());
console.log(fruit);
console.log(fruit.push("blackberries"), fruit); //appends items


            // Hour 2 (DAY #02)
            let fruit= ["apple","banana","pineapple","blueberry"];
            let vegetables = ["carrot","tomato","onions","cabbage","capscicum"];
            console.log(fruit.concat(vegetables));    // concatenation
            let allVeg = fruit.concat(vegetables);
            console.log(allVeg.sort());

            let Numbers = [1,6,8,9,0,4,67,334,567,890];
            console.log(Numbers.sort(function(a,b){return (a-b)}));   // for assending order 
            console.log(Numbers.sort(function arr(a,b){return b-a}));     // for descending order  // both are perfectly okay
            // pushing numbers in an empty array
            let emptyArr = new Array();
            for (let num=0; num <10; num++) {
             emptyArr.push(num);
             
            }
            console.log(emptyArr);

// working with OBJECTS (called Dictonaries in PYTHON)
// don't initate an object with let
var myObject = {
    first: 'Ayesha',
    last:'Zahid',
    age: 21,
    height:'5.6',
};
myObject.age++;
console.log(myObject.age);
console.log(myObject.first);

// Conditionals , Control flows, (if else statements)
// let dont work with prompt
// Make a simple  program to select 18-50 as your targetted demographic audience
var age = prompt("Enter your age please ....");
if ( (age>=18) && (age<=50)){
    status = "Targetted audience"
    console.log(status);
}
    else{
        status= "Not my concern";
        console.log(status);
    }
    */

// using SWITCH CASE
//print weekend for fridays , saturdays & sundays
//print weekday for rest of the days

//( How can we code in a way that whether user give put n 
//upper case or lowercase it will any how respond correctly)
var answer = prompt ("Name the Day?");
switch(answer){
    case "friday":
        text = "Weekend";
        break;
    case "saturday":
        text= "Weekend";
        break;
    case "sunday":
        text= "Weekend";
        break;
    default:
        text = "Weekday"

}
console.log(text);

// Making Json file
//Json is valid JavaScript

let dump= `[
    {


    "first" : "Ayesha",
    "last" :"Zahid",
    "age" : 21,
    "height" :5.6
},
{
    "first": "wali",
    "last" :"Zahid",
    "age" : 18,
    "height" :5.8
        
    }
    
]`
//console.log(JSON.parse(dump)[0].first);
console.log(JSON.parse(dump));
