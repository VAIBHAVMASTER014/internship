// string and number given, have to calculate occurence of single character 
// var string = "nnnmyccbvfffn";





// //lower to upper ,upper to lower and vowels are not change if exist 

function Filtering(string,num){
    let s = new Set(string)
    let obj = {};
    var counter ;
    for (var i of s){
        counter = 0;
        for(var j of string){
            if (i === j){
                counter += 1;
            }
        }
        obj[i] = counter
    }
    for (var item of s ){
        if(obj[item] < num){
            console.log(item)
            delete obj[item]
        }
    }
    return obj

}
console.log(Filtering(string,0))

//lower to upper ,upper to lower and vowels are not change if exist
function checkString(string){
    var str = "";
    for (i of string){
        if (i.match(/[A-Z]/g))
        {
            if (i.match(/[AEIOU]/g))
            {
                str += i;
            }
            else
            {
                str += i.toLowerCase();
            }
        }
        else
        {
            if (i.match(/[aeiou]/g))
            {
                str += i;
            }
            else
            {
                str += i.toUpperCase();
            }
        }
        
        }
    
    return str
}
console.log(checkString("NimitpAtel"))