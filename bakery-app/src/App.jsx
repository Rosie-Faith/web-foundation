import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  const products = [
    { name: "Baguette", price: 350 },
    { name: "Croissant", price: 500 },
    { name: "Chocolate Cake", price: 2500 },
    { name: "Doughnut", price: 400 }
  ];

  return (
    <>
      <Header />

      <main>
        <h2>Our Products</h2>

        <div className="products">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;