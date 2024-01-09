function createBookshop(Data){
    return{ 

        // Data : Data,//in es6 if in key value pair both have same name then write only once
        Data, 
        totalValue:(Data.reduce((total,book)=> total+book.price ,0)),

        //Enhanced object literal includes :in object key value pair value is object then 
        //don't write semicolon and function keyword direct write key and paranthesis 
        priceForTitle (title){
            return this.Data.find(function(book){return book.title === title}).price
        }
    }
}

const bookData = [
    {title: 'book1',price: 100},
    {title: 'book2',price: 300},
    {title: 'book3',price: 390},
];

var myShop = new createBookshop(bookData);
console.log(myShop.totalValue);
console.log(myShop.priceForTitle('book1'));
