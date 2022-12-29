// forloop :--  A for loop repeats until a specified condition evaluates to false. 

// ex:-- 1 method


for(let i = 0;i<=9;i++){
    console.log(i);
}

// it prints successfully 0 to 9 numbers.

// console.log("value of i is",i); // it gives error

//it gives error because we cannot print i in let case if we write insted of let we write var then it runs succcess fully .

// 2n method 

let n = 0;
for(;n<=9;n++){
    console.log(n);
}

console.log("value of i is",n);

// it doesnot give error . 

// 2nd ex:--


let total = 0;
let num = 100;

for(let i = 1;i<=num;i++){
    total = total + i;
}

console.log(total);

//it prints 5050 output.