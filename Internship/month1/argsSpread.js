//arguments means the parameter you pass to function
function multiArgs(fname, mname, lname){

    lname = lname || "eng" 
    console.log(fname);
    console.log(lname);
    console.log(mname);
    console.log(arguments);
    console.log("============")
}
multiArgs();
multiArgs("albi");
multiArgs("albi", "git");
multiArgs("albi", "git", "hero");

