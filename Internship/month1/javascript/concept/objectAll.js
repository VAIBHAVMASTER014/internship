//in js almost everything is object.
 
//Booleans,Number,String can be objects if defined with 'new' keyword. 

//Dates,Maths,RegularExpression,Arrays,Functions are objects in js.

// except primitive data types all are objects(primitives are:string,number,boolean,null,undefined,symbol,bigint   )

//objects are variables too that contain many values

//objects values can be:=> <name: value>  pair

//value of object can be any of (primitive variable, other objects, functions )

let objectDiffValue = {
    name : 'vaibhav',//primitive variable
    address: {       //another object
        area:"area",
        city:'surat',
        state:'gujrat'
    },
    getDetails: function (){//function 
        return (`Name is ${this.name} and stay in ${this.address.city} city.`)
    }
}

console.log(objectDiffValue.getDetails())

//objects can be created using three methods 
var object1 = new Object();//creation of object using new operator

var object2 = Object.create();//creation of object using create functioon 

var object3 = {};//creation of object using litralls ('{}')