let priceWithoutdiscount = prompt('Insert full cost:', 0);
let discount = prompt('Insert discount:', 0);
validation(priceWithoutdiscount, discount);
function validation(priceWithoutdiscount, discount){
    priceWithoutdiscount = priceWithoutdiscount * 1;
    discount = discount * 1;
    if(priceWithoutdiscount < 0 || priceWithoutdiscount > 9999999 || 
        discount < 0 || discount > 99 || isNaN(priceWithoutdiscount) || isNaN(discount)){
        alert('Invalid input data');
    } else{
        totalPrice(priceWithoutdiscount, discount);
    }
}
function totalPrice(priceWithoutdiscount, discount){
    let convertToInterest = discount / 100;
    let amountOfDiscount = priceWithoutdiscount * convertToInterest;
    let toDecimal = Math.floor(amountOfDiscount*100)/100;
    let result = (priceWithoutdiscount - toDecimal).toFixed(2);
    alert('Price without discount: '+ priceWithoutdiscount+'\nDiscount: '+ discount +
    '%\nPrice with discount: '+ result+'\nSaved: '+ toDecimal +'');
}
