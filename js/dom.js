function Person(email,password){
    this.email = email;
    this.password = password;
}



document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("btnValidate").addEventListener("click",function(e){
        e.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let person = new Person(email,password);

       if("people" in localStorage){
           let allPeople = JSON.parse(localStorage.people);
           if("length" in allPeople){
               let found = false;
              for(let user in allPeople){
                  if(allPeople[user]["email"] == email && allPeople[user]["password"] == password){
                    found = true;
                    break;
                  }
              }

              if(found){
                  document.location.href="index.html";
              }
              else{
                  alert("Try Again.You Email or Password is False");
              }
           }
           else{
                 let oneUser = JSON.parse(localStorage.people);
                 if(oneUser.email == email && oneUser.password == password){
                     document.location.href="index.html";
                 }
                 else{
                     alert("Try Again.You Email or Password is False");
                 }
           }
       }
       else{
         alert("Try Again.You Email or Password is False");
       }
    })
})