import prisma from "./config/db.js";

const seedProducts = async () => {
  try {
    const products = await prisma.product.createMany({
      data: [
        {
          name: "Wireless Mouse",
          description: "Wireless optical mouse",
          price: 799,
          quantity: 20
        },
        {
          name: "Mechanical Keyboard",
          description: "RGB mechanical keyboard",
          price: 2499,
          quantity: 10
        },
        {
          name: "USB-C Hub",
          description: "7-port USB-C hub",
          price: 1499,
          quantity: 15
        }
      ]
    });
      
    const suppliers = await prisma.supplier.createMany({
      data: [
        {
          name: "ABC Suppliers",
          email: "abc@gmail.com",
          phone: "9876543210"
        },
        {
          name: "XYZ Suppliers",
          email: "xyz@gmail.com",
          phone: "9876543211"
        }
      ]
    });

    console.log(`${suppliers.count} suppliers inserted successfully`);


    console.log(`${products.count} products inserted successfully`);
  } catch (error) {
    console.error("Seeding failed:", error);
  } finally {
    await prisma.$disconnect();
  }
};

seedProducts();