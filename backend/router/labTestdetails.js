const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const LabTestDetails = require('./model/labTestdetails'); 


router.get('/', async (req, res) => {
    try {
    
        const labTestDetails = await LabTestDetails.find({});
        res.json(labTestDetails);
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

module.exports = router;
