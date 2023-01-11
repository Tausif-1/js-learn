// iterate objects :-- 


// there are some methods to iterate objects -----

// **** 1. using for in loop :--


const person = {
    name : "tausif",
    age : 24,
    "person hobbies" : ["learning","skills"]
}

for(let key in person){
    console.log(key); // it prints keys only and give output this name , age , person hobbies in 3 different lines.
    console.log(person[key]); // it prints values only 

    console.log(person.key); // it gives undefined output three times .
}

// so these loops are run three times if there are some other key pair values are added it give more time output that is given in varible.

// how to print key pair values using for in loop?

// there are two mwthods to print key pair values ----

// 1. using template string ---

const person1 = {
    name : "tausif",
    age : 24,

}

for(let key in person1){
    console.log(`${key} : ${person1[key]}`);
}


// it prints key pair values .

// 2. using normal method :-

for(let key in person1){
    console.log(key, ":",person1[key]);
}

// it also prints the key pair values .


// ***** 2. Object.keys :-- it returns only keys in array. we write object first letter o in capiatl.

const person2 = {
    name : "tausif alam",
    age : 25,
}

console.log(Object.keys(person2));


// it prints keys only in array  like this -- ['name','age']

//**** 3. Object.values :- it returns values only in array.

console.log(Object.values(person2)); 

