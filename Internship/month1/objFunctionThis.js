// function demo1(){
//     console.log(this);
//     this.variable = 100;
// }
// demo1();

// function demo2() {
//     console.log(variable);
// }
// demo2();

var major = {
    name: "this object",
    func: function(){
        console.log(this.name);//it will return "this object" which is defined above  
                               //if it's not defined return undefined don't go for search in global this object
        var self = this;
        self.name = "new name";
        console.log(self);

        var setName = function(newName) {
            self.name = newName;//self refers to func's this object so it changes value in func's this object 
            
        }
        setName("name changed");
        console.log(self);

//when using this and perform below code
        this.name = "new name";//it will set value "new name" in func's this object
        console.log(this);

        var setName = function(newName) {
            this.name = newName;//this function set the newName value to global this object
                                //because it does'nt find "name" key and setName is function
                                //but when it's an object then there is a bug that it will return undefined
                                //if "name" key isn't found object don't go to the global this object
                                //which is a kind of bug
                            }
        setName("name changed");
        console.log(this);
    }
}
major.func();