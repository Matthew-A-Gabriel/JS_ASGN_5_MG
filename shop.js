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
    name:"Box of Pencils (50ct.)",
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
    name : "Spiral Notebook",
    price : 1.99,
}

const itemList = {
    "689145740844" : jsTextbook ,
    "4549292070248" : xPaper ,
    "092265222983" : firstAid ,
    "X002ELVL3J" : pencils ,
    "686024002468" : wipes ,
    "860004186236" : mask ,
    "036000214000" : kleenex ,
    "8809693254156" : sanitizer ,
    "036500060480" : PPaper ,
    "085014561877" : brushPen ,
    "X0032YGP2T" : adaptor ,
    "B07G6JT1XS" : scissors ,
    "9780134682334" : iOSProgramingTextbook ,
    "718103230759" : noteBook ,
}

// Variabkes
var bCode = document.getElementById("barcode");
var iQuantity = document.getElementById("itemQuant");
var aItems = document.getElementById("addItems");
var cOut = document.getElementById("checkOut");
var list = document.getElementById("list");
var gTotal = 0;
var total = document.getElementById("total");
var grandTotal = document.getElementById("grandTotal");
var totalCost = 0;
let listCheck = [];

// VVvv Add to Cart Code vvVV 
function addItemList (){
    var valOfQuant = parseInt(iQuantity.value)
    
    if(listCheck.includes(bCode.value)){
    return
    }
    
    if(valOfQuant <= 0){
        return
    }

    listCheck.push(bCode.value)
    console.log(listCheck)
    console.log(bCode.value)

    if(valOfQuant !== 0){
        // making Container for new listing
        const container = document.createElement("div");
        container.classList.add("headingBox");
        list.appendChild(container);

        // making left (item)
        const item = document.createElement("p");
        item.classList.add("itemLeft");
        container.appendChild(item);

        // making center (price)
        const price = document.createElement("p");
        price.classList.add("itemCenter");
        container.appendChild(price);
            
        // making right (quantity)
        const quantity = document.createElement("p");
        quantity.classList.add("itemRight");
        container.appendChild(quantity);
            
        // putting the text in the elements
        item.innerText = itemList[bCode.value].name;
        price.innerText = "$" + itemList[bCode.value].price*iQuantity.value;
        quantity.innerText = iQuantity.value;
        totalCost += itemList[bCode.value].price*iQuantity.value;
        total.innerText = "$" + totalCost
        gTotal = 1.0925 * totalCost
        grandTotal.innerText = "$" + gTotal.toFixed(2)
    }
}

// event listener
aItems.addEventListener("click", addItemList);