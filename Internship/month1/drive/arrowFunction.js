const fn = (a, b) => {
    return a+b;
};
console.log(fn(1,2));

//when we have single js expression in arrow function just like in 'fn' function then it can be write as function
//const fn = (a, b) => a+b; which is called implicit return
const greet = (fname, lname) =>{
    return fname+" "+lname;
}
console.log(greet("john","doe"));

// another example

const data = {
    persons : ['person1', 'person2', 'person3'],
    personTeam : 'India',
    getDetails: function(){
        var self = this;
        return this.persons.map((person)=>{
            return `${person} is from team ${self.personTeam}`
        });
    }
}
console.log(data.getDetails())
    