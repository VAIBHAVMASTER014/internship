//template string :`` whole statement in template included with js variable 
//when want to use any variable syntax is ${name}

var name = "Vaibhav";
console.log(`my name is ${name}`);

const fname = "vaibhav";
const div = "A";
const sem = 8;

console.log(`my name is ${fname}, i am in ${sem}th semester and my division is ${div}`);

//another example of template string

const data = {
    persons : ['person1', 'person2', 'person3'],
    personTeam : 'India',
    getDetails: function(){
        var self = this;
        return this.persons.map(function(person){
            return `${person} is from team ${self.personTeam}`
        });
    }
}
console.log(data.getDetails())
    
