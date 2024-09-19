const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const LabTest = require('./model/LabTest');
router.get('/', async (req, res) => {
    try {
        const allLabTests = await LabTest.find({});
        res.json(allLabTests);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/count', async (req, res) => {
    try {
        const allLabTests = await LabTest.countDocuments({});
        res.json(allLabTests);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/', async (req, res) => {
    try {
        let newLabTest = new LabTest({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            appointmentDate: req.body.appointmentDate,
            appointmentTime: req.body.appointmentTime,
            amPm: req.body.amPm,
            testType: req.body.testType,
            comments: req.body.comments,
            referredBy: req.body.referredBy
        });
        await newLabTest.save();
        res.status(201).json(newLabTest);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        let labTest = await LabTest.findByIdAndDelete(req.params.id);
        if (!labTest) {
            return res.status(404).json({ message: 'LabTest not found' });
        }
        res.json({ message: 'LabTest deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
