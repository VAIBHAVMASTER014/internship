// This is where functions come in to great use. More complex operations are made up of many functions:

// initiator style / input
// middleware
// terminator

// initiator style / input function will accept the original input 
// middleware function will return another function 
// terminator function will invoke the callback function

function terminator(input, callback){
    return callback(`${input} invoke in terminator`);
}
function middleware(input,callback){
    return terminator(`${input} from middleware to terminator`,callback);
}
function initiator(){
    const someInput = "This is initiator function";
    return middleware(someInput,function(result){
        console.log(result);
    })
}
initiator();