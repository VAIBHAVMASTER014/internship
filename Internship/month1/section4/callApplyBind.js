//call, apply, bind is a inbuilt method that can be applicable on every exist objects
//call and apply are the same methods only difference is in call method we can pass parameter
//where in apply we have to pass array of parameters to
//bind is used to bind an object to another object
var data = {

    fname : "Vaibhav",
    lname : "Master",

};


var greet = function (lan) {

    

        if (lan === "en") {

            console.log("hello "+this.fname+" "+this.lname);
            
        }

        if (lan === "es") {

            console.log("hola "+this.fname+" "+this.lname);

        }

    

}

greet.call(data,"en");
var greetEnglish = greet.bind(data);
greetEnglish("es");
greet.apply(data, ["es"]);

