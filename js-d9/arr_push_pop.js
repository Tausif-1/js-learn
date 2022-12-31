// array push pop :---

// push :-- it will add a value in last index.

// ex:--

let fruits = ["apple","mango","grapes"];

console.log(fruits);

// it prints that value we assign in array . 
// using push method---

fruits.push("banana");
console.log(fruits); 

// it prints and add banana at last index.




// pop :-- it removes a value in last index.

let Fruits = ["apple","banana","grapes"];
console.log(Fruits); // it the all values 
Fruits.pop(); // using pop method
console.log(Fruits); // it removes a last value in last index.


// pop is not only removes value but it stores value we can store values in an another variable.

// ex:--

let myFruits = ["apple","mango","banana"];
console.log(myFruits);
let poppesFruit = myFruits.pop();// it store your removed value in poppedFruit.
console.log(`popped fruits is ${poppesFruit}`);
