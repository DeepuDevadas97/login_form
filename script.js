 
function validateForm(){  

var name = document.myForm.name.value;  
var password = document.myForm.password.value;  
  
if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;  
    }
else if(password.length<8){  
    alert("Password must be at least 8 characters long.");  
    return false;  
   } 

} 