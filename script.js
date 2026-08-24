const menuList = document.querySelector("#menu-list");
const status = document.querySelector("#status");
const totalDisplay = document.querySelector("#order-total");

let orderTotal = 0;
for (const item of menu){
    const card = document.createElement("li");
    const name = document.createElement("h2"); name.textContent= item.name;
    const price = document.createElement("p"); price.textContent = item.price + "FCFA";
    const button = document.createElement("button"); button.textContent ="add to order";
    button.addEventListener("click", () => {
        orderTotal += item.price;
        totalDisplay.textContent = orderTotal; 
        status.textContent = "added to order";
    });
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(button);

    menuList.appendChild(card);
}