const deliveryfee = 1000;
function ordertotal(pricePerItem, quantity){
const subtotal = pricePerItem * quantity;
return subtotal * deliveryfee;
}
function deliveryMessage(total){
    if (total >= 10000){
        return "Free Delivery!";
    } else {
        return "Delivery: 1000 FCFA";
    }
}
const total1 = ordertotal(500, 4);
console.log("order 1 total:", total1);
console.log(deliveryMessage(total1));

const total2 = ordertotal(2000, 5);
console.log("order 2 total:", total2);
console.log(deliveryMessage(total2));

const total3 = ordertotal(1500, 8);
console.log("order 3 total:", total3);
console.log(deliveryMessage(total3));


