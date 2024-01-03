//json means java script object notation data transmition over internet is done in json format
//it takes less space thats why prefered to use

//object
var obj = {
    firstName: 'John',
    lastName: 'nothing',
};

//below code shows object to data format
console.log(JSON.stringify(obj));

//convert json format to object
console.log(JSON.parse('{ "firstName": "John", "lastName": "nothing"}'));