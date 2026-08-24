
const menu = [
  { 
    name: "Ankara Dress",
     price: 8500,
      inStock: true,
       category: "Female Clothes" 
      },
  {
     name: "Polo Shirt", 
     price: 6000,
      inStock: false, 
      category: "Menswear" 
    },
  { 
    name: "Leather Sandals",
     price: 7000,
      inStock: true,
       category: "Shoes"
       },
  {
     name: "Perfume Oil - Sugar Baby",
      price: 450,
       inStock: true,
        category: "Perfume"
       },
  { 
    name: "Gold Hoop Earrings",
     price: 2000, 
     inStock: true,
      category: "Jewelry"
     },
  { 
    name: "Hair Scrunchie",
     price: 300,
      inStock: true, 
      category: "Accessories"
     },
];

// 1. Print every product
console.log("All products:");
for (const item of menu) {
  console.log(
    item.name + " - " + item.price + " FCFA - " + item.category +
    (item.inStock ? " (In stock)" : " (Out of stock)")
  );
}

// 2. Array of in-stock products

const available = menu.filter((item) => item.instock);
console.log("\nIn-stock Products");
console.log(available);

// 3. Array of names of products under 500 FCFA
const cheapNames = menu
  .filter((item) => item.price < 500)
  .map((item) => item.name);
  console.log("\nNames of products under 500FCFA");
console.log(cheapNames);

/*
Console output:
all products:
Ankara Dress - 8500 FCFA - Female Clothes (In stock)
Polo Shirt - 6000 FCFA - Menswear (Out of stock)
Leather Sandals - 7000 FCFA - Shoes (In stock)
Perfume Oil - Sugar Baby - 450 FCFA - Perfume (In stock)
Gold Hoop Earrings - 2000 FCFA - Jewelry (In stock)
Hair Scrunchie - 300 FCFA - Accessories (In stock)

inStockItems:
[
  { name: "Ankara Dress", price: 8500, inStock: true, category: "Female Clothes" },
  { name: "Leather Sandals", price: 7000, inStock: true, category: "Shoes" },
  { name: "Perfume Oil - Sugar Baby", price: 450, inStock: true, category: "Perfume" },
  { name: "Gold Hoop Earrings", price: 2000, inStock: true, category: "Jewelry" },
  { name: "Hair Scrunchie", price: 300, inStock: true, category: "Accessories" }
]

cheapNames:
["Perfume Oil - Sugar Baby", "Hair Scrunchie"]
*/