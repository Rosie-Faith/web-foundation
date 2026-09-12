# AI Pairing Log

## Feature
Product Card component for the Bakery React application.

## 1. Original Step-Decomposition Prompt

I am building a bakery ordering application using React and Vite.

I already have a bakery application with products displayed on the page. I want to re-implement the product display as a reusable ProductCard component.

Use React and plain CSS only. Do not add any libraries.

The ProductCard should:
- Receive product information through props.
- Display the product name.
- Display the price in FCFA.
- Display the product image when available.
- Have a clear and reusable structure.
- Keep the component simple and easy to maintain.

First, do not write code. Give me a step-by-step implementation plan.

---

## 2. AI's Initial Plan

1. Create a reusable ProductCard component inside the components folder.
2. Define the props that the component will receive.
3. Display the product image, name, and price.
4. Add styling for the product card.
5. Import ProductCard into the main application component.
6. Pass product information to ProductCard.
7. Run the application and check that the cards display correctly.
8. Make small adjustments to the styling if necessary.

---

## 3. My Edits to the Plan

I reviewed the plan and made the following changes:

1. Keep ProductCard responsible only for displaying one product.
2. Keep the product data outside the component so the component remains reusable.
3. Use props instead of hard-coded product information.
4. Display prices in FCFA because the bakery application targets customers in Cameroon.
5. Keep the styling simple and consistent with the existing application.
6. Test the component with several products to make sure it works with different data.

The revised implementation order was:

1. Create ProductCard.jsx.
2. Accept product data through props.
3. Display the product image, name, and FCFA price.
4. Add simple styling.
5. Import the component into App.jsx.
6. Render ProductCard for each product.
7. Run the application and verify the result.

---

## 4. Final Code

### ProductCard.jsx

```jsx
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <h3>{product.name}</h3>

      <p>{product.price} FCFA</p>
    </div>
  );
}

export default ProductCard;