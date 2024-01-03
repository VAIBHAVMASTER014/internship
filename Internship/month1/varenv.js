function a(){
    var b ;
    //value of b is not changed in this block like after execution of function c value of b is same as before in function a
    c();
    console.log("function a:",b)
}
function c(){
    var b = 2;
    console.log("function c:",b)
}

var b = 1;
console.log(b);
//value of a is 1 which is globally so after initializing variable its value is stay same in whole code till another value initialize to it
a();
console.log(b);