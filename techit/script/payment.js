function getPaymentAmount(){
    const sum =localStorage.getItem("payment")||0;
    document.getElementById("payment").innerHTML=sum;

}
 function isValidInfo(){
const name=document.getElementById("name");
const phone=document.getElementById("phone");
const adress=document.getElementById("adress");
const email=document.getElementById("email");
const emailrejex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


const isEmailInValid=!emailrejex.test(email.value)
const isNameInValid=name.value.length<2;
const phoneRejex=/^05\d([-]{0,1})\d{7}$/
const isPhoneInvalid=!phoneRejex.test(phone.value) 
const isAdressInValid=adress.value.length<5;
if(isNameInValid){
    alert("Enter Your Name")
}
else if(isPhoneInvalid){
    alert("Enter Your phone")
}
else if(isAdressInValid){
    alert("Enter Valid adress")
}
else if(isEmailInValid){
    alert("Enter Valid email")
}
if(!isNameInValid&&!isPhoneInvalid&&!isAdressInValid&&!isEmailInValid){
   
    paymentHanlder()
}
 }
const submitBtn=document.getElementById("btnCenter");

submitBtn.addEventListener("click",function(){
    isValidInfo();
   
})



function paymentHanlder(){
    localStorage.setItem("cart",[])
     localStorage.setItem("payment",0);
Swal.fire({
  title: 'Payment succsesful',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
})
setTimeout(()=>{
    window.location.href="../index.html";
},4000)

}

getPaymentAmount()