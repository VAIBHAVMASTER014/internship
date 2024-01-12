var a = [
    {name:'helo',age:25},
    {name:'helo2',age:20},
    {name:'helo3',age:23},
];

let ans = a.sort((a,b) => a.age-b.age)
console.log(ans)