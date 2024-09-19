const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const DoctorList = require('./model/DoctorList')


// Get all doctors
router.get('/', async (req, res) => {
    try {
        const allDoctorList = await DoctorList.find({});
        res.json(allDoctorList);
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});



// Post a new doctor
router.post('/', async (req, res) => {
    try {
        const newDoctor = new DoctorList({
            doctor_name: req.body.doctor_name,
            doctor_email: req.body.doctor_email,
            specialization: req.body.specialization,
            address: req.body.address,
            phoneNo: req.body.phoneNo,
            photo: req.body.photo
        });

        const createdDoctor = await newDoctor.save();
        res.status(201).json(createdDoctor);
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
});

// Update a doctor
router.put('/:id', async (req, res) => {
    try {
        const updatedDoctorList = await DoctorList.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updatedDoctorList) {
            return res.status(404).json({ status: "error", message: "Doctor not found" });
        }
        res.json(updatedDoctorList);
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
});

// Delete a doctor
router.delete('/:id', async (req, res) => {
    try {
        const deleteDoctorList = await DoctorList.findByIdAndDelete(req.params.id);
        if (!deleteDoctorList) {
            return res.status(404).json({ status: "error", message: "Doctor not found" });
        }
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
});

module.exports = router;
