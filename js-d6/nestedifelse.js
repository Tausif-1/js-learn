// nested if else :-- it is use to write multiple if else blocks inside else condition. 

// prompt("enter number") :- prompt function is use to give permission to enter a value by user and the value is always in string and if you enter number you have to typecast the prompt value .


// ex:--

let winnigNumber = 19;
let userGuess = +prompt("guess a number");

if(userGuess === winnigNumber){
    console.log("your aguess is right !!!!");
} else{
    if(userGuess < winnigNumber){
        console.log("too low!!!");
    } else{
        console.log("too high");
    }
}


//  if you give value 12 it prints too low !!! and you enter 19 it prints you are right and you print 24 it prints too high .