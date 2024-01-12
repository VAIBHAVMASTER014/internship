function outer(number){
     var num = number;
    
 function personalCounter(){
        num +=1;
    }
    


 function showCounter(){
        return num;
    }
    
    return {personalCounter,showCounter}
}

var obj = outer(10);
// console.log(obj);

var obj2 = outer(20)
// console.log(obj2);
obj.personalCounter()
obj.personalCounter()
obj.personalCounter()
obj.personalCounter()
console.log(obj.showCounter())
