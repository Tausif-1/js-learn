// primitive vs reference datatypes:-----


// primitive datatypes :---

/*
1. primitive datatypes or value are atomic pieces of data

2. some primiyive datatypes are -- string,boolean,number,null,undefined,symbol.

3.it sotres in stack memory.

4. it stores in a stack means if we give num1 a value and assign num1 in num2 so it stores num1 value in num2 if we increment in num1 or change value in num1 , it does not change value in num2 beacause in stack num1 and num2 have 2 memory locations so if we change num1 it changes only num1 value it does not change num2 value because we already assign a previous num1 value in num2  .

                ****** here is the code example *********
 */ 


// ex:---

let num1 = 7;
let num2 = num1;

console.log("the value of num1 ",num1);
console.log("the value of num2 ",num2);

// after increment num1 value
num1++;

console.log("after incrementing num1 value");
console.log("the value of num1 ",num1); // it prints 8
console.log("the value of num2 ",num2); // it prints 7 because it has another memory location and it already stored previous num1 value. so that's why it show previous num1 value . 


// 2. reference datatypes:---------

/*

1. reference values are objects that might consist of multiple value .

2. reference datatypes are --- objects , array , function , collection , dates , and other types of objects . 

3. the value itself stored on a heap and its pointer stored on a stack .

4. the pointer create a address of Array1 and that same adress it assign in Array2 , if we change or add a value in array 1 it automatically asssign the same value in Array2 and update the value of Array2.

*/

// ex :--

let array1 = ["item1","item2"];
let array2 = array1;

console.log("the value of array1 is " ,array1);

console.log("the value of array2 is ", array2);


console.log("after pushing the value in array1");

array1.push("item3");  // it add item3 in last index of value .

console.log("the updated value of array1 is ", array1); // it prints the updated value .

console.log("the updated value of array2 is ", array2); // it prints the updated value of array1.

// it updates the array1 and the address is stored in array1 and array2 are same and both are connected with heap memory if we do changes in array1 it auto update the same value in array2 because their address are same .
