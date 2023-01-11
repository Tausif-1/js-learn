// for loop in array :--  we are using print array using forloop & most important properties is length.


// ex:--

let fruits = ["apple","mango","grapes","banana"];

for(let i = 0; i<=fruits.length-1;i++){
    console.log(i);

}

/* it prints 
0
1
2
3
like this .

*/ 

// to print all the characters seprately we are using this ---

for(let i=0;i<=fruits.length-1;i++){
    console.log(fruits[i]);
}

/* it prints all the characters in a single sequence in multiple lines like this-
apple
mango
grapes
banana
*/

// q-- print all the characters seperately in a sequence and in capital letter?

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i].toUpperCase());
}

/* 
it prints all the characters in capital letter in a seperate sequence like this -
APPLE
MANGO
GRAPES
BANANA
*/

// we does not use = in fruits.length and -1 because if we does not write the code is executed successfully without error.



// q2-- make a new array and assign first array in second array  print all the character in upper case?


let fruit1 = ["apple","banana"];
let fruit2 = [];

for(let i=0;i<fruit1.length;i++){
    fruit2.push(fruit1[i].toUpperCase());
}


console.log(fruit2);

// it prints fruit1 values in fruit2 in capital letter .

