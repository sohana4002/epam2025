alert("This a an Alert Message to User");
confirm("Are You Sure: ");
    var women=confirm("Are You Women");
    if (women) {
        let name=prompt("Please Enter Your Name");
        document.write("Hello Ms.: "+name+"<br>Welcome to My Page");
    }else{
        let name=prompt("Please Enter Your Name: ");
        document.write("Hello Mr."+name+"<br>Welcome to My Page");
}