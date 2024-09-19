const mongoose = require('mongoose');
const DoctorListSchema = new mongoose.Schema({
    doctor_name: {
        type: String,
        required: true
    },
    doctor_email: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
});

const DoctorList = mongoose.model("DoctorList", DoctorListSchema);
module.exports = DoctorList;