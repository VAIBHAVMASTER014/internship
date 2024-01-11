//when we create object using function constructor it automatecally set prototype
//when function constructor is used to create object we can say that prototype property is used 
function Person (fname, lname) {

    this.firstname = fname;
    this.lastname = lname;

}   

Person.prototype.getFullName = function () {
    return this.firstname+' '+this.lastname;
}
//in above getFullName is added to person function 

var john = new Person("john","doe");
//john is creating object using new keyword and it uses function construtors new function
//getFullName is added to person function so now john also use it
console.log(john.getFullName());

// console.log(john.firstname, john.lastname);
  
var jane = new Person("Jane","smith");
// console.log(jane.firstname, jane.lastname);

//make sure that when we make function constructor  the first letter must be capital

