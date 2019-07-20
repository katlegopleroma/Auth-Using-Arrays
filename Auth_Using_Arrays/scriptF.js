function validate()
{
	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
    var age = document.getElementById("age").value;
    var password = document.getElementById("inputPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  

         if(password==confirmPassword)
            { 
                
                window.location.href = "success.html";
            
                alert("success");
                
             
    var credentials = [];
    credentials[0]=[name];
    credentials[1]=[surname];
    credentials[2]=[age];
    credentials[3]=[password];
    credentials[4]=[confirmPassword];
                
                
    
	}
                    

	else
	{   alert("passwords do not match");
		
		    

		
	}
}
