function validateForm(){
    let userNameInput =  document.getElementById("userName").value;
    console.log(userNameInput);
    let user = /^[A-Z][a-z]*$/;
    if(user.test(userNameInput)){
        document.getElementById("nameDisplay").innerHTML = ""
    }
    else{
        document.getElementById("nameDisplay").innerHTML = "First letter should be caps"
    }
    
    
   let userEmailInput =  document.getElementById("userEmail").value;
   let email = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{3,}$/;
   if(email.test(userEmailInput)){
        document.getElementById("emailDisplay").innerHTML = ""
   }
   else{
   document.getElementById("emailDisplay").innerHTML = "must include @ and domain name"
    }
 
 
   let userPhoneInput =  document.getElementById("userPhone").value;
   console.log(userPhoneInput)
   let phone = /^[6789][0-9]{9}$/;
   if(phone.test(userPhoneInput)){
   document.getElementById("phoneDisplay").innerHTML= ""
   }
   else{
   document.getElementById("phoneDisplay").innerHTML = "Number start with 6, 7, 8, 9 & 10 digit number";
   }
                 
 
   let userPasswordInput =  document.getElementById("userPassword").value;
   let Passwordlength = userPasswordInput.length;
   let pass = /^6/

 
   if(Passwordlength >= 4 && Passwordlength <= 10 && pass.test(userInput)){
      document.getElementById("passwordDisplay").innerHTML= ""
   }
   else{
   document.getElementById("passwordDisplay").innerHTML= "must be greater 4 and lesser 6"
   }     
     
     
     let userPincodeInput =  document.getElementById("userPincode").value;
     let pincodelength = userPincodeInput.length;
     let ptn = /^6/
 
    if(pincodelength == 6    ){
        console.log("inside length");
        document.getElementById("userPincode1").innerHTML= ""
     }
     else{
        document.getElementById("userPincode1").innerHTML= "must be 6 digit"
    }
    
     let userReferralInput =  document.getElementById("userReferralCode").value;
     console.log(userReferralInput);
     let referralLength = userReferralInput.length;    
     console.log(referralLength);
     if(referralLength == 4 ){
        document.getElementById("userReferralCode").innerHTML= " ";
     }
     else{
        document.getElementById("userCode").innerHTML= "must be equal to 4"
     }
    }


document.getElementById("register").addEventListener('click',validateForm);

     
 
