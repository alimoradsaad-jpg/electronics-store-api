const express = require("express");

const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
} = require("../controllers/orderController");

const router = express.Router();

router.route("/")
  .get(getAllOrders)
  .post(createOrder);

router.route("/:id")
  .get(getOrderById);

router.route("/:id/status")
  .put(updateOrderStatus);

module.exports = router;