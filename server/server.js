import express from "express";
import cors from "cors";
import "dotenv/config";
import productRoutes from "./routes/productRoutes"

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Product Management API is running"
  });
});

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
