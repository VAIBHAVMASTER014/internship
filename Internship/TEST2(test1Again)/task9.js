function snakeToCamelCase(str){
    var newStr = ""
    for(var i = 0; i < str.length; i++){
        if(str[i] == '_'){
            i = i+1
            newStr += (str[i-]).toUpperCase();
        }
        else{
            newStr +=str[i];
        }
    }
    return newStr;
}
console.log(snakeToCamelCase("uder_score"))