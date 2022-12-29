// array :- array is a collection of ordered collection of elements or items .

// array is reference type of datatype . all the reference datatypes are called objects .

// we use [] - square brackets to make a array.

// we can store any types of data types in array.


// ex:-- to make a array and do indexing 

let fruits = ["apple" , "mango" , "banana"];
console.log(fruits);// it prints value 
console.log(fruits[0]);//it prints 0th index only

console.log(typeof fruits);
 // it prints object and all the reference datatypes are objects.



// make a all datatype of array

let mixed = [1,2,3.44,"mango",null,undefined];

console.log(mixed); //it prints all mix datatype values .

// change the values using indexing method:---


let Fruits = ["mango","banana","guava"];
Fruits[1] = "grapes";  // vallue you assign to change
console.log(Fruits);

// it change the 1st index value from banana to grapes .


// how to know you make a array ?

// sol :--

let num = [1 , 3 , 4.56,];
let obj = {} // it is object literals

console.log(Array.isArray(num));
console.log(Array.isArray(obj));

