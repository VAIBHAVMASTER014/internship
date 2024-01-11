//if there is any need to check wheather value of particular variable is exist or not one of the way is that 
// would be known using Boolean function
var a ;
console.log(Boolean(a));
//in above a is just declared but not initialized so js assign undefined value to variable a bydefault 
// and Boolean(undefined) is false

a = 120;
console.log(Boolean(a));
//a is declared first then initialize in above code now Boolean(a) return true because any value is exist there

console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(undefined));

