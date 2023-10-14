function validate(){
    let age=document.getElementById("voter1").value
    let result=document.getElementById("voter2")
    if (age>18){
        result.innerHTML="valid"
    }
    else{
        result.innerHTML="invalid"
    }
   
}