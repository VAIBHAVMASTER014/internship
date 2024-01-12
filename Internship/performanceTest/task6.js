let arr = [2,3,4,5,[6,[4,5,0,[50,2]]]]


function maxNumber(arr){
    var b = (arr.toString()).replace(',',' ');
    var temp= b[0];
    for(var i = 1; i < b.length; i++){
        console.log(b[i])
        if (Number(temp)<Number(b[i])){
            console.log(temp)
            temp = b[i];
        }
    }
    return temp
    
}
console.log(maxNumber(arr))