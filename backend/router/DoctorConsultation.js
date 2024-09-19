const express = require('express');
const router = express.Router();
const DoctorConsultation = require('./model/DoctorConsultation');

// Define your routes
router.get('/', async (req, res) => {
    try {
        const allDoctorConsultations = await DoctorConsultation.find({});
        res.json(allDoctorConsultations);
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, appointmentDate, appointmentTime, amPm, comments } = req.body;

        if (!firstName || !lastName || !email || !phoneNumber || !appointmentDate || !appointmentTime || !amPm) {
            return res.status(400).json({ status: 'error', message: 'All required fields must be provided.' });
        }

        const newDoctorConsultation = new DoctorConsultation({
            firstName,
            lastName,
            email,
            phoneNumber,
            appointmentDate,
            appointmentTime,
            amPm,
            comments,
        });

        const createdDoctorConsultation = await newDoctorConsultation.save();
        res.status(201).json({ status: 'success', data: createdDoctorConsultation });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleteDoctorConsultation = await DoctorConsultation.findByIdAndDelete(req.params.id);
        if (deleteDoctorConsultation) {
            res.status(200).json({ status: 'success', message: 'Doctor consultation deleted successfully' });
        } else {
            res.status(404).json({ status: 'error', message: 'Doctor consultation not found' });
        }
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

module.exports = router;
