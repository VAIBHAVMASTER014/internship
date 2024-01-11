//spred operator use when dont want to write all elements of list

var array = [1,2,3,4,5,6];

//in below function ...numbers is rest operator that allow to iterate on all value
function add(...numbers){

    return numbers.reduce((total,num) => total + num,0);
}

console.log(add(1,2,3,4,5,6,7,8,9));

//note:
//rest operator is used to gether the elements
//spread operator is used to spread the elements

//spread operator
const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9];
const carCompanies = ['bmw','honda','hyundai','maruti']

const arr3 = [...arr1,...arr2,...carCompanies];
console.log(arr3);

//below function check whether gujrati language is in arguments or not if not then add it using function
function language(...lang){
    if(lang.indexOf('gujrati'<0)){
        return ['gujrati',...lang];
    }
}
console.log(language('tamil','english','spanish','french'));

function str(name){
    this.name= name;
}

// var a = new str("vaibhav");
// var b = new str("vaibhav");

// console.log(a.value === b.value);