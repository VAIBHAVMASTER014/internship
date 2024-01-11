//closure is feature which means inner functions can access the outer functions value 
//though outer function is executed

function greet(statement) {
    return function(name) {
        console.log(statement+" "+name);
    }
}

greet("Hello")("ram");

var say = greet("welcome");
say("nimit");
