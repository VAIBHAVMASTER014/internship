var expend  = {
    image : "ocean",
    type : "image"
}

//i want to declare variable image that has value of expend.image the name of the variable 
//and the name of the key of object has to be same
const {image} = expend;
const {type} = expend;
// const {image,type} = expend;

console.log(image);
console.log(type);

function showData({image, type}){
    console.log(image+" "+type);
}
showData(expend);