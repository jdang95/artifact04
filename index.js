function ValidateForm(){
 var validUsername = false;
 var validUserPassword = false;
 var validFirstName = false;
 var validLastName = false;
 var validPhone = false;
 var validAddress = false;
 var letters = /^[A-Za-z]+$/;
 var numbers = /^[0-9]+$/;
 var sign = /^[@]+$/;
  
 var errorMessages ="";  // All the error messages are going to stay in this variable
 /*********** VALIDATES USERNAME ******** */
 //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

/*********** VALIDATES USERNAME ******** */
  
 if (myContact.username.value.length >= 12 || myContact.username.value===null || myContact.username.value==="")
    errorMessages += "<p>The username must be less than 12 characters and is required</p>";
 else 
    validUsername =true;
 //console.log(validUsername);  
  

  
 /*********** VALIDATES PASSWORD ******** */
 if (myContact.password.value==null ||
 myContact.password.value=== "" ||
 myContact.password.value.length >7)
 errorMessages += "<p>The password must be less than 7 characters and it is required</p>";
 else
 validUserPassword = true; 
  
   /*********** VALIDATES FIRSTNAME******** */
 if (myContact.firstname.value==null ||
 myContact.firstname.value=== "" ||
 myContact.firstname.value.length >=20 ||  !myContact.firstname.value.match(letters))
 errorMessages += "<p>The firstname must be less than 20 characters and it is required. Only letters are accepted</p>";
 else
 validFirstName = true; 
  
     /*********** VALIDATES LASTNAME******** */
 if (myContact.lastname.value==null ||
 myContact.lastname.value=== "" ||
 myContact.lastname.value.length >=50 ||  !myContact.lastname.value.match(letters))
 errorMessages += "<p>The lastname must be less than 50 characters and it is required. Only letters are accepted</p>";
 else
 validLastName = true; 
  
      /*********** VALIDATES EMAIL******** */
 if (myContact.email.value==null ||
 myContact.email.value=== "" ||
 !myContact.email.value.match(letters, numbers,sign))
 errorMessages += "<p>It is required.</p>";
 else
 validLastName = true; 
  
    
   /*********** VALIDATES PHONE NUMBER******** */
 if (myContact.phone.value==null ||
 myContact.phone.value=== "" ||
 myContact.phone.value.length >15 ||  !myContact.phone.value.match(numbers))
 errorMessages += "<p>The phone number must be less than 15 characters and it is required. Only numbers are accepted</p>";
 else
 validPhone = true; 
  
        /*********** VALIDATES ADDRESS******** */
 if (myContact.address.value==null ||
 myContact.address.value=== "" ||
   !myContact.address.value.match(letters && numbers))
 errorMessages += "<p>The Address must be less than 50 characters and it is required. Only letters and numbers are accepted</p>";
 else
 validAddress = true; 
  
  
  
  
 document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
 return (validUsername && validUserPassword && validFirstName && validLastName && validPhone ) ;
}


