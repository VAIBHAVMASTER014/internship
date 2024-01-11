//js is synchronous and single threaded
//there is an pool of event that includes all event(click event ,http request etc) in queue 

function demo(){
    console.log("its demo");
}
function clickHandler(){
    console.log("click event occure");
}

document.addEventListener('click', clickHandler);

demo();

//in js, operations are perform until events are remaining in event queue  