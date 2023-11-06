// objects and object lists
const jsTextbook = {
    name: "JavaScript Textbook",
    price: 34.95,
}
const xPaper = {
name: "Xerox Paper",
price: 10.99,
}
const firstAid = {
    name:"First Aid Kit",
    price: 20.99,
}
const pencils = {
    name:"Box of Pencils (50ct.)"
    price:15.99
}
const wipes = {
    name: "Sanitizing Wipes",
    price:10.99,
}
const mask = {
    name: "N95 Face Masks",
    price: 15.99,
}
const kleenex = {
    name: "Kleenex",
    price: 3.99,
}
const sanitizer = {
    name: "Hand Sanitizer",
    price: 7.99,
}
const PPaper = {
    name: "Printer Paper",
    price:9.99,
}
const brushPen = {
    name: "Brush Pens",
    price: 10.99,
}
const adaptor = {
    name:"Multiport Adapter",
    price:25.99,
}
const scissors = {
    name:"Scissors (20ct.)",
    price:23.99,
}
const iOSProgramingTextbook = {
    name:"iOS Programming Textbook",
    price:119.99,
}
const noteBook = {
    name:"Spiral Notebook",
    price:1.99,
}

const itemList = {
    "689145740844" ; jsTextbook ,
    "4549292070248" ; xPaper ,
    "092265222983" ; firstAid ,
    "X002ELVL3J" ; pencils ,
    "686024002468" ; wipes ,
    "860004186236" ; mask ,
    "036000214000" ; kleenex ,
    "8809693254156" ; sanitizer ,
    "036500060480" ; PPaper ,
    "085014561877" ; brushPen ,
    "X0032YGP2T" ; adaptor ,
    "B07G6JT1XS" ; scissors ,
    "9780134682334" ; iOSProgramingTextbook ,
    "718103230759" ; noteBook ,
}

// html elements
var bCode = document.getElementById("barcode");
var iQuantity = document.getElementById("itemQuant");
var aItems = document.getElementById("addItems");
var cOut = document.getElementById("checkOut");
var list = document.getElementById("list");

// VVvv WIP vvVV 
function addItemList (){
 // making the new elements for the tasking
 const container = document.createElement("div")
 const item = document.createElement("p");
 const price = document.createElement("p");
 const quantity = document.createElement("p");

 // assigning classes to the elemtns
 container.classList.add("div_task");
 item.classList.add("listed_p");
 cross.classList.add("cross_out");
 finished.classList.add("remover");

 // putting the text in the elements
 item.innerText = bCode.name;
 price.innerText = bCode.price;
 quantity.innerText = iQuantity;

 // contained in a contianer then that container in the task_area
 list.appendChild(container);
 container.appendChild(item);
 container.appendChild(price);
 container.appendChild(quantity);
}
aItems.addEventListener("click", addItemList);