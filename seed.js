require("dotenv").config();

const mongoose = require("mongoose");

const Category = require("./src/models/Category");
const Product = require("./src/models/Product");

const categories = require("./data/categories");
const products = require("./data/products");

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Category.deleteMany();
    await Product.deleteMany();

    const createdCategories = await Category.insertMany(categories);

    const categoryMap = {};

    createdCategories.forEach((cat) => {
      categoryMap[cat.name] = cat._id;
    });

    const productsWithCategory = products.map((product) => ({
      ...product,
      category: categoryMap[product.category],
    }));

    await Product.insertMany(productsWithCategory);

    console.log("Database Seeded Successfully");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedDatabase();