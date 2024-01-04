// //imediately invoked function expression
// var iife = function (){
//     console.log("This is imediately invoke function.");
// }();
 
// var firstName = "vaiabhav";

// (function(name) {
//     console.log("Inside iife : "+ name);
// }(firstName));

//safe code 


(function (name){
    var greeting = "hola";
    console.log(greeting + " " + name);
}("jack"));

console.log(Window)