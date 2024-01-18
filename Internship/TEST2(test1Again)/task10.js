function outer(number){
    var number  = number;
    function inner(){
        number += 1;
    }
    function showCounter(){
        return number
    }

    return {inner,showCounter}
}

var obj1 = outer(10);
obj1.inner();
console.log(obj1.showCounter())