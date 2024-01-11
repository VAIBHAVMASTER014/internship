// object => collection of name value pair
name : "hello";

//value can be value only or it can be another name value pair 

alphabet = {
    small:"a-z",
    capital: "A-z"
}

//different ways to get the value of object
console.log(Object.values(alphabet));
console.log(alphabet.small);
console.log(alphabet["small"]);
