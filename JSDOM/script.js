console.log("JavaScript Working");

const productName = "Air Conditioner";
let productPrice = 20000.00;
let quantityInStock = 5;
let isOnSale = true;
let discountPercentage = 10;

console.log("Product Name: ",productName);
console.log("Original Price: ",productPrice);

let discountAmount = (productPrice*discountPercentage)/100;

let finalPrice = productPrice - discountAmount;

console.log("Discount Amount: ", discountAmount);
console.log("Final Sale Price: ", finalPrice);

quantityInStock = quantityInStock-1;

console.log(quantityInStock);
/* Operators and Control Statements in JavaScript
+ - / * %  : Arithmetic operators
|| && ! : Logical operators
< > <= >= != == : comparision operators

Control Statements:

if (condition) {
    
}else if(condition){

}else{

}

while(condition){

}

for(let i=0; condition; increment/decrement){

}

functions:

function name(parameters){
    return variable
}

*/
function saleCheck(){
let i = 10;

while(i>0){
    if((i%2)==0){
        isOnSale = false;
    }
    console.log(isOnSale);
    isOnSale=true;
    i--;
}
}

saleCheck();

const title = document.getElementById("heroTitle");
const description = document.getElementById("heroDescription");

console.log(title);
console.log(description);