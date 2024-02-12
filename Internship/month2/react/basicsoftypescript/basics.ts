//type inference : variable can decide type by assigned value. 
//union types using |
let strVariable: string | number = 'This is string.'
strVariable = 344;

//type aliases: defining own type
type Person = {
    firstName:string,
    lastName:string
}

let fullName:Person = { //use of aliases Person as a type of variable
firstName:'vaibhav',
lastName:'master'
}

//generics
function insertAtBeginning(array:any[] , value:any) {
    const newArray = [value,...array];
    return newArray
}