const mongoose = require('mongoose');

const DoctorConsultationSchema = new mongoose.Schema({
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
    comments: {
        type: String,
    }
});

const DoctorConsultation = mongoose.model('DoctorConsultation', DoctorConsultationSchema);

module.exports = DoctorConsultation;
