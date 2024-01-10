function person (firstname,lastname,mobile,email,salary,line1,line2,area,pincode,city,state) {
    this.firstname=firstname,
    this.lastname=lastname,
    this.mobile=mobile,
    this.email=email,
    this.salary=salary,
    this.line1=line1,
    this.line2=line2,
    this.area=area,
    this.pincode=pincode,
    this.city=city,
    this.state=state
}
   
function showDetails() {
    console.log(this.firstname,this.lastname,this.mobile,this.email,this.salary,this.line1,this.line2,this.area,this.pincode,this.city,this.state);
}

function updateDetails(){
    
}

console.log(person1.firstname)