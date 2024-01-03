//scope chain means what will be the value of variable used at multiple places
function a(){
    function b(){
        //below line return value of name in js scope to find value of name is function's own body 
        //if value isn't found then value can be search at outside the function and it goes like that until value is found
        console.log(name);
        
    }
    var name = "nothing";   
    b();
}

var name = 1;
a();