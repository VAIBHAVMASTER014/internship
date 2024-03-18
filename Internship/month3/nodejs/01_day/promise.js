// Promises came along to solve the problems of callback functions. A promise takes in two 
// functions as parameters. That is, resolve and reject. Remember that resolve is success, 
// and reject is for when an error occurs.

// Let's take a look at promises at work:

const getData = (endpoint)=>{
    return new Promise((resolve, reject)=>{
        const request = fetch(endpoint);
        if (request){
            resolve();
        }
        else{
            reject();
        }
    })
}