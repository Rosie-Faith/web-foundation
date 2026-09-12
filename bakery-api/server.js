require("dotenv").config();

const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(express.json());

// GET /products
app.get("/products", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM products ORDER BY id"
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// GET /orders
app.get("/orders", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        o.id,
        o.customer_name,
        p.name AS product_name,
        o.product_id,
        o.quantity,
        p.price,
        (p.price * o.quantity) AS total,
        o.created_at
      FROM orders o
      JOIN products p ON p.id = o.product_id
      ORDER BY o.id
    `);

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// POST /orders
app.post("/orders", async (req, res) => {
  const { customerName, productId, quantity } = req.body;

  if (!customerName || !productId || !quantity) {
    return res.status(400).json({
      error: "customerName, productId and quantity are required",
    });
  }

  try {
    const product = await pool.query(
      "SELECT * FROM products WHERE id = $1",
      [productId]
    );

    if (product.rows.length === 0) {
      return res.status(404).json({
        error: "Product not found",
      });
    }

    const result = await pool.query(
      `INSERT INTO orders
       (customer_name, product_id, quantity)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [customerName, productId, quantity]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create order" });
  }
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});