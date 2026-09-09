import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  // Bakery products
  const products = [
    { id: 1, name: "Baguette", price: 350 },
    { id: 2, name: "Croissant", price: 500 },
    { id: 3, name: "Chocolate Cake", price: 2500 },
    { id: 4, name: "Doughnut", price: 400 }
  ];

  // Cart state
  const [cart, setCart] = useState([]);

  // Customer form state
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  // Submission state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsSubmitted(false);
  };

  // Calculate total
  const total = cart.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if phone is empty
    if (phone.trim() === "") {
      setPhoneError("Please enter your phone number.");
      return;
    }

    // Remove error if phone exists
    setPhoneError("");

    // Show confirmation message
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />

      <main>
        <h2>Our Bakery Products</h2>

        {/* Product List */}
        <div className="products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* Cart */}
        <section className="cart">
          <h2>Your Cart</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty. Add some delicious treats! 🍰</p>
          ) : (
            <div>
              {cart.map((product, index) => (
                <p key={`${product.name}-${index}`}>
                  {product.name} - {product.price} FCFA
                </p>
              ))}

              <h3>Total: {total} FCFA</h3>
            </div>
          )}
        </section>

        {/* Order Form */}
        <section className="order-form">
          <h2>Place Your Order</h2>

          <form onSubmit={handleSubmit}>
            <div>
              <label>Full Name</label>

              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label>Phone Number</label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
              />

              {phoneError && (
                <p className="error">{phoneError}</p>
              )}
            </div>

            <div>
              <label>Quarter / Neighbourhood</label>

              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Mendong"
              />
            </div>

            <button type="submit">
              Submit Order
            </button>
          </form>
        </section>

        {/* Confirmation Message */}
        {isSubmitted && (
          <section className="confirmation">
            <h2>Order Received! 🎉</h2>

            <p>
              Thank you, {customerName || "customer"}!
            </p>

            <p>
              Phone: {phone}
            </p>

            <p>
              Location: {location || "Not provided"}
            </p>

            <h3>Your Order:</h3>

            {cart.length === 0 ? (
              <p>No items were added to your cart.</p>
            ) : (
              cart.map((product, index) => (
                <p key={`${product.name}-confirmation-${index}`}>
                  {product.name} - {product.price} FCFA
                </p>
              ))
            )}

            <h3>
              Total: {total} FCFA
            </h3>

            <p>
              We will contact you to confirm your order.
            </p>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;