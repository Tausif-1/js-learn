//  array unshift shift method :---

// unshift :-- it will add a new value at 0th index or starting of values .


// ex:--

let fruit = ["apple","mango","banana"];

console.log(fruit);
 
// it prints the all values.

fruit.unshift("guava"); // it will ad guava at 0th index .
console.log(fruit);

// it print this after add the value at starting . ['guava', 'apple', 'mango', 'banana'].

// we can add multiple value using unshift method.

fruit.unshift("kiwi");
console.log(fruit);

// it will add and print this ['kiwi', 'guava', 'apple', 'mango', 'banana]



// shift :-- it removes the values from starting at 0th index.

// ex:--

let fruits = ["apple", "mango", "banana"];
console.log(fruits);

fruits.shift();
console.log(fruits);

// it removes first value and print this ['mango', 'banana'].


// it also returns removed values .

// ex:--
let Fruit = ["apple", "mango", "banana"];
let removedFruits = Fruit.shift();
console.log(Fruit);
console.log(`the removed fruits is ${removedFruits}`); // it prints this  the removed fruits is apple.



//  q1:-- which method is fast push & pop or unshift & shift method , why ?

// push and pop method is fast compared to unshift and shift.

// reason is - push and pop add and removes values or elements from last & unshift and shift have to add all the values in the memory first then it add and removes elements .thats why push and pop method is fast . 
