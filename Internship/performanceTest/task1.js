function Fibo(num){
    var a = 0;
    var arr = [];
    arr.push(a);
    if (num == 1){
        
        return arr;
    }
    else{
        var element = 1;
        var i = 0;
        while(a<num){
            
            a = a+element;
            if (a<num){

                arr.push(a);
            }
            
            element = arr[i];
            i++

        }
        return arr;
    }
}
console.log(Fibo(10));
