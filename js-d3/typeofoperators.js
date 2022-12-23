


//datatypes [primitive datatypes]

//string ["tausif"]

//number [1,25,3025.5]

//boolean [true or false]

//undefined
//null
//bigInt
//symbol

// typeof operators : it show your typeof data .

// ex:-

let firstName = "tausif";
let age = 22;
console.log(typeof(age)); // it prints number
console.log(typeof(firstName));// it prints string


// convert number to string ----->>>>>

let myage = 24;
console.log(typeof(age + "")); // it prints string 

// to convert number to string we use empty double quotes[""]

let myAge = 24;
myAge = myAge + "";
console.log(typeof myAge); //it prints string.



//convert string to number :-----

// to convert string to number we use [+] sign before string .

// ex:--

let myName = +"22";
console.log(typeof myName);  // it prints number .



// other method to convert string to number and number to string .

// 1. string to number 

let mystr = "58";
mystr = Number(mystr);
console.log(typeof mystr); // it convert to number


// 2. number to string

let Mystr = 25;
Mystr = String(Mystr);
console.log(typeof Mystr); //it convert to string.
