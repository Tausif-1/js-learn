// using const to make an array :---  we are using const to make a array . 90% developers are using const to make array . 

// ex:--

const fruit = ["apple","banana"];
fruit.push("mango");
console.log(fruit);

// it prints and add mango to fruits array & it does not give error because we are adding a vlue in fruits array not try to change the array we are using push and pop or unshift and shift methods to make changes in array in  const  .


// q-- what if we are try to change an array ?


const fruits = ["apple", "mango"];
fruits = ["grapes"];

console.log(fruits);

// it throws an error because it value const value can not be change.

