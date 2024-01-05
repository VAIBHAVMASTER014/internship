//when function constructor is used it will create object every time

String.prototype.IsLengthGreaterThan = function(limit){
    return this.length > limit; 
}
console.log("josh".IsLengthGreaterThan(3));

var a = Number("3");
//above code create primitives which is right way
console.log(typeof(a));

//this is wrong way! it makes object not primitives
var b = new Number("2")
console.log(b);

//array for in
var arr = ["1st","2nd","3rd"];
Array.prototype.NewFunc = "its not inbult function";

for (var prop in arr){
    console.log(prop+":"+arr[prop]);
}

