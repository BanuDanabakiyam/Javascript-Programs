var productItems = [];
document.getElementById("itemPlaced").innerHTML = "Enter a Item";
document.getElementById("quantity").innerHTML = "Enter a Quantity";
document.getElementById("rate").innerHTML = "Enter a Rate";
document.getElementById("discount").innerHTML = "Enter Discount% Per product";
var rupeeSymbol = '\u20B9';
document.getElementById("amt").innerHTML = rupeeSymbol+".Amount";


function dispalyListItems(){
   var item  = document.getElementById("inputItem").value;
   productItems.push(item);
   var quant = parseInt(document.getElementById("inputQuantity").value);
   productItems.push(quant);
   var rate  =  parseInt(document.getElementById("inputRate").value);
   productItems.push(rate);
   var discount = parseInt(document.getElementById("inputDiscount").value);
   productItems.push(discount)
   const finalAmount = ( rate * quant ) - (quant * rate * discount/100);
   productItems.push(finalAmount);
   document.getElementById("inputItem").value = "";
   document.getElementById("inputQuantity").value = "";
   document.getElementById("inputRate").value = "";
   document.getElementById("inputDiscount").value = "";
   document.getElementById("displayItem").innerHTML=productItems[0];
   document.getElementById("displayQuantity").innerHTML=productItems[1]
   document.getElementById("displayRate").innerHTML=productItems[2]
   document.getElementById("displayDiscount").innerHTML = productItems[3]
   document.getElementById("displayAmount").innerHTML=productItems[4];






}