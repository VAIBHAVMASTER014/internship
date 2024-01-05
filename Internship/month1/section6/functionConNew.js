//function constructer 'New'
//function constructers are just functions which is used to assign value to objects 
//New is an operator

function person (fname, lname) {

    this.firstname = fname;
    this.lastname = lname;

}   

//when new operator is used at first it create new address space and then invoke
//the function after new keyword 
//in below case obj is created
var john = new person("john","doe");
console.log(john.firstname, john.lastname);

//in below object creation named jane first :
//new object is created which is totally empty
//then function which is written after new keyword is invoke 
//person function is working as an function construtor when new person is written at that time
//this object of jane is created and then arguments assign to the jane object using this  
var jane = person("Jane","smith");
console.log(jane);

