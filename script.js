let button=document.getElementById("btnSubmit");
    button.addEventListener("click",()=>{
        let name=document.querySelector("#name").value;
        let email=document.querySelector("#email").value;
        let phone=document.querySelector("#phone").value;
        console.log(name,email,phone)
        console.log(email.match("@"))
        if(name.length<5){
            alert("Invalid Name")
        }
        if(email.length<10 || email.match("@")==null){
            alert("Invalid email")
        }
        if(phone.length<10){
            alert("Invalid Phone Number")
        }
    })