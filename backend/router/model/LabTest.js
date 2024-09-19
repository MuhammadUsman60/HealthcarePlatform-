const mongoose = require('mongoose');


const LabTestSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    appointmentTime: {
        type: String,
        required: true
    },
    amPm: {
        type: String,
        enum: ['AM', 'PM'],
        required: true
    },
    testType: {
        type: String,
        required: true
    },
    comments: {
        type: String,
    },
    referredBy: {
        type: String,
    }
});


module.exports = mongoose.model('LabTest', LabTestSchema);
