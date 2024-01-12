// Sometimes, you can use the terms argument and parameter interchangeably. However, by definition, parameters are what
//  you specify in the function declaration whereas the arguments are what you pass into the function

//js Functions are first class citizens this means you can store function in variables ,pass functions as 
//arguments ,and return them from other functions as value

//store function in variable
function add(a, b){
    return a+b;
}
let sum = add;//sum had given reference of add function.
            //no paranthesis that shows just assign function didn't call the function 

console.log(sum(2,3));
console.log('================================================================')


//passing function to another function
function average(a,b,fn){
    return fn(a,b)/2
}
console.log(average(2,3,sum));
console.log('================================================================')


//function return another function
function addision(a,b){
    return function(){
         return a+b
    }
}
console.log(addision(1,2)());
console.log('================================================================')

//recursive function means function call itself again and again

function countDown(number){
    console.log(number);
    let nextNumber = number-1;
    if(nextNumber > 0){
        countDown(nextNumber)
    }
}
console.log("countdown:")
countDown(3);

function summision(n){
    if (n<=1){
        return n
    }
    return n+summision(n-1);
}
console.log(summision(3))
console.log('================================================================')

//default parameter
function greet(message = "hello"){
    console.log(message);
}
greet('hola');

function addElement(element,list = []){
    list.push(element);
    return list
}
var list=[];
console.log(addElement(('hello good morning')))
console.log('================================================================')

//In javascript all functions are objects they are instance of the Function type. They have properties and method
function sub(a,b){
    return a-b;
}
console.log(sub(9,8))

let addi= new sub(90,40)
console.log('================================================================')

//unayary operator
var a = '1';
console.log(typeof +a);//unary operator 

//bind, call, apply
let cat = { type: 'Cat', sound: 'Meow' };
let dog = { type: 'Dog', sound: 'Woof' };

const say  = function(message){
    console.log(message)
    console.log(this.type +' '+'sounds like'+' '+this.sound);

}
say.apply(cat,["how cat sounds?"]);//when apply is used pass arguments as array like object
say.call(dog,"how dog sounds?");//when call is used pass arguments individiually

let obj1 = { 
    name:"person1",
    greet(){
        console.log('hello',this.name);
    }
}
let obj2 = { 
    name:"person2",
    getName(){
        console.log(this.name);
    }
}

var refer = obj1.greet.bind(obj2);
refer()
