var allStoredEmployee = [];

function Detail(firstname,lastname,no,email,salary,line1,line2,area,pincode,city,state){
    var id =0;
    id += 1;
    this.id = id
    this.firstname = firstname;
    this.lastname = lastname;
    this.no = no;
    this.email = email;
    this.salary = salary;
    this.line1 = line1;
    this.line2 = line2;
    this.area = area;
    this.pincode = pincode;
    this.city = city;
    this.state = state;
    this.address = {
        line1:this.line1 ,
        line2:this.line2 ,
        area:this.area ,
        pincode:this.pincode, 
        city:this.city ,
        state:this.state 
    }
    
}

function storeDetail(firstname,lastname,no,email,salary,line1,line2,area,pincode,city,state){
    var object = new Detail(firstname,lastname,no,email,salary,line1,line2,area,pincode,city,state);
    allStoredEmployee.push(object);
}

function showDetail(){
    for(i of allStoredEmployee){
        console.log(`Employee ${i+1}:firstname:${i.firstname},lastname:${i.lastname},no:${i.no},email:${i.email},salary:${i.salary},line1:${i.line1},line2:${i.line2},area:${i.area},pincode:${i.pincode},city:${i.city},state:${i.state}`)
    }
}

function updateEmployeeDetail(id,field){
    for(i of allStoredEmployee){
        if (i.id == id){
            for (j of Object.keys(field)){
                i[j] = field[j];
            }
        }
    }

}

function deleteEmployeeDetail(id){
    var index;
    for (i of allStoredEmployee){
        if(i.id == id){
           index = allStoredEmployee.indexOf(id);
           allStoredEmployee.splice(index,1);
        }
    }
}