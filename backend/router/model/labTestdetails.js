const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  name: {
    type: String,
 
  },
  manufacturer: {
    type: String,
   
  },
  packSize: {
    type: String,

  },
  price: {
    type: Number,
   
  },
  originalPrice: {
    type: Number,
  
  },
  discount: {
    type: String,

  },
  category: {
    type: String,
   
  },
}, {
  timestamps: true, 
});


const Test = mongoose.model('Test', testSchema);

module.exports = Test;
