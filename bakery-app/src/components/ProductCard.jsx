function ProductCard({ name, price, onAddToCart }) {
  return (
    <div className="card">
      <h3>{name}</h3>

      <p>{price} FCFA</p>

      <button onClick={() => onAddToCart({ name, price })}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;