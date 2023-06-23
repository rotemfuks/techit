let products = [
   {
    id:2539,
    name:"MSI Pulse 15 B13VFK-1040IL",
    price:9423,
    category:"Laptop",
    description:"The MSI Pulse 15 B13VFK-1040IL is a high-performance gaming laptop with a sleek design",
    image:"/images/lenovocopy.jpg",
  },
  {
    id: 2537,
    name: "Lenovo Legion 15.6 Gaming",
    price: 4228,
    category: "Laptops",
    description:
      "Lenovo Legion 5 pairs unparalleled flexibility with incredible power, offering a plethora of performance options for any gamer in a clean and minimalist design",
    image:"/images/lenovocopy.jpg",
  },
  {
    id: 2538,
    name: "ASUS ROG GL552VW-DH71",
    price: 5300,
    category: "Laptops",
    description:
      "Offering a formidable core experience for serious gaming and multitasking on Windows 10 Pro",
    image:"/images/lenovocopy.jpg",
  },
  {
  id:2540,
  name:"Desktop AMD Ryzen 7 7700 - PBA3",
  price:6490,
  category:"Gaming",
  description:"The Desktop AMD Ryzen 7 7700 - PBA3 is a powerful desktop computer featuring the AMD Ryzen 7 7700 processor.",
  image:"/images/gaming1copy.jpeg"
  },
  {
  id:2541,
  name:"Desktop Intel Core i5 13600K - IR14",
  price:2990,
  category:"Gaming",
  description:"The Desktop Intel Core i5 13600K - IR14 is a high-performance desktop computer with an Intel Core i5 13600K processor",
  image:"/images/gaming2copy.jpeg"
  },
  {
  id:2542,
  name:"Desktop Intel Core i5 13400 - PBA1",
  price:3889,
  category:"Gaming",
  description:"The Desktop Intel Core i5 13400 - PBA1 is a powerful desktop computer featuring an Intel Core i5 13400 processor.",
  image:"/images/gaming2copy.jpeg"
  },
   {
    id: 2536,
    name: "Sony Professional 32GB XQD",
    price: 500,
    category: "Storage",
    description: "The new XQD cards achieve Max read",
    image:"/images/sonycopy.jpg",
  },
   {
    id: 2543,
    name: "eagate Barracuda HDD 3TB Sata",
    price: 355,
    category: "Storage",
    description: "The Seagate Barracuda HDD 3TB SATA III ST3000DM007 is a reliable hard drive from Seagate.",
    image:"/images/storage3copy.jpeg",
  },
   {
    id: 2544,
    name: "Western Digital Gold 4TB 256MB Sata",
    price: 725,
    category: "Storage",
    description: "The Western Digital Gold 4TB 256MB SATA is a high-capacity hard drive designed by Western Digital.",
    image:"/images/storage3copy.jpeg",
  },
   {
    id: 2545,
    name: "Samsung Galaxy A54",
    price: 1749,
    category: "Smartphones",
    description: "The Galaxy A54 features a 6.5-inch Super AMOLED display, delivering vibrant colors and sharp visuals",
    image:"/images/phone1copy.jpeg"
  },
   {
    id: 2546,
    name: "Asus ROG Phone 7",
    price: 1500,
    category: "Smartphones",
    description: "The Asus ROG Phone series is known for its gaming-focused features and high-performance specifications.",
    image:"/images/phone2copy.jpeg"
  },
   {
    id: 2547,
    name: "Apple iPhone 14",
    price: 3690,
    category: "Smartphones",
    description: "features a sleek and modern aesthetic with flat edges, reminiscent of the iPhone 4 and 5 models.",
    image:"/images/iphone.jpeg",
  },
 
];

function removeBook(value,index){
    ////למחוק את הספר
 const PositionInCart=JSON.parse(localStorage.getItem("cart")||"[]")
 
 const newCart=PositionInCart.slice(0,index).concat(PositionInCart.slice(index+1,PositionInCart.length-1))
console.log("newcart",newCart)
console.log("index",index)
console.log("val",value)
localStorage.setItem("cart",JSON.stringify(newCart));
restCards();
showCards();
}
function restCards(){
   document.getElementById("products").innerHTML=""
}

 function deleteAllCart(){
  alert("all cart deleted")
  localStorage.setItem("cart",JSON.stringify([]));
   restCards();
}
function showCards(){


    const PositionInCart=JSON.parse(localStorage.getItem("cart")||"[]")
    for(let i=0; i< PositionInCart.length; i++){
        document.getElementById("products").innerHTML+=`<div class="col-lg-4 col-md-6 col-sm-8"> 
        <div class="card" >
<div class="x-icon" onclick="removeBook(${PositionInCart[i]},${i})">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
</div>

  <img src=${products[PositionInCart[i]].image} class="card-img-top" alt=${products[PositionInCart[i]].name}>
  <div class="card-body">
    <h5 class="card-title">${products[PositionInCart[i]].name}</h5>
    <p class="card-text" id="card-tx"><u> Price:</u> ${products[PositionInCart[i]].price  } <u>Category:</u> ${products[PositionInCart[i]].category}</p>
    
    <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn bg-dark w-100" onclick="setModal(${i})"> Read more </a>
  </div>
</div>
        </div>`
    }
}

showCards();




function setModal(index){

document.getElementById("modal-title").innerHTML= products[index]?.name;
document.getElementById("mbody").innerHTML= `<p> <b> serial number:</b> ${products[index]?.id}</p>
<p> <b> category: </b> ${products[index]?.category} </p>
<p> <b description: </b> ${products[index]?.description} </p>
<h4 class="text-end"> price: ${products[index]?.price} </h4>`
};


setModal();

function calcPayment(){
 const cart=JSON.parse(localStorage.getItem("cart")||[]) 
 
 let sum=0;
 for(let item of cart){
  sum+= products[item].price
 }

const payment=document.getElementById("payment");
payment.innerHTML= 'Your Total: '+'₪' + sum;
localStorage.setItem("payment",sum)
}

function navigateToPayment(){
  window.location.href="../payment.html"
}
//////textbox with the total price
function paymentHanlder(){
 
}


calcPayment()


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


