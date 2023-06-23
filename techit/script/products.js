// הוספת סל קניות
// הוספת לפחות 6 מוצרים
// ולידציה לצור קשר
// לנסות להוסיף עוד תוכן דרך getElement
// סידור התוכן של הפריטים



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


// לכתוב פונקציה שתפקידה להציג את המוצרים בקארדים של בוטסטרפ
// שלושה קארדים בשורה
// בכל קארד יש תמונה של המוצר, קטגוריה, וכפתור לפרטים מלאים

function saveBookInLocalStorgae(book){
  alert("add succssefully")
  /////קח את הסטרינג ותהפןך לאובייקט
  const myCart=JSON.parse(localStorage.getItem("cart")||"[]")
  myCart.push(book)
  //////כדי לשמור בחזרה לתוך הלוקאל סטרוג
 const myNewCart= JSON.stringify(myCart);
 localStorage.setItem("cart",myNewCart)
}

document.getElementById("title").innerHTML= "Our Products"

function showCards(){
    for(let i=0; i< products.length; i++){
        document.getElementById("products").innerHTML+=`<div class="col-lg-4 col-md-6 col-sm-8"> 
        <div class="card" >
  <img src=${products[i].image} class="card-img-top" alt=${products[i].name}>
  <div class="card-body">
    <h5 class="card-title">${products[i].name}</h5>
    <p class="card-text">${products[i].category}</p>

  <button class="custom-btn btn-3" onclick="saveBookInLocalStorgae(${i})"><span>Add to cart</span></button>
 
    <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn bg-dark w-100" onclick="setModal(${i})"> Read more </a>
  </div>
</div>
        </div>`
    }
}

showCards();

// לכתוב פונקציה שמזינה את פרטי המוצר למודאל על סמך האינדקס

function setModal(index){
document.getElementById("modal-title").innerHTML= products[index].name;
document.getElementById("mbody").innerHTML= `<p> <b> Serial number:</b> ${products[index].id}</p>
<p> <b> Category: </b> ${products[index].category} </p>
<p> <b Description: </b> ${products[index].description} </p>
<h4 class="text-end"> Price: ${products[index].price} </h4>`
};


setModal();



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