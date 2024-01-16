function multiply(x){
    
    function inner(y){
        return x*y
    }
    return inner
}

const answer = multiply(3)(6);
console.log(answer);