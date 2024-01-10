function outer(number){
     var num = number;
    
 function personalCounter(){
        num +=1;
    }
    personalCounter();


 function showCounter(){
        return num;
    }
    showCounter();
    return num
}

var obj = outer(10);
console.log(obj);

// obj.personalCounter()
// console.log(obj.showCounter())
