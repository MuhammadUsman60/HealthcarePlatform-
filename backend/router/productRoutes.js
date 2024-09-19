const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const product = require("./model/product")



// GET all products
router.get('/', async (req, res) => {
    try {
        const allProductData = await product.find({});
        res.json(allProductData);
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});
router.get('/count', async (req, res) => {
    try {
        const totalProduct = await Product.countDocuments({});
        res.json(totalProduct);
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});
// PUT: Update product by ID
router.put("/:id", async (req, res) => {
    console.log("Received ID:", req.params.id); // Verify the ID being received
    try {
        const updatedProductData = await product.findByIdAndUpdate(req.params.id, req.body, {
            new: true, 
            runValidators: true, 
        });

        if (updatedProductData) {
            res.status(200).json({ status: "success", data: updatedProductData });
        } else {
            res.status(404).json({ status: "error", message: "Product not found" });
        }
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
});

// PATCH: Update part of a product by ID
router.patch("/:id", async (req, res) => {
    console.log("Received ID:", req.params.id); // Verify the ID being received
    try {
        const updatedProductData = await product.findByIdAndUpdate(req.params.id, req.body, {
            new: true, 
            runValidators: true, 
        });
        
        if (updatedProductData) {
            res.status(201).json({ status: "success", data: updatedProductData });
        } else {
            res.status(404).json({ status: "error", message: "Product not found" });
        }
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
});

// DELETE product by ID
router.delete("/:id", async (req, res) => {
    try {
        const deleteProductData = await product.findByIdAndDelete(req.params.id);
        if (deleteProductData) {
            res.status(201).json({ status: "success", message: "Product deleted successfully" });
        } else {
            res.status(404).json({ status: "error", message: "Product not found" });
        }
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
});

module.exports = router;
