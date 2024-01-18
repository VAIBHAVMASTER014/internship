let obj = {id:'1',name:'Siddharth',age:'23',role:'Full Stack Developer'}

function objectToArray(obj){
    var array = [];
    for(i of Object.keys(obj)){
        array.push([i,obj[i]])
    }

    return array
}

console.log(objectToArray(obj));