function swapBetweenMaxMin(arr){
    var maxElement = arr.indexOf(Math.max.apply(null,arr));
    var minElement = arr.indexOf(Math.min.apply(null,arr));
    var temp = arr[maxElement];
    arr[maxElement] = arr[minElement];
    arr[minElement] = temp

    return arr;
}
let array = [43,56,23,1,66,106,89,68,2]
console.log(swapBetweenMaxMin(array))