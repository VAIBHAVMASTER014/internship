//In javascript every object have properties and methods that
//prototype is propertie of object

//prototype chain means every object have property proto and that have property
// object can access to that property using dot operator no need to write whole path just 
//write <object name> . <property name> it will find that property

//object have proto and that proto has another proto and that proto has property which
//property object want to use so no need to write obj.p2 in which p2 is second proto's property

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

var jane = {
    
    lastname:"default",
};

//john inherits person means person is parent class john is child class
john.__proto__ = person;

console.log(john.getFullname());
//below line find firstname in john first if not found then search in person 
console.log(john.firstname);

jane.__proto__ = person;
//below line find firstname in jane first but it isn't there then search in person and return
//its because of proto chain concept
console.log(jane.firstname);


