
// hoisting means that in many languages func declaration then function calling is 
// followed but in javascript if function is defined in code anywhere it rearrange to the top of the code.

b();

function b (){
    console.log("hey there!")
}