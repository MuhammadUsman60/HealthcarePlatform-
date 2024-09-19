// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const productRoutes = require('./router/productRoutes');
const userRoutes = require('./router/userRoutes');
const DoctorList = require('./router/DoctorList');
const DoctorConsultation = require('./router/DoctorConsultation');
const LabTest = require('./router/LabTest');
const labTestdetails = require('./router/labTestdetails');
const orderRoutes = require('./router/orderRoutes'); 

const app = express();
const PORT = 8000;
const DB_URL = "mongodb://127.0.0.1:27017/onlinePharmacy";

// Middleware
app.use(cors());
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Use the routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/DoctorList', DoctorList);
app.use('/api/DoctorConsultation', DoctorConsultation);
app.use('/api/LabTest', LabTest);
app.use('/api/orders', orderRoutes); 
app.use('/api/labTestdetails', labTestdetails); 





// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
