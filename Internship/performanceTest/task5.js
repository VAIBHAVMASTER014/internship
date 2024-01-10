function parts(arr,chunk){
    var array = [];
    var tarr = [];
    var i = 0;
    var temp = chunk;
    while(i<arr.length){
        
        array.push(arr.slice(i,temp));
        i = temp;
        temp += chunk;
        
    }
    return array

}
console.log(parts([1,2,3,4,5,6,7,8,9],3));