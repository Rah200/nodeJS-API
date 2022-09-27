const mongoose = require('mongoose');

const rahulSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Rahul', rahulSchema)

