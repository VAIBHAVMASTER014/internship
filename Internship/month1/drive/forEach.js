var nums = [1, 2, 3, 4, 5, 6, 7, 8];

//do sum of all the numbers and print the sum of the all numbers
var sum = 0;

function add(number){
    sum += number;
}

nums.forEach(add);

console.log(sum);
//real time use of forEach:
//in gmail when we wanna delete some of emails so we select multiple and click delete 
//lets assume email is array of all emails will apply forEach on email array
//then perform delete function on selected emails

var twoTimes = [];
function double(number){
    number = number*2;
    twoTimes.push(number);
}

nums.forEach(double);
console.log(twoTimes);