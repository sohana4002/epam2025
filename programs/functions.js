function goodstart(){
    document.write("Function is executed!!!");
}
function calculateSum(){
    let a=document.getElementById("a").value;
    let b=document.getElementById("b").value;
    let sum=Number(a)+Number(b);
    document.getElementById("answer").innerText=sum;
}
function calculateDiff(){
    let a=document.getElementById("a").value;
    let b=document.getElementById("b").value;
    let sum=Number(a)-Number(b);
    document.getElementById("answer").innerText=sum;
}
function calculateProduct(){
    let a=document.getElementById("a").value;
    let b=document.getElementById("b").value;
    let sum=Number(a)*Number(b);
    document.getElementById("answer").innerText=sum;
}
function calculateQuotient(){
    let a=document.getElementById("a").value;
    let b=document.getElementById("b").value;
    let sum=Number(a)/Number(b);
    document.getElementById("answer").innerText=sum;
}
goodstart();
