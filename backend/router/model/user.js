const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
       
    },
    photo: {
        type: String,
    
    },
    user_address: {
        type: String,
     
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone_number: {
        type: Number,

    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
