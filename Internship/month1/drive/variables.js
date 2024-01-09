//var,let and const

//not going to use var anymore for declaring a variable and its globally scoped
var a =10;
function any(){
}
console.log(a);
//const : when const is used it means that value of it is never going change once declare
//except it is object or array, and const is block scope
const myName = 'vaibhav';//that would never change now

function myFunction(){
    console.log(myName);
}
// myName = 'nimit';//it return error
myFunction();

//let is block scoped it is similar to var but let is block scope 
let sameVariable= 'same';

function demo(){
    let sameVariable = 'not similar';
    console.log(sameVariable);
}
demo();
console.log(sameVariable);