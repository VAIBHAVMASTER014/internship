// var a = [
//     {name:'helo',age:25},
//     {name:'helo2',age:20},
//     {name:'helo3',age:23},
// ];

// let ans = a.sort((a,b) => a.age-b.age)
// console.log(ans)

// let arr = [1,2,3,[4,5]]

// console.log(typeof arr[3] == "object")
const points = [40, 100, 1,[90,900], 5, 25, 10];


function myArrayMin(arr) {
  let len = arr.length;
  let max = 0;
  while (len--) {
  if (typeof arr[len] == "object"){
   
   if (myArrayMin(arr[len]) > max) {
      max = myArrayMin(arr[len]);
    }
 }
  else if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
console.log(myArrayMin(points))
