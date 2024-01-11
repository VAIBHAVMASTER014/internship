//function invoke means function calling

function a (){
    b();
    console.log("a is runnig")
}

function b(){ 
    console.log("b is called")
}
a();
//above a is invoked and then b is invoked cause its in definition of a after exuting function execution of a is continue
//the working is like stack
// 1st global execution context 
// then a()
// then b()
// after completion of function b it is poped from stack then a will continue execution 