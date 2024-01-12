var allEmp = [];

function Person(id, name ,age){
    this.id = id;
    this.name = name;
    this.age= age;
    
    // this.firstname = firstname;
    // this.lastname = lastname;
    // this.mobile = mobile;
    // this.line1 =line1;
    // this.line2 =line2;
    // this.area =area;
    // this.pincode = pincode;
    // this.city = city;
    // this.state = state;   
    // this.address = {
    //     line1:this.line1,
    //     line2:this.line2,
    //     area:this.area,
    //     pincode:this.pincode,
    //     city:this.city,
    //     state:this.state,
    // }
};

function addEmployee(id ,name ,age){
    
    var obj = new Person(id ,name ,age);
    allEmp.push(obj);
};

function showAllDetails(){
    var j =1;
    for (var i of allEmp){
        console.log(`Employee ${i.id} details=> name : ${i.name}, age: ${i.age}` );
        j+=1
    };
}

function updateEmployeeDetails(id,fields){
    var details= allEmp.filter(function(employee){
        return employee.id === id   });
        for(var i of Object.keys(fields)){
            details[0][i] = fields[i]
        };
};

function deleteEmployeeDetails(id){
    allEmp.splice((id-1),1)
};


showAllDetails();

addEmployee(1,'alice',50);
addEmployee(2,'nimit',21);
addEmployee(3,'nimit',22);
// deleteEmployeeDetails(2)
showAllDetails()
// console.log(allEmp);


// console.log(`Employee ${obj1.name} details: name : ${})
// console.log(obj2);
// console.log(allEmp)