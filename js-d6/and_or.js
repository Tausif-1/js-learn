//  and [&] :- and operator is use to print two or more conditons run at a time .

// we double and [&&] to run conditions .




// code :---

let firstName = "Tausif";
let age = 24;

if(firstName[0] === "T" && age > 18){
    console.log("name starts with T and age above 18");
} else{
    console.log("it is false");
}




// what if one condition is false what it prints  ?

let Firstname = "Tausif";
let Age = 25;

if (Firstname[0] === "t" && Age > 18) {
    console.log("name starts with T and age above 18");
} else {
    console.log("it is wrong");
}

// it prints it is wrong .

// if one codition is false and other condition is true so all the conditions are false .
// if both conditions are true so it prints if statement.




// or [|] :--- it is use to print two or more conditions and it is use to print true conditions if one condition is false and other is true it will print true condition .


// we use [||] double or to make a conditions .



// ex:--

let myName = "tausif";
let myAge = 14;

if(myName[0] === "t" || myAge > 18){
    console.log("inside if");
} else{
    console.log("inside else");
}

// it prints inside if because one condition is true .

