var computers = [
    {name:'Apple', ram:16},
    {name:'Hp', ram:32},
    {name:'Acer', ram:8},
];

//in below code computers is a collection of objects and every method is used on computers
//parameter of 'every' method is an anonymouse function which check which object has ram 
//more than 16 for all objects in computers and return true if all computer's ram > 16 false other wise
//(logical and)
var result1 = computers.every(function(computer){
    return computer.ram >16;
});
// console.log(result1);

//in some method working procedure is same as 'every' method but even if any one computer 
//has satisfy the condition then it returns true (logical or ) 
var result2 = computers.some(function(computer){
    return computer.ram >16;
});
// console.log(result2);

//use of every is for form validation like every form fields are filled then and then form
//can be able to submit otherwise can'nt submit form

function Field(name) {
    this.name = name;
}

var username = new Field("josh");
var password = new Field("abc@123");
var startDate = new Field("08/01/2024");
console.log(username);
console.log(password);
console.log(startDate);
var fields = [username, password, startDate];

var validate = fields.every(function(field){
    return field.length >0;
})

console.log(validate);