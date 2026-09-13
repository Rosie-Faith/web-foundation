export function orderTotal(price, quantity) {
  if (quantity < 0) {
    throw new Error("Quantity cannot be negative");
  }

  const subtotal = price * quantity;

  if (subtotal >= 10000) {
    return subtotal;
  }

  return subtotal + 1000;
}