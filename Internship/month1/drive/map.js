var arr = [1,2,3,4,5];

//map will always create new array it wouldn't change existing array 
var double = arr.map(function(number){
    return number*2;
})

console.log(double);

var cars = [
    {model:"honda", price:"cheap"},
    {model:"bmw", price:"expensive"},
];

var showPrice  = cars.map(function(car){
    return car.price
})
console.log(showPrice);
//when using map have to pass function as an parameter which is going to execute for each element in array
//always put return statement in parameter function