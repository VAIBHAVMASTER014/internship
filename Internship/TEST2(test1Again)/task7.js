function middleChar(word){
    var index,newWord;
    
    if (word.length % 2 === 0){
        index = ((word.length/2)-1);
        newWord = word.slice(index,(index+2));
        return newWord;
    }
    else{
        index = ((word.length - 1) / 2);
        newWord = word[index];
        return newWord;
    }
}
console.log(middleChar('nimitd'))