var arr1 = [3, 4, 5];
var arr2 = [];

for (var i = 0; i <3; i++){
    //this is non professional way to code
    arr2.push(
         arr1[i]*2
    )
}

//made function which take array and function 
function mapForEach(array ,fn){

    var newArr= [];
    for (var i = 0; i < array.length; i++) {

        newArr.push(fn(array[i]));

    }
    return newArr;
}

var mapForThree = mapForEach(arr1, function(item){
    return item*3
})
console.log(mapForThree);

var arr3 = mapForEach(arr1, function(item){
    return item>2
})
console.log(arr3);

var compare = function(limit, item){
    return item >limit;
}
var arr4 = mapForEach(arr1, compare.bind(this, 5))
console.log(arr4);

var compareSimplified = function(limit){
    return function(limit, item){
        return item >limit;
    }.bind(this, limit);
}
var arr5 = mapForEach(arr1, compareSimplified(4));
console.log(arr5);

//underscore library
var arr6 = _.map(arr1, function(item){return item*3});
console.log(arr6);