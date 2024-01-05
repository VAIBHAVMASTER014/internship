//reflection means an object look at itself it can listing and change its properties and method

//example of reflection 
var person = {
    firstname : "jack",
    lastname : "hog",
    getFullname : function(){
        return this.firstname + " "+this.lastname;
    }
}

var john = {
    firstname:"default",
    lastname:"default",
};

john.__proto__ = person;

for(var prop in john) {
    
        console.log(prop+':'+john[prop]);
    }
