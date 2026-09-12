const fs = require("fs");

const orders = JSON.parse(fs.readFileSync("orders.json", "utf8"));

const orderCount = orders.length;

const revenue = orders.reduce((sum, order) => {
  return sum + order.total;
}, 0);

const largestOrder = Math.max(...orders.map(order => order.total));

console.log("Orders: " + orderCount);
console.log("Total Revenue: " + revenue + " FCFA");
console.log("Largest Single Order: " + largestOrder + " FCFA");
