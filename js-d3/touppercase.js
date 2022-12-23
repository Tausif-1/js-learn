// touppercase :- it is use to change small letter to capital letter .

//ex:-

let firstName = "tausif";
firstName = firstName.toUpperCase();
console.log(firstName);

// it change small to capital letter.

// what if we want to print a particular character print to capital letter?

let myName = "tausif";
myName = myName.toUpperCase();

console.log(myName[0]); // it prints the only first character at 0th index.


//using slice method 

let myName1 = "tausif";
myName1 = myName1.slice(0,1);

console.log(myName1.toUpperCase())