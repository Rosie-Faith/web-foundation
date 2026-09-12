export function orderTotal(price, quantity) {
  if (typeof price !== "number" || typeof quantity !== "number") {
    throw new Error("Price and quantity must be numbers");
  }

  if (price < 0 || quantity < 0) {
    throw new Error("Price and quantity cannot be negative");
  }

  const subtotal = price * quantity;
  const deliveryFee = subtotal >= 10000 ? 0 : 500;

  return subtotal + deliveryFee;
}