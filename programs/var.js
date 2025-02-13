function varExample(){
    var x=10;
    console.log("Initial value of x:",x)
    if(true){
        var x=20;
        console.log("Inside block,x:",x);
    }
    console.log("Outside block,x:",x);
}
varExample();