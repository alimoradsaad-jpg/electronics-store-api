const Cart = require("../models/Cart");
const Product = require("../models/Product");

// GET Cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne().populate("items.product");

    if (!cart) {
      return res.status(200).json({
        success: true,
        data: {
          items: [],
          totalPrice: 0,
        },
      });
    }

    let totalPrice = 0;

    cart.items.forEach((item) => {
      totalPrice += item.product.price * item.quantity;
    });

    res.status(200).json({
      success: true,
      totalPrice,
      data: cart,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Add To Cart
const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  // التأكد أن المنتج موجود
  const product = await Product.findById(productId);
  if (quantity > product.stock) {
  return res.status(400).json({
    success: false,
    message: "Not enough stock",
  });
}

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  // البحث عن السلة
  let cart = await Cart.findOne();

  // إذا لم توجد سلة، أنشئ واحدة
  if (!cart) {
    cart = await Cart.create({
      items: [],
    });
  }

  // البحث إذا كان المنتج موجودًا في السلة
  const itemIndex = cart.items.findIndex(
    (item) => item.product.toString() === productId
  );

  if (itemIndex > -1) {
    // زيادة الكمية
    cart.items[itemIndex].quantity += quantity;
  } else {
    // إضافة منتج جديد
    cart.items.push({
      product: productId,
      quantity,
    });
  }

  await cart.save();

  res.status(200).json({
    success: true,
    message: "Product added to cart",
    data: cart,
  });
};

// UPDATE Cart Item
const updateCartItem = async (req, res) => {
  const { quantity } = req.body;
  const product = await Product.findById(req.params.productId);

if (quantity > product.stock) {
  return res.status(400).json({
    success: false,
    message: "Not enough stock",
  });
}

  const cart = await Cart.findOne();

  if (!cart) {
    return res.status(404).json({
      success: false,
      message: "Cart not found",
    });
  }

  const item = cart.items.find(
    (item) => item.product.toString() === req.params.productId
  );

  if (!item) {
    return res.status(404).json({
      success: false,
      message: "Product not found in cart",
    });
  }

  item.quantity = quantity;

  await cart.save();

  res.status(200).json({
    success: true,
    data: cart,
  });
};
// DELETE Cart Item
const removeCartItem = async (req, res) => {
  const cart = await Cart.findOne();

  if (!cart) {
    return res.status(404).json({
      success: false,
      message: "Cart not found",
    });
  }

  cart.items = cart.items.filter(
    (item) => item.product.toString() !== req.params.productId
  );

  await cart.save();

  res.status(200).json({
    success: true,
    message: "Item removed from cart",
    data: cart,
  });
};
module.exports = {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
};