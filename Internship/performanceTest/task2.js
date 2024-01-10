function validate(pass){
    function upper(pas){
        var flag = false;
        for (var i in pas){
            if(pas[i] == (['ABCDEFGHIJKLMNOPQRSTUVWXYZ'])){
                flag=true;
            }
            return flag;
        }
    }
    function lower(pas){
        var flag = false;
        for (var i in pas){
            if(pas[i].includes(['abcdefghijklmnopqrstuvwxyz'])){
                flag=true;
            }
            return flag;
        }
    }
    function numb(pas){
        var flag = false;
        for (var i in pas){
            if(pas[i].includes([0,1,2,3,4,5,6,7,8,9])){
                flag=true;
            }
            return flag;
        }
    }
    function symbol(pas){
        var flag = false;
        for (var i in pas){
            if(pas[i].includes(['@','!','#','$','%','&'])){
                flag=true;
            }
            return flag;
        }
    }
    if (pass.length >= 6 && pass.length <= 15){
        if(upper(pass[0])){
            if(upper(pass) && lower(pass) && numb(pass) && symbol(pass) ){
                console.log('valid password')
            }
        }
    }
}
validate("Test@123");
var a= "1"



