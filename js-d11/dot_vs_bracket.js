// dot vs bracket notation -----

// how to use dot and bracket notation wisely and different methods --

// here we are understand from examples ---

// 1. using dot notation method -------

const person = {
    name : "tausif",
    age : 22,
    hobbies : ["sleeping","guitar"]
}

console.log(person.hobbies);  // we are using dot notation method .

// it prints this ---  ['sleeping', 'guitar']  ,it access from hobbies section only .

// q1 -- how to access a variable value that is written in that condition -- [person hobbies] ?


// here first we are using dot method 

const person1 = {
    name : "tausif",
    age : 22,
    //person hobbies : ["guitar","cricket"] ---  in that condition it give us error , so the correct method is this we have to write in string . like this -
    "person hobbies" : ["guitar","cricket"]
}

//console.log(person1.person hobbies); // it also give us error what if we write in string .

//console.log(person1."person hobbies"); // it also give us error .

// here we use bracket notation ---

console.log(person1["person hobbies"]); // it runs successfully and it access person hobbies section and print their values inside the person hobbies.

// so this is the use of dot and bracket notaion and the difference .



// q2---- how to add key value pair in person2 and take key to a different variable ?
// tke key = "email"; as key value ?

// soln :----


const key = "email";
const person2 = {
    name : "tausif",
    age : 22,
}

person2.key = "tausif@gmail.com";
console.log(person2);

// name: 'tausif', age: 22, key: 'tausif@gmail.com'} it print this .

// it assign gmail into key and it becomes key as key value pair and we do not want to print key as value we want to make key pair from key value , so we do this to make email as main value not key , ex:---

const key2 = "email";
const person3 = {
    name : "tausif",
    age :22 
}
person3[key2] = "tausifalam@gmail.com"; // if we want value from any variable we does not write in string in bracket notation, we direct write our variable name it assign variable value as main value . so this is the main use of bracket notation. 
console.log(person3);

// {name: 'tausif', age: 22, email: 'tausifalam@gmail.com'} it print this .

// it assign email as main value and in email we add our email address and make key pair value .