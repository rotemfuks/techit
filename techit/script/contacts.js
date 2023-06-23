 function isValidInfo(){
const firstName=document.getElementById("name");
const lastName=document.getElementById("lastName");
const email=document.getElementById("email");
const emailrejex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/



const isFirstNameInValid=firstName.value.length<2;
const isLastNameInValid=lastName.value.length<2;
const isEmailInValid=!emailrejex.test(email.value)
if(isFirstNameInValid){
    alert("Enter Your First Name")
}
else if(isLastNameInValid){
    alert("Enter Your Last Name")
}
else if(isEmailInValid){
    alert("Enter Valid Email")
}
if(!isFirstNameInValid&&!isEmailInValid&&!isLastNameInValid){
    alert("form send successfuly")
}
 }
const submitBtn=document.getElementById("submit-btn");

submitBtn.addEventListener("click",function(){
    isValidInfo();
   
})

document.getElementById("form1").addEventListener("submit", function(event) {
  event.preventDefault(); 
});