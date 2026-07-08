require("dotenv").config();

const express = require("express");
const productRoutes = require("./routes/product.routes");
const errorHandler = require("./middlewares/error.middleware");
const app = express();

app.use(express.json());
app.use("/products", productRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Welcome to Verixa!");
});

app.get("/about", (req, res) => {
  res.json({
    name: "Verixa",
    version: "1.0",
    description: "Electronics E-commerce API",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});