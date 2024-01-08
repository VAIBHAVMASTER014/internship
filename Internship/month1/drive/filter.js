var persons = [
    {fname:'nimit', lname:'patel', div:'c'},
    {fname:'vaibhav', lname:'master', div:'a'},
    {fname:'ram', lname:'borana', div:'a'},
];

// var filteredPerson = persons.filter(function(person){
//     return person.div === 'c' && person.lname === 'patel';
// })
// console.log(filteredPerson);

var findMark = [
    {fname:'nimit'},
];

var marks = [
    {fname:'vabhav',grade:'b'},
    {fname:'nimit',grade:'a'},
    {fname:'ram',grade:'c'},
];

function studentGrade(findMark, marks) {
    return marks.filter(function(mark){
        return mark.fname === findMark[0].fname;
    })
}
console.log(studentGrade(findMark,marks));
