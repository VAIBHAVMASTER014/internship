//reduce is very flexible
var arr = [1,2,3,4,5];
var sum = 0;

for (var i =0;i<arr.length; i++){
    sum +=arr[i];
}

console.log(sum);

var val;
var addUsinReduce = arr.reduce (function(val, arr){
    return val+ arr
},5)

console.log(addUsinReduce);

//another example
var colors = [
    {color:'red'},
    {color:'blue'},
    {color:'green'},
];
// console.log(colors[0].color)

var onlyColor = colors.reduce(function(previous,color){
    previous.push(color.color);
    return previous;
},[]);

console.log(onlyColor);

//another example "()()()()" string given we have to check whether given string is balanced or not

function strIsBalanced(str){
    //split function split whole string into array of single charaters
    return !str.split("").reduce(function(previous, char){
        if(previous < 0) {return previous;};
        if(char === '(') {return ++previous;};
        if(char === ')') {return --previous;};
        return previous;
    },0)
}
console.log(strIsBalanced(""));