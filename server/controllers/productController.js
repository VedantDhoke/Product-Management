import prisma from "../config/db.js";

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();

    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products"
    });
  }
};
