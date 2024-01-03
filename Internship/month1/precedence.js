//operator precedence that means if multiple operators are used then which operator has more precedence is called first 

// if flow goes left to right so right associativity
// if flow goes right to left so left associativity
var a  = 1+2*3 //right associativity first * function called then +
console.log(a)

var a  = 1*2+3 //left associativity first * function called then +
console.log(a)

//if operators have same precedence then it goes left to right 
var a = 2*3/2