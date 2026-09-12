-- 1. All orders with product names
SELECT
  o.id AS order_id,
  o.customer_name,
  p.name AS product_name,
  o.quantity,
  p.price,
  (p.price * o.quantity) AS total,
  o.created_at
FROM orders o
JOIN products p ON p.id = o.product_id
ORDER BY o.id;


-- 2. Revenue per product
SELECT
  p.name AS product_name,
  SUM(p.price * o.quantity) AS revenue
FROM orders o
JOIN products p ON p.id = o.product_id
GROUP BY p.name
ORDER BY revenue DESC;


-- 3. Orders from the last day
SELECT
  o.id AS order_id,
  o.customer_name,
  p.name AS product_name,
  o.quantity,
  o.created_at
FROM orders o
JOIN products p ON p.id = o.product_id
WHERE o.created_at >= NOW() - INTERVAL '1 day'
ORDER BY o.created_at DESC;


-- 4. Top-spending customer
SELECT
  o.customer_name,
  SUM(p.price * o.quantity) AS total_spent
FROM orders o
JOIN products p ON p.id = o.product_id
GROUP BY o.customer_name
ORDER BY total_spent DESC
LIMIT 1;