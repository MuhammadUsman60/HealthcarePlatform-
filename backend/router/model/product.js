const mongoose = require("mongoose");
const productScheme = new mongoose.Schema({
    
    productName: {
        type: String,
        required: true
    },
    productDetails: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    categories: {
        type: String,
        required: true
    }
  
})

const product = mongoose.model("product",productScheme);
module.exports = product;
