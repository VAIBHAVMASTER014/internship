greet();

function greet(){
    console.log("greetinggggggs");
}

var callGreet = function(){
    console.log("greet calling");
}
callGreet();
+
function temp(t){
    t();
}

temp(function(){
    console.log("function run using parameter!!")
});