const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());

let orders = JSON.parse(fs.readFileSync("orders.json", "utf8"));

// GET /orders
app.get("/orders", (req, res) => {
  res.status(200).json(orders);
});

// GET /orders/:id
app.get("/orders/:id", (req, res) => {
  const order = orders.find(
    (order) => order.id === Number(req.params.id)
  );

  if (!order) {
    return res.status(404).json({ error: "Order not found" });
  }

  res.status(200).json(order);
});

// POST /orders
app.post("/orders", (req, res) => {
  const { customer, items, total, phone } = req.body;

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      error: "items must be a non-empty array"
    });
  }

  if (!phone) {
    return res.status(400).json({
      error: "phone is required"
    });
  }

  if (!customer || typeof total !== "number") {
    return res.status(400).json({
      error: "customer and numeric total are required"
    });
  }

  const newOrder = {
    id: orders.length + 1,
    customer,
    items,
    total,
    phone
  };

  orders.push(newOrder);

  res.status(201).json(newOrder);
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
