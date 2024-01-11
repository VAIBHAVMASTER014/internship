//new version of javascript
class Person {
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
    greet(){
        console.log("good morning "+this.fname+" "+this.lname);
    }
}

class vaibhav extends Person {
    constructor(fname, lname){
        super(fname, lname);
    }
    greet(){
        
        console.log("good to see you "+this.fname+" "+this.lname);
    }

}

var me = new vaibhav('vaibhav','master');
me.greet();
