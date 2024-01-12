function validate(pass){
    
    if (pass.length >= 6 && pass.length <= 15){
        if(pass[0].match(/[A-Z]/g)){
            if(pass.match(/[A-Z]/g) && pass.match(/[a-z]/g) && pass.match(/[0-9]/g) && pass.match(/[!@#$%^&()]/g) ){
                console.log('valid password')
            }else{console.log('invalid password');}
            
        }else{console.log('invalid password');}
    }
    else{
        console.log('invalid password');
    }
}
validate("Test@123l");
var a= "1"



