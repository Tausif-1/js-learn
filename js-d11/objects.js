// objects :-- objects is a standalone entity with propertities and type.

// 2nd def :--  object  is a collection of propertities  in the form of name and value pairs & it is reference datatypes .

// to create a object we use curly brackets {} .

// objects are always store in key value pairs .

// objects do not have index.


// q:- how to create objects ?


const person = {
    name : "tausif",
    age : 22
}

console.log(person);

// it prints {name:"tausif" , age : 22}.




// *** how to access the data from the objects ?

// 1. dot notation method 

console.log(person.name); // it print tausif and it access only name key value.

// 2. bracket method 

console.log(person["age"]); // it prints 22 in age key value .


// in object key is always in default in string . 


// *** how to store a array in object ?


const person1 = {
    name : "tausif",
    age : 22,
    hobbies : ["singing", "listening music"]
}

console.log(person1); 

// it prints all the key and values and array is stored in objects .

// access the data from objects ?


console.log(person1.hobbies); // it prints ['singing', 'listening music']. dot notation .

console.log(person1["hobbies"]); // it prints the same output. bracket notation use .



// *** how to add key value pair in object ?


const person2 = {
    name : "tausif",
    age : 22,
}

console.log(person2);

// it prints the values . {name:'tausif',age :22}

// to add key value pair we use this ----- 

person2.gender = "male"; // dot notation use .

console.log(person2);

// it will add gender key value pair and print this {name: 'tausif', age: 22, gender: 'male'}.


person2["hobbies"] = "singing"; 

console.log(person2);

// it will add more values and add hobbies key value pair.

// print this {name: 'tausif', age: 22, gender: 'male', hobbies: 'singing'}.

