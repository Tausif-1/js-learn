//  Array Desteucturing :--- Array destructuring is a unique technique that allows you to neatly extract an array's value into new variables. 

// ex:--

const myArray = ["value1","value2"];

let [myVar1,myVar2] = myArray;

console.log("the value of myVar1",myVar1); // it prints value1 
console.log("the value of myVar2",myVar2); // it prints value2 

// it assing value1 in myVar1 and value2 in myVar2 & we do not have to write multiple line to assign variable and values .


// how to change the value of variable using destructuring method?

const myNew = ["val1", "val2"];

let [newVar1,newVar2] = myNew;
newVar1 = "value22"; // it use to assign a new value and change value in a variable .

console.log("the value of newVar1", newVar1); // it print value22
console.log("the value of newVar2",newVar2); // it print val2


// Q- how to assign a value in a variable or skip the value to next value?


const myArr = ["value1","value2","value3"];

let [var1, ,var2] = myArr;

console.log(var1); // it prints value1.
console.log(var2); // it prints value3. it skips  value2 and assign value3 in var2.

// to skip a index we use a comma [,] & it skips the value and assign next value to the variable is present after the comma .


