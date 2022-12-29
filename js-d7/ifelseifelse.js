// if 
// else if
// else if
// else :-----


// it is use to write multiple instructions or values according to a conditions.

// ex:---

// q:- write a program to know about wheather conditions according to their temprature and values entered by user ?

let wheather = +prompt("Enter Temperature");

if(wheather <= 0){
    console.log("extremely cold outside");
} else if(wheather <= 16){
    console.log("it is cold outside");
} else if(wheather <= 25){
    console.log("wheather is ok");
} else if(wheather <= 35){
    console.log("it's hot ");
} else if(wheather <= 45){
    console.log("too hot");
}else{
    console.log("extermly hot");
}