const express = require('express');
const Order = require('./model/orderModel');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, address, product, price } = req.body;

  const newOrder = new Order({
    name,
    address,
    product,
    price,
  });

  try {
    await newOrder.save();
    res.status(201).send('Order placed successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to place order');
  }
});


router.get('/', async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/count', async (req, res) => {
  try {
    const orders = await Order.countDocuments({});
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
