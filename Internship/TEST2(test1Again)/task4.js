function usernameExistance(arr,name){

    var index ;
    var nameArray = [];
    if (arr.includes(name)){
        index = arr.indexOf(name);

        for(var i=0; i<index; i++){
            nameArray.push(arr[i]);
        }
        
        return (`Given name is found at index :${index+1} and all other names before given names are :${nameArray.join(',').split(' ')}`)
    }
}
let nameArray = ['nimit','vaibhav','ram','aric','dev'];
console.log(usernameExistance(nameArray,'aric'));