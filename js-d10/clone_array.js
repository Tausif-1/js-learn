// clone array :-- to clone array we use concat & slice method both .

// ex:--

//  1. slice method :--


let array1 = ["item1","item2"];
let array2 = array1.slice(0);

console.log(array1===array2); // it compares and print false because both are different values.

array1.push("item3"); // it push item3 in array1 only.

console.log(array1); // it update only array1 value .
console.log(array2); // it clone array1 previous value and it doesnot update the value .


//  2. concat method :-- 

let Array1 = ["item1","item2"];
let Array2 = [].concat(Array1);

Array1.push("item3"); // it push the item3 in Array1 .

console.log(Array1===Array2); // it compares and print false .

console.log(Array1); // it prints the updated value of Array1 .
console.log(Array2); // it prints the previous cloned value of Array1.

// there is a new way to clone arrays , we use spread operator to clone an array.

// ex:---------


let arr1 = ["item1","item2"];
let arr2 = [...arr1]; // using spread operator we use in brackets ... {triple dot and variable name} and it clone the arr1 value in arr2.

console.log(arr1===arr2); // it compare the values and print false .


arr1.push("item3"); // it add item3 in arr1 in last index.


console.log(arr1); // it prints the updated values .
console.log(arr2); // it prints the previous cloned  values of arr1.


// how to concatinate two arrays ?

// slon:--

//  1. slice method :--

let num1 = ["item1","item2","itm"];

let num2 = num1.slice(0).concat(["item3","item4"]); // concat method using in slice method.

console.log(num1); //it prints ["item1","item2","itm"];

console.log(num2); 
// it prints and add and show this values ['item1', 'item2', 'itm', 'item3', 'item4']


//  2. concat method :--

let Num1 = ["item1","item2"];
let Num2 = [].concat(Num1,["item4","item6"]); // concat method to add

console.log(Num1); // ["item1","item2"];
console.log(Num2); // ['item1', 'item2', 'item4', 'item6']


//  3. spread operator method :---


let numb1 = ["item1","item2"];
let numb2 = [...numb1,"item7","item5"]; // spread operator method to add multiple values.

console.log(numb1); // ["item1","item2"];
console.log(numb2); // ['item1', 'item2', 'item7', 'item5']