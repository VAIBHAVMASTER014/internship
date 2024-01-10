let arr = [2,3,4,5,[2,7]]

function maxNumber(arr){
    var b = arr.toString();
    var temp= b[0];
    for(var i = 1; i < b.length; i++){
        if (Number(temp)<Number(b[i])){
            temp = b[i];
        }
    }
    return temp
    
}
console.log(maxNumber(arr))